import Link from 'next/link';
import type { CSSProperties } from 'react';
import type { Product } from '@/types/product';
import { formatPrice } from '@/lib/format';

// The 4+ product homepage: a responsive grid grouped by category. Each
// card carries only its own product's theme (via inline vars), so the
// page itself stays neutral and scales to any number of categories.
export function ShopGrid({ products }: { products: Product[] }) {
  const byCategory = new Map<string, Product[]>();
  for (const product of products) {
    const group = byCategory.get(product.category) ?? [];
    group.push(product);
    byCategory.set(product.category, group);
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-extrabold text-slate-900">Shop</h1>
      {[...byCategory.entries()].map(([category, items]) => (
        <section key={category} className="mt-10 first:mt-6">
          <h2 className="text-lg font-bold text-slate-900">{category}</h2>
          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((product) => {
              const isLive = product.status === 'live';
              const cardStyle = {
                '--ink': product.theme.ink,
                '--primary': product.theme.primary,
                '--pale': product.theme.pale,
                '--soft': product.theme.soft,
              } as CSSProperties;

              return (
                <Link
                  key={product.slug}
                  href={`/p/${product.slug}`}
                  style={cardStyle}
                  className="block rounded-2xl border border-black/5 bg-[var(--pale)] p-5 transition-colors duration-150 hover:border-[var(--primary)]"
                >
                  {product.audience && (
                    <span className="text-xs font-semibold uppercase tracking-wide text-[var(--ink)] opacity-60">
                      {product.audience}
                    </span>
                  )}
                  <h3 className="mt-1 text-lg font-bold text-[var(--ink)]">{product.name}</h3>
                  <p className="mt-1 text-sm text-[var(--ink)] opacity-80">
                    {product.shortDescription}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    {isLive ? (
                      <span className="font-semibold text-[var(--ink)]">
                        {formatPrice(product.pricing)}
                      </span>
                    ) : (
                      <span className="rounded-full bg-[var(--soft)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--ink)]">
                        Coming soon
                      </span>
                    )}
                    <span className="text-sm font-semibold text-[var(--primary)]">View →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}
