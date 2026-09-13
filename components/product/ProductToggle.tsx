'use client';

import type { KeyboardEvent } from 'react';
import type { Product } from '@/types/product';

type ProductToggleProps = {
  products: Product[];
  selectedSlug: string;
  onSelect: (slug: string) => void;
};

// Segmented control for the 2-3 product homepage. Implemented as a
// radiogroup (choose exactly one) with a roving tabindex so arrow keys
// move both focus and selection, matching native radio-button behavior.
export function ProductToggle({ products, selectedSlug, onSelect }: ProductToggleProps) {
  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    event.preventDefault();
    const delta = event.key === 'ArrowRight' ? 1 : -1;
    const nextIndex = (index + delta + products.length) % products.length;
    const next = products[nextIndex];
    onSelect(next.slug);
    (document.getElementById(`product-toggle-${next.slug}`) as HTMLButtonElement | null)?.focus();
  }

  return (
    <div
      role="radiogroup"
      aria-label="Choose a product"
      className="flex gap-1 rounded-full bg-slate-100 p-1"
    >
      {products.map((product, index) => {
        const isSelected = product.slug === selectedSlug;
        return (
          <button
            key={product.slug}
            id={`product-toggle-${product.slug}`}
            type="button"
            role="radio"
            aria-checked={isSelected}
            tabIndex={isSelected ? 0 : -1}
            onClick={() => onSelect(product.slug)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            className={`min-h-[36px] rounded-full px-4 text-sm font-semibold transition-colors duration-150 ${
              isSelected ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
            }`}
          >
            {product.name}
          </button>
        );
      })}
    </div>
  );
}
