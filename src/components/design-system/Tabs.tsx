import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const TabsRoot = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("relative", className)} {...props} />
));
TabsRoot.displayName = "TabsRoot";

const TabsList = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex gap-2 border-b border-border mb-4 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0",
        className
      )}
      {...props}
    />
  )
);

TabsList.displayName = "TabsList";

const tabTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
  {
    variants: {
      variant: {
        default:
          "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground",
        pill: "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-full px-4",
        underline:
          "bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground border-b-2 border-transparent data-[state=active]:border-primary",
      },
      size: {
        default: "h-9 px-3",
        sm: "h-8 px-2.5",
        lg: "h-10 px-3.5",
      },
      fullWidth: {
        true: "flex-1 justify-center",
      },
      orientation: {
        horizontal: "",
        vertical: "justify-start",
      },
    },
    compoundVariants: [
      {
        variant: "underline",
        className: "rounded-none",
      },
      {
        orientation: "vertical",
        className: "h-9 px-3 justify-start",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      orientation: "horizontal",
    },
  }
);

interface TabTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof tabTriggerVariants> {
  value: string;
  activeTab: string;
  onSelect: (tab: string) => void;
  icon?: React.ReactNode;
}

const TabTrigger = React.forwardRef<HTMLButtonElement, TabTriggerProps>(
  (
    {
      className,
      value,
      activeTab,
      onSelect,
      icon,
      variant,
      size,
      fullWidth,
      orientation,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const isActive = value === activeTab;

    return (
      <button
        ref={ref}
        className={cn(
          tabTriggerVariants({
            variant,
            size,
            fullWidth,
            orientation,
          }),
          className,
          isActive ? "data-[state=active]" : ""
        )}
        onClick={() => onSelect(value)}
        data-state={isActive ? "active" : "inactive"}
        disabled={disabled}
        {...props}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </button>
    );
  }
);
TabTrigger.displayName = "TabTrigger";

const TabContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    value: string;
    activeTab: string;
  }
>(({ className, value, activeTab, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
        value !== activeTab ? "hidden" : ""
      )}
      {...props}
    >
      {children}
    </div>
  );
});
TabContent.displayName = "TabContent";

export { TabsList, TabsRoot, TabTrigger, TabContent };
