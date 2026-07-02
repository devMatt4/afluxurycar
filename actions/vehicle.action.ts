"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createVehicle, updateVehicle, deleteVehicle } from "services/vehicle.service";
import { vehicleSchema } from "schemas/vehicle.schema";

export async function createVehicleAction(data: unknown) {
  const parsedData = vehicleSchema.parse(data);

  await createVehicle({
    ...parsedData,
    sellerEmail: parsedData.sellerEmail || undefined,
  });

  revalidateVehiclePages();

  redirect("/admin/vehicles");
}

export async function updateVehicleAction(id: string, data: unknown) {
  const parsedData = vehicleSchema.parse(data);

  await updateVehicle(id, {
    ...parsedData,
    sellerEmail: parsedData.sellerEmail || undefined,
  });

  revalidateVehiclePages();

  redirect("/admin/vehicles");
}

function revalidateVehiclePages() {
  revalidatePath("/");
  revalidatePath("/marketplace");
  revalidatePath("/admin");
  revalidatePath("/admin/vehicles");
}
export async function deleteVehicleAction(id: string) {
  await deleteVehicle(id);

  revalidateVehiclePages();

  redirect("/admin/vehicles");
}