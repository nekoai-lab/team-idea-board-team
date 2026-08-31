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
  void categories;
  void activeCategory;
  void onChange;
  return null;
}
