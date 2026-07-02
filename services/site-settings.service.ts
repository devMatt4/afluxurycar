import { prisma } from "lib/prisma";
import type { SiteSettingsValues } from "../schemas/site-settings.schema";

export async function updateSiteSettings(
  values: SiteSettingsValues
) {
  return prisma.siteSettings.update({
    where: {
      id: "default-settings",
    },
    data: values,
  });
}