
import React from "react";
import { cn } from "@/lib/utils";

interface ColorTokenProps {
  name: string;
  variable: string;
  description?: string;
  className?: string;
}

const ColorToken: React.FC<ColorTokenProps> = ({
  name,
  variable,
  description,
  className,
}) => {
  // Extract the CSS variable value
  const [colorValue, setColorValue] = React.useState("");
  
  React.useEffect(() => {
    const value = getComputedStyle(document.documentElement)
      .getPropertyValue(variable)
      .trim();
    setColorValue(value);
  }, [variable]);

  return (
    <div className="flex flex-col">
      <div
        className={cn(
          "h-16 w-full rounded-md border border-border mb-2",
          className
        )}
      />
      <div className="text-body-small font-medium">{name}</div>
      <div className="text-caption text-neutral-600 dark:text-neutral-400">
        {variable}
      </div>
      {description && (
        <div className="text-caption text-neutral-500 dark:text-neutral-400 mt-1">
          {description}
        </div>
      )}
    </div>
  );
};

interface ColorGroupProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const ColorGroup: React.FC<ColorGroupProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-heading-3 mb-1">{title}</h3>
      {description && (
        <p className="text-body-small text-neutral-600 dark:text-neutral-300 mb-4">
          {description}
        </p>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {children}
      </div>
    </div>
  );
};

/**
 * ColorSystem Component
 * 
 * Displays the design system's color palette with documentation.
 */
