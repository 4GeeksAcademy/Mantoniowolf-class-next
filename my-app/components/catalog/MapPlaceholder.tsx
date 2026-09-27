export default function MapPlaceholder() {
  return (
    <div
      aria-label="Mapa de ubicaciones"
      className="relative flex min-h-64 flex-1 items-center justify-center overflow-hidden rounded-3xl border border-neutral-200 bg-[radial-gradient(circle_at_top_left,_rgba(251,113,133,0.18),_transparent_30%),linear-gradient(180deg,_#f7f7f7_0%,_#ececec_100%)] md:sticky md:top-24 md:min-h-[calc(100dvh-8rem)]"
    >
      <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-neutral-700 shadow-sm">
        Vista de mapa
      </div>
      <div className="absolute right-6 top-16 h-3 w-3 rounded-full bg-rose-500 shadow-[0_0_0_8px_rgba(244,63,94,0.12)]" />
      <div className="absolute left-8 top-1/2 h-3 w-3 rounded-full bg-neutral-900 shadow-[0_0_0_8px_rgba(23,23,23,0.08)]" />
      <div className="absolute bottom-10 right-10 h-3 w-3 rounded-full bg-sky-500 shadow-[0_0_0_8px_rgba(14,165,233,0.1)]" />
      <span className="rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-medium uppercase tracking-widest text-neutral-500 backdrop-blur">
        Mapa
      </span>
    </div>
  );
}