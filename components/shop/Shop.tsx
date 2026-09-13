'use client';

import { useMemo, useState } from 'react';
import type { Product } from '@/types/product';
import { getCategories } from '@/content/products';
import { CategoryFilter, ALL_CATEGORY } from './CategoryFilter';
import { ProductGrid } from './ProductGrid';

// The product showcase section: heading + category filter + grid, all
// driven by local product data and React state — no routing, no cart.
export function Shop({ products }: { products: Product[] }) {
  const categories = useMemo(() => getCategories(products), [products]);
  const [selected, setSelected] = useState<string>(ALL_CATEGORY);

  const filtered =
    selected === ALL_CATEGORY ? products : products.filter((p) => p.category === selected);

  return (
    <section id="shop" className="scroll-mt-20 bg-white px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl">
            Shop all products
          </h2>

          <CategoryFilter categories={categories} selected={selected} onSelect={setSelected} />
        </div>

        <div className="mt-10">
          <ProductGrid products={filtered} />
        </div>
      </div>
    </section>
  );
}
