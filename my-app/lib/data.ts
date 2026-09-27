import type {
  Category,
  HomeListingSection,
  HomeMediaCard,
  HomeMediaSection,
  Listing,
  RoomDetail,
} from "@/types/listing";

export const CATEGORIES: Category[] = [
  { key: "beach", label: "Playas", icon: "beach" },
  { key: "mansion", label: "Mansiones", icon: "mansion" },
  { key: "trending", label: "Tendencias", icon: "trending" },
  { key: "cabin", label: "Cabañas", icon: "cabin" },
  { key: "dome", label: "Domo", icon: "dome" },
  { key: "tiny", label: "Tiny home", icon: "tiny" },
  { key: "apartment", label: "Apartamentos", icon: "apartment" },
  { key: "lakes", label: "Lagos", icon: "lakes" },
];

export const ALL_CATEGORY_KEY = "all";

export const LISTINGS: Listing[] = [
  {
    id: "cabin-pirque-hot-tub",
    title: "Romantic Getaway with Private Hot Tub",
    location: "Pirque, Región Metropolitana",
    category: "cabin",
    pricePerNight: 114000,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    isGuestFavorite: true,
  },
  {
    id: "glamping-maipo",
    title: "Lafken Maipo Glamping & Hot Tub",
    location: "Las Vertientes, Región Metropolitana",
    category: "dome",
    pricePerNight: 124000,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    isGuestFavorite: true,
  },
  {
    id: "quimsa-el-canelo",
    title: "Quimsa Glamping Dome",
    location: "El Canelo, Región Metropolitana",
    category: "dome",
    pricePerNight: 122000,
    rating: 4.99,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",
    isGuestFavorite: true,
  },
  {
    id: "mirador-san-jose",
    title: "Mirador Cabin (B), El Ingenio",
    location: "San José de Maipo, Región Metropolitana",
    category: "cabin",
    pricePerNight: 71000,
    rating: 4.92,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "satori-santiago",
    title: "Satori Cabin for 2 with Jacuzzi",
    location: "Santiago, Región Metropolitana",
    category: "cabin",
    pricePerNight: 93000,
    rating: 4.95,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    isGuestFavorite: true,
  },
  {
    id: "mountain-getaway",
    title: "Romantic Mountain Getaway: Jacuzzi & Pool",
    location: "San José de Maipo, Región Metropolitana",
    category: "cabin",
    pricePerNight: 102000,
    rating: 4.92,
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    isGuestFavorite: true,
  },
  {
    id: "mini-house-lampa",
    title: "A mini-house minutes from Santiago",
    location: "Lampa, Región Metropolitana",
    category: "tiny",
    pricePerNight: 72000,
    rating: 4.97,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
    isGuestFavorite: true,
  },
  {
    id: "mountain-retreat",
    title: "Mountain Retreat",
    location: "San José de Maipo, Región Metropolitana",
    category: "tiny",
    pricePerNight: 83000,
    rating: 4.99,
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
    isGuestFavorite: true,
  },
  {
    id: "room-quilicura",
    title: "Room for travelers in transit",
    location: "Quilicura, Región Metropolitana",
    category: "apartment",
    pricePerNight: 34000,
    rating: 4.96,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    isGuestFavorite: true,
  },
  {
    id: "mountain-wine-loft",
    title: "Mountain and Wine Loft",
    location: "Pirque, Región Metropolitana",
    category: "cabin",
    pricePerNight: 110000,
    rating: 4.97,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    isGuestFavorite: true,
  },
  {
    id: "attractive-mountain-cabin",
    title: "Attractive Mountain Cabin",
    location: "San José de Maipo, Región Metropolitana",
    category: "cabin",
    pricePerNight: 86000,
    rating: 4.95,
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=900&q=80",
    isGuestFavorite: true,
  },
  {
    id: "el-milagro-cabins",
    title: "El Milagro Cabins",
    location: "Maipo, Región Metropolitana",
    category: "cabin",
    pricePerNight: 115000,
    rating: 4.93,
    image:
      "https://images.unsplash.com/photo-1464890100898-a385f744067f?auto=format&fit=crop&w=900&q=80",
    isGuestFavorite: true,
  },
  {
    id: "apartment-vina",
    title: "Apartment in Viña del Mar",
    location: "Viña del Mar, Valparaíso",
    category: "beach",
    pricePerNight: 91000,
    rating: 4.86,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    isGuestFavorite: true,
  },
  {
    id: "condo-la-serena",
    title: "Condo in La Serena",
    location: "La Serena, Coquimbo",
    category: "beach",
    pricePerNight: 37000,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    isGuestFavorite: true,
  },
  {
    id: "villa-zapallar",
    title: "Seaside Villa with private pool",
    location: "Zapallar, Valparaíso",
    category: "mansion",
    pricePerNight: 550000,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "cabin-pucon",
    title: "Cabin in Pucón",
    location: "Pucón, Araucanía",
    category: "lakes",
    pricePerNight: 82000,
    rating: 4.93,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "apartment-valdivia",
    title: "Apartment in Valdivia",
    location: "Valdivia, Los Ríos",
    category: "lakes",
    pricePerNight: 17800,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "dome-isla-de-maipo",
    title: "Panoramic dome on the Maipo river",
    location: "Isla de Maipo, Región Metropolitana",
    category: "trending",
    pricePerNight: 145000,
    rating: 4.98,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",
    isGuestFavorite: true,
  },
];

