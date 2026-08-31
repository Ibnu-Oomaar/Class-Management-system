import * as React from "react";

interface DialogContextType {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DialogContext =
  React.createContext<DialogContextType | undefined>(
    undefined
  );

function useDialogContext() {
  const context = React.useContext(DialogContext);

  if (!context) {
    throw new Error(
      "Dialog components must be used inside <Dialog>"
    );
  }

  return context;
}

/* =========================================================
   DIALOG
========================================================= */

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export function Dialog({
  open,
  onOpenChange,
  children,
}: DialogProps) {
  React.useEffect(() => {
    if (!open) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [open, onOpenChange]);

  return (
    <DialogContext.Provider
      value={{
        open,
        onOpenChange,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
}

/* =========================================================
   TRIGGER
========================================================= */

interface DialogTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const DialogTrigger =
  React.forwardRef<
    HTMLButtonElement,
    DialogTriggerProps
  >(
    (
      {
        children,
        onClick,
        asChild = false,
        ...props
      },
      ref
    ) => {
      const { onOpenChange } =
        useDialogContext();

      const handleClick = (
        event: React.MouseEvent<HTMLButtonElement>
      ) => {
        onClick?.(event);

        if (!event.defaultPrevented) {
          onOpenChange(true);
        }
      };

      /*
       * Simple version:
       * asChild is supported for normal React elements.
       */
      if (asChild) {
        if (!React.isValidElement(children)) {
          return null;
        }

        const child =
          children as React.ReactElement<{
            onClick?: (
              event: React.MouseEvent
            ) => void;
          }>;

        return React.cloneElement(child, {
          onClick: (
            event: React.MouseEvent
          ) => {
            child.props.onClick?.(event);

            if (!event.defaultPrevented) {
              onOpenChange(true);
            }
          },
        });
      }

      return (
        <button
          ref={ref}
          type="button"
          onClick={handleClick}
          {...props}
        >
          {children}
        </button>
      );
    }
  );

DialogTrigger.displayName =
  "DialogTrigger";

/* =========================================================
   CONTENT
========================================================= */

interface DialogContentProps {
  children: React.ReactNode;
  className?: string;
}

export function DialogContent({
  children,
  className = "",
}: DialogContentProps) {
  const { open, onOpenChange } =
    useDialogContext();

  if (!open) {
    return null;
  }

  return (
    <>
      {/* OVERLAY */}

      <div
        className="
          fixed
          inset-0
          z-[100]
          bg-black/70
          backdrop-blur-sm
        "
        aria-hidden="true"
        onMouseDown={(event) => {
          if (
            event.target ===
            event.currentTarget
          ) {
            onOpenChange(false);
          }
        }}
      />

      {/* DIALOG */}

      <div
        role="dialog"
        aria-modal="true"
        className={`
          fixed
          left-1/2
          top-1/2
          z-[101]
          w-[calc(100%-2rem)]
          max-w-lg
          -translate-x-1/2
          -translate-y-1/2
          overflow-hidden
          rounded-2xl
          border
          border-zinc-700/60
          bg-zinc-900
          text-zinc-100
          shadow-2xl
          shadow-black/50
          ${className}
        `}
        onMouseDown={(event) => {
          event.stopPropagation();
        }}
      >
        {/* CLOSE BUTTON */}

        <button
          type="button"
          aria-label="Close dialog"
          onClick={() =>
            onOpenChange(false)
          }
          className="
            absolute
            right-4
            top-4
            z-20
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-lg
            text-xl
            leading-none
            text-zinc-500
            transition
            hover:bg-zinc-800
            hover:text-white
            focus:outline-none
            focus:ring-2
            focus:ring-[hsl(var(--brand))]
          "
        >
          ×
        </button>

        {/* CONTENT SCROLL */}

        <div
          className="
            max-h-[90vh]
            overflow-y-auto
            p-6
          "
        >
          {children}
        </div>
      </div>
    </>
  );
}

/* =========================================================
   HEADER
========================================================= */

interface DialogHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function DialogHeader({
  children,
  className = "",
}: DialogHeaderProps) {
  return (
    <div
      className={`
        space-y-2
        pr-10
        ${className}
      `}
    >
      {children}
    </div>
  );
}

/* =========================================================
   FOOTER
========================================================= */

interface DialogFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function DialogFooter({
  children,
  className = "",
}: DialogFooterProps) {
  return (
    <div
      className={`
        mt-6
        flex
        flex-col-reverse
        gap-2
        sm:flex-row
        sm:justify-end
        ${className}
      `}
    >
      {children}
    </div>
  );
}

/* =========================================================
   TITLE
========================================================= */

interface DialogTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function DialogTitle({
  children,
  className = "",
}: DialogTitleProps) {
  return (
    <h2
      className={`
        text-lg
        font-semibold
        text-white
        ${className}
      `}
    >
      {children}
    </h2>
  );
}

/* =========================================================
   DESCRIPTION
========================================================= */

interface DialogDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function DialogDescription({
  children,
  className = "",
}: DialogDescriptionProps) {
  return (
    <p
      className={`
        text-sm
        text-zinc-400
        ${className}
      `}
    >
      {children}
    </p>
  );
}
