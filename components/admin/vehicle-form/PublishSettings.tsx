import { type Control } from "react-hook-form";
import type { VehicleFormValues } from "schemas/vehicle.schema";
import { CheckboxField } from "./fields";

type PublishSettingsProps = {
  control: Control<VehicleFormValues>;
};

export default function PublishSettings({ control }: PublishSettingsProps) {
  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
      <h2 className="text-xl font-black">Pubblicazione</h2>

      <div className="mt-8 grid gap-5">
        <CheckboxField
          control={control}
          name="isPublished"
          label="Veicolo pubblicato"
        />

        <CheckboxField
          control={control}
          name="isFeatured"
          label="Metti in evidenza"
        />
      </div>
    </section>
  );
}
