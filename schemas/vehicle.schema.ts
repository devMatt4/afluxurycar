import { z } from "zod";

export const vehicleSchema = z.object({
  title: z.string().min(2, "Titolo obbligatorio"),
  brand: z.string().min(2, "Marca obbligatoria"),
  model: z.string().min(1, "Modello obbligatorio"),
  version: z.string().optional(),
  category: z.enum(["nuovo", "usato"]),
  price: z.coerce.number().min(1, "Prezzo obbligatorio"),
  year: z.coerce.number().min(1950).max(new Date().getFullYear() + 1),
  mileage: z.coerce.number().min(0),
  fuel: z.enum(["benzina", "diesel", "ibrida", "elettrica", "gpl", "metano"]),
  transmission: z.enum(["manuale", "automatico"]),
  power: z.string().optional(),
  engine: z.string().optional(),
  color: z.string().optional(),
  doors: z.coerce.number().optional(),
  seats: z.coerce.number().optional(),
  location: z.string().min(2, "Località obbligatoria"),
  description: z.string().min(10, "Descrizione troppo breve"),
  features: z.array(z.string()).default([]),
  sellerName: z.string().min(2, "Nome venditore obbligatorio"),
  sellerPhone: z.string().min(5, "Telefono obbligatorio"),
  sellerEmail: z.string().email().optional().or(z.literal("")),
  isFeatured: z.boolean().default(false),
  isPublished: z.boolean().default(true),
  images: z.array(z.string()).max(10, "Massimo 10 immagini").default([]),
});

export type VehicleFormValues = z.infer<typeof vehicleSchema>;