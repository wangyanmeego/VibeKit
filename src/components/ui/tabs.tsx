import { createContext, useContext, useMemo } from "react"
import { cn } from "@/lib/cn"

interface TabsContextValue {
  value?: string
  onValueChange?: (value: string) => void
}

const TabsContext = createContext<TabsContextValue>({})

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string
  onValueChange?: (value: string) => void
}

export function Tabs({ className, value, onValueChange, ...props }: TabsProps) {
  const ctx = useMemo(() => ({ value, onValueChange }), [value, onValueChange])
  return (
    <TabsContext.Provider value={ctx}>
      <div className={cn("grid gap-2", className)} {...props} />
    </TabsContext.Provider>
  )
}

export type TabsListProps = React.HTMLAttributes<HTMLDivElement>
export function TabsList({ className, ...props }: TabsListProps) {
  return <div className={cn("flex items-center gap-2", className)} {...props} />
}

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}
export function TabsTrigger({ className, value, ...props }: TabsTriggerProps) {
  const { value: selected, onValueChange } = useContext(TabsContext)
  const active = selected === value
  return (
    <button
      className={cn(
        "inline-flex h-9 items-center justify-center rounded-md border border-transparent px-3 text-sm",
        active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
        className,
      )}
      onClick={() => onValueChange?.(value)}
      {...props}
    />
  )
}

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}
export function TabsContent({ className, value, ...props }: TabsContentProps) {
  const { value: selected } = useContext(TabsContext)
  if (selected !== value) return null
  return <div className={cn("rounded-md border border-border p-4", className)} {...props} />
}
