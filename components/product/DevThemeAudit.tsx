'use client';

import { useEffect } from 'react';
import type { Product } from '@/types/product';
import { auditAllProductThemes } from '@/lib/contrast';

// Dev-only: warns in the console if any product's theme tokens fail WCAG
// AA. Renders nothing. Since palettes are pure data, this is what catches
// a bad future product's colors instead of a manual review.
export function DevThemeAudit({ products }: { products: Product[] }) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') return;
    auditAllProductThemes(products);
  }, [products]);

  return null;
}
