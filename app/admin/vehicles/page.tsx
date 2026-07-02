import Image from "next/image";
import Link from "next/link";
import { Edit, Plus, Star } from "lucide-react";
import DeleteVehicleButton from "components/admin/DeleteVehicleButton";
import { getAdminVehicles } from "repositories/vehicle.repository";

const categoryLabels = {
  nuovo: "Nuovo",
  usato: "Usato",
};

const formatPrice = (price: number) => {
  return `€${new Intl.NumberFormat("it-IT").format(price)}`;
};

export default async function AdminVehiclesPage() {
  const vehicles = await getAdminVehicles();

  return (
    <div>
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
            Gestione veicoli
          </p>

          <h1 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">
            Veicoli
          </h1>

          <p className="mt-3 max-w-2xl text-zinc-600">
            Visualizza, modifica o elimina le auto caricate nel marketplace.
          </p>
        </div>

        <Link
          href="/admin/vehicles/new"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-primary px-5 text-sm font-bold text-white transition hover:opacity-90"
        >
          <Plus size={18} />
          Nuovo veicolo
        </Link>
      </div>

      <div className="mt-8 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
        <div className="hidden grid-cols-[1.4fr_0.7fr_0.7fr_0.7fr_0.8fr] border-b border-zinc-200 bg-zinc-50 px-6 py-4 text-sm font-bold text-zinc-500 lg:grid">
          <span>Veicolo</span>
          <span>Categoria</span>
          <span>Prezzo</span>
          <span>Stato</span>
          <span className="text-right">Azioni</span>
        </div>

        <div className="divide-y divide-zinc-200">
          {vehicles.length > 0 ? (
            vehicles.map((vehicle) => {
              const image = vehicle.images[0]?.url ?? "/placeholder-car.jpg";

              return (
                <div
                  key={vehicle.id}
                  className="grid gap-4 p-4 lg:grid-cols-[1.4fr_0.7fr_0.7fr_0.7fr_0.8fr] lg:items-center lg:px-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-2xl bg-zinc-100">
                      <Image
                        src={image}
                        alt={vehicle.title}
                        fill
                        className="object-cover"
                        sizes="112px"
                      />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="font-black text-zinc-950">
                          {vehicle.title}
                        </h2>

                        {vehicle.isFeatured ? (
                          <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-bold text-primary">
                            <Star size={13} />
                            Evidenza
                          </span>
                        ) : null}
                      </div>

                      <p className="mt-1 text-sm text-zinc-500">
                        {vehicle.brand} · {vehicle.model} · {vehicle.year}
                      </p>
                    </div>
                  </div>

                  <div>
                    <span className="inline-flex rounded-full bg-zinc-100 px-3 py-1 text-sm font-bold text-zinc-700">
                      {categoryLabels[vehicle.category]}
                    </span>
                  </div>

                  <p className="font-black text-zinc-950">
                    {formatPrice(vehicle.price)}
                  </p>

                  <div>
                    <span
                      className={
                        vehicle.isPublished
                          ? "inline-flex rounded-full bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald-700"
                          : "inline-flex rounded-full bg-zinc-100 px-3 py-1 text-sm font-bold text-zinc-500"
                      }
                    >
                      {vehicle.isPublished ? "Pubblicato" : "Bozza"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 lg:justify-end">
                    <Link
                      href={`/admin/vehicles/${vehicle.id}/edit`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 text-zinc-600 transition hover:border-primary/30 hover:bg-blue-50 hover:text-primary"
                      aria-label="Modifica veicolo"
                    >
                      <Edit size={17} />
                    </Link>

                    <DeleteVehicleButton
                      vehicleId={vehicle.id}
                      vehicleTitle={vehicle.title}
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="p-10 text-center">
              <h2 className="text-xl font-black text-zinc-950">
                Nessun veicolo caricato
              </h2>

              <p className="mt-2 text-zinc-500">
                Aggiungi il primo veicolo da mostrare nel marketplace.
              </p>

              <Link
                href="/admin/vehicles/new"
                className="mt-6 inline-flex h-12 items-center justify-center rounded-2xl bg-primary px-5 text-sm font-bold text-white"
              >
                Aggiungi veicolo
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