export const ColorSystem: React.FC = () => {
  return (
    <div>
      <h2 className="text-heading-2 mb-6">Color System</h2>
      
      <ColorGroup 
        title="Primary Colors" 
        description="Our primary brand colors. Used for primary buttons, links and focus states."
      >
        <ColorToken
          name="Primary 50"
          variable="--primary-50"
          className="bg-primary-50"
        />
        <ColorToken
          name="Primary 100"
          variable="--primary-100"
          className="bg-primary-100"
        />
        <ColorToken
          name="Primary 200"
          variable="--primary-200"
          className="bg-primary-200"
        />
        <ColorToken
          name="Primary 300"
          variable="--primary-300"
          className="bg-primary-300"
        />
        <ColorToken
          name="Primary 400"
          variable="--primary-400"
          className="bg-primary-400"
        />
        <ColorToken
          name="Primary 500"
          variable="--primary-500"
          className="bg-primary-500"
        />
        <ColorToken
          name="Primary 600"
          variable="--primary-600"
          className="bg-primary-600"
        />
        <ColorToken
          name="Primary 700"
          variable="--primary-700"
          className="bg-primary-700"
        />
        <ColorToken
          name="Primary 800"
          variable="--primary-800"
          className="bg-primary-800"
        />
        <ColorToken
          name="Primary 900"
          variable="--primary-900"
          className="bg-primary-900"
        />
      </ColorGroup>
      
      <ColorGroup 
        title="Secondary Colors" 
        description="Our secondary palette. Used for secondary buttons and accents."
      >
        <ColorToken
          name="Secondary 50"
          variable="--secondary-50"
          className="bg-secondary-50"
        />
        <ColorToken
          name="Secondary 100"
          variable="--secondary-100"
          className="bg-secondary-100"
        />
        <ColorToken
          name="Secondary 200"
          variable="--secondary-200"
          className="bg-secondary-200"
        />
        <ColorToken
          name="Secondary 300"
          variable="--secondary-300"
          className="bg-secondary-300"
        />
        <ColorToken
          name="Secondary 400"
          variable="--secondary-400"
          className="bg-secondary-400"
        />
        <ColorToken
          name="Secondary 500"
          variable="--secondary-500"
          className="bg-secondary-500"
        />
        <ColorToken
          name="Secondary 600"
          variable="--secondary-600"
          className="bg-secondary-600"
        />
        <ColorToken
          name="Secondary 700"
          variable="--secondary-700"
          className="bg-secondary-700"
        />
        <ColorToken
          name="Secondary 800"
          variable="--secondary-800"
          className="bg-secondary-800"
        />
        <ColorToken
          name="Secondary 900"
          variable="--secondary-900"
          className="bg-secondary-900"
        />
      </ColorGroup>
      
      <ColorGroup 
        title="Tertiary Colors" 
        description="Our tertiary palette. Used for highlighting and specific UI elements."
      >
        <ColorToken
          name="Tertiary 50"
          variable="--tertiary-50"
          className="bg-tertiary-50"
        />
        <ColorToken
          name="Tertiary 100"
          variable="--tertiary-100"
          className="bg-tertiary-100"
        />
        <ColorToken
          name="Tertiary 200"
          variable="--tertiary-200"
          className="bg-tertiary-200"
        />
        <ColorToken
          name="Tertiary 300"
          variable="--tertiary-300"
          className="bg-tertiary-300"
        />
        <ColorToken
          name="Tertiary 400"
          variable="--tertiary-400"
          className="bg-tertiary-400"
        />
        <ColorToken
          name="Tertiary 500"
          variable="--tertiary-500"
          className="bg-tertiary-500"
        />
        <ColorToken
          name="Tertiary 600"
          variable="--tertiary-600"
          className="bg-tertiary-600"
        />
        <ColorToken
          name="Tertiary 700"
          variable="--tertiary-700"
          className="bg-tertiary-700"
        />
        <ColorToken
          name="Tertiary 800"
          variable="--tertiary-800"
          className="bg-tertiary-800"
        />
        <ColorToken
          name="Tertiary 900"
          variable="--tertiary-900"
          className="bg-tertiary-900"
        />
      </ColorGroup>
      
      <ColorGroup 
        title="Neutral Colors" 
        description="Our neutral palette. Used for text, backgrounds, and borders."
      >
        <ColorToken
          name="Neutral 50"
          variable="--neutral-50"
          className="bg-neutral-50"
        />
        <ColorToken
          name="Neutral 100"
          variable="--neutral-100"
          className="bg-neutral-100"
        />
        <ColorToken
          name="Neutral 200"
          variable="--neutral-200"
          className="bg-neutral-200"
        />
        <ColorToken
          name="Neutral 300"
          variable="--neutral-300"
          className="bg-neutral-300"
        />
        <ColorToken
          name="Neutral 400"
          variable="--neutral-400"
          className="bg-neutral-400"
        />
        <ColorToken
          name="Neutral 500"
          variable="--neutral-500"
          className="bg-neutral-500"
        />
        <ColorToken
          name="Neutral 600"
          variable="--neutral-600"
          className="bg-neutral-600"
        />
        <ColorToken
          name="Neutral 700"
          variable="--neutral-700"
          className="bg-neutral-700"
        />
        <ColorToken
          name="Neutral 800"
          variable="--neutral-800"
          className="bg-neutral-800"
        />
        <ColorToken
          name="Neutral 900"
          variable="--neutral-900"
          className="bg-neutral-900"
        />
      </ColorGroup>
      
      <ColorGroup 
        title="Semantic Colors" 
        description="Colors with specific meanings used for system feedback and statuses."
      >
        <ColorToken
          name="Success"
          variable="--success"
          className="bg-success"
          description="Confirmations, completions"
        />
        <ColorToken
          name="Info"
          variable="--info"
          className="bg-info"
          description="Information, help, neutral states"
        />
        <ColorToken
          name="Warning"
          variable="--warning"
          className="bg-warning"
          description="Warnings, proceed with caution"
        />
        <ColorToken
          name="Error"
          variable="--error"
          className="bg-error"
          description="Errors, destructive actions"
        />
      </ColorGroup>
      
      <ColorGroup 
        title="Surface Colors" 
        description="Background colors for different surface levels."
      >
        <ColorToken
          name="Surface"
          variable="--surface"
          className="bg-surface"
          description="Base surface level"
        />
        <ColorToken
          name="Surface Elevated"
          variable="--surface-elevated"
          className="bg-surface-elevated"
          description="Elevated surface (cards, modals)"
        />
      </ColorGroup>
    </div>
  );
};
