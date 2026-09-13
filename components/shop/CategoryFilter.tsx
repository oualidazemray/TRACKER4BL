'use client';

export const ALL_CATEGORY = 'All products';

type CategoryFilterProps = {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
};

// Plain tablist over React state + local product data — no routing, no
// overcomplication. Options are ALL_CATEGORY plus whatever categories
// actually exist in the current product list.
export function CategoryFilter({ categories, selected, onSelect }: CategoryFilterProps) {
  const options = [ALL_CATEGORY, ...categories];

  return (
    <div role="tablist" aria-label="Filter by category" className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isSelected = option === selected;
        return (
          <button
            key={option}
            type="button"
            role="tab"
            aria-selected={isSelected}
            onClick={() => onSelect(option)}
            className={`min-h-[36px] rounded-full px-4 text-sm font-semibold transition-colors duration-150 ${
              isSelected
                ? 'bg-neutral-900 text-white'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
