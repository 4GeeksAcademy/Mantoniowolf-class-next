import type { CategoryIconName } from "@/types/listing";

type IconProps = {
  className?: string;
  "aria-hidden"?: boolean;
};

function base(className?: string) {
  return {
    className,
    "aria-hidden": true,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  } as const;
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

export function HeartIcon({ className }: IconProps) {
  return (
    <svg {...base(className)} fill="none">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

export function UserIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

export function GlobeIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg {...base(className)} fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export function ChevronLeftIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function PlusIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

export function MinusIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M5 12h14" />
    </svg>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

const CATEGORY_ICONS: Record<CategoryIconName, (props: IconProps) => React.ReactElement> = {
  all: ({ className }) => (
    <svg {...base(className)}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  ),
  beach: ({ className }) => (
    <svg {...base(className)}>
      <path d="M3 18h18" />
      <path d="M6 14v-3a6 6 0 0 1 12 0v3" />
      <path d="M4 21h16" />
    </svg>
  ),
  mansion: ({ className }) => (
    <svg {...base(className)}>
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 9h.01" />
      <path d="M9 13h.01" />
      <path d="M9 17h.01" />
      <path d="M15 9h.01" />
      <path d="M15 13h.01" />
      <path d="M15 17h.01" />
    </svg>
  ),
  trending: ({ className }) => (
    <svg {...base(className)}>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  cabin: ({ className }) => (
    <svg {...base(className)}>
      <path d="m3 10 9-7 9 7" />
      <path d="M5 9v11h14V9" />
      <path d="M10 20v-5h4v5" />
    </svg>
  ),
  dome: ({ className }) => (
    <svg {...base(className)}>
      <path d="M8 20a8 8 0 1 1 8 0" />
      <path d="M12 4V2" />
      <path d="M6 12H4" />
      <path d="M20 12h-2" />
    </svg>
  ),
  tiny: ({ className }) => (
    <svg {...base(className)}>
      <path d="M4 13h16v8H4z" />
      <path d="M2 13h20" />
      <circle cx="8.5" cy="17" r=".5" />
      <circle cx="15.5" cy="17" r=".5" />
    </svg>
  ),
  apartment: ({ className }) => (
    <svg {...base(className)}>
      <path d="M4 21V4h12v17" />
      <path d="M16 11h5v10h-5" />
      <path d="M7 8h2" />
      <path d="M7 12h2" />
      <path d="M7 16h2" />
      <path d="M11 8h2" />
      <path d="M11 12h2" />
      <path d="M11 16h2" />
    </svg>
  ),
  lakes: ({ className }) => (
    <svg {...base(className)}>
      <path d="M2 12c5-3 9 3 14-2 2-2 4-2 6 0" />
      <path d="M2 19c5-3 9 3 14-2 2-2 4-2 6 0" />
    </svg>
  ),
};

export function CategoryIcon({
  name,
  className,
}: {
  name: CategoryIconName;
  className?: string;
}) {
  const I = CATEGORY_ICONS[name];
  return <I className={className} />;
}