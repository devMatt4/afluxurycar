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

type TechnicalInfoProps = {
  control: Control<VehicleFormValues>;
};

export default function TechnicalInfo({ control }: TechnicalInfoProps) {
  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
      <h2 className="text-xl font-black">Specifiche tecniche</h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <TextField
          control={control}
          name="mileage"
          label="Chilometri"
          type="number"
        />

        <FormField
          control={control}
          name="fuel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Carburante</FormLabel>
              <Select value={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleziona carburante" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="benzina">Benzina</SelectItem>
                  <SelectItem value="diesel">Diesel</SelectItem>
                  <SelectItem value="ibrida">Ibrida</SelectItem>
                  <SelectItem value="elettrica">Elettrica</SelectItem>
                  <SelectItem value="gpl">GPL</SelectItem>
                  <SelectItem value="metano">Metano</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="transmission"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cambio</FormLabel>
              <Select value={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleziona cambio" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="manuale">Manuale</SelectItem>
                  <SelectItem value="automatico">Automatico</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <TextField control={control} name="power" label="Potenza" />
        <TextField control={control} name="engine" label="Motore" />
        <TextField control={control} name="color" label="Colore" />
        <TextField control={control} name="doors" label="Porte" type="number" />
        <TextField control={control} name="seats" label="Posti" type="number" />
        <TextField control={control} name="location" label="Località" />
      </div>
    </section>
  );
}
