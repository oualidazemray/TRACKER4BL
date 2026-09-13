import type { Metadata } from 'next';
import { allProducts } from '@/content/products';
import { brand } from '@/content/site';
import { DevThemeAudit } from '@/components/product/DevThemeAudit';
import './globals.css';

// Resolves OG/Twitter image URLs to an absolute origin with no manual
// config: Vercel sets VERCEL_URL automatically, and NEXT_PUBLIC_SITE_URL
// can override it once a custom domain is attached.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand.name} — Digital Planners & Trackers`,
    template: `%s | ${brand.name}`,
  },
  description:
    'Digital planners and trackers for Google Sheets. Tick a box, watch your progress grow.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        {children}
        <DevThemeAudit products={allProducts} />
      </body>
    </html>
  );
}
