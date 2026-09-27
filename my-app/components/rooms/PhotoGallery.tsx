"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

type PhotoGalleryProps = {
  photos: string[];
  title: string;
};

export default function PhotoGallery({ photos, title }: PhotoGalleryProps) {
  const [current, setCurrent] = useState(0);

  if (photos.length === 0) {
    return null;
  }

  const total = photos.length;
  const goPrev = () => setCurrent((i) => (i - 1 + total) % total);
  const goNext = () => setCurrent((i) => (i + 1) % total);

  return (
    <section aria-label="Galería de fotos" className="relative">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-100 md:aspect-[2/1]">
        <Image
          key={photos[current]}
          src={photos[current]}
          alt={`${title} — foto ${current + 1} de ${total}`}
          fill
          sizes="(max-width: 640px) 100vw, 66vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-x-0 bottom-4 flex items-center justify-between px-3 sm:inset-x-4 sm:bottom-6">
        <button
          type="button"
          onClick={goPrev}
          className="rounded-full border border-neutral-300 bg-white/90 p-2.5 text-neutral-900 shadow-md transition hover:scale-105 hover:bg-white"
          aria-label="Foto anterior"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <span className="rounded-full bg-black/60 px-3 py-1.5 text-xs font-medium text-white">
          {current + 1} / {total}
        </span>
        <button
          type="button"
          onClick={goNext}
          className="rounded-full border border-neutral-300 bg-white/90 p-2.5 text-neutral-900 shadow-md transition hover:scale-105 hover:bg-white"
          aria-label="Foto siguiente"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-3 flex items-center justify-center gap-2">
        {photos.map((photo, index) => (
          <button
            key={`${photo}-${index}`}
            type="button"
            onClick={() => setCurrent(index)}
            className={`h-2.5 rounded-full transition ${
              index === current ? "w-8 bg-neutral-900" : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
            }`}
            aria-label={`Ir a la foto ${index + 1}`}
            aria-pressed={index === current}
          />
        ))}
      </div>
    </section>
  );
}