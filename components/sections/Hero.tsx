import type { Product } from '@/types/product';
import { StageStrip } from './StageStrip';
import { CtaLink, MutedBadge } from '@/components/ui/Button';
import { formatPrice } from '@/lib/format';

export function Hero({ product }: { product: Product }) {
  const isLive = product.status === 'live';

  return (
    <section className="bg-[var(--tint)] px-4 pb-12 pt-10 sm:pb-16 sm:pt-14">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        {product.audience && (
          <span className="rounded-full bg-[var(--soft)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--ink)]">
            {product.audience}
          </span>
        )}

        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-[var(--ink)] sm:text-4xl">
          {product.hero.headline}
        </h1>
        <p className="max-w-xl text-base text-[var(--ink)] opacity-80 sm:text-lg">
          {product.hero.subhead}
        </p>

        <div className="w-full py-2">
          <StageStrip product={product} />
        </div>

        <div id="hero-cta" className="flex flex-col items-center gap-3">
          {isLive ? (
            <CtaLink href={product.pricing.checkoutUrl}>
              Get {product.name} — {formatPrice(product.pricing)}
            </CtaLink>
          ) : (
            <MutedBadge>Coming soon</MutedBadge>
          )}
          <p className="text-xs text-[var(--ink)] opacity-70">
            Works on phone and laptop &middot; free Google account &middot; instant access
          </p>
        </div>
      </div>
    </section>
  );
}
