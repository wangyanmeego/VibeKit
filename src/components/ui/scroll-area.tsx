import { cn } from "@/lib/cn"

export type ScrollAreaProps = React.HTMLAttributes<HTMLDivElement>

export function ScrollArea({ className, ...props }: ScrollAreaProps) {
  return <div className={cn("overflow-auto", className)} {...props} />
}
