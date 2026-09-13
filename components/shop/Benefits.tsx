const benefits = [
  {
    title: 'Instant delivery',
    body: 'No waiting, no shipping — get access the moment you check out.',
    icon: BoltIcon,
  },
  {
    title: 'No app installs',
    body: 'Everything runs in Google Sheets, in a tool you already have open.',
    icon: SheetIcon,
  },
  {
    title: 'One-time purchase',
    body: 'Pay once, keep it forever — no subscriptions, no renewals.',
    icon: TagIcon,
  },
  {
    title: 'Built for every day',
    body: "Small, visual check-ins designed to fit into a day you're already living.",
    icon: SparkIcon,
  },
];

// Doubles as the header's "About" anchor — a one-line brand statement
// plus the trust points that back it up, kept to one compact section.
export function Benefits() {
  return (
    <section id="about" className="scroll-mt-20 bg-neutral-50 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl">
            Why TRACKERS4BL
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            We build small, beautifully designed tools you actually enjoy opening — download
            once, and it&apos;s yours to use for good.
          </p>
        </div>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ title, body, icon: Icon }) => (
            <li key={title} className="text-center sm:text-left">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-white">
                <Icon />
              </span>
              <h3 className="mt-3 font-semibold text-neutral-900">{title}</h3>
              <p className="mt-1 text-sm text-neutral-600">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function SheetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 9h16M9 9v12" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="m12 3 8 8-9 9-8-8V4a1 1 0 0 1 1-1h8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="8" r="1.3" fill="currentColor" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
