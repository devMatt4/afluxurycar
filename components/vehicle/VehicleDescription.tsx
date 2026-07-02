type VehicleDescriptionProps = {
  description: string;
};

export default function VehicleDescription({
  description,
}: VehicleDescriptionProps) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
        Descrizione
      </p>

      <h2 className="mt-3 text-3xl font-black text-white">
        Informazioni sul veicolo
      </h2>

      <p className="mt-6 whitespace-pre-line leading-8 text-zinc-400">
        {description}
      </p>
    </section>
  );
}
