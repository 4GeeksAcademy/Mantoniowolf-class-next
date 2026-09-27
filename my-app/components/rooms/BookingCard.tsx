"use client";

import { useMemo, useState } from "react";
import { formatPrice } from "@/components/listing/ListingCard";
import { MinusIcon, PlusIcon } from "@/components/icons";

type BookingCardProps = {
  pricePerNight: number;
  maxGuests: number;
  startsAt: string;
  endsAt: string;
};

const DAY_IN_MS = 24 * 60 * 60 * 1000;

export default function BookingCard({
  pricePerNight,
  maxGuests,
  startsAt,
  endsAt,
}: BookingCardProps) {
  const [guests, setGuests] = useState(1);
  const minGuests = 1;

  const nights = useMemo(() => {
    const start = new Date(startsAt).getTime();
    const end = new Date(endsAt).getTime();
    return Math.max(1, Math.round((end - start) / DAY_IN_MS));
  }, [startsAt, endsAt]);

  const total = pricePerNight * nights * guests;
  const canDecrement = guests > minGuests;
  const canIncrement = guests < maxGuests;

  return (
    <aside
      aria-label="Reserva"
      className="mt-8 rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm sm:mt-10 md:mt-0 md:sticky md:top-24"
    >
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
        Reserva rápida
      </p>
      <div className="mb-5 flex items-baseline justify-between gap-2">
        <p className="text-lg text-neutral-900">
          <span className="font-semibold">{formatPrice(pricePerNight)}</span>
          <span className="text-neutral-500"> / noche</span>
        </p>
        <span className="flex items-center gap-1 text-sm font-medium text-neutral-700">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          {nights} noches
        </span>
      </div>

      <div className="mb-5 rounded-2xl border border-neutral-300 p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Huéspedes
            </p>
            <p className="text-sm font-medium text-neutral-900" aria-live="polite">
              {guests} {guests === 1 ? "huésped" : "huéspedes"}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setGuests((g) => Math.max(minGuests, g - 1))}
              disabled={!canDecrement}
              className="rounded-full border border-neutral-300 p-2 text-neutral-800 transition hover:border-neutral-900 disabled:cursor-not-allowed disabled:text-neutral-300 disabled:hover:border-neutral-300"
              aria-label="Disminuir huéspedes"
            >
              <MinusIcon className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setGuests((g) => Math.min(maxGuests, g + 1))}
              disabled={!canIncrement}
              className="rounded-full border border-neutral-300 p-2 text-neutral-800 transition hover:border-neutral-900 disabled:cursor-not-allowed disabled:text-neutral-300 disabled:hover:border-neutral-300"
              aria-label="Aumentar huéspedes"
            >
              <PlusIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
        <p className="mt-2 text-xs text-neutral-500">
          Máximo {maxGuests} {maxGuests === 1 ? "huésped" : "huéspedes"}.
        </p>
      </div>

      <button
        type="button"
        className="w-full rounded-2xl bg-rose-500 py-3 font-semibold text-white transition hover:bg-rose-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
      >
        Reservar
      </button>

      <dl className="mt-5 space-y-2 text-sm text-neutral-700">
        <div className="flex justify-between">
          <dt>
            {formatPrice(pricePerNight)} × {nights} noches
          </dt>
          <dd>{formatPrice(pricePerNight * nights)}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Total por {guests}</dt>
          <dd className="font-semibold text-neutral-900">{formatPrice(total)}</dd>
        </div>
      </dl>
      <p className="mt-3 text-center text-xs text-neutral-500">
        Aún no se realiza ningún cargo.
      </p>
    </aside>
  );
}