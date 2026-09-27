import { ChevronRightIcon } from "@/components/icons";

type HomeSectionRowProps = {
  title: string;
  children: React.ReactNode;
};

export default function HomeSectionRow({ title, children }: HomeSectionRowProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-[1.7rem] font-semibold tracking-tight text-neutral-900 sm:text-[1.45rem]">
          {title}
        </h2>
        <button
          type="button"
          className="hidden h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 shadow-sm md:inline-flex"
          aria-label={`Ver más de ${title}`}
        >
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      </div>
      {children}
    </section>
  );
}
