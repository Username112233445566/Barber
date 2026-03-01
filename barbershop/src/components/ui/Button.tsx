import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type LinkButtonProps = CommonProps & {
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
};

type NativeButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type Props = LinkButtonProps | NativeButtonProps;

const base =
  "inline-flex items-center justify-center rounded-full font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--gold))] disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-[rgb(var(--gold))] text-black hover:opacity-90",
  outline:
    "border border-[rgb(var(--gold))] text-[rgb(var(--gold))] hover:bg-[rgba(201,162,39,0.12)]",
  ghost: "text-[rgb(var(--gold))] hover:bg-[rgba(201,162,39,0.12)]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-base",
};

// ✅ type guard
function isLinkProps(p: Props): p is LinkButtonProps {
  return typeof (p as LinkButtonProps).href === "string";
}

export function Button(props: Props) {
  const variant = props.variant ?? "primary";
  const size = props.size ?? "md";

  const cls = cn(base, variants[variant], sizes[size], props.className);

  if (isLinkProps(props)) {
    const { href, target, rel, children } = props;
    return (
      <Link className={cls} href={href} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  const { type = "button", children, ...rest } = props;
  return (
    <button {...rest} type={type} className={cls}>
      {children}
    </button>
  );
}