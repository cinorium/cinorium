import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-gray-400 selection:bg-[#ffb703] selection:text-[#0b131e] flex h-12 w-full min-w-0 rounded-2xl border-2 border-gray-200 bg-[#fdfbf7]/60 px-4 py-2 text-sm transition-colors file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-[#ffb703] focus-visible:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb703]",
        "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  );
}

export { Input };

