import * as React from "react";

interface DropdownContextType {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DropdownContext = React.createContext<DropdownContextType | undefined>(undefined);

export function DropdownMenu({
  children,
  open: controlledOpen,
  onOpenChange: controlledOnOpenChange,
}: {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);
  const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;
  const onOpenChange = controlledOnOpenChange || setUncontrolledOpen;

  return (
    <DropdownContext.Provider value={{ open, onOpenChange }}>
      <div className="relative">
        {children}
        {open && (
          <div className="fixed inset-0 z-40" onClick={() => onOpenChange(false)} />
        )}
      </div>
    </DropdownContext.Provider>
  );
}

export const DropdownMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }
>(({ onClick, asChild, children, ...props }, ref) => {
  const context = React.useContext(DropdownContext);
  if (!context) throw new Error("DropdownMenuTrigger must be used within DropdownMenu");

  if (asChild) {
    return React.cloneElement(children as React.ReactElement<any>, {
      onClick: (e: React.MouseEvent) => {
        context.onOpenChange(!context.open);
        if (onClick) onClick(e as any);
      },
    });
  }

  return (
    <button
      ref={ref}
      onClick={(e) => {
        context.onOpenChange(!context.open);
        if (onClick) onClick(e as any);
      }}
      {...props}
    >
      {children}
    </button>
  );
});
DropdownMenuTrigger.displayName = "DropdownMenuTrigger";

export function DropdownMenuContent({
  children,
  align = "start",
  className = "",
}: {
  children: React.ReactNode;
  align?: "start" | "end";
  className?: string;
}) {
  const context = React.useContext(DropdownContext);
  if (!context) throw new Error("DropdownMenuContent must be used within DropdownMenu");

  if (!context.open) return null;

  const alignClass = align === "end" ? "right-0" : "left-0";

  return (
    <div
      className={[
        "absolute top-full z-50 min-w-50 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--popover))] p-1 shadow-md",
        alignClass,
        className,
      ].join(" ")}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
}

export function DropdownMenuLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={["px-2 py-1.5 text-xs font-semibold text-[hsl(var(--muted-foreground))]", className].join(" ")}>
      {children}
    </div>
  );
}

export function DropdownMenuItem({
  children,
  onClick,
  onSelect,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onSelect?: (e: React.MouseEvent) => void;
}) {
  const context = React.useContext(DropdownContext);

  return (
    <button
      className={[
        "relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-[hsl(var(--accent))] data-disabled:pointer-events-none data-disabled:opacity-50",
        className,
      ].join(" ")}
      onClick={(e) => {
        if (onSelect) onSelect(e);
        if (onClick) onClick(e as any);
        if (context) context.onOpenChange(false);
      }}
      {...props}
    >
      {children}
    </button>
  );
}

export function DropdownMenuSeparator({
  className = "",
}: {
  className?: string;
}) {
  return <div className={["-mx-1 my-1 h-px bg-[hsl(var(--border))]", className].join(" ")} />;
}
