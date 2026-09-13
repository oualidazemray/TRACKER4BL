export type AccordionItem = {
  q: string;
  a: string;
};

// Native <details>/<summary> — keyboard operable and screen-reader
// friendly with zero JS, so there's no open/close state to manage.
export function Accordion({ items }: { items: AccordionItem[] }) {
  return (
    <div className="divide-y divide-[var(--soft)]">
      {items.map((item) => (
        <details key={item.q} className="group py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-1 text-left font-semibold text-[var(--ink)] marker:content-none">
            <span>{item.q}</span>
          </summary>
          <p className="mt-3 text-[var(--ink)] opacity-80">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
