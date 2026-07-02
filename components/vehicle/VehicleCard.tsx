import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Fuel,
  Gauge,
  MapPin,
  Settings,
  Star,
} from "lucide-react";
import type { Vehicle } from "types/vehicle";

type VehicleCardProps = {
  vehicle: Vehicle;
};

const categoryLabels = {
  nuovo: "Nuovo",
  usato: "Usato",
};

const fuelLabels = {
  benzina: "Benzina",
  diesel: "Diesel",
  ibrida: "Ibrida",
  elettrica: "Elettrica",
  gpl: "GPL",
  metano: "Metano",
};

const transmissionLabels = {
  manuale: "Manuale",
  automatico: "Automatico",
};

const formatPrice = (price: number) => {
  return `€${new Intl.NumberFormat("it-IT").format(price)}`;
};

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const image = vehicle.images[0] ?? "/placeholder-car.jpg";

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#151518] shadow-[0_24px_80px_rgba(0,0,0,.28)] transition duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[0_34px_100px_rgba(37,99,235,.14)]">
      <Link href={`/veicoli/${vehicle.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-surface">
          <Image
            src={image}
            alt={vehicle.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-primary px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white">
              {categoryLabels[vehicle.category]}
            </span>

            {vehicle.isFeatured ? (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/70 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white backdrop-blur-md">
                <Star size={13} />
                Evidenza
              </span>
            ) : null}
          </div>

          <div className="absolute bottom-4 right-4 rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-right backdrop-blur-xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400">
              Prezzo
            </p>
            <p className="text-xl font-black text-primary">
              {formatPrice(vehicle.price)}
            </p>
          </div>
        </div>

        <div className="p-6">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-primary">
              {vehicle.brand}
            </p>

            <h3 className="mt-2 line-clamp-2 text-2xl font-black leading-tight text-white transition group-hover:text-primary-soft">
              {vehicle.title}
            </h3>

            <p className="mt-3 flex items-center gap-2 text-sm text-muted">
              <MapPin size={16} />
              {vehicle.location}
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-muted">
            <Spec
              icon={Gauge}
              value={`${vehicle.mileage.toLocaleString("it-IT")} km`}
            />
            <Spec icon={Fuel} value={fuelLabels[vehicle.fuel]} />
            <Spec
              icon={Settings}
              value={transmissionLabels[vehicle.transmission]}
            />
            <Spec icon={Calendar} value={String(vehicle.year)} />
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
            <span className="text-sm font-semibold text-muted">
              Scheda completa
            </span>

            <span className="inline-flex items-center gap-2 text-sm font-black text-primary transition group-hover:translate-x-1">
              Scopri di più
              <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

function Spec({ icon: Icon, value }: { icon: typeof Gauge; value: string }) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-white/5 bg-white/[0.045] px-4 py-3">
      <Icon size={17} className="text-primary" />
      <span className="truncate">{value}</span>
    </div>
  );
}
