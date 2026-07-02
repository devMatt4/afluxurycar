import { CheckCircle2 } from "lucide-react";

type VehicleFeaturesProps = {
  features: string[];
};

export default function VehicleFeatures({ features }: VehicleFeaturesProps) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
          Equipaggiamento
        </p>

        <h2 className="mt-3 text-3xl font-black text-white">
          Dotazioni principali
        </h2>
      </div>

      {features.length > 0 ? (
        <div className="grid gap-x-8 gap-y-5 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition hover:border-primary/20 hover:bg-white/[0.04]"
            >
              <CheckCircle2
                size={20}
                className="mt-0.5 shrink-0 text-primary"
              />

              <span className="font-medium leading-7 text-zinc-200">
                {feature}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-white/10 p-8 text-center">
          <p className="text-zinc-400">
            Nessuna dotazione specifica indicata per questo veicolo.
          </p>
        </div>
      )}
    </section>
  );
}
