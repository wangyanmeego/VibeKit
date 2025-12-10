import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/cn"

export interface DropdownMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  trigger: React.ReactNode
}

export function DropdownMenu({ className, trigger, children, ...props }: DropdownMenuProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current) return
      if (!ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", onDoc)
    return () => document.removeEventListener("mousedown", onDoc)
  }, [])
  return (
    <div className={cn("relative inline-block", className)} ref={ref} {...props}>
      <div onClick={() => setOpen((v) => !v)}>{trigger}</div>
      {open ? (
        <div className="absolute z-50 mt-2 min-w-40 rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md">
          <div className="grid gap-1">{children}</div>
        </div>
      ) : null}
    </div>
  )
}

export function DropdownMenuItem({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("cursor-pointer rounded-md px-2 py-1 text-sm hover:bg-muted", className)} {...props} />
}

