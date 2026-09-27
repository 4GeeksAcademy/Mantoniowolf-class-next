import type { SortOrder } from "@/types/listing";
import { ChevronDownIcon } from "@/components/icons";

type ResultHeaderProps = {
  count: number;
  sort: SortOrder;
  onSortChange: (sort: SortOrder) => void;
};

const SORT_OPTIONS: { value: SortOrder; label: string }[] = [
  { value: "asc", label: "Precio: menor a mayor" },
  { value: "desc", label: "Precio: mayor a menor" },
];

export default function ResultHeader({ count, sort, onSortChange }: ResultHeaderProps) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3 rounded-3xl border border-neutral-200 bg-white p-3.5 shadow-sm">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
          Resultados disponibles
        </p>
        <h2 className="mt-1 text-lg font-semibold text-neutral-900 sm:text-xl">
          {count} {count === 1 ? "resultado" : "resultados"}
        </h2>
      </div>
      <div className="relative">
        <select
          aria-label="Ordenar resultados"
          value={sort}
          onChange={(e) => onSortChange(e.target.value as SortOrder)}
          className="appearance-none rounded-full border border-neutral-300 bg-white py-2 pl-4 pr-9 text-sm font-medium text-neutral-800 outline-none transition hover:border-neutral-400 focus:border-neutral-500"
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
      </div>
    </div>
  );
}