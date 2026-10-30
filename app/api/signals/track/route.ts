import { NextRequest, NextResponse } from "next/server";
import { signalsStorage } from "@/lib/signals/storage";
import { calculateScoreDelta, determineInterestLevel } from "@/lib/signals/scoring";
import { resolveContextualCampaign } from "@/lib/signals/campaigns";
import { EventType } from "@/lib/signals/types";

// Permitted event types
const VALID_EVENT_TYPES: EventType[] = [
  "page_view",
  "scroll_depth",
  "service_page_view",
  "contact_page_view",
  "primary_cta_click",
  "form_start",
  "form_submit",
  "popup_impression",
  "popup_dismiss",
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, error: "Invalid request payload" },
        { status: 400 }
      );
    }

    const { sessionToken, eventType, pagePath, metadata } = body;

    // Validate session token
    if (!sessionToken || typeof sessionToken !== "string" || sessionToken.length > 64) {
      return NextResponse.json(
        { success: false, error: "Invalid session identifier" },
        { status: 400 }
      );
    }

    // Validate event type
    if (!eventType || !VALID_EVENT_TYPES.includes(eventType as EventType)) {
      return NextResponse.json(
        { success: false, error: "Unrecognized event type" },
        { status: 400 }
      );
    }

    // Sanitize path (strip any query params or hashes to ensure no personal identifiers are saved)
    const cleanPath =
      typeof pagePath === "string"
        ? pagePath.split("?")[0].split("#")[0].slice(0, 255)
        : "/";

    // Determine category if applicable
    let category: string | undefined;
    if (cleanPath.startsWith("/web-development")) {
      category = "Website Development";
    } else if (cleanPath.startsWith("/seo-services")) {
      category = "SEO & Search Visibility";
    } else if (cleanPath.startsWith("/services")) {
      category = "Digital Marketing & Growth";
    }

    const scoreDelta = calculateScoreDelta(eventType as EventType, cleanPath);

    // Record event
    await signalsStorage.recordEvent({
      sessionToken,
      eventType: eventType as EventType,
      pagePath: cleanPath,
      metadata: typeof metadata === "object" ? metadata : {},
      scoreDelta,
    });

    // Update session score
    const updatedSession = await signalsStorage.updateSessionScore(
      sessionToken,
      scoreDelta,
      cleanPath,
      category
    );

    // Resolve relevant campaign
    const campaign = resolveContextualCampaign(cleanPath, updatedSession.lastCategory);

    return NextResponse.json({
      success: true,
      interestScore: updatedSession.interestScore,
      interestLevel: updatedSession.interestLevel,
      converted: updatedSession.converted,
      suggestedCampaign: campaign,
    });
  } catch (err) {
    console.error("[Signals Track API] Error:", err);
    return NextResponse.json(
      { success: false, error: "Internal processing error" },
      { status: 500 }
    );
  }
}

