import type { Product } from '@/types/product';
import { bloom } from './bloom';
import { forge } from './forge';

// Adding a product = add its import + one line here. Nothing else.
export const allProducts: Product[] = [bloom, forge];

export const visibleProducts = allProducts.filter((p) => p.status !== 'hidden');
export const liveProducts = allProducts.filter((p) => p.status === 'live');

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

// De-duplicated, first-seen-order category list. The shop's category
// filter and the header nav both read from this, so a new product in a
// new category shows up in both automatically — no hardcoded list to
// update.
export function getCategories(products: Product[]): string[] {
  return [...new Set(products.map((p) => p.category))];
}
