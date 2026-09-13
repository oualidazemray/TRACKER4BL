import type { AnchorHTMLAttributes, ReactNode } from 'react';

type BaseProps = {
  children: ReactNode;
  variant?: 'primary' | 'muted';
  className?: string;
};

type ButtonAsLinkProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children'> & {
    href: string;
    external?: boolean;
  };

// The one CTA style used everywhere a buy action appears (hero, what's
// inside, pricing, sticky bar). Outbound checkout links always open in a
// new tab so the shopper never loses their place on the site.
export function CtaLink({
  children,
  variant = 'primary',
  className = '',
  href,
  external = true,
  ...rest
}: ButtonAsLinkProps) {
  const base =
    'inline-flex min-h-[44px] items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition-colors duration-150';
  const styles =
    variant === 'primary'
      ? 'bg-[var(--primary)] text-white hover:opacity-90'
      : 'bg-[var(--soft)] text-[var(--ink)] cursor-not-allowed opacity-80';

  return (
    <a
      href={href}
      className={`${base} ${styles} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}

export function MutedBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[var(--soft)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--ink)]">
      {children}
    </span>
  );
}
