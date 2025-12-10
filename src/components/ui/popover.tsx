import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/cn"

export interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  trigger: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function Popover({ className, trigger, children, open, onOpenChange, ...props }: PopoverProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)
  const isOpen = open ?? internalOpen
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current) return
      if (!ref.current.contains(e.target as Node)) {
        if (onOpenChange) onOpenChange(false)
        else setInternalOpen(false)
      }
    }
    document.addEventListener("mousedown", onDoc)
    return () => document.removeEventListener("mousedown", onDoc)
  }, [onOpenChange])
  return (
    <div className={cn("relative inline-block", className)} ref={ref} {...props}>
      <div
        onClick={() => {
          if (onOpenChange) onOpenChange(!isOpen)
          else setInternalOpen((v) => !v)
        }}
      >
        {trigger}
      </div>
      {isOpen ? (
        <div className="absolute z-50 mt-2 min-w-40 rounded-md border border-border bg-popover p-3 text-popover-foreground shadow-md">
          {children}
        </div>
      ) : null}
    </div>
  )
}
