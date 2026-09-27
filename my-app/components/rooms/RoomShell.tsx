"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { RoomDetail } from "@/types/listing";
import { findRoomDetail } from "@/lib/data";
import HomeHeader from "@/components/home/HomeHeader";
import Footer from "@/components/Footer";
import AmenitiesGrid from "@/components/rooms/AmenitiesGrid";
import BookingCard from "@/components/rooms/BookingCard";
import HostRow from "@/components/rooms/HostRow";
import PhotoGallery from "@/components/rooms/PhotoGallery";
import RoomHeader from "@/components/rooms/RoomHeader";
import RoomSkeleton from "@/components/rooms/RoomSkeleton";
import type { HomeTabKey } from "@/types/listing";

type RoomShellProps = {
  id: string;
};

export default function RoomShell({ id }: RoomShellProps) {
  const [room, setRoom] = useState<RoomDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState<HomeTabKey>("all");

  useEffect(() => {
    const timer = setTimeout(() => {
      setRoom(findRoomDetail(id) ?? null);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [id]);

  return (
    <div className="flex min-h-dvh flex-col bg-white">
      <HomeHeader
        query={query}
        onQueryChange={setQuery}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      {loading ? (
        <RoomSkeleton />
      ) : room ? (
        <main className="mx-auto w-full max-w-[1200px] flex-1 px-4 pb-12 pt-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-neutral-500">
              <Link href="/" className="underline-offset-4 hover:text-neutral-900 hover:underline">
                Inicio
              </Link>
              <span>·</span>
              <Link href="/catalog" className="underline-offset-4 hover:text-neutral-900 hover:underline">
                Catálogo
              </Link>
            </div>
            <PhotoGallery photos={room.photos} title={room.title} />
            <div className="mt-8 md:flex md:items-start md:gap-8">
              <div className="min-w-0 flex-1 space-y-8">
                <RoomHeader room={room} />
                <HostRow host={room.host} />
                <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
                  <p className="text-sm leading-6 text-neutral-700">
                  {room.description}
                  </p>
                </div>
                <AmenitiesGrid amenities={room.amenities} />
              </div>
              <div className="md:w-80 md:shrink-0 xl:w-96">
                <BookingCard
                  pricePerNight={room.pricePerNight}
                  maxGuests={room.maxGuests}
                  startsAt={room.startsAt}
                  endsAt={room.endsAt}
                />
              </div>
            </div>
          </div>
        </main>
      ) : (
        <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center gap-2 px-4 py-24">
          <h1 className="text-xl font-semibold text-neutral-900">
            Alojamiento no encontrado
          </h1>
          <p className="text-sm text-neutral-600">
            El alojamiento solicitado no existe o ya no está disponible.
          </p>
          <Link
            href="/catalog"
            className="mt-4 rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-800 shadow-sm transition hover:border-neutral-400 hover:shadow-md"
          >
            Ir al catálogo
          </Link>
        </main>
      )}
      <Footer />
    </div>
  );
}