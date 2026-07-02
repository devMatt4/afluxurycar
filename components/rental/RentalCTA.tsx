import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function RentalCTA() {
  return (
    <section className="mt-28 overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-primary/20 via-[#151518] to-black p-8 text-center md:p-14">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
          Richiedi una consulenza
        </p>

        <h2 className="mt-5 text-4xl font-black leading-tight text-white md:text-5xl">
          Hai già in mente l’auto da noleggiare?
        </h2>

        <p className="mt-6 text-lg leading-8 text-zinc-300">
          Raccontaci le tue esigenze: durata, tipologia di veicolo e budget.
          AFLUXURYCAR ti aiuterà a trovare la soluzione più adatta.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/contatti?servizio=noleggio"
            className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-primary px-8 font-bold text-white transition hover:bg-primary-hover"
          >
            Richiedi informazioni
            <ArrowRight size={18} />
          </Link>

          <a
            href="tel:+390000000000"
            className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl border border-white/10 px-8 font-bold text-white transition hover:border-primary/40 hover:text-primary"
          >
            <PhoneCall size={18} />
            Chiama ora
          </a>
        </div>
      </div>
    </section>
  );
}
