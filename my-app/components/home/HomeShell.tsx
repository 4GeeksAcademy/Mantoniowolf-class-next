"use client";

import { useEffect, useMemo, useState } from "react";
import type { HomeMediaCard, HomeTabKey, Listing } from "@/types/listing";
import {
  HOME_EXPLORE_NEARBY,
  HOME_EXPERIENCE_SECTIONS,
  HOME_LISTING_SECTIONS,
  HOME_SERVICE_CARDS,
  LISTINGS,
  getListingsByIds,
} from "@/lib/data";
import Footer from "@/components/Footer";
import HomeHeader from "@/components/home/HomeHeader";
import HomeMediaCardView from "@/components/home/HomeMediaCard";
import HomeSectionRow from "@/components/home/HomeSectionRow";
import ListingCard from "@/components/listing/ListingCard";

function filterMediaCards(items: HomeMediaCard[], normalizedQuery: string): HomeMediaCard[] {
  if (normalizedQuery === "") {
    return items;
  }

  return items.filter((item) => {
    const haystack = `${item.title} ${item.subtitle ?? ""} ${item.meta ?? ""}`.toLowerCase();
    return haystack.includes(normalizedQuery);
  });
}

function LoadingRow() {
  return (
    <div className="space-y-4">
      <div className="skeleton-shimmer h-8 w-64 rounded" />
      <div className="scrollbar-hide flex gap-4 overflow-x-auto pb-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="w-[214px] shrink-0 space-y-2">
            <div className="skeleton-shimmer aspect-[4/5] rounded-3xl" />
            <div className="skeleton-shimmer h-4 w-4/5 rounded" />
            <div className="skeleton-shimmer h-3 w-2/3 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomeShell() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState<HomeTabKey>("all");

  useEffect(() => {
    const timer = setTimeout(() => {
      setListings(LISTINGS);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const normalizedQuery = query.trim().toLowerCase();

  const filteredListings = useMemo(() => {
    if (normalizedQuery === "") {
      return listings;
    }

    return listings.filter((listing) => {
      return (
        listing.title.toLowerCase().includes(normalizedQuery) ||
        listing.location.toLowerCase().includes(normalizedQuery)
      );
    });
  }, [listings, normalizedQuery]);

  const listingRows = useMemo(() => {
    const visibleIds = new Set(filteredListings.map((listing) => listing.id));

    return HOME_LISTING_SECTIONS.map((section) => ({
      ...section,
      items: getListingsByIds(section.listingIds).filter((listing) => visibleIds.has(listing.id)),
    })).filter((section) => section.items.length > 0);
  }, [filteredListings]);

  const exploreNearby = useMemo(
    () => filterMediaCards(HOME_EXPLORE_NEARBY, normalizedQuery),
    [normalizedQuery]
  );

  const experienceRows = useMemo(() => {
    return HOME_EXPERIENCE_SECTIONS.map((section) => ({
      ...section,
      items: filterMediaCards(section.items, normalizedQuery),
    })).filter((section) => section.items.length > 0);
  }, [normalizedQuery]);

  const serviceCards = useMemo(
    () => filterMediaCards(HOME_SERVICE_CARDS, normalizedQuery),
    [normalizedQuery]
  );

  const showHomes = activeTab === "all" || activeTab === "homes";
  const showExperiences = activeTab === "all" || activeTab === "experiences";
  const showServices = activeTab === "all" || activeTab === "services";

  const isEmpty =
    !loading &&
    (!showHomes || listingRows.length === 0) &&
    (!showExperiences || (exploreNearby.length === 0 && experienceRows.length === 0)) &&
    (!showServices || serviceCards.length === 0);

  return (
    <div className="flex min-h-dvh flex-col bg-white">
      <HomeHeader
        query={query}
        onQueryChange={setQuery}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <main className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col gap-10 px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="sr-only">HomeValues inspirada en Airbnb</h1>

        {loading ? (
          <>
            <LoadingRow />
            <LoadingRow />
            <LoadingRow />
          </>
        ) : isEmpty ? (
          <p className="py-16 text-center text-sm text-neutral-500">
            No encontramos resultados para esa búsqueda. Prueba con otro término.
          </p>
        ) : (
          <>
            {showHomes
              ? listingRows.map((section) => (
                  <HomeSectionRow key={section.id} title={section.title}>
                    <ul className="scrollbar-hide flex gap-4 overflow-x-auto pb-2">
                      {section.items.map((listing) => (
                        <li key={listing.id} className="w-[214px] shrink-0 sm:w-[236px]">
                          <ListingCard listing={listing} />
                        </li>
                      ))}
                    </ul>
                  </HomeSectionRow>
                ))
              : null}

            {showExperiences && exploreNearby.length > 0 ? (
              <HomeSectionRow title="Explore experiences nearby">
                <div className="scrollbar-hide flex gap-4 overflow-x-auto pb-2">
                  {exploreNearby.map((item) => (
                    <HomeMediaCardView key={item.id} item={item} variant="square" />
                  ))}
                </div>
              </HomeSectionRow>
            ) : null}

            {showExperiences
              ? experienceRows.map((section) => (
                  <HomeSectionRow key={section.id} title={section.title}>
                    <div className="scrollbar-hide flex gap-4 overflow-x-auto pb-2">
                      {section.items.map((item) => (
                        <HomeMediaCardView key={item.id} item={item} variant="experience" />
                      ))}
                    </div>
                  </HomeSectionRow>
                ))
              : null}

            {showServices && serviceCards.length > 0 ? (
              <HomeSectionRow title="Find services near you">
                <div className="scrollbar-hide flex gap-4 overflow-x-auto pb-2">
                  {serviceCards.map((item) => (
                    <HomeMediaCardView key={item.id} item={item} variant="service" />
                  ))}
                </div>
              </HomeSectionRow>
            ) : null}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}