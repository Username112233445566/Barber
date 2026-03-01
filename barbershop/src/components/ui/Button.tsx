import Link from "next/link";
import { cn } from "@/lib/cn";

type Common = {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

const base =
  "inline-flex items-center justify-center rounded-full font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--gold))] disabled:opacity-50 disabled:pointer-events-none";
const variants: Record<NonNullable<Common["variant"]>, string> = {
  primary:
    "bg-[rgb(var(--gold))] text-black hover:opacity-90",
  outline:
    "border border-[rgb(var(--gold))] text-[rgb(var(--gold))] hover:bg-[rgba(201,162,39,0.12)]",
  ghost:
    "text-[rgb(var(--gold))] hover:bg-[rgba(201,162,39,0.12)]",
};
const sizes: Record<NonNullable<Common["size"]>, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-base",
};

export function Button(
  props:
    | (Common & { href: string; target?: string; rel?: string })
    | (Common & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never })
) {
  const { variant = "primary", size = "md", className, children } = props as any;
  const cls = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const { href, target, rel } = props;
    return (
      <Link className={cls} href={href} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button {...buttonProps} className={cls}>
      {children}
    </button>
  );
}