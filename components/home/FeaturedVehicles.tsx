import Link from "next/link";
import VehicleCard from "components/vehicle/VehicleCard";
import { getFeaturedVehicles } from "repositories/vehicle.repository";

export default async function FeaturedVehicles() {
  const featuredVehicles = await getFeaturedVehicles();

  return (
    <section className="py-24">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              In evidenza
            </span>

            <h2 className="mt-4 text-balance text-4xl font-black text-white md:text-5xl">
              Veicoli selezionati
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              Una selezione di auto disponibili su AFLUXURYCAR, pronte per
              essere scoperte e richieste direttamente al venditore.
            </p>
          </div>

          <Link
            href="/marketplace"
            className="inline-flex h-13 items-center justify-center rounded-full border border-primary/30 px-6 text-sm font-bold uppercase tracking-[0.12em] text-primary transition hover:bg-primary hover:text-white"
          >
            Vedi marketplace
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
}
