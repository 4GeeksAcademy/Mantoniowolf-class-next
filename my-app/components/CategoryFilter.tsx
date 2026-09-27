import type { Category } from "@/types/listing";
import { CategoryIcon } from "@/components/icons";

type CategoryFilterProps = {
  categories: Category[];
  activeKey: string;
  onSelect: (key: string) => void;
};

export default function CategoryFilter({
  categories,
  activeKey,
  onSelect,
}: CategoryFilterProps) {
  return (
    <nav aria-label="Filtrar por categoría" className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="scrollbar-hide flex items-center gap-1 overflow-x-auto py-1.5 md:justify-center">
          {categories.map((category) => {
            const active = category.key === activeKey;
            return (
              <button
                key={category.key}
                type="button"
                aria-pressed={active}
                onClick={() => onSelect(category.key)}
                className={`group flex shrink-0 flex-col items-center gap-1 rounded-2xl px-3 py-2.5 text-[11px] font-medium transition ${
                  active
                    ? "bg-neutral-100 text-neutral-900"
                    : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900"
                }`}
              >
                <CategoryIcon
                  name={category.icon}
                  className={`h-5 w-5 transition ${
                    active ? "text-neutral-900" : "text-neutral-400 group-hover:text-neutral-700"
                  }`}
                />
                <span className={active ? "border-b-2 border-neutral-900 pb-0.5" : "pb-1"}>
                  {category.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}