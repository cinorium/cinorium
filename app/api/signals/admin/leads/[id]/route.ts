import { NextRequest, NextResponse } from "next/server";
import { isAuthenticatedAdmin } from "@/lib/signals/auth";
import { signalsStorage } from "@/lib/signals/storage";
import { LeadStatus } from "@/lib/signals/types";

const VALID_STATUSES: LeadStatus[] = [
  "NEW",
  "CONTACTED",
  "QUALIFIED",
  "CONVERTED",
  "LOST",
];

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const isAuth = await isAuthenticatedAdmin();
  if (!isAuth) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const lead = await signalsStorage.getLeadById(id);
  if (!lead) {
    return NextResponse.json({ success: false, error: "Lead not found" }, { status: 404 });
  }

  const notes = await signalsStorage.getLeadNotes(id);

  return NextResponse.json({
    success: true,
    lead,
    notes,
  });
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const isAuth = await isAuthenticatedAdmin();
  if (!isAuth) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await req.json().catch(() => null);
  const status = body?.status as LeadStatus;

  if (!status || !VALID_STATUSES.includes(status)) {
    return NextResponse.json(
      { success: false, error: "Invalid status value" },
      { status: 400 }
    );
  }

  await signalsStorage.updateLeadStatus(id, status);

  // Automatically record a system note for status audit
  await signalsStorage.addLeadNote({
    leadId: id,
    author: "System Audit",
    content: `Status updated to ${status}`,
  });

  return NextResponse.json({ success: true, message: `Status updated to ${status}` });
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const isAuth = await isAuthenticatedAdmin();
  if (!isAuth) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await req.json().catch(() => null);
  const content = body?.content;
  const author = body?.author || "Cinorium Admin";

  if (!content || typeof content !== "string" || content.trim().length === 0) {
    return NextResponse.json(
      { success: false, error: "Note content cannot be empty" },
      { status: 400 }
    );
  }

  const createdNote = await signalsStorage.addLeadNote({
    leadId: id,
    author: author.slice(0, 100),
    content: content.trim().slice(0, 5000),
  });

  return NextResponse.json({ success: true, note: createdNote });
}

