import React from "react"
import { cn } from "@/lib/cn"

export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string
  onValueChange?: (value: string) => void
}

export function RadioGroup({ className, children, value, onValueChange, ...props }: RadioGroupProps) {
  return (
    <div className={cn("grid gap-2", className)} {...props}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child
        return React.cloneElement(child as React.ReactElement<React.InputHTMLAttributes<HTMLInputElement>>, {
          checked: child.props.value === value,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => onValueChange?.(e.target.value),
        })
      })}
    </div>
  )
}

export type RadioProps = React.InputHTMLAttributes<HTMLInputElement>

export function Radio({ className, ...props }: RadioProps) {
  return (
    <input
      type="radio"
      className={cn(
        "h-4 w-4 rounded-full border border-input bg-background shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  )
}
