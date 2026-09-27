import type { Amenity } from "@/types/listing";

const AMENITY_ICONS: Record<string, React.ReactElement> = {
  wifi: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <path d="M12 20h.01" />
    </svg>
  ),
  parking: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
    </svg>
  ),
  "hot-tub": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 12h18v8H3z" />
      <path d="M7 12v8" />
      <path d="M17 12v8" />
      <path d="M7 8c0-1-1-1-1-2" />
      <path d="M12 8c0-1-1-1-1-2" />
      <path d="M17 8c0-1-1-1-1-2" />
    </svg>
  ),
  tv: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="7" width="20" height="13" rx="2" />
      <path d="m17 2-5 5-5-5" />
    </svg>
  ),
  patio: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 21h18" />
      <path d="M4 21V8l8-5 8 5v13" />
    </svg>
  ),
  grill: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="4" y="3" width="16" height="14" rx="2" />
      <path d="M8 21v-4" />
      <path d="M16 21v-4" />
      <path d="M12 21v-4" />
    </svg>
  ),
  heating: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3c2 2 2 4 0 6s-2 4 0 6 2 4 0 6" />
      <path d="M18 3c2 2 2 4 0 6s-2 4 0 6 2 4 0 6" />
      <path d="M6 3c2 2 2 4 0 6s-2 4 0 6 2 4 0 6" />
    </svg>
  ),
  kitchen: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 3h12v18H6z" />
      <path d="M10 3v18" />
      <path d="M10 7h4" />
    </svg>
  ),
  washer: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <circle cx="12" cy="14" r="4" />
      <path d="M8 6h.01" />
    </svg>
  ),
  ac: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 3 6.5 6 4 3" />
      <path d="M15 3l2.5 3L20 3" />
      <path d="M6 8h12v12H6z" />
      <path d="M12 8v12" />
    </svg>
  ),
  "smoke-alarm": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  ),
  "co-alarm": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z" />
      <path d="M12 6v6" />
      <path d="M12 16h.01" />
    </svg>
  ),
};

type AmenitiesGridProps = {
  amenities: Amenity[];
};

export default function AmenitiesGrid({ amenities }: AmenitiesGridProps) {
  return (
    <section aria-labelledby="amenities-title">
      <h2 id="amenities-title" className="mb-4 text-xl font-semibold text-neutral-900">
        Qué ofrece este lugar
      </h2>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {amenities.map((amenity) => (
          <li
            key={amenity.key}
            className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-800 shadow-sm"
          >
            <span className="h-6 w-6 shrink-0 text-neutral-700">
              {AMENITY_ICONS[amenity.key] ?? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <circle cx="12" cy="12" r="9" />
                </svg>
              )}
            </span>
            {amenity.label}
          </li>
        ))}
      </ul>
    </section>
  );
}