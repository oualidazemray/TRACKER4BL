import Link from 'next/link';
import { brand, licenseNote, socialLinks } from '@/content/site';
import { visibleProducts, getCategories } from '@/content/products';

// Fixed neutral dark chrome — deliberately not themed to any one
// product's palette, since the homepage now shows several products
// (with different accent colors) on the same page.
export function Footer() {
  const categories = getCategories(visibleProducts);

  return (
    <footer className="bg-neutral-950 py-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="text-lg font-extrabold tracking-tight">{brand.name}</p>
          <p className="mt-3 max-w-sm text-sm text-white/60">{brand.shortDescription}</p>
          <p className="mt-6 text-xs text-white/40">{licenseNote}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/50">Shop</p>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>
              <Link href="/#shop" className="transition-colors hover:text-white">
                All products
              </Link>
            </li>
            {categories.map((category) => (
              <li key={category}>
                <Link href="/#shop" className="transition-colors hover:text-white">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/50">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>
              <a href={`mailto:${brand.contactEmail}`} className="transition-colors hover:text-white">
                {brand.contactEmail}
              </a>
            </li>
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a href={social.href} className="transition-colors hover:text-white">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-6xl px-4 text-xs text-white/40">{brand.copyrightLine}</p>
    </footer>
  );
}