const PHOTO_POOL = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
];

const HOSTS: Record<string, { name: string; yearsHosting: number; superhost: boolean }> = {
  "cabin-pirque-hot-tub": { name: "Milena", yearsHosting: 4, superhost: true },
  "glamping-maipo": { name: "Gabriel", yearsHosting: 3, superhost: true },
  "quimsa-el-canelo": { name: "Francisca", yearsHosting: 2, superhost: true },
  "mirador-san-jose": { name: "Rodrigo", yearsHosting: 5, superhost: true },
  "satori-santiago": { name: "Camila", yearsHosting: 6, superhost: true },
  "mountain-getaway": { name: "José", yearsHosting: 3, superhost: false },
  "mini-house-lampa": { name: "Valentina", yearsHosting: 4, superhost: true },
  "mountain-retreat": { name: "Andrés", yearsHosting: 7, superhost: true },
  "room-quilicura": { name: "Consuelo", yearsHosting: 2, superhost: false },
  "mountain-wine-loft": { name: "Tomás", yearsHosting: 5, superhost: true },
  "attractive-mountain-cabin": { name: "Isidora", yearsHosting: 3, superhost: true },
  "el-milagro-cabins": { name: "Matías", yearsHosting: 8, superhost: true },
  "apartment-vina": { name: "Carolina", yearsHosting: 6, superhost: true },
  "condo-la-serena": { name: "Felipe", yearsHosting: 2, superhost: true },
  "villa-zapallar": { name: "Antonia", yearsHosting: 10, superhost: true },
  "cabin-pucon": { name: "Sebastián", yearsHosting: 4, superhost: true },
  "apartment-valdivia": { name: "María", yearsHosting: 3, superhost: true },
  "dome-isla-de-maipo": { name: "Ignacio", yearsHosting: 1, superhost: false },
};

const REVIEW_COUNTS: Record<string, number> = {
  "cabin-pirque-hot-tub": 47,
  "glamping-maipo": 33,
  "quimsa-el-canelo": 150,
  "mirador-san-jose": 116,
  "satori-santiago": 283,
  "mountain-getaway": 59,
  "mini-house-lampa": 159,
  "mountain-retreat": 154,
  "room-quilicura": 122,
  "mountain-wine-loft": 35,
  "attractive-mountain-cabin": 168,
  "el-milagro-cabins": 73,
  "apartment-vina": 214,
  "condo-la-serena": 98,
  "villa-zapallar": 41,
  "cabin-pucon": 305,
  "apartment-valdivia": 88,
  "dome-isla-de-maipo": 26,
};

const MAX_GUESTS: Record<string, number> = {
  "room-quilicura": 1,
  "cabin-pirque-hot-tub": 2,
  "satori-santiago": 2,
  "mountain-getaway": 2,
  "mountain-retreat": 2,
  "villa-zapallar": 10,
};

const AMENITIES: { key: string; label: string }[] = [
  { key: "wifi", label: "Wi-Fi rápido" },
  { key: "parking", label: "Estacionamiento gratis" },
  { key: "hot-tub", label: "Jacuzzi" },
  { key: "tv", label: "TV" },
  { key: "patio", label: "Patio o balcón" },
  { key: "grill", label: "Parrilla" },
  { key: "heating", label: "Calefacción" },
  { key: "kitchen", label: "Cocina" },
  { key: "washer", label: "Lavadora" },
  { key: "ac", label: "Aire acondicionado" },
  { key: "smoke-alarm", label: "Detector de humo" },
  { key: "co-alarm", label: "Detector de monóxido" },
];

function buildDetail(listing: Listing): RoomDetail {
  const uniquePhotos = [listing.image, ...PHOTO_POOL.filter((p) => p !== listing.image)];
  const host = HOSTS[listing.id] ?? { name: "Anfitrión local", yearsHosting: 2, superhost: false };

  return {
    ...listing,
    photos: uniquePhotos,
    reviews: REVIEW_COUNTS[listing.id] ?? 40,
    maxGuests: MAX_GUESTS[listing.id] ?? 4,
    startsAt: "2026-10-01T14:00:00.000Z",
    endsAt: "2026-10-06T12:00:00.000Z",
    description:
      "Un refugio tranquilo ideal para desconectarse de la ciudad. Conéctate con la naturaleza, descansa junto a la naturaleza y disfruta de una estadía memorable.",
    host,
    amenities: AMENITIES,
  };
}

