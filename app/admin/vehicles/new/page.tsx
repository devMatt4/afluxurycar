import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import VehicleForm from "components/admin/vehicle-form/VehicleForm";

export default function NewVehiclePage() {
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
          Nuovo veicolo
        </h1>

        <p className="mt-2 text-zinc-500">
          Compila tutte le informazioni del veicolo prima della pubblicazione.
        </p>
      </div>

      <VehicleForm />
    </div>
  );
}
