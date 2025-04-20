
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const tabsRootVariants = cva("w-full", {
  variants: {
    orientation: {
      horizontal: "flex flex-col",
      vertical: "flex flex-row gap-6",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

const tabsListVariants = cva(
  "flex overflow-auto scrollbar-none",
  {
    variants: {
      size: {
        sm: "gap-2",
        md: "gap-4",
        lg: "gap-6",
      },
      variant: {
        default: "",
        pill: "",
        underline: "border-b border-border",
      },
      orientation: {
        horizontal: "flex-row",
        vertical: "flex-col",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        orientation: "horizontal",
        className: "border-b border-border",
      },
      {
        variant: "default",
        orientation: "vertical",
        className: "border-r border-border",
      },
      {
        fullWidth: true,
        orientation: "horizontal",
        className: "justify-between",
      },
    ],
    defaultVariants: {
      size: "md",
      variant: "default",
      orientation: "horizontal",
      fullWidth: false,
    },
  }
);

const tabTriggerVariants = cva(
  "font-medium transition-standard inline-flex items-center justify-center whitespace-nowrap focus-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "hover:bg-neutral-100 dark:hover:bg-neutral-800 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:font-semibold",
        pill:
          "rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
        underline:
          "border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary",
      },
      size: {
        sm: "text-body-small px-2 py-1",
        md: "text-body px-3 py-2",
        lg: "text-body-large px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface TabsRootProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tabsRootVariants> {}

export interface TabsListProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tabsListVariants> {}

export interface TabTriggerProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof tabTriggerVariants> {
  /**
   * The value of the tab. This is used to match with the value of the active tab.
   */
  value: string;
  /**
   * The current active tab value. If this matches the value of the tab, it will be active.
   */
  activeTab: string;
  /**
   * Callback when the tab is selected
   */
  onSelect: (value: string) => void;
  /**
   * Optional icon to display before the tab label
   */
  icon?: React.ReactNode;
  /**
   * Whether the tab is disabled
   */
  disabled?: boolean;
}

export interface TabContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The value of the tab. This is used to match with the activeTab value.
   */
  value: string;
  /**
   * The current active tab value. If this matches the value of the tab, it will be shown.
   */
  activeTab: string;
}

/**
 * TabsRoot Component
 * 
 * A container for the tabs components.
 */
const TabsRoot = React.forwardRef<HTMLDivElement, TabsRootProps>(
  ({ className, orientation, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(tabsRootVariants({ orientation }), className)}
        {...props}
      />
    );
  }
);

TabsRoot.displayName = "TabsRoot";

/**
 * TabsList Component
 * 
 * The container for tab triggers.
 */
const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, size, variant, orientation, fullWidth, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          tabsListVariants({ size, variant, orientation, fullWidth }),
          className
        )}
        role="tablist"
        aria-orientation={orientation}
        {...props}
      />
    );
  }
);

TabsList.displayName = "TabsList";

/**
 * TabTrigger Component
 * 
 * An individual tab trigger button.
 */
const TabTrigger = React.forwardRef<HTMLButtonElement, TabTriggerProps>(
  ({ className, size, variant, value, activeTab, onSelect, icon, disabled, children, ...props }, ref) => {
    const isActive = value === activeTab;
    
    const handleClick = () => {
      onSelect(value);
    };
    
    return (
      <button
        ref={ref}
        className={cn(
          tabTriggerVariants({ size, variant }),
          className
        )}
        role="tab"
        aria-selected={isActive}
        aria-controls={`tab-content-${value}`}
        id={`tab-trigger-${value}`}
        disabled={disabled}
        data-state={isActive ? "active" : "inactive"}
        onClick={handleClick}
        type="button"
        {...props}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </button>
    );
  }
);

TabTrigger.displayName = "TabTrigger";

/**
 * TabContent Component
 * 
 * The content section for a tab.
 */
const TabContent = React.forwardRef<HTMLDivElement, TabContentProps>(
  ({ className, value, activeTab, children, ...props }, ref) => {
    const isActive = value === activeTab;
    
    if (!isActive) return null;
    
    return (
      <div
        ref={ref}
        className={cn("mt-2 focus:outline-none", className)}
        role="tabpanel"
        aria-labelledby={`tab-trigger-${value}`}
        id={`tab-content-${value}`}
        tabIndex={0}
        {...props}
      >
        {children}
      </div>
    );
  }
);

TabContent.displayName = "TabContent";

/**
 * Tabs Components
 * 
 * A set of components for creating accessible tabbed interfaces.
 * 
 * @example
 * ```tsx
 * const [activeTab, setActiveTab] = React.useState("tab1");
 * 
 * <TabsRoot>
 *   <TabsList>
 *     <TabTrigger value="tab1" activeTab={activeTab} onSelect={setActiveTab}>Tab 1</TabTrigger>
 *     <TabTrigger value="tab2" activeTab={activeTab} onSelect={setActiveTab}>Tab 2</TabTrigger>
 *   </TabsList>
 *   <TabContent value="tab1" activeTab={activeTab}>Content 1</TabContent>
 *   <TabContent value="tab2" activeTab={activeTab}>Content 2</TabContent>
 * </TabsRoot>
 * ```
 * 
 * Accessibility:
 * - Uses proper role attributes
 * - Keyboard navigation support
 * - Focus management
 * - ARIA attributes for state and relationships
 */
export { TabsRoot, TabsList, TabTrigger, TabContent };
