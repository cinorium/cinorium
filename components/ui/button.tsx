import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-2xl border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb703] focus-visible:ring-offset-2 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-black text-white rounded-2xl hover:bg-zinc-900 border border-transparent shadow-sm active:translate-y-px",
        outline:
          "border-2 border-black bg-white hover:bg-slate-50 text-[#0b131e] rounded-2xl shadow-xs active:translate-y-px",
        secondary:
          "bg-[#ffb703] text-[#0b131e] font-semibold hover:bg-amber-400 rounded-2xl shadow-xs border border-[#0b131e]/15 active:translate-y-px",
        slateOutline:
          "bg-transparent border border-[#0b131e] text-[#0b131e] hover:bg-slate-100 rounded-2xl active:translate-y-px font-medium",
        accent:
          "bg-[#ffb703] text-[#0b131e] font-semibold hover:bg-amber-400 rounded-2xl shadow-xs border border-black/10 active:translate-y-px",
        dark:
          "bg-[#0b131e] text-white hover:bg-gray-800 rounded-2xl shadow-xs active:translate-y-px",
        ghost:
          "hover:bg-slate-100 text-[#0b131e] rounded-2xl",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 rounded-2xl shadow-xs",
        link: "text-gray-900 underline-offset-4 hover:underline hover:text-[#0b131e]",
      },
      size: {
        default:
          "h-9 gap-1.5 px-5 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5",
        xs: "h-6 gap-1 px-2.5 text-xs has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 px-3 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        lg: "h-10 gap-1.5 px-5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        icon: "size-9",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
