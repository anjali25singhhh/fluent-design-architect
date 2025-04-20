
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const badgeVariants = cva(
  "inline-flex items-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        tertiary: "bg-tertiary text-tertiary-foreground",
        outline: "text-foreground border border-input bg-background hover:bg-neutral-100 dark:hover:bg-neutral-800",
        success: "bg-success text-success-foreground",
        info: "bg-info text-info-foreground",
        warning: "bg-warning text-warning-foreground",
        error: "bg-error text-error-foreground",
      },
      size: {
        sm: "h-6 text-caption px-2",
        md: "h-7 text-body-small px-2.5",
        lg: "h-8 text-body px-3",
      },
      rounded: {
        default: "rounded-md",
        full: "rounded-full",
      },
      removable: {
        true: "",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      rounded: "default",
      removable: false,
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  /**
   * The label text to display inside the badge
   */
  label: string;
  /**
   * Optional icon to display before the label
   */
  icon?: React.ReactNode;
  /**
   * Whether the badge can be removed
   */
  removable?: boolean;
  /**
   * Callback when the remove button is clicked
   */
  onRemove?: () => void;
}

/**
 * Badge Component
 * 
 * A small visual indicator for categorization, statuses, or as a count.
 * 
 * @example
 * ```tsx
 * <Badge label="New" variant="success" />
 * <Badge label="Featured" variant="secondary" icon={<Star size={12} />} />
 * <Badge label="Remove me" removable onRemove={() => console.log('Removed')} />
 * ```
 * 
 * Accessibility:
 * - Includes appropriate ARIA role and states
 * - Interactive badges (removable) have proper keyboard support
 * - Meets WCAG color contrast requirements
 */
const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, size, rounded, removable, label, icon, onRemove, ...props }, ref) => {
    const handleRemoveClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (onRemove) onRemove();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (removable && (e.key === 'Backspace' || e.key === 'Delete')) {
        if (onRemove) onRemove();
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          badgeVariants({ variant, size, rounded, removable }),
          removable && "pr-1",
          className
        )}
        role="status"
        aria-label={label}
        tabIndex={removable ? 0 : undefined}
        onKeyDown={removable ? handleKeyDown : undefined}
        {...props}
      >
        {icon && <span className="mr-1">{icon}</span>}
        <span>{label}</span>
        {removable && (
          <button
            type="button"
            className="ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-ring"
            onClick={handleRemoveClick}
            aria-label={`Remove ${label}`}
          >
            <X size={size === "sm" ? 12 : size === "md" ? 14 : 16} />
          </button>
        )}
      </div>
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
