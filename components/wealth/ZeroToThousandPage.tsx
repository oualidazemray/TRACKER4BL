import Image from 'next/image';
import { zeroToThousand as g } from '@/content/zeroToThousand';
import { formatMoney } from '@/lib/format';
import { brand } from '@/content/site';

// Standalone landing page for the $0→$1000 guide. Deliberately its own
// visual system (navy + gold, dark by default) rather than the trackers'
// light pastel theme — a second product line with nothing in common
// design-wise, sharing only the parent brand's footer credit.
export function ZeroToThousandPage() {
  return (
    <div className="bg-[#0E1424] text-white">
      <Hero />
      <WhoAndWhat />
      <Roadmap />
      <InsideLook />
      <Pricing />
      <Faq />
      <FinalCta />
      <MiniFooter />
    </div>
  );
}

function GoldButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#C9974A] px-8 text-base font-bold text-[#151A30] shadow-[0_8px_30px_rgba(201,151,74,0.35)] transition-transform duration-150 hover:scale-[1.03]"
    >
      {children}
    </a>
  );
}

function CornerFrame() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 560"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
      preserveAspectRatio="none"
    >
      <path d="M20 90 L20 20 L90 20" stroke="#C9974A" strokeWidth="1.5" fill="none" />
      <path d="M310 20 L380 20 L380 90" stroke="#C9974A" strokeWidth="1.5" fill="none" />
      <path d="M20 470 L20 540 L90 540" stroke="#C9974A" strokeWidth="1.5" fill="none" />
      <path d="M380 470 L380 540 L310 540" stroke="#C9974A" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-16 sm:pb-28 sm:pt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#C9974A] opacity-[0.14] blur-[120px]"
      />

      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C9974A]/40 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C9974A]">
            The 9-Step Playbook
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            $0 to <span className="text-[#C9974A]">$1,000</span>
            <br />
            in a Month
          </h1>

          <p className="mx-auto mt-5 max-w-md text-base text-white/70 sm:text-lg lg:mx-0">
            {g.subtitle}
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <GoldButton href={g.checkoutUrl}>
              Get the Playbook — {formatMoney(g.price, g.currency)}
            </GoldButton>
            <a
              href="#roadmap"
              className="text-sm font-semibold text-white/70 underline-offset-4 hover:text-white hover:underline"
            >
              See the 9 steps ↓
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-wide text-white/50 lg:justify-start">
            <li>Under $1 to launch</li>
            <li>No coding needed</li>
            <li>Instant PDF download</li>
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[280px]">
          <div className="relative aspect-[1375/2035] w-full">
            <CornerFrame />
            <div className="absolute inset-3 overflow-hidden rounded-lg shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
              <Image
                src={g.coverImage}
                alt="$0 to $1,000 in a Month — ebook cover"
                fill
                sizes="(min-width: 1024px) 280px, 60vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoAndWhat() {
  return (
    <section className="bg-[#F7F3EA] px-4 py-16 text-[#151A30] sm:py-20">
      <div className="mx-auto grid max-w-5xl gap-12 sm:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9974A]">Who This Is For</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
            No experience required
          </h2>
          <ul className="mt-6 space-y-4">
            {g.audience.map((line) => (
              <BulletItem key={line}>{line}</BulletItem>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9974A]">
            What You&rsquo;ll Walk Away With
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
            A real product, live and selling
          </h2>
          <ul className="mt-6 space-y-4">
            {g.outcomes.map((line) => (
              <BulletItem key={line}>{line}</BulletItem>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm text-[#151A30]/80 sm:text-base">
      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#151A30] text-[10px] font-bold text-[#C9974A]">
        ✓
      </span>
      {children}
    </li>
  );
}

function Roadmap() {
  return (
    <section id="roadmap" className="scroll-mt-16 bg-[#0E1424] px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9974A]">
            The Whole Process
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
            Nine steps. No step skipped.
          </h2>
        </div>

        <ol className="mt-12 space-y-0">
          {g.steps.map((step, i) => (
            <li key={step.title} className="relative flex gap-5 pb-10 last:pb-0">
              {i < g.steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-[15px] top-8 h-full w-px bg-[#C9974A]/30"
                />
              )}
              <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C9974A] text-sm font-bold text-[#151A30]">
                {i + 1}
              </span>
              <div>
                <h3 className="font-bold text-white">{step.title}</h3>
                <p className="mt-1 text-sm text-white/60">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function InsideLook() {
  return (
    <section className="bg-[#F7F3EA] px-4 py-16 text-[#151A30] sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9974A]">
            Inside the Guide
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
            Every step, laid out for you
          </h2>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <PreviewFrame src="/0to1000/roadmap.png" alt="One page roadmap of all 9 steps" tilt={-2} />
          <PreviewFrame
            src="/0to1000/step-preview.png"
            alt="Step 2: structure it with AI, with a copy-paste prompt"
            tilt={2}
          />
        </div>
      </div>
    </section>
  );
}

function PreviewFrame({ src, alt, tilt }: { src: string; alt: string; tilt: number }) {
  return (
    <div
      style={{ transform: `rotate(${tilt}deg)` }}
      className="mx-auto w-full max-w-[260px] overflow-hidden rounded-xl bg-white shadow-xl shadow-black/10 ring-1 ring-black/5"
    >
      <div className="relative aspect-[1375/2035] w-full">
        <Image src={src} alt={alt} fill sizes="260px" className="object-cover" />
      </div>
    </div>
  );
}

function Pricing() {
  return (
    <section className="bg-[#0E1424] px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-lg rounded-3xl border border-[#C9974A]/30 bg-gradient-to-b from-white/[0.06] to-transparent p-8 text-center shadow-[0_30px_80px_rgba(0,0,0,0.4)] sm:p-12">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9974A]">
          One-Time Payment
        </p>
        <p className="mt-4 text-5xl font-extrabold tracking-tight">
          {formatMoney(g.price, g.currency)}
        </p>
        <p className="mt-2 text-sm text-white/60">Instant PDF download. No subscription.</p>

        <div className="mt-8 flex justify-center">
          <GoldButton href={g.checkoutUrl}>Get the Playbook</GoldButton>
        </div>

        <ul className="mt-8 space-y-2 text-sm text-white/60">
          <li>17-page step-by-step guide, PDF</li>
          <li>Copy-paste AI prompts for every step</li>
          <li>50 ready-made ebook ideas included</li>
        </ul>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="bg-[#F7F3EA] px-4 py-16 text-[#151A30] sm:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center text-2xl font-extrabold tracking-tight sm:text-3xl">
          Questions, answered
        </h2>

        <dl className="mt-10 space-y-8">
          {g.faq.map((item) => (
            <div key={item.q}>
              <dt className="font-bold">{item.q}</dt>
              <dd className="mt-1.5 text-sm text-[#151A30]/70">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-[#0E1424] px-4 py-16 text-center sm:py-24">
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
        Turn the page. <span className="text-[#C9974A]">Build it.</span>
      </h2>
      <p className="mx-auto mt-3 max-w-md text-white/60">
        Nine steps, start to finish. Total cost to go live: about $1.
      </p>
      <div className="mt-8 flex justify-center">
        <GoldButton href={g.checkoutUrl}>
          Get the Playbook — {formatMoney(g.price, g.currency)}
        </GoldButton>
      </div>
    </section>
  );
}

function MiniFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0E1424] px-4 py-8 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-white/40">{brand.name}</p>
      <p className="mt-2 text-xs text-white/30">{brand.copyrightLine}</p>
    </footer>
  );
}
