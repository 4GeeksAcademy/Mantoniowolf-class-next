"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  GlobeIcon,
  HeartIcon,
  MenuIcon,
  SearchIcon,
  UserIcon,
} from "@/components/icons";

type HeaderProps = {
  query?: string;
  onQueryChange?: (value: string) => void;
};

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/catalog", label: "Catálogo" },
];

function Logo() {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="HomeValues inicio">
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
      <span className="hidden text-lg font-semibold tracking-tight text-rose-500 sm:inline">
        homevalues
      </span>
    </Link>
  );
}

export default function Header({ query, onQueryChange }: HeaderProps) {
  const controlled = typeof query === "string" && typeof onQueryChange === "function";
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 sm:gap-3">
          <Logo />

          <nav aria-label="Navegación principal" className="hidden items-center gap-2 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-neutral-900 text-white"
                      : "text-neutral-700 hover:bg-neutral-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <form
            role="search"
            className="ml-2 hidden flex-1 items-center justify-between rounded-full border border-neutral-200 bg-white px-2 py-2 shadow-sm transition focus-within:border-neutral-400 focus-within:shadow-md md:flex"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex min-w-0 flex-1 items-center gap-3 border-r border-neutral-200 px-4 py-1">
              <SearchIcon className="h-4 w-4 shrink-0 text-neutral-900" />
              <div className="min-w-0">
                <label htmlFor="site-search" className="block text-[11px] font-semibold text-neutral-900">
                  Dónde
                </label>
                <input
                  id="site-search"
                  type="search"
                  className="w-full bg-transparent text-sm text-neutral-500 outline-none placeholder:text-neutral-400"
                  placeholder="Buscar destinos"
                  value={controlled ? query : undefined}
                  defaultValue={controlled ? undefined : ""}
                  onChange={controlled ? (e) => onQueryChange(e.target.value) : undefined}
                />
              </div>
            </div>
            <div className="flex min-w-0 flex-1 items-center gap-3 border-r border-neutral-200 px-4 py-1">
              <div className="min-w-0">
                <p className="block text-[11px] font-semibold text-neutral-900">Cuándo</p>
                <p className="text-sm text-neutral-500">Agregar fechas</p>
              </div>
            </div>
            <div className="flex min-w-0 flex-1 items-center gap-3 px-4 py-1">
              <div className="min-w-0">
                <p className="block text-[11px] font-semibold text-neutral-900">Quién</p>
                <p className="text-sm text-neutral-500">Agregar huéspedes</p>
              </div>
            </div>
            <button
              type="submit"
              className="ml-2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-rose-500 text-white shadow-md transition hover:bg-rose-600"
              aria-label="Buscar"
            >
              <SearchIcon className="h-4 w-4" />
            </button>
          </form>

          <div className="ml-auto flex shrink-0 items-center gap-1">
            <span className="hidden cursor-pointer rounded-full px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 md:inline-block">
              Conviértete en anfitrión
            </span>
            <button
              type="button"
              className="rounded-full p-2 text-neutral-700 transition hover:bg-neutral-100"
              aria-label="Idioma"
            >
              <GlobeIcon className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="hidden rounded-full p-2.5 text-neutral-700 transition hover:bg-neutral-100 sm:inline-flex"
              aria-label="Favoritos"
            >
              <HeartIcon className="h-5 w-5" />
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

        <form
          role="search"
          className="mt-3 flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-2.5 shadow-sm md:hidden"
          onSubmit={(e) => e.preventDefault()}
        >
          <SearchIcon className="h-4 w-4 shrink-0 text-neutral-500" />
          <label htmlFor="site-search-mobile" className="sr-only">
            Buscar alojamientos
          </label>
          <input
            id="site-search-mobile"
            type="search"
            className="min-w-0 flex-1 bg-transparent text-sm text-neutral-900 outline-none placeholder:text-neutral-400"
            placeholder="Buscar destino"
            value={controlled ? query : undefined}
            defaultValue={controlled ? undefined : ""}
            onChange={controlled ? (e) => onQueryChange(e.target.value) : undefined}
          />
        </form>

        <nav aria-label="Navegación móvil" className="mt-3 flex gap-2 lg:hidden">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  active
                    ? "bg-neutral-900 text-white"
                    : "bg-white text-neutral-700 ring-1 ring-neutral-200 hover:bg-neutral-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}