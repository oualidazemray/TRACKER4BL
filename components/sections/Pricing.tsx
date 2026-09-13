import type { Product } from '@/types/product';
import { CtaLink, MutedBadge } from '@/components/ui/Button';
import { formatMoney } from '@/lib/format';

export function Pricing({ product }: { product: Product }) {
  const { pricing } = product;
  const hasGuide = !!pricing.guidePrice && pricing.guidePrice > 0;

  return (
    <section className="bg-[var(--pale)] px-4 py-12">
      <div className="mx-auto max-w-sm">
        <div className="rounded-3xl bg-white p-6 text-center shadow-sm">
          <h2 className="text-lg font-bold text-[var(--ink)]">{product.name}</h2>

          <p className="mt-3 flex items-baseline justify-center gap-2">
            <span className="text-4xl font-extrabold text-[var(--ink)]">
              {formatMoney(pricing.price, pricing.currency)}
            </span>
            {pricing.compareAtPrice && (
              <span className="text-base font-medium text-[var(--ink)] opacity-50 line-through">
                {formatMoney(pricing.compareAtPrice, pricing.currency)}
              </span>
            )}
          </p>
          <p className="text-xs text-[var(--ink)] opacity-60">one-time payment</p>

          <ul className="mt-5 space-y-2 text-left text-sm text-[var(--ink)]">
            <li>✓ Full {product.format.replace('-', ' ')} tracker, instant access</li>
            <li>✓ Works on phone, tablet, and laptop</li>
            <li>✓ Yours to keep — no subscription</li>
          </ul>

          {hasGuide && (
            <p className="mt-4 rounded-xl bg-[var(--soft)] px-3 py-2 text-xs text-[var(--ink)]">
              Optional add-on: a step-by-step setup guide for{' '}
              {formatMoney(pricing.guidePrice as number, pricing.currency)} — never added
              automatically at checkout.
            </p>
          )}

          <div className="mt-6">
            {product.status === 'live' ? (
              <CtaLink href={pricing.checkoutUrl} className="w-full">
                Get {product.name} — {formatMoney(pricing.price, pricing.currency)}
              </CtaLink>
            ) : (
              <MutedBadge>Coming soon</MutedBadge>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