export const ROOM_DETAILS: RoomDetail[] = LISTINGS.map(buildDetail);

export const HOME_LISTING_SECTIONS: HomeListingSection[] = [
  {
    id: "vina",
    title: "Popular homes in Viña del Mar",
    listingIds: [
      "apartment-vina",
      "condo-la-serena",
      "room-quilicura",
      "villa-zapallar",
      "apartment-valdivia",
    ],
  },
  {
    id: "serena",
    title: "Available in La Serena this weekend",
    listingIds: [
      "condo-la-serena",
      "apartment-vina",
      "room-quilicura",
      "mountain-retreat",
      "quimsa-el-canelo",
    ],
  },
  {
    id: "pucon",
    title: "Stay in Pucón",
    listingIds: [
      "cabin-pucon",
      "mountain-retreat",
      "attractive-mountain-cabin",
      "mini-house-lampa",
      "glamping-maipo",
    ],
  },
  {
    id: "valdivia",
    title: "Available next month in Valdivia",
    listingIds: [
      "apartment-valdivia",
      "room-quilicura",
      "dome-isla-de-maipo",
      "mountain-wine-loft",
      "cabin-pirque-hot-tub",
    ],
  },
];

export const HOME_EXPLORE_NEARBY: HomeMediaCard[] = [
  {
    id: "cultural",
    title: "Cultural tours",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "outdoors",
    title: "Outdoors",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "landmarks",
    title: "Landmarks",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "food",
    title: "Food tours",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "tastings",
    title: "Tastings",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=700&q=80",
  },
];

export const HOME_EXPERIENCE_SECTIONS: HomeMediaSection[] = [
  {
    id: "providencia",
    title: "Popular experiences in Providencia",
    items: [
      {
        id: "santiago-tips",
        title: "Santiago Walking Tour for Tips",
        subtitle: "From $0 CLP / guest",
        rating: 4.81,
        badge: "Trending",
        image:
          "https://images.unsplash.com/photo-1544989164-31d2d6b11f6f?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "cajon",
        title: "Cajón del Maipo Embalse",
        subtitle: "From $68,000 CLP / guest",
        rating: 5.0,
        badge: "Trending",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "farellones",
        title: "Valle Nevado and Farellones",
        subtitle: "From $67,000 CLP / guest",
        rating: 5.0,
        badge: "Trending",
        image:
          "https://images.unsplash.com/photo-1551524164-687a55dd1126?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "casablanca",
        title: "Valparaíso, Viña del Mar and winery",
        subtitle: "From $35,700 CLP / guest",
        rating: 4.93,
        badge: "Trending",
        image:
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "wonder",
        title: "Wonder Santiago's historic heart",
        subtitle: "From $26,500 CLP / guest",
        rating: 4.9,
        badge: "Trending",
        image:
          "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "capture",
    title: "Capture memories nearby",
    items: [
      {
        id: "hidden-gems",
        title: "Santiago Photo Tour: Hidden Gems",
        subtitle: "From $49,900 CLP / guest",
        rating: 5.0,
        image:
          "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "tourist-photography",
        title: "Tourist photography in Santiago de Chile",
        subtitle: "From $38,392 CLP / guest",
        rating: 5.0,
        image:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "instagrammable",
        title: "Instagrammable photography in Santiago",
        subtitle: "From $80,000 CLP / guest",
        rating: 5.0,
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "vr-chile",
        title: "Fotografía Turística Chile",
        subtitle: "From $90,000 CLP / guest",
        rating: 4.9,
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "portraits",
        title: "Personal portraits with Janine",
        subtitle: "From $48,000 CLP / guest",
        rating: 5.0,
        image:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
];

export const HOME_SERVICE_CARDS: HomeMediaCard[] = [
  { id: "photography", title: "Photography", meta: "camera" },
  { id: "massage", title: "Massage", meta: "massage" },
  { id: "training", title: "Training", meta: "kettlebell" },
  { id: "makeup", title: "Makeup", meta: "makeup" },
  { id: "hair", title: "Hair", meta: "dryer" },
];

export function findListing(id: string): Listing | undefined {
  return LISTINGS.find((l) => l.id === id);
}

export function findRoomDetail(id: string): RoomDetail | undefined {
  return ROOM_DETAILS.find((r) => r.id === id);
}

export function getListingsByIds(ids: string[]): Listing[] {
  return ids
    .map((id) => LISTINGS.find((listing) => listing.id === id))
    .filter((listing): listing is Listing => Boolean(listing));
}