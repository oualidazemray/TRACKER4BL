import Link from 'next/link';
import type { ReactNode } from 'react';

// Sticky and slim on mobile. `rightSlot` is only used by the homepage to
// host the product toggle — /p/[slug] pages render just the wordmark.
export function Header({ rightSlot }: { rightSlot?: ReactNode }) {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/"
          className="text-lg font-extrabold tracking-tight text-slate-900"
        >
          TRACKERS4BL
        </Link>
        {rightSlot}
      </div>
    </header>
  );
}
