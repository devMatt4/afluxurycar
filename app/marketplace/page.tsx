import MarketplaceFilters from "components/marketplace/MarketplaceFilters";
import MarketplaceToolbar from "components/marketplace/MarketplaceToolbar";
import VehicleGrid from "components/marketplace/VehicleGrid";
import {
  getAvailableVehicleBrands,
  getMarketplaceVehicles,
  type MarketplaceVehicleFilters,
} from "repositories/vehicle.repository";

type MarketplacePageProps = {
  searchParams: Promise<{
    search?: string;
    tipo?: "nuovo" | "usato";
    brand?: string;
    fuel?: MarketplaceVehicleFilters["fuel"];
    transmission?: MarketplaceVehicleFilters["transmission"];
    minPrice?: string;
    maxPrice?: string;
    minYear?: string;
    maxYear?: string;
    sort?: MarketplaceVehicleFilters["sort"];
  }>;
};

function toNumber(value?: string) {
  if (!value) return undefined;

  const number = Number(value);

  return Number.isNaN(number) ? undefined : number;
}

export default async function MarketplacePage({
  searchParams,
}: MarketplacePageProps) {
  const params = await searchParams;
  const brands = await getAvailableVehicleBrands();

  const vehicles = await getMarketplaceVehicles({
    search: params.search,
    category: params.tipo,
    brand: params.brand,
    fuel: params.fuel,
    transmission: params.transmission,
    minPrice: toNumber(params.minPrice),
    maxPrice: toNumber(params.maxPrice),
    minYear: toNumber(params.minYear),
    maxYear: toNumber(params.maxYear),
    sort: params.sort ?? "recent",
  });

  return (
    <main className="min-h-screen bg-background pt-28 text-foreground">
      <section className="container-page pb-24">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-primary">
            Marketplace
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
            Trova la tua prossima auto.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            Sfoglia i veicoli disponibili, filtra per caratteristiche e apri la
            scheda completa per contattare direttamente il venditore.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          <MarketplaceFilters params={params} brands={brands} />

          <div className="space-y-8">
            <MarketplaceToolbar total={vehicles.length} />
            <VehicleGrid vehicles={vehicles} />
          </div>
        </div>
      </section>
    </main>
  );
}
