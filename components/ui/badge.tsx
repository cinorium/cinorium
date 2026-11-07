import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors select-none",
  {
    variants: {
      variant: {
        /**
         * Primary brand eyebrow / badge:
         * Deep slate background (#0b131e) with white text and subtle border.
         */
        default:
          "bg-[#0b131e] text-white border border-[#0b131e] shadow-xs",
        /**
         * Clean Slate Outline:
         * Transparent background with 1px Deep Slate border and text.
         */
        secondary:
          "bg-transparent text-[#0b131e] border border-[#0b131e] shadow-xs",
        /**
         * Solid Amber Accent:
         * Background #ffb703, text #0b131e (Deep Slate), font-bold.
         */
        amber:
          "bg-[#ffb703] text-[#0b131e] border border-[#0b131e]/15 font-bold shadow-xs",
        /**
         * Crisp white pill with 2px tactile black border matching card styling.
         */
        outline:
          "bg-white text-[#0b131e] border-2 border-black shadow-xs",
        /**
         * Neutral Slate subtle tag (clean, no pale yellow tint).
         */
        subtle:
          "bg-slate-100 text-[#0b131e] border border-slate-200",
        /**
         * Emerald status badge (e.g. for verified live websites).
         */
        success:
          "bg-emerald-50 text-emerald-800 border border-emerald-300",
      },
      size: {
        default: "px-3.5 py-1 text-xs",
        sm: "px-2.5 py-0.5 text-[11px]",
        lg: "px-4 py-1.5 text-xs sm:text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  /** Optional indicator dot color, e.g. 'amber' | 'emerald' */
  dot?: "amber" | "emerald" | "none";
}

function Badge({
  className,
  variant = "default",
  size = "default",
  dot = "none",
  children,
  ...props
}: BadgeProps) {
  return (
    <div
      data-slot="badge"
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {dot === "amber" && (
        <span
          className="h-1.5 w-1.5 rounded-full bg-[#ffb703] shrink-0"
          aria-hidden="true"
        />
      )}
      {dot === "emerald" && (
        <span
          className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0 animate-pulse"
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </div>
  );
}

export { Badge, badgeVariants };
