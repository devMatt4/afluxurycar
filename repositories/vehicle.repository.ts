import { prisma } from "../lib/prisma";

export type MarketplaceVehicleFilters = {
  search?: string;
  category?: "nuovo" | "usato";
  brand?: string;
  fuel?: "benzina" | "diesel" | "ibrida" | "elettrica" | "gpl" | "metano";
  transmission?: "manuale" | "automatico";
  minPrice?: number;
  maxPrice?: number;
  minYear?: number;
  maxYear?: number;
  sort?: "recent" | "price-asc" | "price-desc" | "year-desc" | "mileage-asc";
};

export async function getFeaturedVehicles() {
  const vehicles = await prisma.vehicle.findMany({
    where: {
      isFeatured: true,
      isPublished: true,
    },
    include: {
      images: {
        orderBy: {
          order: "asc",
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 6,
  });

  return vehicles.map((vehicle) => ({
    ...vehicle,
    images: vehicle.images.map((image) => image.url),
  }));
}

export async function getMarketplaceVehicles(filters: MarketplaceVehicleFilters) {
  const orderBy =
    filters.sort === "price-asc"
      ? { price: "asc" as const }
      : filters.sort === "price-desc"
        ? { price: "desc" as const }
        : filters.sort === "year-desc"
          ? { year: "desc" as const }
          : filters.sort === "mileage-asc"
            ? { mileage: "asc" as const }
            : { createdAt: "desc" as const };

  const where = {
    isPublished: true,
    ...(filters.category && {
      category: filters.category,
    }),
    ...(filters.brand && {
      brand: {
        contains: filters.brand,
        mode: "insensitive" as const,
      },
    }),
    ...(filters.fuel && {
      fuel: filters.fuel,
    }),
    ...(filters.transmission && {
      transmission: filters.transmission,
    }),
    ...((filters.minPrice || filters.maxPrice) && {
      price: {
        ...(filters.minPrice && {
          gte: filters.minPrice,
        }),
        ...(filters.maxPrice && {
          lte: filters.maxPrice,
        }),
      },
    }),
    ...((filters.minYear || filters.maxYear) && {
      year: {
        ...(filters.minYear && {
          gte: filters.minYear,
        }),
        ...(filters.maxYear && {
          lte: filters.maxYear,
        }),
      },
    }),
    ...(filters.search && {
      OR: [
        {
          title: {
            contains: filters.search,
            mode: "insensitive" as const,
          },
        },
        {
          brand: {
            contains: filters.search,
            mode: "insensitive" as const,
          },
        },
        {
          model: {
            contains: filters.search,
            mode: "insensitive" as const,
          },
        },
      ],
    }),
  };

  const vehicles = await prisma.vehicle.findMany({
    where,
    include: {
      images: {
        orderBy: {
          order: "asc",
        },
      },
    },
    orderBy,
  });

  return vehicles.map((vehicle) => ({
    ...vehicle,
    images: vehicle.images.map((image) => image.url),
  }));
}

export async function getAdminVehicles() {
  return prisma.vehicle.findMany({
    include: {
      images: {
        orderBy: {
          order: "asc",
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getVehicleBySlug(slug: string) {
  return prisma.vehicle.findUnique({
    where: {
      slug,
    },
    include: {
      images: {
        orderBy: {
          order: "asc",
        },
      },
    },
  });
}

export async function getVehicleById(id: string) {
  return prisma.vehicle.findUnique({
    where: {
      id,
    },
    include: {
      images: {
        orderBy: {
          order: "asc",
        },
      },
    },
  });
}

export async function countVehicles() {
  const [total, published, unpublished, featured] = await Promise.all([
    prisma.vehicle.count(),
    prisma.vehicle.count({
      where: {
        isPublished: true,
      },
    }),
    prisma.vehicle.count({
      where: {
        isPublished: false,
      },
    }),
    prisma.vehicle.count({
      where: {
        isFeatured: true,
      },
    }),
  ]);

  return {
    total,
    published,
    unpublished,
    featured,
  };
}
export async function getAvailableVehicleBrands() {
  const vehicles = await prisma.vehicle.findMany({
    where: {
      isPublished: true,
    },
    select: {
      brand: true,
    },
    distinct: ["brand"],
    orderBy: {
      brand: "asc",
    },
  });

  return vehicles.map((vehicle) => vehicle.brand);
}