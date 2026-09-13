'use client';

import { useEffect, useState, type ReactNode } from 'react';
import type { Product } from '@/types/product';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StickyBuyBar } from '@/components/layout/StickyBuyBar';
import { ThemeProvider } from '@/components/product/ThemeProvider';
import { ProductToggle } from '@/components/product/ProductToggle';
import { ShopGrid } from '@/components/product/ShopGrid';

const STORAGE_KEY = 'trackers4bl:selected-product';

type ProductSelectorProps = {
  products: Product[];
  // Server-rendered <ProductContent /> for each product, keyed by slug.
  // Only populated (by the caller) when products.length <= 3 — the grid
  // branch never needs a full page render for every product up front.
  renderedContent: Record<string, ReactNode>;
};

// The homepage's single branch point: 1 product goes straight to its
// content, 2-3 get a re-themeable toggle, 4+ become a category grid.
// Adding products later just means the count crosses these thresholds —
// no rewrite, because all three branches already exist.
export function ProductSelector({ products, renderedContent }: ProductSelectorProps) {
  const [selectedSlug, setSelectedSlug] = useState(products[0]?.slug);

  useEffect(() => {
    if (products.length < 2) return;
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved && products.some((p) => p.slug === saved)) {
        setSelectedSlug(saved);
      }
    } catch {
      // localStorage unavailable (private mode, etc.) — fall back silently.
    }
  }, [products]);

  function selectProduct(slug: string) {
    setSelectedSlug(slug);
    try {
      window.localStorage.setItem(STORAGE_KEY, slug);
    } catch {
      // ignore write failures
    }
  }

  if (products.length === 0) return null;

  if (products.length >= 4) {
    return (
      <>
        <Header />
        <ShopGrid products={products} />
        <Footer />
      </>
    );
  }

  const selected = products.find((p) => p.slug === selectedSlug) ?? products[0];
  const toggle =
    products.length >= 2 ? (
      <ProductToggle products={products} selectedSlug={selected.slug} onSelect={selectProduct} />
    ) : undefined;

  return (
    <ThemeProvider product={selected}>
      <Header rightSlot={toggle} />
      {renderedContent[selected.slug]}
      <Footer />
      <StickyBuyBar product={selected} />
    </ThemeProvider>
  );
}
