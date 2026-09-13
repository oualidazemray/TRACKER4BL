import { visibleProducts } from '@/content/products';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/shop/Hero';
import { Shop } from '@/components/shop/Shop';
import { Benefits } from '@/components/shop/Benefits';

// The storefront homepage: a brand-level hero, the full product grid
// (filterable by category), and a trust section — scales to any number
// of products without a redesign, since Header/Shop/Benefits all derive
// their categories and cards from content/products at render time.
export default function HomePage() {
  const products = visibleProducts;

  return (
    <>
      <Header />
      <main>
        <Hero products={products} />
        <Shop products={products} />
        <Benefits />
      </main>
      <Footer />
    </>
  );
}
