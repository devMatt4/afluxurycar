"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Save } from "lucide-react";
import { useForm } from "react-hook-form";

import {
  createVehicleAction,
  updateVehicleAction,
} from "actions/vehicle.action";
import { vehicleSchema, type VehicleFormValues } from "schemas/vehicle.schema";

import { Button } from "components/ui/button";
import { Form } from "components/ui/form";

import BasicInfo from "./BasicInfo";
import DescriptionSection from "./DescriptionSection";
import ImageUploader from "./ImageUploader";
import PublishSettings from "./PublishSettings";
import SellerInfo from "./SellerInfo";
import TechnicalInfo from "./TechnicalInfo";

type VehicleFormProps = {
  vehicle?: Omit<
    VehicleFormValues,
    | "images"
    | "version"
    | "power"
    | "engine"
    | "color"
    | "doors"
    | "seats"
    | "sellerEmail"
  > & {
    id: string;
    version: string | null;
    power: string | null;
    engine: string | null;
    color: string | null;
    doors: number | null;
    seats: number | null;
    sellerEmail: string | null;
    images: {
      url: string;
    }[];
  };
};

const emptyValues: VehicleFormValues = {
  title: "",
  brand: "",
  model: "",
  version: "",
  category: "usato",
  price: 0,
  year: new Date().getFullYear(),
  mileage: 0,
  fuel: "diesel",
  transmission: "automatico",
  power: "",
  engine: "",
  color: "",
  doors: undefined,
  seats: undefined,
  location: "",
  description: "",
  features: [],
  sellerName: "AFLUXURYCAR",
  sellerPhone: "+39 000 000 0000",
  sellerEmail: "info@afluxurycar.it",
  isFeatured: false,
  isPublished: true,
  images: [],
};

export default function VehicleForm({ vehicle }: VehicleFormProps) {
  const defaultValues: VehicleFormValues = vehicle
    ? {
        title: vehicle.title,
        brand: vehicle.brand,
        model: vehicle.model,
        version: vehicle.version ?? "",
        category: vehicle.category,
        price: vehicle.price,
        year: vehicle.year,
        mileage: vehicle.mileage,
        fuel: vehicle.fuel,
        transmission: vehicle.transmission,
        power: vehicle.power ?? "",
        engine: vehicle.engine ?? "",
        color: vehicle.color ?? "",
        doors: vehicle.doors ?? undefined,
        seats: vehicle.seats ?? undefined,
        location: vehicle.location,
        description: vehicle.description,
        features: vehicle.features ?? [],
        sellerName: vehicle.sellerName,
        sellerPhone: vehicle.sellerPhone,
        sellerEmail: vehicle.sellerEmail ?? "",
        isFeatured: vehicle.isFeatured,
        isPublished: vehicle.isPublished,
        images: vehicle.images?.map((image) => image.url) ?? [],
      }
    : emptyValues;

  const form = useForm<VehicleFormValues>({
    resolver: zodResolver(vehicleSchema) as any,
    defaultValues,
  });

  async function onSubmit(values: VehicleFormValues) {
    if (vehicle?.id) {
      await updateVehicleAction(vehicle.id, values);
      return;
    }

    await createVehicleAction(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 space-y-8">
        <BasicInfo control={form.control} />
        <TechnicalInfo control={form.control} />
        <DescriptionSection control={form.control} />
        <SellerInfo control={form.control} />
        <ImageUploader />
        <PublishSettings control={form.control} />

        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="h-12 rounded-2xl px-6 font-bold"
          >
            <Save size={18} />
            {form.formState.isSubmitting
              ? "Salvataggio..."
              : vehicle
              ? "Aggiorna veicolo"
              : "Salva veicolo"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
