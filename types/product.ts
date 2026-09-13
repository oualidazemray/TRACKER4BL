// Single schema every product conforms to. No product-specific fields
// should ever be added to a component — if a component needs to know
// something about a product, it belongs here, as data.

export type ProductFormat = 'google-sheets' | 'excel' | 'pdf' | 'notion';
export type ProductStatus = 'live' | 'coming-soon' | 'hidden';

export type ThemeTokens = {
  ink: string;
  primary: string;
  secondary: string;
  light: string;
  pale: string;
  accent: string;
  soft: string;
  tint: string;
};

export type ProductStage = {
  image: string;
  label: string;
  percent: string;
};

export type ProductFeature = {
  title: string;
  body: string;
};

export type ProductScreenshot = {
  src: string;
  alt: string;
};

export type ProductFaqEntry = {
  q: string;
  a: string;
};

export type ProductPricing = {
  price: number;
  guidePrice?: number;
  compareAtPrice?: number;
  currency: string;
  checkoutUrl: string;
};

export type ProductHero = {
  headline: string;
  subhead: string;
};

export type ProductSeo = {
  title: string;
  description: string;
  ogImage: string;
};

export type Product = {
  slug: string;
  name: string;
  audience?: string;
  category: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;

  format: ProductFormat;
  status: ProductStatus;

  theme: ThemeTokens;

  pricing: ProductPricing;

  hero: ProductHero;

  // Optional: the growth-stage strip. Only some products have this.
  stages?: ProductStage[];

  features: ProductFeature[];
  screenshots: ProductScreenshot[];
  faq?: ProductFaqEntry[];

  seo: ProductSeo;
};
