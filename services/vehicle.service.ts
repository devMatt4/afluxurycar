import { prisma } from "lib/prisma";

type VehicleData = {
  title: string;
  brand: string;
  model: string;
  version?: string;
  category: "nuovo" | "usato";
  price: number;
  year: number;
  mileage: number;
  fuel: "benzina" | "diesel" | "ibrida" | "elettrica" | "gpl" | "metano";
  transmission: "manuale" | "automatico";
  power?: string;
  engine?: string;
  color?: string;
  doors?: number;
  seats?: number;
  location: string;
  description: string;
  features: string[];
  sellerName: string;
  sellerPhone: string;
  sellerEmail?: string;
  isFeatured: boolean;
  isPublished: boolean;
  images: string[];
};

function createSlug(title: string) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function createVehicle(data: VehicleData) {
  const slug = createSlug(data.title);

  return prisma.vehicle.create({
    data: {
      ...data,
      slug,
      images: {
        create: data.images.map((url, index) => ({
          url,
          order: index,
        })),
      },
    },
  });
}

export async function updateVehicle(id: string, data: VehicleData) {
  const slug = createSlug(data.title);

  return prisma.vehicle.update({
    where: {
      id,
    },
    data: {
      slug,
      title: data.title,
      brand: data.brand,
      model: data.model,
      version: data.version,
      category: data.category,
      price: data.price,
      year: data.year,
      mileage: data.mileage,
      fuel: data.fuel,
      transmission: data.transmission,
      power: data.power,
      engine: data.engine,
      color: data.color,
      doors: data.doors,
      seats: data.seats,
      location: data.location,
      description: data.description,
      features: data.features,
      sellerName: data.sellerName,
      sellerPhone: data.sellerPhone,
      sellerEmail: data.sellerEmail,
      isFeatured: data.isFeatured,
      isPublished: data.isPublished,
      images: {
        deleteMany: {},
        create: data.images.map((url, index) => ({
          url,
          order: index,
        })),
      },
    },
  });
}
export async function deleteVehicle(id: string) {
  return prisma.vehicle.delete({
    where: {
      id,
    },
  });
}