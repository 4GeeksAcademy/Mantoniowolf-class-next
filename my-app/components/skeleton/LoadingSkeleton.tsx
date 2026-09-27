type LoadingSkeletonProps = {
  count?: number;
};

export default function LoadingSkeleton({ count = 8 }: LoadingSkeletonProps) {
  return (
    <ul
      aria-label="Cargando alojamientos"
      className="grid grid-cols-1 gap-x-5 gap-y-9 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {Array.from({ length: count }).map((_, index) => (
        <li key={index} className="flex flex-col gap-2">
          <div className="skeleton-shimmer aspect-[4/3] w-full rounded-2xl" />
          <div className="skeleton-shimmer h-5 w-1/3 rounded-full" />
          <div className="skeleton-shimmer h-4 w-3/4 rounded" />
          <div className="skeleton-shimmer h-3 w-1/2 rounded" />
          <div className="skeleton-shimmer h-3 w-2/3 rounded" />
        </li>
      ))}
    </ul>
  );
}