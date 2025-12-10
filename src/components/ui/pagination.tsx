import { cn } from "@/lib/cn"

export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  page: number
  total: number
  onPageChange?: (page: number) => void
}

export function Pagination({ className, page, total, onPageChange, ...props }: PaginationProps) {
  const items = Array.from({ length: total }, (_, i) => i + 1)
  return (
    <nav className={cn("flex items-center gap-2", className)} aria-label="pagination" {...props}>
      {items.map((p) => (
        <button
          key={p}
          className={cn(
            "h-8 w-8 rounded-md border border-border text-sm",
            p === page ? "bg-primary text-primary-foreground" : "bg-background hover:bg-muted",
          )}
          onClick={() => onPageChange?.(p)}
        >
          {p}
        </button>
      ))}
    </nav>
  )
}

