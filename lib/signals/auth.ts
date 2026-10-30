import { cookies } from "next/headers";
import crypto from "crypto";

const COOKIE_NAME = "cinorium_signals_admin_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days in seconds

// Use explicit admin secret or fallback to secret key
const ADMIN_PASSWORD =
  process.env.SIGNALS_ADMIN_PASSWORD ||
  process.env.ADMIN_PASSWORD ||
  "cinorium2026";

const SIGNING_SECRET =
  process.env.SIGNALS_SESSION_SECRET ||
  process.env.NEXTAUTH_SECRET ||
  "cinorium_signals_secret_salt_2026_xyz";

function signPayload(payload: string): string {
  const hmac = crypto.createHmac("sha256", SIGNING_SECRET);
  hmac.update(payload);
  const signature = hmac.digest("hex");
  return `${payload}.${signature}`;
}

function verifyPayload(signedString: string): string | null {
  const parts = signedString.split(".");
  if (parts.length !== 2) return null;
  const [payload, signature] = parts;

  const expectedSignature = crypto
    .createHmac("sha256", SIGNING_SECRET)
    .update(payload)
    .digest("hex");

  try {
    const sigBuffer = Buffer.from(signature, "hex");
    const expBuffer = Buffer.from(expectedSignature, "hex");
    if (
      sigBuffer.length === expBuffer.length &&
      crypto.timingSafeEqual(sigBuffer, expBuffer)
    ) {
      return payload;
    }
  } catch {
    return null;
  }
  return null;
}

export function validateAdminCredentials(providedPass: string): boolean {
  if (!providedPass || typeof providedPass !== "string") return false;
  try {
    const provBuffer = Buffer.from(providedPass);
    const expectedBuffer = Buffer.from(ADMIN_PASSWORD);
    if (provBuffer.length !== expectedBuffer.length) {
      return false;
    }
    return crypto.timingSafeEqual(provBuffer, expectedBuffer);
  } catch {
    return false;
  }
}

export async function createAdminSession(): Promise<string> {
  const timestamp = Date.now().toString();
  const token = signPayload(`admin_${timestamp}`);
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: SESSION_MAX_AGE,
    path: "/",
  });
  return token;
}

export async function destroyAdminSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function isAuthenticatedAdmin(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return false;

  const verified = verifyPayload(token);
  if (!verified) return false;

  return verified.startsWith("admin_");
}

