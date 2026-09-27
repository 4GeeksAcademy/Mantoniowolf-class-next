export type SortOrder = "asc" | "desc";

export type HomeTabKey = "all" | "homes" | "experiences" | "services";

export interface Listing {
  id: string;
  title: string;
  location: string;
  category: string;
  pricePerNight: number;
  rating: number;
  image: string;
  isGuestFavorite?: boolean;
}

export interface Category {
  key: string;
  label: string;
  icon: CategoryIconName;
}

export type CategoryIconName =
  | "all"
  | "beach"
  | "mansion"
  | "trending"
  | "cabin"
  | "dome"
  | "tiny"
  | "apartment"
  | "lakes";

export interface Host {
  name: string;
  yearsHosting: number;
  superhost: boolean;
}

export interface Amenity {
  key: string;
  label: string;
}

export interface HomeMediaCard {
  id: string;
  title: string;
  image?: string;
  subtitle?: string;
  meta?: string;
  rating?: number;
  badge?: string;
  href?: string;
}

export interface HomeListingSection {
  id: string;
  title: string;
  listingIds: string[];
}

export interface HomeMediaSection {
  id: string;
  title: string;
  items: HomeMediaCard[];
}

export interface RoomDetail extends Listing {
  photos: string[];
  reviews: number;
  maxGuests: number;
  startsAt: string;
  endsAt: string;
  description: string;
  host: Host;
  amenities: Amenity[];
}