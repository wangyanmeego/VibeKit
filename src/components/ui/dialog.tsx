import { useEffect } from "react"
import { createPortal } from "react-dom"
import { cn } from "@/lib/cn"

export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean
  onOpenChange?: (open: boolean) => void
}

export function Dialog({ className, open, onOpenChange, children, ...props }: DialogProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])
  if (!open) return null
  return createPortal(
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={() => onOpenChange?.(false)} />
      <div className={cn("absolute left-1/2 top-1/2 w-[90vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg border border-border bg-card p-4 text-card-foreground shadow-lg", className)} {...props}>
        {children}
      </div>
    </div>,
    document.body,
  )
}

