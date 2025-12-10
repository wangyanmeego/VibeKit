import { useState } from "react"
import { cn } from "@/lib/cn"

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  label: React.ReactNode
}

export function Tooltip({ className, label, children, ...props }: TooltipProps) {
  const [open, setOpen] = useState(false)
  return (
    <div className={cn("relative inline-block", className)} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} {...props}>
      {children}
      {open ? (
        <div className="absolute z-50 mt-2 rounded-md border border-border bg-popover px-2 py-1 text-xs text-popover-foreground shadow">
          {label}
        </div>
      ) : null}
    </div>
  )
}
