"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { SortOrder } from "@/types/listing";
import { LISTINGS } from "@/lib/data";
import HomeHeader from "@/components/home/HomeHeader";
import Footer from "@/components/Footer";
import ListingCard from "@/components/listing/ListingCard";
import MapPlaceholder from "@/components/catalog/MapPlaceholder";
import ResultHeader from "@/components/catalog/ResultHeader";
import type { HomeTabKey } from "@/types/listing";

export default function CatalogShell() {
  const [sort, setSort] = useState<SortOrder>("asc");
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState<HomeTabKey>("all");

  const sorted = useMemo(() => {
    const clone = [...LISTINGS];
    clone.sort((a, b) =>
      sort === "asc"
        ? a.pricePerNight - b.pricePerNight
        : b.pricePerNight - a.pricePerNight
    );
    return clone;
  }, [sort]);

  const normalizedQuery = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    return sorted.filter((listing) => {
      if (activeTab !== "all" && activeTab !== "homes") {
        return false;
      }

      if (normalizedQuery === "") {
        return true;
      }

      return (
        listing.title.toLowerCase().includes(normalizedQuery) ||
        listing.location.toLowerCase().includes(normalizedQuery)
      );
    });
  }, [sorted, normalizedQuery, activeTab]);

  return (
    <div className="flex min-h-dvh flex-col bg-white">
      <HomeHeader
        query={query}
        onQueryChange={setQuery}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <main className="mx-auto w-full max-w-[1200px] flex-1 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-5 flex flex-col gap-2">
          <p className="text-sm font-medium text-neutral-500">Resultados de búsqueda</p>
          <h1 className="text-[1.85rem] font-semibold tracking-tight text-neutral-900 sm:text-2xl">
            Explora todos los alojamientos
          </h1>
        </div>
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="min-w-0 flex-1">
            <ResultHeader count={sorted.length} sort={sort} onSortChange={setSort} />
            <p className="mt-4 text-sm text-neutral-500">
              {filtered.length} {filtered.length === 1 ? "resultado" : "resultados"} según tu búsqueda.
            </p>
            <ul className="mt-5 grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((listing) => (
                <li key={listing.id}>
                  <ListingCard listing={listing} />
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col md:w-80 md:shrink-0 xl:w-96">
            <MapPlaceholder />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}