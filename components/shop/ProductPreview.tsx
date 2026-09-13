import Image from 'next/image';
import type { ProductPreviewType } from '@/types/product';

type ProductPreviewProps = {
  previewType?: ProductPreviewType;
  coverImage?: string;
  coverAlt?: string;
  stickerSrc?: string;
  stickerAlt?: string;
  className?: string;
  // Lets a caller (e.g. the hero collage, which wants a square) opt out
  // of the default aspect ratio instead of fighting it via `className` —
  // two aspect-* utilities in one class list is a specificity coin flip.
  aspectClassName?: string;
};

// When a product supplies a real cover image, it wins outright — no
// motif, no sticker. Otherwise every preview is pure CSS/SVG shapes
// composed from the product's own theme vars (set by whoever renders
// this — ProductCard, the hero collage — via inline `--primary` etc.).
// previewType is product data, so a future product without a cover
// photo just picks whichever motif fits its category — no new component.
export function ProductPreview({
  previewType = 'grid',
  coverImage,
  coverAlt,
  stickerSrc,
  stickerAlt,
  className = '',
  aspectClassName,
}: ProductPreviewProps) {
  const aspect = aspectClassName ?? (coverImage ? 'aspect-[29/36]' : 'aspect-[4/3]');
  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl bg-[var(--pale)] ${aspect} ${className}`}
    >
      {coverImage ? (
        <Image
          src={coverImage}
          alt={coverAlt ?? ''}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover"
        />
      ) : (
        <>
          {previewType === 'organic' && <OrganicMotif />}
          {previewType === 'blaze' && <BlazeMotif />}
          {previewType === 'grid' && <GridMotif />}
          {previewType === 'chart' && <ChartMotif />}

          {stickerSrc && (
            <div className="absolute bottom-2 right-2 h-9 w-9 drop-shadow-sm sm:h-11 sm:w-11">
              <Image src={stickerSrc} alt={stickerAlt ?? ''} fill sizes="44px" className="object-contain" />
            </div>
          )}
        </>
      )}
    </div>
  );
}

// Soft, floral, growth-inspired: overlapping blurred blobs over a faint
// dot grid — a habit tracker's underlying grid, softened.
function OrganicMotif() {
  return (
    <>
      <DotGrid />
      <div className="absolute -left-4 top-4 h-24 w-24 rounded-full bg-[var(--light)] opacity-60 blur-xl" />
      <div className="absolute right-2 top-8 h-16 w-16 rounded-full bg-[var(--accent)] opacity-70 blur-lg" />
      <div className="absolute bottom-2 left-8 h-20 w-20 rounded-full bg-[var(--secondary)] opacity-50 blur-xl" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-10 w-10 rounded-full bg-[var(--primary)] opacity-90" />
      </div>
    </>
  );
}

// Bold, fire-inspired: angular clipped shapes stacked like rising flames.
function BlazeMotif() {
  return (
    <>
      <DotGrid />
      <div className="absolute inset-x-0 bottom-0 flex h-3/4 items-end justify-center gap-2 px-10">
        <div
          className="h-2/3 w-8 bg-[var(--light)] opacity-70 [clip-path:polygon(50%_0%,100%_100%,0%_100%)]"
        />
        <div
          className="h-full w-10 bg-[var(--primary)] [clip-path:polygon(50%_0%,100%_60%,80%_100%,20%_100%,0%_60%)]"
        />
        <div
          className="h-4/5 w-8 bg-[var(--accent)] opacity-80 [clip-path:polygon(50%_0%,100%_100%,0%_100%)]"
        />
      </div>
    </>
  );
}

// Generic template/spreadsheet motif: a stylized mini-grid with a
// colored header row — reads as "digital template" without pretending
// to be a real screenshot.
function GridMotif() {
  const cells = Array.from({ length: 12 });
  return (
    <div className="absolute inset-4 flex flex-col gap-1.5">
      <div className="h-4 w-full rounded-sm bg-[var(--primary)]" />
      <div className="grid flex-1 grid-cols-4 gap-1.5">
        {cells.map((_, i) => (
          <div
            key={i}
            className={`rounded-sm ${i % 3 === 0 ? 'bg-[var(--soft)]' : 'bg-white'}`}
          />
        ))}
      </div>
    </div>
  );
}

// Generic progress/budget motif: an abstract bar chart with a trend line.
function ChartMotif() {
  const bars = [40, 65, 50, 85, 70];
  return (
    <div className="absolute inset-4">
      <svg viewBox="0 0 100 40" className="absolute inset-0 h-full w-full overflow-visible">
        <polyline
          points="4,32 24,22 44,26 64,10 84,14"
          fill="none"
          stroke="var(--ink)"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="84" cy="14" r="2.2" fill="var(--primary)" />
      </svg>
      <div className="absolute inset-x-0 bottom-0 flex h-full items-end gap-2">
        {bars.map((height, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm bg-[var(--secondary)] opacity-80"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  );
}

// Faint texture shared by the organic/blaze motifs — hints at the
// underlying tracker grid without competing with the main shape.
function DotGrid() {
  return (
    <div
      className="absolute inset-0 opacity-[0.15]"
      style={{
        backgroundImage: 'radial-gradient(var(--ink) 1px, transparent 1px)',
        backgroundSize: '14px 14px',
      }}
    />
  );
}
