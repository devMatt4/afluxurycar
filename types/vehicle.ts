export type VehicleCategory = "nuovo" | "usato";

export type VehicleFuel =
  | "benzina"
  | "diesel"
  | "ibrida"
  | "elettrica"
  | "gpl"
  | "metano";

export type VehicleTransmission = "manuale" | "automatico";

export type Vehicle = {
  id: string;
  slug: string;
  title: string;
  brand: string;
  model: string;
  version?: string | null;
  category: VehicleCategory;
  price: number;
  year: number;
  mileage: number;
  fuel: VehicleFuel;
  transmission: VehicleTransmission;
  power?: string | null;
  engine?: string | null;
  color?: string | null;
  doors?: number | null;
  seats?: number | null;
  location: string;
  description: string;
  features: string[];
  images: string[];
  sellerName: string;
  sellerPhone: string;
  sellerEmail?: string | null;
  isFeatured: boolean;
  isPublished: boolean;
};