import { useEffect } from "react"
import { createPortal } from "react-dom"
import { cn } from "@/lib/cn"

export interface SheetProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean
  side?: "left" | "right"
  onOpenChange?: (open: boolean) => void
}

export function Sheet({ className, open, side = "right", onOpenChange, children, ...props }: SheetProps) {
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
      <div
        className={cn(
          "absolute h-full w-[85vw] max-w-sm bg-card text-card-foreground shadow-lg",
          side === "right" ? "right-0" : "left-0",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </div>,
    document.body,
  )
}

