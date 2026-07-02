import Link from "next/link";
import { notFound } from "next/navigation";

import VehicleFeatures from "components/vehicle/VehicleFeatures";
import VehicleFinance from "components/vehicle/VehicleFinance";
import VehicleGallery from "components/vehicle/VehicleGallery";
import VehicleSidebar from "components/vehicle/VehicleSidebar";
import VehicleDescription from "components/vehicle/VehicleDescription";
import VehicleSpecs from "components/vehicle/VehicleSpecs";

import { getVehicleBySlug } from "repositories/vehicle.repository";

type VehiclePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const categoryLabels = {
  nuovo: "Nuovo",
  usato: "Usato",
};

export default async function VehiclePage({ params }: VehiclePageProps) {
  const { slug } = await params;

  const vehicle = await getVehicleBySlug(slug);

  if (!vehicle || !vehicle.isPublished) {
    notFound();
  }

  const images = vehicle.images.map((image) => image.url);

  return (
    <main className="min-h-screen bg-background pt-28 text-foreground">
      <section className="container-page pb-24">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <VehicleGallery
              title={vehicle.title}
              images={images}
              categoryLabel={categoryLabels[vehicle.category]}
            />
          </div>

          <VehicleSidebar vehicle={vehicle} />
        </div>

        <div className="mt-12 space-y-8">
          <VehicleDescription description={vehicle.description} />

          <VehicleSpecs vehicle={vehicle} />

          <VehicleFinance price={vehicle.price} />

          <VehicleFeatures features={vehicle.features} />
        </div>

        <div className="mt-12">
          <Link
            href="/marketplace"
            className="inline-flex rounded-full border border-white/10 px-6 py-3 font-semibold text-muted transition hover:border-primary/40 hover:text-primary"
          >
            ← Torna al marketplace
          </Link>
        </div>
      </section>
    </main>
  );
}
