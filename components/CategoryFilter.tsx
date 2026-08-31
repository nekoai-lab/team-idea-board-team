import type { Category, CategoryFilterValue } from "@/types/idea";

type CategoryFilterProps = {
  categories: readonly Category[];
  activeCategory: CategoryFilterValue;
  onChange: (category: CategoryFilterValue) => void;
};

export function CategoryFilter({
  categories,
  activeCategory,
  onChange,
}: CategoryFilterProps) {
  const options: CategoryFilterValue[] = ["すべて", ...categories];
  void onChange;

  return (
    <div className="filter-row" aria-label="カテゴリで絞り込む">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={option === activeCategory ? "filter-button is-active" : "filter-button"}
          aria-pressed={option === activeCategory}
          disabled={option !== "すべて"}
        >
          {option}
        </button>
      ))}
      <span className="pending-hint">Ticket Bで有効になります</span>
    </div>
  );
}
