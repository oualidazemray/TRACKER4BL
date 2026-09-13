import type { CSSProperties } from 'react';
import type { Product } from '@/types/product';
import { brand } from '@/content/site';
import { ProductPreview } from './ProductPreview';

// Brand-level hero — deliberately not about any one product. The collage
// reuses ProductPreview so the same visual language shows up here and in
// the shop grid below, tying the two together.
export function Hero({ products }: { products: Product[] }) {
  const collage = products.slice(0, 2);

  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-14 sm:pb-24 sm:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] overflow-hidden"
      >
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-violet-300 opacity-40 blur-[90px]" />
        <div className="absolute left-1/4 top-10 h-64 w-64 rounded-full bg-sky-300 opacity-40 blur-[90px]" />
        <div className="absolute right-1/4 top-0 h-72 w-72 rounded-full bg-pink-300 opacity-30 blur-[100px]" />
        <div className="absolute -right-16 top-24 h-64 w-64 rounded-full bg-orange-200 opacity-40 blur-[90px]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-neutral-600 shadow-sm">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
            Digital tools, made to open
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-5xl">
            Small tools. <em className="font-serif font-medium italic">Big</em> progress.
          </h1>

          <p className="mx-auto mt-5 max-w-md text-base text-neutral-600 sm:text-lg lg:mx-0">
            {brand.name} makes small, beautifully designed digital tools — habit trackers,
            planners, and more — built right into Google Sheets, so a little daily effort
            turns into something you can actually see.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#shop"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-neutral-900 px-7 text-base font-semibold text-white transition-colors duration-150 hover:bg-neutral-700"
            >
              Explore products
            </a>
            <a
              href="#about"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full px-7 text-base font-semibold text-neutral-700 transition-colors duration-150 hover:text-neutral-900"
            >
              Why {brand.name} →
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative flex flex-col gap-6 sm:flex-row sm:justify-center lg:justify-end">
            {collage.map((product, i) => (
              <CollageCard key={product.slug} product={product} tilt={i % 2 === 0 ? -3 : 3} />
            ))}
            <ComingSoonCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function CollageCard({ product, tilt }: { product: Product; tilt: number }) {
  const style = {
    '--ink': product.theme.ink,
    '--primary': product.theme.primary,
    '--secondary': product.theme.secondary,
    '--light': product.theme.light,
    '--pale': product.theme.pale,
    '--accent': product.theme.accent,
    '--soft': product.theme.soft,
    '--tint': product.theme.tint,
    transform: `rotate(${tilt}deg)`,
  } as CSSProperties;

  return (
    <div
      style={style}
      className="w-40 flex-shrink-0 overflow-hidden rounded-2xl bg-white shadow-xl shadow-neutral-900/10 sm:w-44"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-[var(--pale)]">
        <ProductPreview previewType={product.previewType} aspectClassName="aspect-square" />
        <p className="absolute inset-x-0 bottom-0 px-3 pb-2 text-xs font-extrabold uppercase tracking-wide text-[var(--ink)]">
          {product.name}
        </p>
      </div>
      <div className="p-2.5">
        <MiniDashboard />
      </div>
    </div>
  );
}

// A tiny, generic "app window" mockup — window dots, a donut, and a few
// bars — themed via the same CSS vars ProductPreview uses. Purely
// decorative texture for the hero collage, not a real product screenshot.
function MiniDashboard() {
  return (
    <div className="rounded-lg bg-[var(--tint)] p-2">
      <div className="flex items-center gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--soft)]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--soft)]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--soft)]" />
      </div>
      <div className="mt-2 flex items-end gap-2">
        <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0">
          <circle cx="16" cy="16" r="13" fill="none" stroke="var(--soft)" strokeWidth="6" />
          <circle
            cx="16"
            cy="16"
            r="13"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="6"
            strokeDasharray="53 82"
            strokeLinecap="round"
            transform="rotate(-90 16 16)"
          />
        </svg>
        <div className="flex h-8 flex-1 items-end gap-1">
          {[40, 70, 55, 90].map((height, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-[var(--secondary)] opacity-80"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ComingSoonCard() {
  return (
    <div className="hidden w-40 flex-shrink-0 self-center overflow-hidden rounded-2xl border-2 border-dashed border-neutral-300 sm:w-44 md:block">
      <div className="flex aspect-square w-full items-center justify-center bg-neutral-50">
        <span className="text-2xl text-neutral-400" aria-hidden="true">
          +
        </span>
      </div>
      <div className="p-2.5">
        <p className="truncate px-0.5 text-xs font-bold text-neutral-400">More soon</p>
      </div>
    </div>
  );
}
