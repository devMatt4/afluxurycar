import { type Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "components/ui/form";
import { Textarea } from "components/ui/textarea";
import type { VehicleFormValues } from "schemas/vehicle.schema";

type DescriptionSectionProps = {
  control: Control<VehicleFormValues>;
};

export default function DescriptionSection({
  control,
}: DescriptionSectionProps) {
  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
      <h2 className="text-xl font-black">Descrizione</h2>

      <FormField
        control={control}
        name="description"
        render={({ field }) => (
          <FormItem className="mt-6">
            <FormControl>
              <Textarea
                rows={8}
                placeholder="Descrizione completa del veicolo..."
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </section>
  );
}
