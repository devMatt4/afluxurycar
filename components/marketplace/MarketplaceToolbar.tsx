type MarketplaceToolbarProps = {
  total: number;
};

export default function MarketplaceToolbar({ total }: MarketplaceToolbarProps) {
  return (
    <div className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">
          Risultati
        </p>

        <h2 className="mt-1 text-2xl font-black text-white">
          {total} {total === 1 ? "veicolo trovato" : "veicoli trovati"}
        </h2>
      </div>

      <p className="text-sm leading-6 text-muted">
        Clicca su un veicolo per aprire la scheda completa.
      </p>
    </div>
  );
}
