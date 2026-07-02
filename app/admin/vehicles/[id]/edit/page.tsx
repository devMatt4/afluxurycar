import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import VehicleForm from "components/admin/vehicle-form/VehicleForm";
import { getVehicleById } from "repositories/vehicle.repository";

type EditVehiclePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditVehiclePage({
  params,
}: EditVehiclePageProps) {
  const { id } = await params;
  const vehicle = await getVehicleById(id);

  if (!vehicle) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl">
      <div>
        <Link
          href="/admin/vehicles"
          className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 transition hover:text-primary"
        >
          <ArrowLeft size={16} />
          Torna ai veicoli
        </Link>

        <h1 className="mt-3 text-3xl font-black tracking-tight">
          Modifica veicolo
        </h1>

        <p className="mt-2 text-zinc-500">
          Aggiorna le informazioni del veicolo selezionato.
        </p>
      </div>

      <VehicleForm vehicle={vehicle} />
    </div>
  );
}
