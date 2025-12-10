import { cn } from "@/lib/cn"

type Variant = "default" | "secondary" | "outline"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: Variant
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const styles: Record<Variant, string> = {
    default: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    outline: "border border-border",
  }
  return <div className={cn("inline-flex items-center rounded-md px-2 py-0.5 text-xs", styles[variant], className)} {...props} />
}

