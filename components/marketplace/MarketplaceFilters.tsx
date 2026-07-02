import Link from "next/link";
import {
  Calendar,
  CarFront,
  CircleDollarSign,
  Fuel,
  Gauge,
  Search,
  Settings,
  SlidersHorizontal,
  X,
} from "lucide-react";
import type { MarketplaceVehicleFilters } from "repositories/vehicle.repository";

type MarketplaceFiltersProps = {
  params: {
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
  };
  brands: string[];
};

export default function MarketplaceFilters({
  params,
  brands,
}: MarketplaceFiltersProps) {
  const hasFilters = Object.values(params).some(Boolean);

  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <form className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#141416]/90 shadow-[0_24px_80px_rgba(0,0,0,.35)] backdrop-blur-xl">
        <div className="border-b border-white/10 bg-white/[0.035] p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-blue-600/20">
              <SlidersHorizontal size={21} />
            </div>

            <div>
              <h2 className="text-lg font-black text-white">Filtri</h2>
              <p className="text-sm text-muted">Trova il veicolo giusto.</p>
            </div>
          </div>
        </div>

        <div className="space-y-5 p-5">
          <label className="block">
            <span className="text-sm font-bold text-zinc-300">Ricerca</span>

            <div className="relative mt-2">
              <Search
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-primary"
              />

              <input
                name="search"
                placeholder="BMW, Audi, 320d..."
                defaultValue={params.search ?? ""}
                className="h-12 w-full rounded-2xl border border-white/10 bg-black/40 pl-11 pr-4 text-white outline-none transition placeholder:text-muted-soft focus:border-primary focus:bg-black/60"
              />
            </div>
          </label>

          <FilterSelect
            name="brand"
            label="Marca"
            icon={CarFront}
            defaultValue={params.brand}
          >
            <option value="">Tutte le marche</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </FilterSelect>

          <FilterSelect
            name="tipo"
            label="Categoria"
            icon={Gauge}
            defaultValue={params.tipo}
          >
            <option value="">Tutte</option>
            <option value="nuovo">Nuovo</option>
            <option value="usato">Usato</option>
          </FilterSelect>

          <FilterSelect
            name="fuel"
            label="Carburante"
            icon={Fuel}
            defaultValue={params.fuel}
          >
            <option value="">Tutti</option>
            <option value="benzina">Benzina</option>
            <option value="diesel">Diesel</option>
            <option value="ibrida">Ibrida</option>
            <option value="elettrica">Elettrica</option>
            <option value="gpl">GPL</option>
            <option value="metano">Metano</option>
          </FilterSelect>

          <FilterSelect
            name="transmission"
            label="Cambio"
            icon={Settings}
            defaultValue={params.transmission}
          >
            <option value="">Tutti</option>
            <option value="manuale">Manuale</option>
            <option value="automatico">Automatico</option>
          </FilterSelect>

          <div>
            <div className="mb-2 flex items-center gap-2 text-sm font-bold text-zinc-300">
              <CircleDollarSign size={16} className="text-primary" />
              Prezzo
            </div>

            <div className="grid grid-cols-2 gap-3">
              <FilterInput
                name="minPrice"
                placeholder="Min"
                type="number"
                defaultValue={params.minPrice}
              />

              <FilterInput
                name="maxPrice"
                placeholder="Max"
                type="number"
                defaultValue={params.maxPrice}
              />
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center gap-2 text-sm font-bold text-zinc-300">
              <Calendar size={16} className="text-primary" />
              Anno
            </div>

            <div className="grid grid-cols-2 gap-3">
              <FilterInput
                name="minYear"
                placeholder="Da"
                type="number"
                defaultValue={params.minYear}
              />

              <FilterInput
                name="maxYear"
                placeholder="A"
                type="number"
                defaultValue={params.maxYear}
              />
            </div>
          </div>

          <FilterSelect
            name="sort"
            label="Ordina"
            icon={SlidersHorizontal}
            defaultValue={params.sort}
          >
            <option value="recent">Più recenti</option>
            <option value="price-asc">Prezzo crescente</option>
            <option value="price-desc">Prezzo decrescente</option>
            <option value="year-desc">Anno più recente</option>
            <option value="mileage-asc">Meno chilometri</option>
          </FilterSelect>
        </div>

        <div className="border-t border-white/10 bg-black/20 p-5">
          <button
            type="submit"
            className="h-12 w-full rounded-2xl bg-primary text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-primary-hover"
          >
            Applica filtri
          </button>

          {hasFilters ? (
            <Link
              href="/marketplace"
              className="mt-3 flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/10 text-sm font-bold text-muted transition hover:border-primary/40 hover:text-primary"
            >
              <X size={16} />
              Reset filtri
            </Link>
          ) : null}
        </div>
      </form>
    </aside>
  );
}

function FilterInput({
  name,
  type = "text",
  defaultValue,
  placeholder,
}: {
  name: string;
  type?: string;
  defaultValue?: string;
  placeholder?: string;
}) {
  return (
    <input
      name={name}
      type={type}
      defaultValue={defaultValue ?? ""}
      placeholder={placeholder}
      className="h-12 w-full rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none transition placeholder:text-muted-soft focus:border-primary focus:bg-black/60"
    />
  );
}

function FilterSelect({
  name,
  label,
  defaultValue,
  children,
  icon: Icon,
}: {
  name: string;
  label: string;
  defaultValue?: string;
  children: React.ReactNode;
  icon: typeof Search;
}) {
  return (
    <label className="block">
      <span className="flex items-center gap-2 text-sm font-bold text-zinc-300">
        <Icon size={16} className="text-primary" />
        {label}
      </span>

      <select
        name={name}
        defaultValue={defaultValue ?? ""}
        className="mt-2 h-12 w-full rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none transition focus:border-primary focus:bg-black/60"
      >
        {children}
      </select>
    </label>
  );
}
