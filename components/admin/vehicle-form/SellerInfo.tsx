import { type Control } from "react-hook-form";
import type { VehicleFormValues } from "schemas/vehicle.schema";
import { TextField } from "./fields";

type SellerInfoProps = {
  control: Control<VehicleFormValues>;
};

export default function SellerInfo({ control }: SellerInfoProps) {
  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
      <h2 className="text-xl font-black">Venditore</h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <TextField control={control} name="sellerName" label="Nome venditore" />
        <TextField control={control} name="sellerPhone" label="Telefono" />
        <TextField control={control} name="sellerEmail" label="Email" />
      </div>
    </section>
  );
}
