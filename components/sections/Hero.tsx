import type { Product } from '@/types/product';
import { StageStrip } from './StageStrip';
import { CtaLink, MutedBadge } from '@/components/ui/Button';
import { formatPrice } from '@/lib/format';

export function Hero({ product }: { product: Product }) {
  const isLive = product.status === 'live';

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[var(--tint)] to-[var(--pale)] px-4 pb-14 pt-10 sm:pb-20 sm:pt-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[var(--accent)] opacity-30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-16 h-64 w-64 rounded-full bg-[var(--primary)] opacity-20 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        {product.audience && (
          <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--ink)] shadow-sm">
            {product.audience}
          </span>
        )}

        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-[var(--ink)] sm:text-5xl">
          {product.hero.headline}
        </h1>
        <p className="max-w-xl text-base text-[var(--ink)] opacity-80 sm:text-lg">
          {product.hero.subhead}
        </p>

        <div className="w-full max-w-lg rounded-3xl bg-white/80 p-5 shadow-xl shadow-black/5 ring-1 ring-black/5 backdrop-blur sm:p-7">
          <StageStrip product={product} />
        </div>

        <div id="hero-cta" className="flex flex-col items-center gap-4">
          {isLive ? (
            <CtaLink href={product.pricing.checkoutUrl} className="shadow-lg">
              Get {product.name} — {formatPrice(product.pricing)}
            </CtaLink>
          ) : (
            <MutedBadge>Coming soon</MutedBadge>
          )}
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs font-medium text-[var(--ink)] opacity-70">
            <li>📱 Phone &amp; laptop</li>
            <li>🔓 Free Google account</li>
            <li>⚡ Instant access</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
