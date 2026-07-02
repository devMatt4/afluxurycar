import { type Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "components/ui/select";
import type { VehicleFormValues } from "schemas/vehicle.schema";
import { TextField } from "./fields";

type BasicInfoProps = {
  control: Control<VehicleFormValues>;
};

export default function BasicInfo({ control }: BasicInfoProps) {
  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
      <h2 className="text-xl font-black">Informazioni principali</h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <TextField control={control} name="title" label="Titolo annuncio" />
        <TextField control={control} name="brand" label="Marca" />
        <TextField control={control} name="model" label="Modello" />
        <TextField control={control} name="version" label="Versione" />

        <FormField
          control={control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categoria</FormLabel>
              <Select value={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleziona categoria" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="nuovo">Nuovo</SelectItem>
                  <SelectItem value="usato">Usato</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <TextField
          control={control}
          name="price"
          label="Prezzo (€)"
          type="number"
        />
        <TextField control={control} name="year" label="Anno" type="number" />
      </div>
    </section>
  );
}
