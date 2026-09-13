import type { CSSProperties } from 'react';
import type { Product } from '@/types/product';
import { ProductPreview } from './ProductPreview';

// Brand-level hero — deliberately not about any one product. The collage
// reuses ProductPreview so the same visual language shows up here and in
// the shop grid below, tying the two together.
export function Hero({ products }: { products: Product[] }) {
  const collage = products.slice(0, 2);

  return (
    <section className="bg-neutral-50 px-4 pb-16 pt-14 sm:pb-24 sm:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center rounded-full bg-neutral-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neutral-600">
            Digital tools, made to open
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-5xl">
            Small tools. Big progress.
          </h1>

          <p className="mx-auto mt-5 max-w-md text-base text-neutral-600 sm:text-lg lg:mx-0">
            TRACKERS4BL makes small, beautifully designed digital tools — habit trackers,
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
              Why TRACKERS4BL →
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
      className="w-36 flex-shrink-0 rounded-2xl bg-white p-2.5 shadow-xl shadow-neutral-900/10 sm:w-40"
    >
      <ProductPreview previewType={product.previewType} />
      <p className="mt-2 truncate px-0.5 text-xs font-bold text-[var(--ink)]">{product.name}</p>
    </div>
  );
}

function ComingSoonCard() {
  return (
    <div className="hidden w-36 flex-shrink-0 self-center rounded-2xl border-2 border-dashed border-neutral-300 p-2.5 sm:w-40 md:block">
      <div className="flex aspect-[4/3] w-full items-center justify-center rounded-xl bg-neutral-100">
        <span className="text-2xl text-neutral-400" aria-hidden="true">
          +
        </span>
      </div>
      <p className="mt-2 truncate px-0.5 text-xs font-bold text-neutral-400">More soon</p>
    </div>
  );
}
