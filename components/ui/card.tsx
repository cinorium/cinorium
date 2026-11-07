import * as React from "react"
import { cn } from "cn"

interface CardProps extends React.ComponentProps<"div"> {
  size?: "default" | "sm";
  variant?: "tactile" | "subtle" | "dark" | "plain";
}

function Card({
  className,
  size = "default",
  variant = "tactile",
  ...props
}: CardProps) {
  const variantClasses = {
    tactile:
      "rounded-2xl border-2 border-black bg-white shadow-sm transition-all duration-300",
    subtle:
      "rounded-2xl border border-gray-200 bg-white/90 shadow-xs backdrop-blur-sm",
    dark:
      "rounded-2xl border border-gray-800 bg-[#0b131e] text-white shadow-xl",
    plain:
      "rounded-2xl border border-gray-100 bg-card text-card-foreground ring-1 ring-foreground/10",
  }[variant];

  return (
    <div
      data-slot="card"
      data-size={size}
      data-variant={variant}
      className={cn(
        "group/card flex flex-col justify-between h-full gap-(--card-spacing) overflow-hidden py-(--card-spacing) text-sm text-card-foreground [--card-spacing:--spacing(6)] has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(4)] *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
        variantClasses,
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-2 rounded-t-xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("font-heading text-base font-semibold text-gray-900 leading-snug", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-gray-600 font-light leading-relaxed", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-(--card-spacing) flex-1 flex flex-col", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center rounded-b-xl px-(--card-spacing) mt-auto pt-3 [.border-t]:pt-(--card-spacing)",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
