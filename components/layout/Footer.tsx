import { brand, licenseNote } from '@/content/site';

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] py-10 text-white">
      <div className="mx-auto max-w-5xl px-4">
        <p className="text-lg font-extrabold tracking-tight">{brand.name}</p>
        <p className="mt-3 max-w-md text-sm text-white/70">{licenseNote}</p>
        <p className="mt-6 text-sm text-white/70">
          Questions?{' '}
          <a href={`mailto:${brand.contactEmail}`} className="underline underline-offset-2">
            {brand.contactEmail}
          </a>
        </p>
        <p className="mt-6 text-xs text-white/50">{brand.copyrightLine}</p>
      </div>
    </footer>
  );
}
