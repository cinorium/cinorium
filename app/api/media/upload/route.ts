import { type NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";
import crypto, { randomUUID } from "crypto";
import { isAuthenticatedAdmin } from "@/lib/signals/auth";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

/** Maximum upload size: 5 MB. */
const MAX_BYTES = 5 * 1024 * 1024;

/** Accepted MIME types. */
const ALLOWED_MIME_TYPES = new Set([
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/avif",
  "image/gif",
  "image/svg+xml",
]);

/** Accepted file extensions (lower-case). */
const ALLOWED_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif", ".svg"]);

// ---------------------------------------------------------------------------
// POST /api/media/upload
// ---------------------------------------------------------------------------

/**
 * Server-side Blob upload endpoint.
 *
 * Authentication: protected by the SIGNALS_ADMIN_PASSWORD environment
 * variable (re-used from the existing admin system) sent as a Bearer token,
 * or by an active admin session cookie (HMAC-verified).
 *
 * Request: multipart/form-data with a "file" field (max 5 MB).
 * Allowed MIME types: JPEG, PNG, WebP, AVIF, GIF, SVG.
 * Response: { url, pathname, contentType, size }
 *
 * The BLOB_READ_WRITE_TOKEN is kept server-side and never exposed to the
 * browser. The returned URL is the public read-only Vercel Blob URL.
 */
export async function POST(req: NextRequest): Promise<NextResponse> {
  // ── 1. Verify the Blob write token is configured ────────────────────────
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json(
      { error: "Blob storage is not configured on this server." },
      { status: 503 },
    );
  }

  // ── 2. Authenticate the request ─────────────────────────────────────────
  const adminPassword =
    process.env.SIGNALS_ADMIN_PASSWORD ||
    process.env.ADMIN_PASSWORD;
  const authHeader = req.headers.get("authorization");
  const token = authHeader?.startsWith("Bearer ")
    ? authHeader.slice(7)
    : null;

  const isCookieAuth = await isAuthenticatedAdmin();
  let isBearerAuth = false;

  if (adminPassword && token) {
    try {
      const tokenBuf = Buffer.from(token);
      const passBuf = Buffer.from(adminPassword);
      if (tokenBuf.length === passBuf.length && crypto.timingSafeEqual(tokenBuf, passBuf)) {
        isBearerAuth = true;
      }
    } catch {
      isBearerAuth = false;
    }
  }

  if (!isCookieAuth && !isBearerAuth) {
    return NextResponse.json(
      { error: "Unauthorised. Provide a valid Bearer token or active admin session." },
      { status: 401 },
    );
  }

  // ── 3. Parse multipart form data ─────────────────────────────────────────
  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json(
      { error: "Invalid multipart form data." },
      { status: 400 },
    );
  }

  const file = formData.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json(
      { error: "A 'file' field is required in the multipart body." },
      { status: 400 },
    );
  }

  // ── 4. Validate MIME type ────────────────────────────────────────────────
  const mimeType = file.type.toLowerCase();
  if (!ALLOWED_MIME_TYPES.has(mimeType)) {
    return NextResponse.json(
      {
        error: `Unsupported file type: ${mimeType}. Allowed types: JPEG, PNG, WebP, AVIF, GIF, SVG.`,
      },
      { status: 415 },
    );
  }

  // ── 5. Validate file extension ───────────────────────────────────────────
  const originalName = file.name.toLowerCase();
  const dotIndex = originalName.lastIndexOf(".");
  const extension = dotIndex !== -1 ? originalName.slice(dotIndex) : "";
  if (!ALLOWED_EXTENSIONS.has(extension)) {
    return NextResponse.json(
      { error: `Unsupported file extension: ${extension}.` },
      { status: 415 },
    );
  }

  // ── 6. Validate file size ────────────────────────────────────────────────
  if (file.size > MAX_BYTES) {
    return NextResponse.json(
      { error: `File exceeds the 5 MB limit (received ${(file.size / 1024 / 1024).toFixed(2)} MB).` },
      { status: 413 },
    );
  }

  // ── 7. Generate a unique filename to prevent overwrites ──────────────────
  // Format: journal/<uuid>.<ext>  (keeps uploads organised in a subfolder)
  const uuid = randomUUID();
  const safeName = `journal/${uuid}${extension}`;

  // ── 8. Upload to Vercel Blob (server-side write token) ───────────────────
  try {
    const blob = await put(safeName, file, {
      access: "public",
      contentType: mimeType,
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });

    return NextResponse.json(
      {
        url: blob.url,
        pathname: blob.pathname,
        contentType: blob.contentType,
        size: file.size,
      },
      { status: 201 },
    );
  } catch (err) {
    console.error("[/api/media/upload] Blob put failed:", err);
    return NextResponse.json(
      { error: "Upload to Blob storage failed. Check server logs." },
      { status: 502 },
    );
  }
}

// Block every other HTTP method.
export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}

