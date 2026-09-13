import type { Product, ThemeTokens } from '@/types/product';

// WCAG 2.x relative luminance + contrast ratio, used only to warn in dev
// when a product's theme tokens would fail AA — palettes are data, so a
// bad one from a future product should be caught here, not in production.

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace('#', '');
  const bigint = parseInt(clean.length === 3
    ? clean.split('').map((c) => c + c).join('')
    : clean, 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

function relativeLuminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex).map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function contrastRatio(hexA: string, hexB: string): number {
  const lA = relativeLuminance(hexA);
  const lB = relativeLuminance(hexB);
  const lighter = Math.max(lA, lB);
  const darker = Math.min(lA, lB);
  return (lighter + 0.05) / (darker + 0.05);
}

const AA_NORMAL_TEXT = 4.5;

type ContrastIssue = { pair: string; ratio: number; usage: string };

export function auditThemeContrast(theme: ThemeTokens): ContrastIssue[] {
  const issues: ContrastIssue[] = [];

  // White text is used on the primary CTA button background.
  const primaryRatio = contrastRatio('#FFFFFF', theme.primary);
  if (primaryRatio < AA_NORMAL_TEXT) {
    issues.push({ pair: 'white on primary', ratio: primaryRatio, usage: 'CTA button text' });
  }

  // Ink text is used on the lighter background tokens.
  for (const name of ['light', 'pale', 'accent', 'soft', 'tint'] as const) {
    const ratio = contrastRatio(theme.ink, theme[name]);
    if (ratio < AA_NORMAL_TEXT) {
      issues.push({ pair: `ink on ${name}`, ratio, usage: 'body text on section background' });
    }
  }

  return issues;
}

export function auditAllProductThemes(products: Product[]): void {
  for (const product of products) {
    const issues = auditThemeContrast(product.theme);
    for (const issue of issues) {
      console.warn(
        `[contrast] ${product.slug}: ${issue.pair} is ${issue.ratio.toFixed(2)}:1, ` +
          `below the 4.5:1 AA minimum (${issue.usage}). Adjust theme tokens in content/products/${product.slug}.ts.`,
      );
    }
  }
}
