import * as React from "react";

interface SelectContextType {
  value: string;
  onValueChange: (value: string) => void;
}

const SelectContext = React.createContext<SelectContextType | undefined>(undefined);

export function Select({
  value,
  onValueChange,
  children,
}: {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
}) {
  return (
    <SelectContext.Provider value={{ value, onValueChange }}>
      <div className="relative">
        {children}
      </div>
    </SelectContext.Provider>
  );
}

export const SelectTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className = "", children, ...props }, ref) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button
        ref={ref}
        className={[
          "inline-flex items-center justify-between rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-3 py-2 text-sm",
          className,
        ].join(" ")}
        onClick={() => setOpen(!open)}
        {...props}
      >
        {children}
      </button>
      {open && <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />}
    </>
  );
});
SelectTrigger.displayName = "SelectTrigger";

export function SelectValue({
  placeholder,
}: {
  placeholder?: string;
}) {
  const context = React.useContext(SelectContext);
  return (
    <span>
      {context?.value || placeholder || "Select..."}
    </span>
  );
}

export function SelectContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "absolute top-full left-0 z-50 min-w-50 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--popover))] p-1 shadow-md",
        className,
      ].join(" ")}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
}

export function SelectItem({
  value,
  children,
  className = "",
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  const context = React.useContext(SelectContext);

  return (
    <button
      className={[
        "relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-[hsl(var(--accent))]",
        context?.value === value ? "bg-[hsl(var(--accent))]" : "",
        className,
      ].join(" ")}
      onClick={() => {
        context?.onValueChange(value);
      }}
    >
      {children}
    </button>
  );
}
