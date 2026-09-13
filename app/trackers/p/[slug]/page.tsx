import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allProducts, getProductBySlug } from '@/content/products';
import { ThemeProvider } from '@/components/product/ThemeProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StickyBuyBar } from '@/components/layout/StickyBuyBar';
import { ProductContent } from '@/components/product/ProductContent';

type ProductPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allProducts.filter((p) => p.status !== 'hidden').map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: product.seo.title,
    description: product.seo.description,
    openGraph: {
      title: product.seo.title,
      description: product.seo.description,
      images: [{ url: product.seo.ogImage }],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product || product.status === 'hidden') notFound();

  return (
    <ThemeProvider product={product}>
      <Header />
      <ProductContent product={product} />
      <Footer />
      <StickyBuyBar product={product} />
    </ThemeProvider>
  );
}
