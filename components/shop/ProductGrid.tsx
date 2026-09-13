import type { Product } from '@/types/product';
import { ProductCard } from './ProductCard';

// Flex-wrap rather than a fixed grid: with only 1-2 products (today) the
// row centers instead of leaving a lopsided gap next to unused grid
// tracks, and it still settles into clean 2/3/4-per-row columns once
// there are enough products to fill them.
export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <p className="py-16 text-center text-sm text-neutral-500">
        No products in this category yet — check back soon.
      </p>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {products.map((product) => (
        <div
          key={product.slug}
          className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)]"
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
