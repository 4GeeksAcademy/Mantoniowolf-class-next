export default function RoomSkeleton() {
  return (
    <div
      aria-label="Cargando detalles del alojamiento"
      className="flex min-h-dvh flex-col gap-6 pb-10 bg-white"
    >
      <div className="skeleton-shimmer aspect-[4/3] w-full rounded-2xl md:aspect-[2/1]" />
      <div className="mx-auto w-full max-w-5xl space-y-6 px-4 sm:px-6 lg:px-8">
        <div className="space-y-2">
          <div className="skeleton-shimmer h-3 w-40 rounded" />
          <div className="skeleton-shimmer h-8 w-2/3 rounded" />
          <div className="skeleton-shimmer h-4 w-1/2 rounded" />
        </div>
        <div className="flex items-center gap-4">
          <div className="skeleton-shimmer h-14 w-14 rounded-full" />
          <div className="space-y-2">
            <div className="skeleton-shimmer h-4 w-40 rounded" />
            <div className="skeleton-shimmer h-3 w-24 rounded" />
          </div>
        </div>
        <div className="skeleton-shimmer h-28 w-full rounded-3xl" />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="skeleton-shimmer h-14 w-full rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  );
}