"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageOff } from "lucide-react";

interface ArticleImageProps {
  src: string;
  alt: string;
  /**
   * Original image width in pixels.
   * Required for remote images to prevent CLS. Defaults to 1600.
   */
  width?: number;
  /**
   * Original image height in pixels.
   * Required for remote images to prevent CLS. Defaults to 900 (16:9).
   */
  height?: number;
  /**
   * When true the image is treated as the LCP element:
   * - fetchpriority="high" and no lazy-loading.
   * - Use for the main article cover on individual article pages.
   *
   * When false (default) the image is lazy-loaded.
   * - Use for card thumbnails and below-the-fold images.
   */
  priority?: boolean;
  /**
   * The `sizes` attribute hints to the browser which source to pick.
   * Defaults to a sensible responsive value for the main article column.
   */
  sizes?: string;
  className?: string;
}

/**
 * Responsive image component for Cinorium Journal articles.
 *
 * Uses next/image to:
 *  - Serve AVIF/WebP automatically via Accept header negotiation.
 *  - Generate a responsive srcset from the configured deviceSizes.
 *  - Prevent CLS by reserving space with explicit width/height.
 *  - Apply fetchpriority="high" for LCP images; lazy-load all others.
 *  - Display a graceful placeholder if the image fails to load.
 *
 * The `src` must be a public Vercel Blob URL (*.public.blob.vercel-storage.com)
 * or a local /public path — both are covered by next.config.ts remotePatterns.
 */
export default function ArticleImage({
  src,
  alt,
  width = 1600,
  height = 900,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 800px",
  className = "",
}: ArticleImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border-2 border-black/10 bg-gray-100 ${className}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {hasError ? (
        <ImageFallback alt={alt} />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          quality={85}
          onError={() => setHasError(true)}
          {...(!priority && { loading: "lazy" })}
        />
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Card thumbnail variant — smaller sizes attribute, no fill, explicit aspect.
// ---------------------------------------------------------------------------

interface ArticleCardImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

/**
 * Compact thumbnail for use inside ArticleCard and GrowthVault cards.
 * Sized at 16:9, capped at 640px wide to avoid downloading oversized images.
 * Supports priority loading when placed above the fold (e.g. Featured Article).
 * Shows a graceful placeholder if the Blob image is unreachable.
 */
export function ArticleCardImage({
  src,
  alt,
  width = 1600,
  height = 900,
  priority = false,
}: ArticleCardImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl bg-gray-100"
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {hasError ? (
        <ImageFallback alt={alt} />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px"
          priority={priority}
          className="object-cover"
          quality={75}
          onError={() => setHasError(true)}
          {...(!priority && { loading: "lazy" })}
        />
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Shared fallback placeholder when a Blob/remote image fails to load.
// ---------------------------------------------------------------------------

function ImageFallback({ alt }: { alt: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gray-50 text-gray-400">
      <ImageOff className="h-8 w-8" aria-hidden="true" />
      <span className="max-w-[200px] truncate text-xs font-medium text-center">
        {alt || "Image unavailable"}
      </span>
    </div>
  );
}
