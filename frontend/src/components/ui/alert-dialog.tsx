import * as React from "react";

interface AlertDialogContextType {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AlertDialogContext =
  React.createContext<AlertDialogContextType | undefined>(undefined);

export function AlertDialog({
  open: controlledOpen,
  onOpenChange: controlledOnOpenChange,
  children,
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);

  const open =
    controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;

  const onOpenChange =
    controlledOnOpenChange || setUncontrolledOpen;

  return (
    <AlertDialogContext.Provider value={{ open, onOpenChange }}>
      {children}

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/50"
          onClick={() => onOpenChange(false)}
        />
      )}
    </AlertDialogContext.Provider>
  );
}

export const AlertDialogTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
  }
>(({ onClick, asChild, children, ...props }, ref) => {
  const context = React.useContext(AlertDialogContext);

  if (!context) {
    throw new Error(
      "AlertDialogTrigger must be used within AlertDialog"
    );
  }

  if (asChild) {
    return React.cloneElement(
      children as React.ReactElement<any>,
      {
        onClick: (e: React.MouseEvent) => {
          context.onOpenChange(true);

          if (onClick) {
            onClick(e as React.MouseEvent<HTMLButtonElement, MouseEvent>);
          }
        },
      }
    );
  }

  return (
    <button
      ref={ref}
      onClick={(e) => {
        context.onOpenChange(true);

        if (onClick) {
          onClick(e);
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
});

AlertDialogTrigger.displayName = "AlertDialogTrigger";

export function AlertDialogContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "fixed left-1/2 top-1/2 z-50 w-full max-w-sm",
        "-translate-x-1/2 -translate-y-1/2",
        "rounded-lg border border-[hsl(var(--border))]",
        "bg-[hsl(var(--background))]",
        "p-6 shadow-lg",
        className,
      ].join(" ")}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
}

export function AlertDialogHeader({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={["mb-4 space-y-2", className].join(" ")}>
      {children}
    </div>
  );
}

export function AlertDialogFooter({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "mt-6 flex justify-end gap-3",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export function AlertDialogTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={[
        "text-lg font-semibold",
        className,
      ].join(" ")}
    >
      {children}
    </h2>
  );
}

export function AlertDialogDescription({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={[
        "text-sm text-[hsl(var(--muted-foreground))]",
        className,
      ].join(" ")}
    >
      {children}
    </p>
  );
}

export function AlertDialogAction({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={[
        "inline-flex items-center justify-center",
        "rounded-md",
        "bg-[hsl(var(--destructive))]",
        "px-4 py-2",
        "text-sm font-medium",
        "text-[hsl(var(--destructive-foreground))]",
        "hover:opacity-90",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}

export function AlertDialogCancel({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const context = React.useContext(AlertDialogContext);

  return (
    <button
      className={[
        "inline-flex items-center justify-center",
        "rounded-md",
        "border border-[hsl(var(--border))]",
        "px-4 py-2",
        "text-sm font-medium",
        "hover:bg-[hsl(var(--muted))]",
        className,
      ].join(" ")}
      onClick={(e) => {
        context?.onOpenChange(false);

        if (props.onClick) {
          props.onClick(e);
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
}
