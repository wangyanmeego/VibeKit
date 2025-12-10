import { forwardRef } from "react"
import { cn } from "@/lib/cn"

export type SwitchProps = React.InputHTMLAttributes<HTMLInputElement>

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch({ className, ...props }, ref) {
  return (
    <label className={cn("inline-flex items-center gap-2", className)}>
      <input ref={ref} type="checkbox" className="peer sr-only" {...props} />
      <span className="block h-5 w-9 rounded-full bg-muted peer-checked:bg-primary transition-all" />
      <span className="-ml-8 block h-4 w-4 translate-x-1 rounded-full bg-background shadow transition-all peer-checked:translate-x-5" />
    </label>
  )
})
