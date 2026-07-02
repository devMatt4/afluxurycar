"use client";

type ContactFormProps = {
  defaultService?: string;
};

export default function ContactForm({ defaultService }: ContactFormProps) {
  return (
    <section className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
          Modulo di contatto
        </p>

        <h2 className="mt-4 text-4xl font-black text-white">
          Richiedi informazioni
        </h2>

        <p className="mt-5 leading-8 text-zinc-400">
          Compila il modulo qui sotto. Ti ricontatteremo il prima possibile con
          tutte le informazioni richieste.
        </p>
      </div>

      <form className="mt-10 space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Nome" name="name" placeholder="Mario Rossi" />

          <Field
            label="Email"
            name="email"
            type="email"
            placeholder="mario@email.it"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Telefono" name="phone" placeholder="+39 333 1234567" />

          <label className="block">
            <span className="text-sm font-bold text-zinc-300">Servizio</span>

            <select
              name="service"
              defaultValue={defaultService ?? ""}
              className="mt-2 h-13 w-full rounded-2xl border border-white/10 bg-black/35 px-4 text-white outline-none transition focus:border-primary"
            >
              <option value="">Seleziona...</option>
              <option value="acquisto">Acquisto veicolo</option>
              <option value="noleggio">Noleggio</option>
              <option value="permuta">Permuta</option>
              <option value="altro">Altro</option>
            </select>
          </label>
        </div>

        <label className="block">
          <span className="text-sm font-bold text-zinc-300">Messaggio</span>

          <textarea
            name="message"
            rows={7}
            placeholder="Scrivi qui il tuo messaggio..."
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/35 p-4 text-white outline-none transition focus:border-primary"
          />
        </label>

        <button
          type="submit"
          className="h-14 rounded-2xl bg-primary px-8 font-bold text-white transition hover:bg-primary-hover"
        >
          Invia richiesta
        </button>
      </form>
    </section>
  );
}

function Field({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-zinc-300">{label}</span>

      <input
        {...props}
        className="mt-2 h-13 w-full rounded-2xl border border-white/10 bg-black/35 px-4 text-white outline-none transition placeholder:text-zinc-500 focus:border-primary"
      />
    </label>
  );
}
