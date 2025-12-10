import { createContext, useContext, useState } from "react"
import { createPortal } from "react-dom"

type ToastItem = { id: number; title?: string; description?: string }

interface ToastApi {
  success: (msg: string, description?: string) => void
  info: (msg: string, description?: string) => void
  error: (msg: string, description?: string) => void
}

const ToastContext = createContext<{ toasts: ToastItem[]; push: (type: "success" | "info" | "error", title: string, description?: string) => void } | null>(null)

export function useToast(): ToastApi {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error("Toaster not mounted")
  return {
    success: (msg, description) => ctx.push("success", msg, description),
    info: (msg, description) => ctx.push("info", msg, description),
    error: (msg, description) => ctx.push("error", msg, description),
  }
}

export function Toaster() {
  const [toasts, setToasts] = useState<ToastItem[]>([])
  function push(type: "success" | "info" | "error", title: string, description?: string) {
    const id = Date.now() + Math.random()
    setToasts((prev) => [...prev, { id, title: `${title}`, description }])
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 2500)
  }
  return createPortal(
    <ToastContext.Provider value={{ toasts, push }}>
      <div className="fixed bottom-4 right-4 z-50 flex w-80 flex-col gap-2">
        {toasts.map((t) => (
          <div key={t.id} className="rounded-md border border-border bg-popover p-3 text-popover-foreground shadow">
            {t.title ? <div className="text-sm font-medium">{t.title}</div> : null}
            {t.description ? <div className="mt-1 text-xs text-muted-foreground">{t.description}</div> : null}
          </div>
        ))}
      </div>
    </ToastContext.Provider>,
    document.body,
  )
}

