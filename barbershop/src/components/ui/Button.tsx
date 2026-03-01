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

type LinkProps = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

type NativeButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type Props = LinkProps | NativeButtonProps;

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

export function Button(props: Props) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
  } = props;

  const cls = cn(base, variants[variant], sizes[size], className);

  if ("href" in props) {
    const { href, target, rel } = props;
    return (
      <Link className={cls} href={href} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...rest } = props;
  return (
    <button {...rest} type={type} className={cls}>
      {children}
    </button>
  );
}