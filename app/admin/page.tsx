import Link from "next/link";
import { Car, Eye, EyeOff, Star, Plus } from "lucide-react";
import { countVehicles } from "repositories/vehicle.repository";

export default async function AdminPage() {
  const statsData = await countVehicles();

  const stats = [
    {
      label: "Veicoli totali",
      value: statsData.total,
      icon: Car,
    },
    {
      label: "Pubblicati",
      value: statsData.published,
      icon: Eye,
    },
    {
      label: "Non pubblicati",
      value: statsData.unpublished,
      icon: EyeOff,
    },
    {
      label: "In evidenza",
      value: statsData.featured,
      icon: Star,
    },
  ];

  return (
    <div>
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
            Area Admin
          </p>

          <h1 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">
            Dashboard
          </h1>

          <p className="mt-3 max-w-2xl text-zinc-600">
            Gestisci i veicoli pubblicati sul sito, controlla quelli in evidenza
            e aggiungi nuove auto al marketplace.
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

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-zinc-500">
                  {item.label}
                </p>

                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-primary">
                  <Icon size={20} />
                </div>
              </div>

              <p className="mt-5 text-4xl font-black">{item.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
