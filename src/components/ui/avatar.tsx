import { cn } from "@/lib/cn"

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  fallback?: string
}

export function Avatar({ className, src, alt, fallback, ...props }: AvatarProps) {
  return (
    <div className={cn("relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-border", className)} {...props}>
      {src ? <img src={src} alt={alt} className="h-full w-full object-cover" /> : <span className="text-sm text-muted-foreground">{fallback ?? ""}</span>}
    </div>
  )
}

