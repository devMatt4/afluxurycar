import {
  Calendar,
  Car,
  Fuel,
  Gauge,
  Palette,
  Settings,
  Users,
} from "lucide-react";

type VehicleSpecsProps = {
  vehicle: {
    year: number;
    mileage: number;
    fuel: string;
    transmission: string;
    power?: string | null;
    engine?: string | null;
    color?: string | null;
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

export default function VehicleSpecs({ vehicle }: VehicleSpecsProps) {
  const specs = [
    {
      icon: Calendar,
      label: "Anno",
      value: vehicle.year,
    },
    {
      icon: Gauge,
      label: "Chilometri",
      value: `${vehicle.mileage.toLocaleString("it-IT")} km`,
    },
    {
      icon: Fuel,
      label: "Carburante",
      value: fuelLabels[vehicle.fuel as keyof typeof fuelLabels],
    },
    {
      icon: Settings,
      label: "Cambio",
      value:
        transmissionLabels[
          vehicle.transmission as keyof typeof transmissionLabels
        ],
    },
    {
      icon: Car,
      label: "Potenza",
      value: vehicle.power ?? "-",
    },
    {
      icon: Car,
      label: "Motore",
      value: vehicle.engine ?? "-",
    },
    {
      icon: Palette,
      label: "Colore",
      value: vehicle.color ?? "-",
    },
    {
      icon: Car,
      label: "Porte",
      value: vehicle.doors ?? "-",
    },
    {
      icon: Users,
      label: "Posti",
      value: vehicle.seats ?? "-",
    },
  ];

  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
          Specifiche
        </p>

        <h2 className="mt-3 text-3xl font-black text-white">Scheda tecnica</h2>
      </div>

      <div className="divide-y divide-white/10">
        {specs.map((spec) => {
          const Icon = spec.icon;

          return (
            <div
              key={spec.label}
              className="flex items-center justify-between py-5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={18} />
                </div>

                <span className="font-semibold text-zinc-400">
                  {spec.label}
                </span>
              </div>

              <span className="text-right text-lg font-black text-white">
                {spec.value}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
