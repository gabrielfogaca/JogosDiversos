import * as React from "react"

interface SheetProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

interface SheetTriggerProps {
  children: React.ReactNode
  asChild?: boolean
}

interface SheetContentProps {
  children: React.ReactNode
  className?: string
}

interface SheetHeaderProps {
  children: React.ReactNode
  className?: string
}

interface SheetTitleProps {
  children: React.ReactNode
  className?: string
}

const SheetContext = React.createContext<{
  open: boolean
  setOpen: (open: boolean) => void
}>({
  open: false,
  setOpen: () => {},
})

export function Sheet({ open: controlledOpen, onOpenChange, children }: SheetProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false)
  
  const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen
  const setOpen = React.useCallback((value: boolean) => {
    if (onOpenChange) {
      onOpenChange(value)
    } else {
      setUncontrolledOpen(value)
    }
  }, [onOpenChange])

  return (
    <SheetContext.Provider value={{ open, setOpen }}>
      {children}
    </SheetContext.Provider>
  )
}

export function SheetTrigger({ children }: SheetTriggerProps) {
  const { setOpen } = React.useContext(SheetContext)
  
  return (
    <div onClick={() => setOpen(true)}>
      {children}
    </div>
  )
}

export function SheetContent({ children, className = "" }: SheetContentProps) {
  const { open, setOpen } = React.useContext(SheetContext)

  if (!open) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={() => setOpen(false)}
      />
      
      {/* Sheet */}
      <div className={`fixed right-0 top-0 h-full w-80 bg-white shadow-xl z-50 p-6 ${className}`}>
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100"
        >
          ✕
        </button>
        {children}
      </div>
    </>
  )
}

export function SheetHeader({ children, className = "" }: SheetHeaderProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {children}
    </div>
  )
}

export function SheetTitle({ children, className = "" }: SheetTitleProps) {
  return (
    <h2 className={`text-lg ${className}`}>
      {children}
    </h2>
  )
}
