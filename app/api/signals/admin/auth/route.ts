import { NextRequest, NextResponse } from "next/server";
import {
  validateAdminCredentials,
  createAdminSession,
  destroyAdminSession,
  isAuthenticatedAdmin,
} from "@/lib/signals/auth";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    const password = body?.password;

    if (!password || !validateAdminCredentials(password)) {
      return NextResponse.json(
        { success: false, message: "Invalid admin passphrase" },
        { status: 401 }
      );
    }

    await createAdminSession();
    return NextResponse.json({ success: true, message: "Authenticated successfully" });
  } catch (err) {
    console.error("[Signals Admin Auth API] Login Error:", err);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  await destroyAdminSession();
  return NextResponse.json({ success: true, message: "Logged out" });
}

export async function GET() {
  const isAuth = await isAuthenticatedAdmin();
  return NextResponse.json({ authenticated: isAuth });
}

