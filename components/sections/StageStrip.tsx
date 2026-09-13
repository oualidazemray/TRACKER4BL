import Image from 'next/image';
import type { Product } from '@/types/product';

// The growth-stage visual. Returns null when a product has no stages
// (not every future product will have this) so Hero never has to check.
export function StageStrip({ product }: { product: Product }) {
  if (!product.stages || product.stages.length === 0) return null;

  return (
    <ol className="mx-auto grid max-w-md grid-cols-5 gap-2 sm:max-w-lg sm:gap-3">
      {product.stages.map((stage, i) => (
        <li key={stage.percent} className="flex flex-col items-center gap-1.5 text-center">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[var(--pale)]">
            <Image
              src={stage.image}
              alt={`${product.name} at ${stage.percent} complete: ${stage.label}`}
              fill
              sizes="(min-width: 640px) 15vw, 18vw"
              className="object-contain p-1.5"
              priority={i === product.stages!.length - 1}
            />
          </div>
          <span className="text-[11px] font-medium leading-tight text-[var(--ink)] opacity-80 sm:text-xs">
            {stage.label}
          </span>
        </li>
      ))}
    </ol>
  );
}
