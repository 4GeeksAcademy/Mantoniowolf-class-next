import type { Host } from "@/types/listing";

type HostRowProps = {
  host: Host;
};

function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export default function HostRow({ host }: HostRowProps) {
  return (
    <section className="flex items-center gap-4 rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-rose-600 text-lg font-semibold text-white"
        aria-hidden
      >
        {initials(host.name)}
      </div>
      <div className="flex flex-col">
        <p className="text-base font-semibold text-neutral-900">
          Anfitrión: {host.name}
        </p>
        <p className="text-sm text-neutral-600">
          {host.yearsHosting} {host.yearsHosting === 1 ? "año" : "años"} como
          anfitrión{host.superhost ? " · Superhost" : ""}
        </p>
      </div>
    </section>
  );
}