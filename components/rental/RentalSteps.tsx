import { ClipboardPen, Search, KeyRound } from "lucide-react";

const steps = [
  {
    icon: ClipboardPen,
    title: "1. Raccontaci cosa cerchi",
    description:
      "Indicaci il tipo di veicolo, la durata del noleggio e le tue esigenze.",
  },
  {
    icon: Search,
    title: "2. Cerchiamo la soluzione ideale",
    description:
      "Collaboriamo con partner selezionati per trovare l'offerta più adatta alle tue richieste.",
  },
  {
    icon: KeyRound,
    title: "3. Ricevi la proposta",
    description:
      "Ti ricontattiamo rapidamente con un preventivo personalizzato, senza alcun impegno.",
  },
];

export default function RentalSteps() {
  return (
    <section className="mt-24">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
          Come funziona
        </p>

        <h2 className="mt-4 text-4xl font-black text-white">
          Noleggiare un'auto è semplice.
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
          Pensiamo noi a trovare la soluzione migliore in base alle tue
          esigenze, senza farti perdere tempo tra decine di preventivi
          differenti.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <article
              key={step.title}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.05]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 text-primary transition group-hover:bg-primary group-hover:text-white">
                <Icon size={28} />
              </div>

              <h3 className="mt-8 text-2xl font-black text-white">
                {step.title}
              </h3>

              <p className="mt-4 leading-8 text-zinc-400">{step.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
