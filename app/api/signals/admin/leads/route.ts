import { NextRequest, NextResponse } from "next/server";
import { isAuthenticatedAdmin } from "@/lib/signals/auth";
import { signalsStorage } from "@/lib/signals/storage";

export async function GET(req: NextRequest) {
  const isAuth = await isAuthenticatedAdmin();
  if (!isAuth) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const search = searchParams.get("search")?.toLowerCase();

    let leads = await signalsStorage.getLeads();

    if (status && status !== "ALL") {
      leads = leads.filter((l) => l.status === status);
    }

    if (search) {
      leads = leads.filter(
        (l) =>
          l.fullName.toLowerCase().includes(search) ||
          l.email.toLowerCase().includes(search) ||
          l.interestArea.toLowerCase().includes(search) ||
          (l.websiteUrl && l.websiteUrl.toLowerCase().includes(search))
      );
    }

    const summary = await signalsStorage.getAnalyticsSummary();

    return NextResponse.json({
      success: true,
      leads,
      summary,
    });
  } catch (err) {
    console.error("[Signals Admin Leads GET] Error:", err);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}

