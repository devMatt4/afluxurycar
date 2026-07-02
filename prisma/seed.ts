import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  // Pulizia database
  await prisma.vehicleImage.deleteMany();
  await prisma.vehicle.deleteMany();

  // Impostazioni sito
  await prisma.siteSettings.upsert({
    where: {
      id: "default-settings",
    },
    update: {},
    create: {
      id: "default-settings",

      siteName: "AFLUXURYCAR",

      phonePrimary: "+39 327 293 8732",
      phoneSecondary: "+39 334 983 1084",

      whatsapp: "",

      email: "afluxurycar@gmail.com",

      instagram: "",
      facebook: "",

      address: "",
      city: "",
    },
  });

  // BMW
  await prisma.vehicle.create({
    data: {
      slug: "bmw-serie-3-320d-msport",
      title: "BMW Serie 3 320d M Sport",
      brand: "BMW",
      model: "Serie 3",
      version: "320d M Sport",
      category: "usato",
      price: 28900,
      year: 2021,
      mileage: 69000,
      fuel: "diesel",
      transmission: "automatico",
      power: "190 CV",
      engine: "2.0 Diesel",
      color: "Nero metallizzato",
      doors: 4,
      seats: 5,
      location: "Catanzaro, CZ",
      description:
        "BMW Serie 3 320d M Sport in ottime condizioni, con allestimento sportivo, cambio automatico e interni curati.",
      features: [
        "Pacchetto M Sport",
        "Cambio automatico",
        "Navigatore",
        "Fari LED",
        "Sensori parcheggio",
        "Cerchi in lega",
      ],
      sellerName: "AFLUXURYCAR",
      sellerPhone: "+39 327 293 8732",
      sellerEmail: "info@afluxurycar.it",
      isFeatured: true,
      isPublished: true,
      images: {
        create: [
          {
            url: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1600&auto=format&fit=crop",
            alt: "BMW Serie 3 320d M Sport",
            order: 0,
          },
        ],
      },
    },
  });

  // Audi
  await prisma.vehicle.create({
    data: {
      slug: "audi-a5-sportback-sline",
      title: "Audi A5 Sportback S line",
      brand: "Audi",
      model: "A5 Sportback",
      version: "S line",
      category: "usato",
      price: 34900,
      year: 2020,
      mileage: 82000,
      fuel: "diesel",
      transmission: "automatico",
      power: "190 CV",
      engine: "2.0 TDI",
      color: "Grigio Daytona",
      doors: 5,
      seats: 5,
      location: "Lamezia Terme, CZ",
      description:
        "Audi A5 Sportback S line elegante e sportiva, ideale per chi cerca comfort, tecnologia e design premium.",
      features: [
        "S line",
        "Virtual Cockpit",
        "Cambio automatico",
        "Climatizzatore automatico",
        "Fari Matrix LED",
        "Sedili sportivi",
      ],
      sellerName: "AFLUXURYCAR",
      sellerPhone: "+39 327 293 8732",
      sellerEmail: "info@afluxurycar.it",
      isFeatured: true,
      isPublished: true,
      images: {
        create: [
          {
            url: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?q=80&w=1600&auto=format&fit=crop",
            alt: "Audi A5 Sportback S line",
            order: 0,
          },
        ],
      },
    },
  });

  // Mercedes
  await prisma.vehicle.create({
    data: {
      slug: "mercedes-classe-c-220d-amg-line",
      title: "Mercedes Classe C 220d AMG Line",
      brand: "Mercedes-Benz",
      model: "Classe C",
      version: "220d AMG Line",
      category: "nuovo",
      price: 52900,
      year: 2024,
      mileage: 0,
      fuel: "diesel",
      transmission: "automatico",
      power: "200 CV",
      engine: "2.0 Diesel",
      color: "Bianco",
      doors: 4,
      seats: 5,
      location: "Cosenza, CS",
      description:
        "Mercedes Classe C AMG Line nuova, con dotazione premium, interni digitali e design elegante.",
      features: [
        "AMG Line",
        "Cambio automatico",
        "Display digitale",
        "Apple CarPlay",
        "Fari LED",
        "Telecamera posteriore",
      ],
      sellerName: "AFLUXURYCAR",
      sellerPhone: "+39 327 293 8732",
      sellerEmail: "info@afluxurycar.it",
      isFeatured: true,
      isPublished: true,
      images: {
        create: [
          {
            url: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1600&auto=format&fit=crop",
            alt: "Mercedes Classe C 220d AMG Line",
            order: 0,
          },
        ],
      },
    },
  });

  console.log("✅ Seed completato.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });