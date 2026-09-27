import Image from "next/image";
import Link from "next/link";
import type { HomeMediaCard as HomeMediaCardType } from "@/types/listing";
import { HeartIcon, StarIcon } from "@/components/icons";

type HomeMediaCardProps = {
  item: HomeMediaCardType;
  variant?: "square" | "service" | "experience";
};

function ServiceGlyph({ kind }: { kind?: string }) {
  const base = "h-12 w-12 text-neutral-700";

  if (kind === "camera") {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M4 8h4l1.5-2h5L16 8h4v10H4z" />
        <circle cx="12" cy="13" r="3.5" />
      </svg>
    );
  }
  if (kind === "massage") {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <rect x="3" y="11" width="13" height="4" rx="1.5" />
        <path d="M16 13h3l2 4" />
        <path d="M6 15v4" />
        <path d="M13 15v4" />
      </svg>
    );
  }
  if (kind === "kettlebell") {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M8 9V7a4 4 0 1 1 8 0v2" />
        <path d="M6 9h12l2 5a7 7 0 1 1-16 0z" />
      </svg>
    );
  }
  if (kind === "makeup") {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M8 5h5v11H8z" />
        <path d="M13 7h3v9h-3" />
        <path d="M8 16h8v3H8z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M7 7h10v5H7z" />
      <path d="M9 12v4" />
      <path d="M15 12v4" />
      <path d="M4 8h3" />
      <path d="M17 8h3" />
    </svg>
  );
}

export default function HomeMediaCard({
  item,
  variant = "experience",
}: HomeMediaCardProps) {
  if (variant === "service") {
    return (
      <div className="flex h-[132px] w-[142px] shrink-0 flex-col items-start justify-between rounded-3xl bg-white p-4 shadow-[0_2px_14px_rgba(0,0,0,0.05)] ring-1 ring-neutral-200 sm:w-[170px]">
        <div className="rounded-2xl bg-neutral-100 p-2.5">
          <ServiceGlyph kind={item.meta} />
        </div>
        <p className="text-sm font-medium text-neutral-900">{item.title}</p>
      </div>
    );
  }

  const card = (
    <>
      <div className={`relative overflow-hidden rounded-3xl bg-neutral-100 ${variant === "square" ? "aspect-square" : "aspect-[4/5]"}`}>
        {item.image ? (
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 55vw, 240px"
            className="object-cover"
          />
        ) : null}
        {item.badge ? (
          <span className="absolute left-3 top-3 rounded-full bg-white/92 px-2.5 py-1 text-[10px] font-medium text-neutral-800 shadow-sm">
            {item.badge}
          </span>
        ) : null}
        {variant === "experience" ? (
          <span className="absolute right-3 top-3 rounded-full bg-white/85 p-2 text-neutral-800 backdrop-blur">
            <HeartIcon className="h-4 w-4" />
          </span>
        ) : null}
      </div>
      <div className="mt-2.5 space-y-0.5 px-0.5">
        <p className="line-clamp-2 text-sm font-medium text-neutral-900">{item.title}</p>
        {item.subtitle ? <p className="line-clamp-1 text-xs text-neutral-500">{item.subtitle}</p> : null}
        {item.meta ? <p className="line-clamp-1 text-xs text-neutral-500">{item.meta}</p> : null}
        {typeof item.rating === "number" ? (
          <p className="flex items-center gap-1 text-xs text-neutral-900">
            <StarIcon className="h-3.5 w-3.5" />
            {item.rating.toFixed(1)}
          </p>
        ) : null}
      </div>
    </>
  );

  if (item.href) {
    return (
      <Link href={item.href} className={`block shrink-0 ${variant === "square" ? "w-[152px] sm:w-[180px]" : "w-[214px] sm:w-[236px]"}`}>
        {card}
      </Link>
    );
  }

  return <div className={`shrink-0 ${variant === "square" ? "w-[152px] sm:w-[180px]" : "w-[214px] sm:w-[236px]"}`}>{card}</div>;
}
