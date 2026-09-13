'use client';

import { useEffect, useState } from 'react';
import type { Product } from '@/types/product';
import { CtaLink } from '@/components/ui/Button';
import { formatPrice } from '@/lib/format';

// Appears once the hero's own CTA has scrolled out of view, via an
// IntersectionObserver on that CTA's DOM node (id="hero-cta").
export function StickyBuyBar({ product }: { product: Product }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroCta = document.getElementById('hero-cta');
    if (!heroCta) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: '0px' },
    );
    observer.observe(heroCta);
    return () => observer.disconnect();
  }, [product.slug]);

  if (product.status !== 'live') return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white/95 backdrop-blur transition-transform duration-200 sm:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!visible}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-slate-900">{product.name}</p>
          <p className="text-xs text-slate-500">{formatPrice(product.pricing)}</p>
        </div>
        <CtaLink href={product.pricing.checkoutUrl} tabIndex={visible ? 0 : -1}>
          Get {product.name}
        </CtaLink>
      </div>
    </div>
  );
}
