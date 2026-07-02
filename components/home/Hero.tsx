import Link from "next/link";
import { ArrowRight, Car, Search, ShieldCheck } from "lucide-react";

const stats = [
  {
    value: "100+",
    label: "Veicoli disponibili",
  },
  {
    value: "24h",
    label: "Risposta rapida",
  },
  {
    value: "2",
    label: "Nuovo e usato",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.22),transparent_34rem),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.12),transparent_30rem),linear-gradient(135deg,#09090b_0%,#111113_48%,#050507_100%)]" />

      <div className="container-page relative grid min-h-[calc(100vh-5rem)] items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="text-center lg:text-left">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary lg:mx-0">
            <Car size={16} />
            Marketplace Automotive
          </div>

          <h1 className="text-balance text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Trova l’auto giusta.
            <span className="primary-gradient mt-3 block">Con stile.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg lg:mx-0">
            AFLUXURYCAR propone auto nuove e usate selezionate, con possibilità
            di noleggio giornaliero o per eventi.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="/marketplace"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:scale-[1.02] hover:bg-primary-hover"
            >
              Esplora veicoli
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/noleggio"
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:border-primary/40 hover:text-primary"
            >
              Noleggio eventi
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_10px_40px_rgba(0,0,0,.22)]"
              >
                <p className="text-3xl font-black text-white">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="glass-panel rounded-[2rem] p-4 sm:p-6">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-surface-soft via-background to-surface p-6 sm:p-8">
              <div className="absolute right-[-70px] top-[-70px] h-44 w-44 rounded-full bg-primary/20 blur-3xl" />

              <div className="relative">
                <div className="mb-8 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-primary">
                      Ricerca rapida
                    </p>
                    <h2 className="mt-2 text-2xl font-black text-white">
                      Che auto cerchi?
                    </h2>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <Search size={22} />
                  </div>
                </div>

                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Marca o modello"
                    className="h-14 w-full rounded-2xl border border-white/10 bg-black/40 px-5 text-white outline-none transition placeholder:text-muted-soft focus:border-primary"
                  />

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <select className="h-14 rounded-2xl border border-white/10 bg-black/40 px-5 text-white outline-none transition focus:border-primary">
                      <option>Categoria</option>
                      <option>Nuovo</option>
                      <option>Usato</option>
                    </select>

                    <select className="h-14 rounded-2xl border border-white/10 bg-black/40 px-5 text-white outline-none transition focus:border-primary">
                      <option>Budget</option>
                      <option>Fino a 10.000€</option>
                      <option>10.000€ - 25.000€</option>
                      <option>25.000€ - 50.000€</option>
                      <option>Oltre 50.000€</option>
                    </select>
                  </div>

                  <Link
                    href="/marketplace"
                    className="flex h-14 w-full items-center justify-center rounded-2xl bg-gray-500 font-bold uppercase tracking-[0.12em] text-black transition hover:bg-primary hover:text-white"
                  >
                    Cerca ora
                  </Link>
                </div>

                <div className="mt-8 rounded-3xl border border-primary/20 bg-primary/10 p-5">
                  <div className="flex items-start gap-3">
                    <ShieldCheck
                      className="mt-1 shrink-0 text-primary"
                      size={22}
                    />

                    <div>
                      <h3 className="font-bold text-white">
                        Contatto diretto con il venditore
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-muted">
                        Seleziona il veicolo che ti interessa, contatta il
                        venditore e accordatevi per una prova!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 left-6 hidden rounded-3xl border border-white/10 bg-background/85 p-5 backdrop-blur-xl md:block">
            <p className="text-sm text-muted">Servizi disponibili</p>
            <p className="mt-1 text-xl font-black text-white">
              Nuovo · Usato · Noleggio eventi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
