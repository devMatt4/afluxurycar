import { Mail } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#17171b] via-[#111113] to-[#09090b] px-8 py-16 text-center md:px-14 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-bold text-primary">
          <Mail size={16} />
          Contattaci
        </div>

        <h1 className="mt-6 text-5xl font-black leading-tight text-white md:text-6xl">
          Siamo a tua disposizione.
        </h1>

        <p className="mt-8 text-lg leading-8 text-zinc-300">
          Hai domande su un veicolo, sul noleggio oppure vuoi ricevere maggiori
          informazioni? Contattaci!
        </p>
      </div>
    </section>
  );
}
