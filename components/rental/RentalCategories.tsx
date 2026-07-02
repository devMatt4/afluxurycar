import {
  BatteryCharging,
  BriefcaseBusiness,
  Car,
  CarFront,
  Trophy,
  Truck,
} from "lucide-react";

const categories = [
  {
    icon: Car,
    title: "City Car",
    description: "Ideali per la città, pratiche, compatte ed economiche.",
  },
  {
    icon: CarFront,
    title: "SUV & Crossover",
    description: "Comfort, spazio e tecnologia per ogni tipo di viaggio.",
  },
  {
    icon: Trophy,
    title: "Sportive & Premium",
    description: "Per chi cerca emozioni, prestazioni e design esclusivo.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business",
    description: "Soluzioni dedicate ad aziende, professionisti e flotte.",
  },
  {
    icon: BatteryCharging,
    title: "Elettriche & Ibride",
    description: "Mobilità sostenibile con le tecnologie più moderne.",
  },
  {
    icon: Truck,
    title: "Veicoli Commerciali",
    description: "Furgoni e mezzi da lavoro per privati e imprese.",
  },
];

export default function RentalCategories() {
  return (
    <section className="mt-28">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
          Tipologie disponibili
        </p>

        <h2 className="mt-4 text-4xl font-black text-white">
          Troviamo qualsiasi veicolo.
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
          Grazie alla nostra rete di partner possiamo ricercare praticamente
          qualsiasi categoria di veicolo per il tuo noleggio.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <article
              key={category.title}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#151518] p-8 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_60px_rgba(37,99,235,.15)]"
            >
              <div className="flex h-18 w-18 items-center justify-center rounded-3xl bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                <Icon size={34} />
              </div>

              <h3 className="mt-8 text-2xl font-black text-white">
                {category.title}
              </h3>

              <p className="mt-4 leading-8 text-zinc-400">
                {category.description}
              </p>

              <div className="mt-8 h-1 w-14 rounded-full bg-primary transition-all duration-300 group-hover:w-24" />
            </article>
          );
        })}
      </div>
    </section>
  );
}
