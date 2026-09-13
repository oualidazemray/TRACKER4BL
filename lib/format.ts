import type { ProductPricing } from '@/types/product';

const formatters = new Map<string, Intl.NumberFormat>();

function getFormatter(currency: string): Intl.NumberFormat {
  let formatter = formatters.get(currency);
  if (!formatter) {
    formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
    formatters.set(currency, formatter);
  }
  return formatter;
}

export function formatMoney(amount: number, currency: string): string {
  return getFormatter(currency).format(amount);
}

export function formatPrice(pricing: ProductPricing): string {
  return formatMoney(pricing.price, pricing.currency);
}
