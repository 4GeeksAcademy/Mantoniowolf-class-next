import Image from "next/image";
import Link from "next/link";
import type { Listing } from "@/types/listing";
import { HeartIcon, StarIcon } from "@/components/icons";

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(price);
}

function formatStayTotal(price: number, nights = 2): string {
  return `${formatPrice(price * nights)} CLP por ${nights} ${nights === 1 ? "noche" : "noches"}`;
}

type ListingCardProps = {
  listing: Listing;
  href?: string;
};

export default function ListingCard({ listing, href }: ListingCardProps) {
  const link = href ?? `/rooms/${listing.id}`;

  return (
    <Link
      href={link}
      className="group flex flex-col gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-100">
        <Image
          src={listing.image}
          alt={`Fotografía de ${listing.title}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        {listing.isGuestFavorite && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-800 shadow-sm">
            Guest favorite
          </span>
        )}
        <span className="absolute right-3 top-3 rounded-full bg-white/85 p-2 text-neutral-800 backdrop-blur">
          <HeartIcon className="h-4 w-4" />
        </span>
      </div>

      <div className="flex flex-col gap-0.5 px-0.5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-1 text-sm font-semibold text-neutral-900">
            {listing.title}
          </h3>
          <span className="flex shrink-0 items-center gap-1 text-sm font-medium text-neutral-900">
            <StarIcon className="h-3.5 w-3.5 text-neutral-900" />
            {listing.rating.toFixed(2)}
          </span>
        </div>
        <p className="line-clamp-1 text-sm text-neutral-500">{listing.location}</p>
        <p className="line-clamp-1 text-sm text-neutral-500">{formatStayTotal(listing.pricePerNight)}</p>
        <p className="mt-1 text-sm text-neutral-900">
          <span className="font-semibold">{formatPrice(listing.pricePerNight)}</span>
          <span className="text-neutral-500"> por noche</span>
        </p>
      </div>
    </Link>
  );
}