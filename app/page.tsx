import type { ReactNode } from 'react';
import { visibleProducts } from '@/content/products';
import { ProductSelector } from '@/components/product/ProductSelector';
import { ProductContent } from '@/components/product/ProductContent';

export default function HomePage() {
  const products = visibleProducts;

  // Only pre-render full product content for the 1-product and toggle
  // (2-3 product) branches — the 4+ grid branch never needs it.
  const renderedContent: Record<string, ReactNode> =
    products.length <= 3
      ? Object.fromEntries(products.map((p) => [p.slug, <ProductContent key={p.slug} product={p} />]))
      : {};

  return <ProductSelector products={products} renderedContent={renderedContent} />;
}
