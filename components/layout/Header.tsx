import Link from 'next/link';
import { visibleProducts, getCategories } from '@/content/products';
import { brand } from '@/content/site';

// Site-level chrome shared by the homepage and every /p/[slug] page.
// Category-oriented on purpose — no per-product toggle here, since the
// brand is meant to outgrow any two products. Two fixed rows (identity +
// CTA, then nav) read the same way at every breakpoint, so there's no
// mobile/desktop layout to keep in sync.
export function Header() {
  const categories = getCategories(visibleProducts);

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-lg font-extrabold tracking-tight text-neutral-900">
            {brand.name}
          </Link>

          <Link
            href="/#shop"
            className="inline-flex min-h-[40px] items-center justify-center rounded-full bg-neutral-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-neutral-700"
          >
            Shop
          </Link>
        </div>

        <nav
          aria-label="Categories"
          className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm font-medium text-neutral-600"
        >
          {categories.map((category) => (
            <Link key={category} href="/#shop" className="transition-colors hover:text-neutral-900">
              {category}
            </Link>
          ))}
          <Link href="/#about" className="transition-colors hover:text-neutral-900">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
