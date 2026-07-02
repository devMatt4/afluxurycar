import VehicleCard from "components/vehicle/VehicleCard";
import type { Vehicle } from "types/vehicle";

type VehicleGridProps = {
  vehicles: Vehicle[];
};

export default function VehicleGrid({ vehicles }: VehicleGridProps) {
  if (vehicles.length === 0) {
    return (
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 text-center">
        <h2 className="text-2xl font-black text-white">
          Nessun veicolo trovato
        </h2>

        <p className="mt-3 text-muted">
          Prova a modificare i filtri oppure torna al marketplace completo.
        </p>

        <a
          href="/marketplace"
          className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 font-bold text-white transition hover:bg-primary-hover"
        >
          Reset filtri
        </a>
      </div>
    );
  }

  return (
    <div className="grid gap-8 xl:grid-cols-2">
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
}
