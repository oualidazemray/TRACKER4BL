import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';
import type { Product } from '@/types/product';

// Server component: checks at build time whether a real screenshot file
// has been dropped in public/. Until then it renders a labelled
// placeholder, so adding a real screenshot later is just adding the file
// at the path already in the product's data — no component change.
function screenshotExists(src: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), 'public', src));
  } catch {
    return false;
  }
}

export function Screenshots({ product }: { product: Product }) {
  if (!product.screenshots || product.screenshots.length === 0) return null;

  return (
    <section className="bg-white px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-2xl font-bold text-slate-900">See it</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {product.screenshots.map((shot) => {
            const hasRealImage = screenshotExists(shot.src);
            return (
              <div
                key={shot.src}
                className="overflow-hidden rounded-2xl border-[6px] border-slate-900 bg-slate-900"
              >
                <div className="relative aspect-[9/16] w-full bg-[var(--pale)]">
                  {hasRealImage ? (
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes="(min-width: 640px) 30vw, 80vw"
                      className="object-cover"
                    />
                  ) : (
                    // TODO: replace with real screenshot at public/{shot.src}
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center">
                      <span className="text-3xl" aria-hidden="true">
                        🖼️
                      </span>
                      <p className="text-xs font-medium text-[var(--ink)] opacity-70">
                        {shot.alt}
                      </p>
                      <p className="text-[10px] uppercase tracking-wide text-[var(--ink)] opacity-50">
                        TODO: replace with real screenshot
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
