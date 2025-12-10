import { cn } from "@/lib/cn"

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical"
}

export function Separator({ className, orientation = "horizontal", ...props }: SeparatorProps) {
  return (
    <div
      role="separator"
      className={cn(
        orientation === "vertical" ? "mx-2 h-full w-px" : "my-2 h-px w-full",
        "bg-border",
        className,
      )}
      {...props}
    />
  )
}

