import { z } from "zod";

export const siteSettingsSchema = z.object({
  siteName: z.string().min(2),

  phonePrimary: z.string().min(3),

  phoneSecondary: z.string().optional(),

  whatsapp: z.string().optional(),

  email: z.email(),

  instagram: z.string().optional(),

  facebook: z.string().optional(),

  address: z.string().optional(),
});

export type SiteSettingsValues = z.infer<
  typeof siteSettingsSchema
>;