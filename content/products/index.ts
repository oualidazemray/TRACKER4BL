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
