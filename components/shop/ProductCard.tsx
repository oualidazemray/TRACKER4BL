import Link from 'next/link';
import type { CSSProperties } from 'react';
import type { Product } from '@/types/product';
import { ProductPreview } from './ProductPreview';
import { formatPrice } from '@/lib/format';

// Whole card links to the product's detail page (via the stretched-link
// trick on the title, so no invalid nested <a>), while the price CTA is
// its own real link straight to checkout — the pattern the brief asks
// for: "click through to purchase," with a normal page in between.
export function ProductCard({ product }: { product: Product }) {
  const isLive = product.status === 'live';
  const stage = product.stages?.[product.stages.length - 1];

  const cardStyle = {
    '--ink': product.theme.ink,
    '--primary': product.theme.primary,
    '--secondary': product.theme.secondary,
    '--light': product.theme.light,
    '--pale': product.theme.pale,
    '--accent': product.theme.accent,
    '--soft': product.theme.soft,
    '--tint': product.theme.tint,
  } as CSSProperties;

  return (
    <article
      style={cardStyle}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white p-4 transition-shadow duration-150 hover:shadow-lg hover:shadow-neutral-900/5"
    >
      {product.badge && (
        <span className="absolute left-6 top-6 z-10 rounded-full bg-[var(--soft)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--ink)]">
          {product.badge}
        </span>
      )}

      <ProductPreview
        previewType={product.previewType}
        coverImage={product.coverImage}
        coverAlt={`${product.name} cover`}
        stickerSrc={stage?.image}
        stickerAlt={stage ? `${product.name} at ${stage.label}` : undefined}
      />

      <div className="mt-4 flex flex-1 flex-col">
        {product.audience ? (
          <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
            {product.category} &middot; {product.audience}
          </span>
        ) : (
          <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
            {product.category}
          </span>
        )}

        <h3 className="mt-1 text-base font-bold text-neutral-900">
          <Link href={`/p/${product.slug}`} className="static after:absolute after:inset-0 after:content-['']">
            {product.name}
          </Link>
        </h3>

        <p className="mt-1 flex-1 text-sm text-neutral-600">{product.shortDescription}</p>

        <div className="mt-4 flex items-center justify-between gap-3">
          {isLive ? (
            <span className="font-semibold text-neutral-900">{formatPrice(product.pricing)}</span>
          ) : (
            <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Coming soon
            </span>
          )}

          {isLive && (
            <a
              href={product.pricing.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex min-h-[36px] items-center justify-center rounded-full bg-[var(--primary)] px-4 text-sm font-semibold text-white transition-opacity duration-150 hover:opacity-90"
            >
              Get it
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
