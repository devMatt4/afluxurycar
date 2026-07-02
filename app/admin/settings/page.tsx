import { redirect } from "next/navigation";

import { auth } from "auth";

import SiteSettingsForm from "components/admin/settings/SiteSettingsForm";

import { getSiteSettings } from "../../../repositories/site-settings";

export default async function AdminSettingsPage() {
  const session = await auth();

  if (!session) {
    redirect("/admin/login");
  }

  const settings = await getSiteSettings();

  if (!settings) {
    throw new Error("Impostazioni del sito non trovate.");
  }

  return (
    <div className="mx-auto max-w-5xl">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-primary">
          Admin
        </p>

        <h1 className="mt-3 text-4xl font-black tracking-tight">
          Impostazioni sito
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-500">
          Gestisci le informazioni principali del sito che verranno utilizzate
          nelle pagine pubbliche.
        </p>
      </div>

      <SiteSettingsForm
        settings={{
          siteName: settings.siteName,

          phonePrimary: settings.phonePrimary,
          phoneSecondary: settings.phoneSecondary ?? "",

          whatsapp: settings.whatsapp ?? "",

          email: settings.email,

          instagram: settings.instagram ?? "",
          facebook: settings.facebook ?? "",

          address: settings.address ?? "",
        }}
      />
    </div>
  );
}
