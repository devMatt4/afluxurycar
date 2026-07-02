import { type Control } from "react-hook-form";
import { Checkbox } from "components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "components/ui/form";
import { Input } from "components/ui/input";
import type { VehicleFormValues } from "schemas/vehicle.schema";

export type TextFieldName =
  | "title"
  | "brand"
  | "model"
  | "version"
  | "price"
  | "year"
  | "mileage"
  | "power"
  | "engine"
  | "color"
  | "doors"
  | "seats"
  | "location"
  | "sellerName"
  | "sellerPhone"
  | "sellerEmail";

type TextFieldProps = {
  control: Control<VehicleFormValues>;
  name: TextFieldName;
  label: string;
  type?: string;
};

export function TextField({
  control,
  name,
  label,
  type = "text",
}: TextFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={type} {...field} value={field.value ?? ""} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

type CheckboxFieldProps = {
  control: Control<VehicleFormValues>;
  name: "isPublished" | "isFeatured";
  label: string;
};

export function CheckboxField({ control, name, label }: CheckboxFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-row items-center gap-3 space-y-0 rounded-2xl border border-zinc-200 p-4">
          <FormControl>
            <Checkbox
              checked={Boolean(field.value)}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <FormLabel className="font-semibold">{label}</FormLabel>
        </FormItem>
      )}
    />
  );
}
