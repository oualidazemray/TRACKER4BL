import type { Product } from '@/types/product';
import { CtaLink, MutedBadge } from '@/components/ui/Button';
import { formatPrice } from '@/lib/format';

export function WhatsInside({ product }: { product: Product }) {
  return (
    <section className="bg-[var(--pale)] px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-2xl font-bold text-[var(--ink)]">What&apos;s inside</h2>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2">
          {product.features.map((feature, i) => (
            <li
              key={feature.title}
              className="rounded-2xl bg-white p-5 shadow-sm shadow-black/5 ring-1 ring-black/5 transition-shadow duration-150 hover:shadow-md"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] text-xs font-bold text-white">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-semibold text-[var(--ink)]">{feature.title}</h3>
              <p className="mt-1.5 text-sm text-[var(--ink)] opacity-80">{feature.body}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex justify-center">
          {product.status === 'live' ? (
            <CtaLink href={product.pricing.checkoutUrl}>
              Get {product.name} — {formatPrice(product.pricing)}
            </CtaLink>
          ) : (
            <MutedBadge>Coming soon</MutedBadge>
          )}
        </div>
      </div>
    </section>
  );
}
