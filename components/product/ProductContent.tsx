import type { Product } from '@/types/product';
import { Hero } from '@/components/sections/Hero';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { WhatsInside } from '@/components/sections/WhatsInside';
import { Screenshots } from '@/components/sections/Screenshots';
import { Pricing } from '@/components/sections/Pricing';
import { Faq } from '@/components/sections/Faq';

// The middle of the page — everything between the shared Header and
// Footer. Server component so Screenshots' build-time file check works
// even when this is precomputed for the homepage's client-side toggle.
export function ProductContent({ product }: { product: Product }) {
  return (
    <main>
      <Hero product={product} />
      <HowItWorks />
      <WhatsInside product={product} />
      <Screenshots product={product} />
      <Pricing product={product} />
      <Faq product={product} />
    </main>
  );
}
