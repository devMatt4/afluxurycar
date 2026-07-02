import { Mail, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      <a
        href="tel:+393272938732"
        className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition hover:border-primary/40"
      >
        <Phone
          className="text-primary transition group-hover:scale-110"
          size={34}
        />

        <h2 className="mt-6 text-2xl font-black text-white">Telefono</h2>

        <p className="mt-3 text-zinc-400">Contattaci direttamente.</p>

        <p className="mt-6 text-lg font-bold text-white">+39 327 293 8732</p>
        <p className="mt-6 text-lg font-bold text-white">+39 334 983 1084</p>
      </a>

      <a
        href="mailto:afluxurycar@gmail.com"
        className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition hover:border-primary/40"
      >
        <Mail
          className="text-primary transition group-hover:scale-110"
          size={34}
        />

        <h2 className="mt-6 text-2xl font-black text-white">Email</h2>

        <p className="mt-3 text-zinc-400">
          Ti risponderemo il prima possibile.
        </p>

        <p className="mt-6 text-lg font-bold text-white">
          afluxurycar@gmail.com
        </p>
      </a>
    </section>
  );
}
