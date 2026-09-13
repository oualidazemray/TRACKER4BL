import Link from 'next/link';
import { visibleProducts, getCategories } from '@/content/products';
import { brand } from '@/content/site';

// Chrome for the trackers product line — shared by /trackers and every
// /trackers/p/[slug] page. Category-oriented on purpose — no per-product
// toggle here, since the line is meant to outgrow any two products. A
// future, differently-designed line (e.g. /0to1000) gets its own chrome
// rather than reusing this one.
export function Header() {
  const categories = getCategories(visibleProducts);

  return (
    <header className="sticky top-4 z-40 px-4">
      <div className="mx-auto flex max-w-2xl items-center justify-between gap-3 rounded-full border border-black/5 bg-white/70 py-2 pl-5 pr-2 shadow-sm shadow-neutral-900/5 backdrop-blur-xl">
        <Link href="/trackers" className="text-base font-extrabold tracking-tight text-neutral-900">
          {brand.name}
        </Link>

        <nav
          aria-label="Categories"
          className="hidden items-center gap-5 text-sm font-medium text-neutral-600 sm:flex"
        >
          {categories.map((category) => (
            <Link
              key={category}
              href="/trackers#shop"
              className="transition-colors hover:text-neutral-900"
            >
              {category}
            </Link>
          ))}
          <Link href="/trackers#about" className="transition-colors hover:text-neutral-900">
            About
          </Link>
        </nav>

        <Link
          href="/trackers#shop"
          className="inline-flex min-h-[36px] items-center justify-center rounded-full bg-neutral-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-neutral-700"
        >
          Shop
        </Link>
      </div>
    </header>
  );
}
