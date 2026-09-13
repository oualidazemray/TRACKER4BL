import type { Product } from '@/types/product';
import { sharedFaq } from '@/content/site';
import { Accordion } from '@/components/ui/Accordion';

export function Faq({ product }: { product: Product }) {
  const items = [...sharedFaq, ...(product.faq ?? [])];

  return (
    <section className="bg-white px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center text-2xl font-bold text-slate-900">FAQ</h2>
        <div className="mt-8">
          <Accordion items={items} />
        </div>
      </div>
    </section>
  );
}
