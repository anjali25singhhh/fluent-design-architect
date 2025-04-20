import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const accordionVariants = cva(
  "transition-standard rounded-md overflow-hidden focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-background border border-border",
        elevated: "bg-surface-elevated text-surface-elevated-foreground shadow-sm",
        ghost: "bg-transparent",
      },
      size: {
        default: "text-body",
        sm: "text-body-small",
        lg: "text-body-large",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface AccordionItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>,
    VariantProps<typeof accordionVariants> {
  /**
   * Unique identifier for the accordion item
   */
  id: string;
  /**
   * The heading/title for the accordion item
   */
  title: React.ReactNode;
  /**
   * Optional icon to display before the title
   */
  icon?: React.ReactNode;
  /**
   * Optional subtitle to display under the title
   */
  subtitle?: React.ReactNode;
  /**
   * Controls if the accordion is expanded
   */
  expanded?: boolean;
  /**
   * Callback when the item is toggled
   */
  onToggle?: () => void;
  /**
   * Whether the accordion is disabled
   */
  disabled?: boolean;
}

/**
 * Accordion Item Component
 * 
 * A vertically stacked set of interactive headings that reveal or hide associated content.
 * 
 * @example
 * ```tsx
 * <AccordionItem
 *   id="item-1"
 *   title="Section 1"
 *   subtitle="Optional description"
 *   expanded={expanded === "item-1"}
 *   onToggle={() => setExpanded(expanded === "item-1" ? null : "item-1")}
 * >
 *   <p>Content for section 1</p>
 * </AccordionItem>
 * ```
 * 
 * Accessibility:
 * - Uses appropriate ARIA roles, states, and properties
 * - Keyboard navigable
 * - Focus is managed appropriately
 * - Meets WCAG color contrast requirements
 */
const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ 
    className, 
    variant, 
    size, 
    id, 
    title, 
    subtitle, 
    icon, 
    expanded = false, 
    onToggle, 
    disabled = false, 
    children, 
    ...props 
  }, ref) => {
    const handleToggle = () => {
      if (!disabled && onToggle) onToggle();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (onToggle) onToggle();
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          accordionVariants({ variant, size }), 
          "text-sm md:text-base",
          className
        )}
        data-state={expanded ? "open" : "closed"}
        {...props}
      >
        <h3>
          <button
            type="button"
            id={`accordion-header-${id}`}
            className={cn(
              "flex w-full items-center justify-between p-3 md:p-4 text-left focus:outline-none",
              disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
            )}
            aria-expanded={expanded}
            aria-controls={`accordion-panel-${id}`}
            aria-disabled={disabled}
            onClick={handleToggle}
            onKeyDown={handleKeyDown}
            disabled={disabled}
          >
            <div className="flex items-center gap-2 min-w-0">
              {icon && <span className="flex-shrink-0">{icon}</span>}
              <div className="min-w-0">
                <div className="font-medium truncate">{title}</div>
                {subtitle && (
                  <div className="text-sm text-muted-foreground truncate">
                    {subtitle}
                  </div>
                )}
              </div>
            </div>
            <ChevronDown
              className={cn(
                "flex-shrink-0 transition-transform duration-200",
                expanded ? "rotate-180" : "rotate-0",
                "h-4 w-4 md:h-5 md:w-5"
              )}
            />
          </button>
        </h3>
        <div
          id={`accordion-panel-${id}`}
          role="region"
          aria-labelledby={`accordion-header-${id}`}
          className={cn(
            "overflow-hidden transition-all duration-200",
            expanded ? "max-h-[1000px] animate-accordion-down" : "max-h-0 animate-accordion-up"
          )}
        >
          <div className="p-3 md:p-4 pt-0">{children}</div>
        </div>
      </div>
    );
  }
);

AccordionItem.displayName = "AccordionItem";

/**
 * Accordion Container Component
 * 
 * A wrapper for multiple AccordionItems that handles state management and spacing.
 * 
 * @example
 * ```tsx
 * <Accordion>
 *   <AccordionItem id="item-1" title="Section 1">Content 1</AccordionItem>
 *   <AccordionItem id="item-2" title="Section 2">Content 2</AccordionItem>
 * </Accordion>
 * ```
 */
const Accordion = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-2", className)}
      role="presentation"
      {...props}
    >
      {children}
    </div>
  );
});

Accordion.displayName = "Accordion";

export { Accordion, AccordionItem };
