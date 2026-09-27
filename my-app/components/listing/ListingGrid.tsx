import type { Listing } from "@/types/listing";
import ListingCard from "@/components/listing/ListingCard";

type ListingGridProps = {
  listings: Listing[];
};

export default function ListingGrid({ listings }: ListingGridProps) {
  if (listings.length === 0) {
    return (
      <p className="py-16 text-center text-sm text-neutral-500">
        No encontramos alojamientos con esos criterios. Prueba con otro destino o categoría.
      </p>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-x-5 gap-y-9 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {listings.map((listing) => (
        <li key={listing.id}>
          <ListingCard listing={listing} />
        </li>
      ))}
    </ul>
  );
}