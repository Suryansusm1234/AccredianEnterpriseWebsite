import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60";

const variantClasses = {
  primary: "bg-primary text-on-primary hover:bg-primary-container",
  ghost:
    "border border-outline-variant bg-transparent text-on-surface hover:bg-surface-container-low",
} as const;

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: keyof typeof variantClasses;
  }
>;

export default function Button({
  children,
  className = "",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`.trim()}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
