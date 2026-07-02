"use client";

import { useActionState } from "react";
import { Save } from "lucide-react";
import { updateSiteSettingsAction } from "actions/site-settings.action";
import type { SiteSettingsValues } from "schemas/site-settings.schema";

type SiteSettingsFormProps = {
  settings: SiteSettingsValues;
};

export default function SiteSettingsForm({ settings }: SiteSettingsFormProps) {
  const [state, formAction, isPending] = useActionState(
    updateSiteSettingsAction,
    null
  );

  return (
    <form action={formAction} className="mt-8 space-y-8">
      <section className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-black">Informazioni principali</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Field
            label="Nome sito"
            name="siteName"
            defaultValue={settings.siteName}
          />

          <Field
            label="Email"
            name="email"
            type="email"
            defaultValue={settings.email}
          />

          <Field
            label="Telefono principale"
            name="phonePrimary"
            defaultValue={settings.phonePrimary}
          />

          <Field
            label="Telefono secondario"
            name="phoneSecondary"
            defaultValue={settings.phoneSecondary}
          />

          <Field
            label="WhatsApp"
            name="whatsapp"
            defaultValue={settings.whatsapp}
          />

          <Field
            label="Indirizzo"
            name="address"
            defaultValue={settings.address}
          />
        </div>
      </section>

      <section className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-black">Social</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Field
            label="Instagram"
            name="instagram"
            defaultValue={settings.instagram}
          />

          <Field
            label="Facebook"
            name="facebook"
            defaultValue={settings.facebook}
          />
        </div>
      </section>

      {state?.message ? (
        <div
          className={
            state.success
              ? "rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm font-bold text-emerald-700"
              : "rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-bold text-red-700"
          }
        >
          {state.message}
        </div>
      ) : null}

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-primary px-6 text-sm font-bold text-white transition hover:bg-primary-hover disabled:opacity-60"
        >
          <Save size={18} />
          {isPending ? "Salvataggio..." : "Salva impostazioni"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  defaultValue,
}: {
  label: string;
  name: keyof SiteSettingsValues;
  type?: string;
  defaultValue?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-bold text-zinc-600">{label}</span>

      <input
        name={name}
        type={type}
        defaultValue={defaultValue ?? ""}
        className="h-12 rounded-2xl border border-zinc-300 px-4 outline-none transition focus:border-primary"
      />
    </label>
  );
}
