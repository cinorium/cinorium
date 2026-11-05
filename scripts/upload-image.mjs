#!/usr/bin/env node
/**
 * upload-image.mjs
 * ─────────────────────────────────────────────────────────────────
 * CLI helper to upload a local image file to the Cinorium public
 * Vercel Blob Store via the secure server-side upload endpoint.
 *
 * Usage (local dev server must be running on port 3000):
 *
 *   node scripts/upload-image.mjs <path-to-image> [optional-label]
 *
 * Example:
 *   node scripts/upload-image.mjs ~/Desktop/hero.jpg "lahore-article-hero"
 *
 * Requirements:
 *   - .env.local must contain SIGNALS_ADMIN_PASSWORD (used as Bearer token)
 *   - Local Next.js dev server must be running: npm run dev
 *
 * The script prints the public Blob URL and ready-to-paste MDX frontmatter
 * so you can copy it straight into your article's .mdx file.
 * ─────────────────────────────────────────────────────────────────
 */

import fs from "fs";
import path from "path";
import { FormData, Blob } from "node:buffer"; // Node 18+ built-in

// ── 1. Parse arguments ────────────────────────────────────────────────────────
const [, , filePath, labelArg] = process.argv;

if (!filePath) {
  console.error("Usage: node scripts/upload-image.mjs <path-to-image> [label]");
  process.exit(1);
}

const resolvedPath = path.resolve(filePath);
if (!fs.existsSync(resolvedPath)) {
  console.error(`File not found: ${resolvedPath}`);
  process.exit(1);
}

// ── 2. Load admin password from .env.local ────────────────────────────────────
const envPath = path.resolve(process.cwd(), ".env.local");
let adminPassword = "";

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf8");
  const match = envContent.match(/^SIGNALS_ADMIN_PASSWORD=(.+)$/m);
  if (match) adminPassword = match[1].trim();
}

if (!adminPassword) {
  console.error(
    "SIGNALS_ADMIN_PASSWORD not found in .env.local.\n" +
      "Make sure the local dev server has this variable set."
  );
  process.exit(1);
}

// ── 3. Build multipart form data ──────────────────────────────────────────────
const fileBuffer = fs.readFileSync(resolvedPath);
const fileName = path.basename(resolvedPath);
const ext = path.extname(fileName).toLowerCase();

const mimeMap = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".gif": "image/gif",
};

const contentType = mimeMap[ext];
if (!contentType) {
  console.error(`Unsupported file type: ${ext}. Allowed: jpg, png, webp, avif, gif.`);
  process.exit(1);
}

const fileBlob = new Blob([fileBuffer], { type: contentType });
const form = new FormData();
form.append("file", fileBlob, fileName);

// ── 4. Upload via local API route ─────────────────────────────────────────────
const uploadUrl = "http://localhost:3000/api/media/upload";

console.log(`\nUploading: ${resolvedPath}`);
console.log(`To:        ${uploadUrl}\n`);

let response;
try {
  response = await fetch(uploadUrl, {
    method: "POST",
    headers: { Authorization: `Bearer ${adminPassword}` },
    body: form,
  });
} catch (err) {
  console.error(
    "Network error — is the local Next.js server running on port 3000?\n",
    err.message
  );
  process.exit(1);
}

const data = await response.json();

if (!response.ok) {
  console.error(`Upload failed (HTTP ${response.status}):`, data.error ?? data);
  process.exit(1);
}

// ── 5. Print result ───────────────────────────────────────────────────────────
const label = labelArg || path.basename(resolvedPath, ext);

console.log("✅ Upload successful!\n");
console.log("Public URL:");
console.log("  " + data.url + "\n");

console.log("─────────────────────────────────────────────────────────────────");
console.log("Paste this into your MDX frontmatter:");
console.log("─────────────────────────────────────────────────────────────────");
console.log(`coverImage: "${data.url}"`);
console.log(`coverImageAlt: "Describe the image for screen readers and SEO"`);
console.log(`# ogImage: "${data.url}"  # optional — only if you need a different OG crop`);
console.log(`imageWidth: 1600   # update to your image's actual width in pixels`);
console.log(`imageHeight: 900   # update to your image's actual height in pixels`);
console.log("─────────────────────────────────────────────────────────────────\n");

