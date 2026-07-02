import {
  BadgeCheck,
  Car,
  Calendar,
  Fuel,
  Gauge,
  Mail,
  MapPin,
  Phone,
  Settings,
  Users,
} from "lucide-react";

type VehicleSidebarProps = {
  vehicle: {
    title: string;
    brand: string;
    price: number;
    location: string;
    sellerPhone: string;
    sellerEmail?: string | null;
    year: number;
    mileage: number;
    fuel: string;
    transmission: string;
    power?: string | null;
    engine?: string | null;
    doors?: number | null;
    seats?: number | null;
  };
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

function formatPrice(price: number) {
  return `€${new Intl.NumberFormat("it-IT").format(price)}`;
}

export default function VehicleSidebar({ vehicle }: VehicleSidebarProps) {
  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#141416] shadow-[0_30px_80px_rgba(0,0,0,.35)]">
        <div className="border-b border-white/10 p-7">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-primary">
            {vehicle.brand}
          </p>

          <h1 className="mt-3 text-4xl font-black leading-tight text-white">
            {vehicle.title}
          </h1>

          <div className="mt-5 flex flex-wrap gap-2">
            <Badge text="Auto verificata" />
            <Badge text="Disponibile" />
            <Badge text="Finanziabile" />
            <Badge text="Permuta" />
          </div>

          <div className="mt-6 flex items-center gap-2 text-zinc-400">
            <MapPin size={17} />
            {vehicle.location}
          </div>

          <p className="mt-7 text-5xl font-black text-primary">
            {formatPrice(vehicle.price)}
          </p>
        </div>

        <div className="space-y-4 p-7">
          <Spec icon={Calendar} label="Anno" value={String(vehicle.year)} />

          <Spec
            icon={Gauge}
            label="Chilometri"
            value={`${vehicle.mileage.toLocaleString("it-IT")} km`}
          />

          <Spec
            icon={Fuel}
            label="Carburante"
            value={fuelLabels[vehicle.fuel as keyof typeof fuelLabels]}
          />

          <Spec
            icon={Settings}
            label="Cambio"
            value={
              transmissionLabels[
                vehicle.transmission as keyof typeof transmissionLabels
              ]
            }
          />

          {vehicle.power ? (
            <Spec icon={Car} label="Potenza" value={vehicle.power} />
          ) : null}

          {vehicle.engine ? (
            <Spec icon={Car} label="Motore" value={vehicle.engine} />
          ) : null}

          {vehicle.doors ? (
            <Spec icon={Car} label="Porte" value={String(vehicle.doors)} />
          ) : null}

          {vehicle.seats ? (
            <Spec icon={Users} label="Posti" value={String(vehicle.seats)} />
          ) : null}
        </div>

        <div className="border-t border-white/10 p-7">
          <a
            href={`tel:${vehicle.sellerPhone}`}
            className="flex h-14 items-center justify-center gap-3 rounded-2xl bg-primary font-bold text-white transition hover:bg-primary-hover"
          >
            <Phone size={18} />
            Chiama ora
          </a>

          {vehicle.sellerEmail ? (
            <a
              href={`mailto:${vehicle.sellerEmail}?subject=Richiesta informazioni - ${vehicle.title}`}
              className="mt-3 flex h-14 items-center justify-center gap-3 rounded-2xl border border-white/10 text-white transition hover:border-primary/40 hover:text-primary"
            >
              <Mail size={18} />
              Invia email
            </a>
          ) : null}
        </div>
      </div>
    </aside>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-bold text-primary">
      <BadgeCheck size={14} />
      {text}
    </span>
  );
}

function Spec({
  icon: Icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
      <div className="flex items-center gap-3">
        <Icon size={18} className="text-primary" />
        <span className="text-zinc-400">{label}</span>
      </div>

      <span className="font-bold text-white">{value}</span>
    </div>
  );
}
