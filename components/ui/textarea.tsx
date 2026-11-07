import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "placeholder:text-gray-400 selection:bg-[#ffb703] selection:text-[#0b131e] flex min-h-[120px] w-full rounded-2xl border-2 border-gray-200 bg-[#fdfbf7]/60 px-4 py-3.5 text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none leading-relaxed",
        "focus-visible:border-[#ffb703] focus-visible:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb703]",
        "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };

