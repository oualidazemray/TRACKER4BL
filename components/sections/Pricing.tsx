import type { Product } from '@/types/product';
import { CtaLink, MutedBadge } from '@/components/ui/Button';
import { formatMoney } from '@/lib/format';

export function Pricing({ product }: { product: Product }) {
  const { pricing } = product;
  const hasGuide = !!pricing.guidePrice && pricing.guidePrice > 0;

  return (
    <section className="bg-gradient-to-b from-[var(--pale)] to-white px-4 py-12">
      <div className="mx-auto max-w-sm">
        <div className="overflow-hidden rounded-3xl bg-white text-center shadow-xl shadow-black/5 ring-1 ring-black/5">
          <div className="h-2 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]" />
          <div className="p-6">
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

            <ul className="mt-5 space-y-2.5 text-left text-sm text-[var(--ink)]">
              {[
                `Full ${product.format.replace('-', ' ')} tracker, instant access`,
                'Works on phone, tablet, and laptop',
                'Yours to keep — no subscription',
              ].map((line) => (
                <li key={line} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--soft)] text-[11px] font-bold text-[var(--primary)]">
                    ✓
                  </span>
                  {line}
                </li>
              ))}
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
      </div>
    </section>
  );
}
