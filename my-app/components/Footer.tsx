import Link from "next/link";
import { GlobeIcon } from "@/components/icons";

type FooterLink = {
  label: string;
  href: string;
  detail?: string;
};

const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Soporte",
    links: [
      { label: "Centro de ayuda", href: "#" },
      { label: "Ayuda con un problema de seguridad", href: "#" },
      { label: "Seguridad", href: "#" },
      { label: "Seguro de viaje", href: "#" },
    ],
  },
  {
    title: "Anfitriones",
    links: [
      { label: "Anfitrión con tu hogar", href: "#" },
      { label: "Recursos para anfitriones", href: "#" },
      { label: "Foro de la comunidad", href: "#" },
      { label: "Clase gratuita de hosting", href: "#" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Noticias", href: "#" },
      { label: "Carreras", href: "#" },
      { label: "Inversores", href: "#" },
      { label: "Tarjetas de regalo", href: "#" },
    ],
  },
];

const DISCOVERY_COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Popular",
    links: [
      { label: "Tokyo", href: "#", detail: "Monthly Rentals" },
      { label: "Philadelphia", href: "#", detail: "Monthly Rentals" },
      { label: "Cleveland", href: "#", detail: "Monthly Rentals" },
      { label: "Amsterdam", href: "#", detail: "Vacation rentals" },
    ],
  },
  {
    title: "Beach",
    links: [
      { label: "Charlotte", href: "#", detail: "Vacation rentals" },
      { label: "Orange Beach", href: "#", detail: "House rentals" },
      { label: "Kauai", href: "#", detail: "Villa rentals" },
      { label: "Gulf Shores", href: "#", detail: "House rentals" },
    ],
  },
  {
    title: "Apartments",
    links: [
      { label: "Portland", href: "#", detail: "House rentals" },
      { label: "Galveston", href: "#", detail: "Condo rentals" },
      { label: "Dallas", href: "#", detail: "Condo rentals" },
      { label: "Show more", href: "#", detail: "Explore more destinations" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-[1200px] px-4 pb-8 pt-12 sm:px-6 lg:px-8">
        <div className="mb-10 border-b border-neutral-200 pb-8">
          <h2 className="mb-5 text-2xl font-semibold tracking-tight text-neutral-900">
            Inspiration for future getaways
          </h2>
          <div className="flex flex-wrap gap-4 text-sm font-medium text-neutral-700">
            <Link href="#" className="border-b-2 border-neutral-900 pb-2 text-neutral-900">Popular</Link>
            <Link href="#" className="pb-2 hover:text-neutral-900">Arts & culture</Link>
            <Link href="#" className="pb-2 hover:text-neutral-900">Beach</Link>
            <Link href="#" className="pb-2 hover:text-neutral-900">Mountains</Link>
            <Link href="#" className="pb-2 hover:text-neutral-900">Outdoors</Link>
            <Link href="#" className="pb-2 hover:text-neutral-900">Things to do</Link>
            <Link href="#" className="pb-2 hover:text-neutral-900">Travel tips & inspiration</Link>
            <Link href="#" className="pb-2 hover:text-neutral-900">Home-friendly apartments</Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {DISCOVERY_COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="mb-3 text-sm font-semibold text-neutral-900">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="block text-sm text-neutral-900 transition hover:underline">
                      <span>{link.label}</span>
                      {link.detail ? (
                        <span className="mt-0.5 block text-xs text-neutral-500">{link.detail}</span>
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 border-t border-neutral-200 pt-8 sm:grid-cols-2 lg:grid-cols-3">
          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="mb-3 text-sm font-semibold text-neutral-900">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-neutral-600 transition hover:text-neutral-900 hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-neutral-200 pt-6 text-sm text-neutral-500 sm:flex-row">
          <p>© 2026 homevalues, Inc. — demo ficticia</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="#" className="hover:underline">
              Privacidad
            </Link>
            <Link href="#" className="hover:underline">
              Términos
            </Link>
            <Link href="#" className="hover:underline">
              Cookies
            </Link>
            <button type="button" className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-700 transition hover:border-neutral-400 hover:shadow-sm">
              <GlobeIcon className="h-4 w-4" />
              Español (CL)
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}