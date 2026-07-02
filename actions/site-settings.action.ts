"use server";

import { revalidatePath } from "next/cache";

import {
  siteSettingsSchema,
  type SiteSettingsValues,
} from "schemas/site-settings.schema";

import { updateSiteSettings } from "services/site-settings.service";

type ActionState = {
  success: boolean;
  message: string;
} | null;

export async function updateSiteSettingsAction(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const values: SiteSettingsValues = {
    siteName: String(formData.get("siteName") ?? ""),

    phonePrimary: String(formData.get("phonePrimary") ?? ""),

    phoneSecondary: String(formData.get("phoneSecondary") ?? ""),

    whatsapp: String(formData.get("whatsapp") ?? ""),

    email: String(formData.get("email") ?? ""),

    instagram: String(formData.get("instagram") ?? ""),

    facebook: String(formData.get("facebook") ?? ""),

    address: String(formData.get("address") ?? ""),
  };

  const parsed = siteSettingsSchema.safeParse(values);

  if (!parsed.success) {
    return {
      success: false,
      message: "Controlla i dati inseriti.",
    };
  }

  await updateSiteSettings(parsed.data);

  revalidatePath("/admin/settings");
  revalidatePath("/");
  revalidatePath("/contatti");
  revalidatePath("/noleggio");

  return {
    success: true,
    message: "Impostazioni salvate con successo.",
  };
}