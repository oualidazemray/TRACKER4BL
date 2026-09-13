'use client';

import { createContext, useContext, type CSSProperties, type ReactNode } from 'react';
import type { Product } from '@/types/product';

const ProductContext = createContext<Product | null>(null);

export function useProduct(): Product {
  const product = useContext(ProductContext);
  if (!product) {
    throw new Error('useProduct must be used within a <ThemeProvider>');
  }
  return product;
}

type ThemeProviderProps = {
  product: Product;
  children: ReactNode;
  className?: string;
};

// Writes a product's palette as CSS custom properties so every component
// stays theme-agnostic (bg-[var(--primary)], text-[var(--ink)], ...). A
// new product's colors work everywhere with zero component changes.
export function ThemeProvider({ product, children, className }: ThemeProviderProps) {
  const style = {
    '--ink': product.theme.ink,
    '--primary': product.theme.primary,
    '--secondary': product.theme.secondary,
    '--light': product.theme.light,
    '--pale': product.theme.pale,
    '--accent': product.theme.accent,
    '--soft': product.theme.soft,
    '--tint': product.theme.tint,
  } as CSSProperties;

  return (
    <ProductContext.Provider value={product}>
      <div style={style} className={className}>
        {children}
      </div>
    </ProductContext.Provider>
  );
}
