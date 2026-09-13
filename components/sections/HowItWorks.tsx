import { howItWorks } from '@/content/site';

export function HowItWorks() {
  return (
    <section className="bg-white px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-2xl font-bold text-slate-900">How it works</h2>
        <ol className="mt-8 grid gap-8 sm:grid-cols-3">
          {howItWorks.map((item) => (
            <li key={item.step} className="text-center">
              <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-bold text-white">
                {item.step}
              </span>
              <h3 className="mt-3 font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
