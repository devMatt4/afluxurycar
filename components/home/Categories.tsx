import Link from "next/link";
import { ArrowRight, CalendarDays, CarFront, Sparkles } from "lucide-react";

const categories = [
  {
    title: "Auto Nuove",
    description:
      "Scopri le ultime novità disponibili e le vetture selezionate dal venditore.",
    icon: Sparkles,
    href: "/marketplace?tipo=nuovo",
  },
  {
    title: "Auto Usate",
    description:
      "Occasioni selezionate con fotografie, dettagli tecnici e informazioni complete.",
    icon: CarFront,
    href: "/marketplace?tipo=usato",
  },
  {
    title: "Noleggio Eventi",
    description:
      "Richiedi informazioni per noleggio giornaliero, cerimonie ed eventi speciali.",
    icon: CalendarDays,
    href: "/noleggio",
  },
];

export default function Categories() {
  return (
    <section className="py-24">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Servizi
          </span>

          <h2 className="mt-4 text-balance text-4xl font-black text-white md:text-5xl">
            Acquisto o noleggio, tutto in modo semplice
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            AFLUXURYCAR propone veicoli nuovi e usati selezionati appositamente
            dal nostro team. Per il noleggio, il cliente potrà richiedere un
            contatto dedicato per giornate, eventi e cerimonie.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.title}
                href={category.href}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-2 hover:border-primary/40"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition group-hover:bg-primary/20" />

                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-white">
                    {category.title}
                  </h3>

                  <p className="mt-4 leading-7 text-muted">
                    {category.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 font-semibold text-primary">
                    Scopri di più
                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
