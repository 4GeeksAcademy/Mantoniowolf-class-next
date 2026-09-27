import type { RoomDetail } from "@/types/listing";
import { MapPinIcon, StarIcon, HeartIcon } from "@/components/icons";

type RoomHeaderProps = {
  room: RoomDetail;
};

export default function RoomHeader({ room }: RoomHeaderProps) {
  return (
    <section className="flex flex-col gap-3">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
        Guest favorite · Estadía completa
      </p>
      <div className="flex items-start justify-between gap-4">
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
          {room.title}
        </h1>
        <button
          type="button"
          className="flex shrink-0 items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 transition hover:border-neutral-500"
          aria-label="Guardar en favoritos"
        >
          <HeartIcon className="h-4 w-4" />
          <span className="underline">Guardar</span>
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-neutral-700">
        <span className="flex items-center gap-1 font-medium">
          <StarIcon className="h-4 w-4" />
          {room.rating.toFixed(2)}
        </span>
        <span className="text-neutral-400">·</span>
        <span className="font-medium underline">{room.reviews} reseñas</span>
        <span className="text-neutral-400">·</span>
        <span className="flex items-center gap-1">
          <MapPinIcon className="h-4 w-4" />
          {room.location}
        </span>
      </div>
    </section>
  );
}