import { cn } from "@/lib/cn"

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
}

export function Progress({ className, value = 0, ...props }: ProgressProps) {
  return (
    <div className={cn("relative h-3 w-full overflow-hidden rounded-full bg-muted", className)} {...props}>
      <div className="h-full w-full translate-x-[-100%] bg-primary" style={{ transform: `translateX(${Math.min(100, Math.max(0, value)) - 100}% )` }} />
    </div>
  )
}

