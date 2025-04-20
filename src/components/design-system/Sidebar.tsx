
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarVariants = cva(
  "h-screen flex flex-col overflow-y-auto border-r border-border transition-all duration-300 ease-in-out",
  {
    variants: {
      variant: {
        default: "bg-background",
        elevated: "bg-surface-elevated shadow-md",
        subtle: "bg-neutral-50 dark:bg-neutral-900",
      },
      size: {
        sm: "max-w-[240px]",
        md: "max-w-[280px]",
        lg: "max-w-[320px]",
      },
      collapsed: {
        true: "w-[72px]",
        false: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      collapsed: false,
    },
  }
);

const sidebarSectionVariants = cva("px-4 py-2", {
  variants: {
    variant: {
      default: "",
      divider: "border-b border-border",
      elevated: "bg-surface-elevated",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const sidebarItemVariants = cva(
  "flex items-center rounded-md px-3 py-2 transition-standard focus-ring text-neutral-600 dark:text-neutral-300 hover:text-foreground",
  {
    variants: {
      variant: {
        default: "hover:bg-neutral-100 dark:hover:bg-neutral-800",
        ghost: "",
      },
      active: {
        true: "bg-primary/10 text-primary font-medium",
        false: "",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed pointer-events-none",
        false: "",
      },
      collapsed: {
        true: "justify-center",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      active: false,
      disabled: false,
      collapsed: false,
    },
  }
);

export interface SidebarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarVariants> {
  /**
   * Whether the sidebar can be collapsed
   */
  collapsible?: boolean;
}

export interface SidebarSectionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarSectionVariants> {
  /**
   * Optional title for the section
   */
  title?: React.ReactNode;
  /**
   * Whether the sidebar is collapsed
   */
  collapsed?: boolean;
}

export interface SidebarItemProps
  extends React.HTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof sidebarItemVariants> {
  /**
   * The href for the item
   */
  href: string;
  /**
   * Optional icon for the item
   */
  icon?: React.ReactNode;
  /**
   * Optional badge or indicator to show
   */
  badge?: React.ReactNode;
}

/**
 * Sidebar Context
 * 
 * Manages the collapsed state of the sidebar
 */
interface SidebarContextValue {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  toggleCollapsed: () => void;
}

const SidebarContext = React.createContext<SidebarContextValue | undefined>(undefined);

export const useSidebar = (): SidebarContextValue => {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

/**
 * SidebarProvider Component
 * 
 * Provides the sidebar state to all sidebar components
 */
export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  const [collapsed, setCollapsed] = React.useState(false);
  
  const toggleCollapsed = React.useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);
  
  return (
    <SidebarContext.Provider 
      value={{ collapsed, setCollapsed, toggleCollapsed }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

/**
 * SidebarTrigger Component
 * 
 * A button that toggles the sidebar collapsed state
 */
export const SidebarTrigger: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ 
  className, 
  ...props 
}) => {
  const { toggleCollapsed } = useSidebar();
  
  return (
    <button
      type="button"
      onClick={toggleCollapsed}
      className={cn(
        "inline-flex items-center justify-center rounded-md p-2 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus-ring transition-standard",
        className
      )}
      aria-label="Toggle sidebar"
      {...props}
    >
      <Menu size={20} />
    </button>
  );
};

/**
 * Sidebar Component
 * 
 * A container for sidebar content
 */
export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, variant, size, collapsible = true, children, ...props }, ref) => {
    const { collapsed } = useSidebar();
    
    return (
      <div
        ref={ref}
        className={cn(sidebarVariants({ variant, size, collapsed }), className)}
        role="navigation"
        aria-label="Main Navigation"
        {...props}
      >
        {children}
      </div>
    );
  }
);

Sidebar.displayName = "Sidebar";

/**
 * SidebarHeader Component
 * 
 * The top section of the sidebar, usually containing a logo or title
 */
export const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { collapsed, toggleCollapsed } = useSidebar();
  
  return (
    <div
      ref={ref}
      className={cn("flex items-center justify-between p-4 h-16", className)}
      {...props}
    >
      <div className={cn("flex-1", collapsed && "justify-center flex")}>
        {children}
      </div>
      <button
        type="button"
        onClick={toggleCollapsed}
        className="inline-flex items-center justify-center rounded-md p-1 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus-ring transition-standard"
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>
    </div>
  );
});

SidebarHeader.displayName = "SidebarHeader";

/**
 * SidebarSection Component
 * 
 * A section within the sidebar that can contain items or other content
 */
export const SidebarSection = React.forwardRef<HTMLDivElement, SidebarSectionProps>(
  ({ className, variant, title, children, ...props }, ref) => {
    const { collapsed } = useSidebar();
    
    return (
      <div
        ref={ref}
        className={cn(sidebarSectionVariants({ variant }), className)}
        {...props}
      >
        {title && !collapsed && (
          <h3 className="mb-2 text-body-small font-semibold text-neutral-500 dark:text-neutral-400">
            {title}
          </h3>
        )}
        {children}
      </div>
    );
  }
);

SidebarSection.displayName = "SidebarSection";

/**
 * SidebarItem Component
 * 
 * An individual navigation item in the sidebar
 */
export const SidebarItem = React.forwardRef<HTMLAnchorElement, SidebarItemProps>(
  ({ className, variant, active, disabled, href, icon, badge, children, ...props }, ref) => {
    const { collapsed } = useSidebar();
    
    return (
      <a
        ref={ref}
        href={href}
        className={cn(
          sidebarItemVariants({ variant, active, disabled, collapsed }),
          className
        )}
        aria-current={active ? "page" : undefined}
        tabIndex={disabled ? -1 : 0}
        {...props}
      >
        {icon && <span className={cn("flex-shrink-0", !collapsed && "mr-3")}>{icon}</span>}
        {!collapsed && <span className="flex-grow">{children}</span>}
        {!collapsed && badge && <span className="ml-auto flex-shrink-0">{badge}</span>}
      </a>
    );
  }
);

SidebarItem.displayName = "SidebarItem";

/**
 * SidebarFooter Component
 * 
 * The bottom section of the sidebar
 */
export const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("mt-auto p-4 border-t border-border", className)}
      {...props}
    />
  );
});

SidebarFooter.displayName = "SidebarFooter";

/**
 * Sidebar Navigation Components
 * 
 * A set of components for creating accessible sidebar navigation
 * 
 * @example
 * ```tsx
 * <SidebarProvider>
 *   <div className="flex">
 *     <Sidebar>
 *       <SidebarHeader>
 *         <Logo />
 *       </SidebarHeader>
 *       <SidebarSection title="Main">
 *         <SidebarItem href="/" active icon={<Home size={20} />}>
 *           Dashboard
 *         </SidebarItem>
 *         <SidebarItem href="/analytics" icon={<BarChart size={20} />}>
 *           Analytics
 *         </SidebarItem>
 *       </SidebarSection>
 *       <SidebarFooter>
 *         <UserMenu />
 *       </SidebarFooter>
 *     </Sidebar>
 *     <main className="flex-1">
 *       <SidebarTrigger className="lg:hidden" />
 *       <div className="p-4">Content</div>
 *     </main>
 *   </div>
 * </SidebarProvider>
 * ```
 * 
 * Accessibility:
 * - Uses proper semantic roles
 * - Keyboard navigation support
 * - ARIA attributes for current state and focus management
 * - Meets WCAG color contrast requirements
 */
