"use client";

import Link from "next/link";
import type { HomeTabKey } from "@/types/listing";
import {
  CategoryIcon,
  GlobeIcon,
  MenuIcon,
  SearchIcon,
  UserIcon,
} from "@/components/icons";

const HOME_TABS: {
  key: HomeTabKey;
  label: string;
  icon: "all" | "cabin" | "trending" | "apartment";
}[] = [
  { key: "all", label: "All", icon: "all" },
  { key: "homes", label: "Homes", icon: "cabin" },
  { key: "experiences", label: "Experiences", icon: "trending" },
  { key: "services", label: "Services", icon: "apartment" },
];

type HomeHeaderProps = {
  query: string;
  onQueryChange: (value: string) => void;
  activeTab: HomeTabKey;
  onTabChange: (value: HomeTabKey) => void;
};

export default function HomeHeader({
  query,
  onQueryChange,
  activeTab,
  onTabChange,
}: HomeHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-[1200px] px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2" aria-label="HomeValues inicio">
            <svg
              className="h-7 w-7 text-rose-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="m3 11 9-8 9 8" />
              <path d="M5 9.5V21h14V9.5" />
              <path d="M10 21v-6h4v6" />
            </svg>
            <span className="hidden text-lg font-semibold tracking-tight text-rose-500 md:inline">
              homevalues
            </span>
          </Link>

          <nav aria-label="Tipos de contenido" className="hidden items-center gap-7 md:flex">
            {HOME_TABS.map((tab) => {
              const active = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => onTabChange(tab.key)}
                  className={`group flex flex-col items-center gap-1 pb-2 text-xs font-medium transition ${
                    active
                      ? "border-b-2 border-neutral-900 text-neutral-900"
                      : "text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  <CategoryIcon
                    name={tab.icon}
                    className={`h-5 w-5 ${active ? "text-neutral-900" : "text-neutral-400 group-hover:text-neutral-700"}`}
                  />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-full p-2 text-neutral-700 transition hover:bg-neutral-100"
              aria-label="Idioma"
            >
              <GlobeIcon className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-2.5 py-1.5 text-neutral-800 shadow-sm transition hover:shadow-md"
              aria-label="Menú de usuario"
            >
              <MenuIcon className="h-4 w-4" />
              <UserIcon className="h-5.5 w-5.5 rounded-full bg-neutral-200 p-1" />
            </button>
          </div>
        </div>

        <nav aria-label="Tipos de contenido móvil" className="mt-4 flex items-center gap-5 overflow-x-auto pb-1 md:hidden">
          {HOME_TABS.map((tab) => {
            const active = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => onTabChange(tab.key)}
                className={`flex shrink-0 flex-col items-center gap-1 pb-2 text-[11px] font-medium transition ${
                  active
                    ? "border-b-2 border-neutral-900 text-neutral-900"
                    : "text-neutral-500"
                }`}
              >
                <CategoryIcon
                  name={tab.icon}
                  className={`h-5 w-5 ${active ? "text-neutral-900" : "text-neutral-400"}`}
                />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        <form
          role="search"
          className="mt-4 overflow-hidden rounded-full border border-neutral-200 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)]"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-[1.2fr_0.9fr_0.9fr_auto] items-center">
            <div className="min-w-0 border-r border-neutral-200 px-4 py-3 sm:px-5">
              <label htmlFor="home-search" className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-neutral-900">
                Where
              </label>
              <input
                id="home-search"
                type="search"
                placeholder="Search destinations"
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                className="mt-1 w-full bg-transparent text-xs text-neutral-600 outline-none placeholder:text-neutral-400 sm:text-sm"
              />
            </div>
            <div className="min-w-0 border-r border-neutral-200 px-3 py-3 sm:px-5">
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-neutral-900">
                When
              </p>
              <p className="mt-1 truncate text-xs text-neutral-400 sm:text-sm">Add dates</p>
            </div>
            <div className="min-w-0 border-r border-neutral-200 px-3 py-3 sm:px-5">
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-neutral-900">
                Who
              </p>
              <p className="mt-1 truncate text-xs text-neutral-400 sm:text-sm">Add guests</p>
            </div>
            <div className="flex items-center justify-center px-2 py-2 sm:px-3">
              <button
                type="submit"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-rose-500 text-white transition hover:bg-rose-600 sm:h-11 sm:w-11"
                aria-label="Buscar"
              >
                <SearchIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </header>
  );
}
