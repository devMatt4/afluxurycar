import Link from "next/link";
import { LockKeyhole, ShieldCheck } from "lucide-react";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect-error";

import { auth, signIn } from "auth";

type AdminLoginPageProps = {
  searchParams: Promise<{
    error?: string;
  }>;
};

export default async function AdminLoginPage({
  searchParams,
}: AdminLoginPageProps) {
  const session = await auth();
  const params = await searchParams;

  if (session) {
    redirect("/admin");
  }

  async function login(formData: FormData) {
    "use server";

    try {
      await signIn("credentials", {
        email: formData.get("email"),
        password: formData.get("password"),
        redirectTo: "/admin",
      });
    } catch (error) {
      if (isRedirectError(error)) {
        throw error;
      }

      redirect("/admin/login?error=1");
    }
  }

  return (
    <main className="relative flex min-h-screen overflow-hidden bg-[#050507] px-4 py-10 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(37,99,235,.28),transparent_34rem),radial-gradient(circle_at_80%_75%,rgba(59,130,246,.16),transparent_30rem)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,.15),rgba(0,0,0,.86))]" />

      <div className="container-page relative grid min-h-[calc(100vh-5rem)] items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <section className="hidden lg:block">
          <Link href="/" className="inline-flex flex-col leading-none">
            <span className="text-2xl font-black tracking-[0.22em]">
              AFLUXURY
            </span>
            <span className="mt-1 text-xs font-bold tracking-[0.6em] text-primary-soft">
              CAR
            </span>
          </Link>

          <div className="mt-16 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-primary-soft">
              <ShieldCheck size={16} />
              Area riservata
            </div>

            <h1 className="mt-7 text-6xl font-black leading-[0.95] tracking-tight">
              Gestisci il marketplace.
              <span className="mt-3 block text-primary-soft">
                In modo sicuro.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-400">
              Accedi al pannello amministrativo per caricare veicoli, modificare
              annunci, gestire immagini e controllare la pubblicazione.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-md lg:ml-auto">
          <form
            action={login}
            className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 shadow-[0_30px_100px_rgba(0,0,0,.55)] backdrop-blur-2xl"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-blue-600/25">
              <LockKeyhole size={25} />
            </div>

            <div className="mt-7">
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-primary-soft">
                AFLUXURYCAR Admin
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight">
                Bentornato
              </h2>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Inserisci le credenziali per accedere alla dashboard.
              </p>
            </div>

            <div className="mt-8 space-y-5">
              <label className="block">
                <span className="text-sm font-semibold text-zinc-300">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="admin@afluxurycar.it"
                  className="mt-2 h-13 w-full rounded-2xl border border-white/10 bg-black/45 px-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-primary focus:bg-black/70"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-zinc-300">
                  Password
                </span>
                <input
                  name="password"
                  type="password"
                  required
                  placeholder="••••••••••••"
                  className="mt-2 h-13 w-full rounded-2xl border border-white/10 bg-black/45 px-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-primary focus:bg-black/70"
                />
              </label>
            </div>

            {params.error ? (
              <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-300">
                Email o password non corretti.
              </div>
            ) : null}

            <button
              type="submit"
              className="mt-8 h-13 w-full rounded-2xl bg-primary font-black text-white shadow-lg shadow-blue-600/20 transition hover:bg-primary-hover"
            >
              Accedi alla dashboard
            </button>

            <Link
              href="/"
              className="mt-6 block text-center text-sm font-semibold text-zinc-500 transition hover:text-white"
            >
              Torna al sito
            </Link>
          </form>
        </section>
      </div>
    </main>
  );
}
