import { forwardRef } from "react"
import { cn } from "@/lib/cn"

export type SliderProps = React.InputHTMLAttributes<HTMLInputElement>

export const Slider = forwardRef<HTMLInputElement, SliderProps>(function Slider({ className, ...props }, ref) {
  return <input ref={ref} type="range" className={cn("h-2 w-full cursor-pointer appearance-none rounded bg-muted", className)} {...props} />
})
