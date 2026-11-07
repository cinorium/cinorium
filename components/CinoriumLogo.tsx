import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CinoriumLogoProps {
  /** Visual variant: 'dark' for light backgrounds (default), 'light' for dark backgrounds (e.g. Header/Footer) */
  variant?: "dark" | "light";
  /** Whether to render the official logo with the 'Built for Visibility. Designed for Growth.' tagline */
  withTagline?: boolean;
  /** Size scale: 'sm' | 'md' | 'lg' */
  size?: "sm" | "md" | "lg";
  /** Whether the logo should be wrapped in a Link to '/' (default true) */
  asLink?: boolean;
  href?: string;
  className?: string;
  priority?: boolean;
}

/**
 * Official Cinorium Logo Component
 *
 * Renders the brand vector assets:
 * - /cinorium-logo-with-tagline.svg: for hero / featured / center display
 * - /cinorium-logo.svg: for navigation / header / compact placements
 * - /cinorium-logo-light.svg & /cinorium-logo-with-tagline-light.svg: for dark slate surfaces (#0b131e)
 */
export default function CinoriumLogo({
  variant = "dark",
  withTagline = false,
  size = "md",
  asLink = true,
  href = "/",
  className,
  priority = false,
}: CinoriumLogoProps) {
  const isLight = variant === "light";

  const logoSrc = withTagline
    ? isLight
      ? "/cinorium-logo-with-tagline-light.svg"
      : "/cinorium-logo-with-tagline.svg"
    : isLight
    ? "/cinorium-logo-light.svg"
    : "/cinorium-logo.svg";

  // Proportional dimensional classes based on official vector viewBoxes
  const dimensions = withTagline
    ? {
        sm: { width: 172, height: 30, className: "h-7 sm:h-8 w-auto" },
        md: { width: 230, height: 40, className: "h-9 sm:h-10 w-auto" },
        lg: { width: 320, height: 56, className: "h-12 sm:h-14 w-auto" },
      }[size]
    : {
        sm: { width: 160, height: 19, className: "h-5 sm:h-6 w-auto" },
        md: { width: 215, height: 25, className: "h-7 sm:h-8 w-auto" },
        lg: { width: 280, height: 33, className: "h-9 sm:h-10 w-auto" },
      }[size];

  const imageElement = (
    <Image
      src={logoSrc}
      alt="Cinorium — Built for Visibility. Designed for Growth."
      width={dimensions.width}
      height={dimensions.height}
      priority={priority}
      className={cn("select-none object-contain", dimensions.className)}
    />
  );

  if (asLink) {
    return (
      <Link
        href={href}
        aria-label="Cinorium Home"
        className={cn(
          "inline-flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm",
          className
        )}
      >
        {imageElement}
      </Link>
    );
  }

  return (
    <div className={cn("inline-flex items-center", className)}>
      {imageElement}
    </div>
  );
}
