import Link from "next/link";
import { ArrowRight, CarFront } from "lucide-react";

export default function RentalHero() {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#17171b] via-[#111113] to-[#0b0b0d] px-8 py-16 lg:px-14 lg:py-24">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute -bottom-20 left-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative max-w-3xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
          <CarFront size={16} />
          Servizio Noleggio
        </div>

        <h1 className="text-5xl font-black leading-tight text-white md:text-6xl">
          Noleggio auto
          <br />
          <span className="text-primary">senza pensieri.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
          Cerchi un'auto da noleggiare per qualche giorno? Magari un viaggio o
          un evento importante? AFLUXURYCAR ti aiuta a trovare la soluzione
          migliore, con una consulenza completamente personalizzata.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contatti?servizio=noleggio"
            className="inline-flex h-14 items-center gap-3 rounded-2xl bg-primary px-8 font-bold text-white transition hover:bg-primary-hover"
          >
            Richiedi informazioni
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
