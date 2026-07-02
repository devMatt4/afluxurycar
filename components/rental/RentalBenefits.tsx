import { BadgeCheck, CarFront, Clock3, Handshake } from "lucide-react";

const benefits = [
  {
    icon: CarFront,
    title: "Qualsiasi tipologia di veicolo",
    description:
      "City car, SUV, sportive, berline, auto elettriche o veicoli commerciali: troviamo la soluzione più adatta alle tue esigenze.",
  },
  {
    icon: BadgeCheck,
    title: "Preventivo personalizzato",
    description:
      "Ogni richiesta viene valutata singolarmente per offrirti una proposta costruita sulle tue necessità.",
  },
  {
    icon: Clock3,
    title: "Risposta rapida",
    description:
      "Il nostro team analizza la richiesta e ti ricontatta nel minor tempo possibile con una soluzione dedicata.",
  },
  {
    icon: Handshake,
    title: "Consulenza dedicata",
    description:
      "Ti seguiamo in ogni fase, dalla scelta del veicolo fino alla definizione della formula di noleggio.",
  },
];

export default function RentalBenefits() {
  return (
    <section className="mt-28">
      <div className="mb-12 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
          Perché scegliere noi
        </p>

        <h2 className="mt-4 text-4xl font-black text-white">
          Un servizio costruito su misura.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <article
              key={benefit.title}
              className="group flex gap-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.05]"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                <Icon size={28} />
              </div>

              <div>
                <h3 className="text-xl font-black text-white">
                  {benefit.title}
                </h3>

                <p className="mt-3 leading-8 text-zinc-400">
                  {benefit.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
