import Link from "next/link";
import { redirect } from "next/navigation";
import { Car, LayoutDashboard, LogOut, Plus, Settings } from "lucide-react";
import { auth } from "auth";
import { logoutAction } from "actions/auth.action";
import AdminSidebarLink from "components/admin/AdminSidebarLink";

const adminLinks = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Veicoli", href: "/admin/vehicles", icon: Car },
  { label: "Nuovo veicolo", href: "/admin/vehicles/new", icon: Plus },
  { label: "Impostazioni", href: "/admin/settings", icon: Settings },
];

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <section className="admin-theme min-h-screen bg-[#f4f4f5] text-zinc-950">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="hidden h-screen flex-col border-r border-zinc-200 bg-white lg:flex">
          <div className="flex h-20 items-center border-b border-zinc-200 px-6">
            <Link href="/admin" className="flex flex-col leading-none">
              <span className="text-xl font-black tracking-[0.16em]">
                AFLUXURY
              </span>
              <span className="text-xs font-bold tracking-[0.42em] text-blue-600">
                ADMIN
              </span>
            </Link>
          </div>

          <nav className="flex-1 space-y-2 p-4">
            {adminLinks.map((link) => {
              const Icon = link.icon;

              return (
                <AdminSidebarLink
                  key={link.label}
                  label={link.label}
                  href={link.href}
                />
              );
            })}
          </nav>

          <div className="border-t border-zinc-200 p-4">
            <form action={logoutAction}>
              <button
                type="submit"
                className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-950"
              >
                <LogOut size={18} />
                Logout
              </button>
            </form>
          </div>
        </aside>

        <div className="flex min-w-0 flex-col">
          <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/90 backdrop-blur-xl lg:hidden">
            <div className="flex h-16 items-center justify-between px-4">
              <Link href="/admin" className="flex flex-col leading-none">
                <span className="text-lg font-black tracking-[0.16em]">
                  AFLUXURY
                </span>
                <span className="text-[10px] font-bold tracking-[0.42em] text-blue-600">
                  ADMIN
                </span>
              </Link>

              <Link
                href="/admin/vehicles/new"
                className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-bold text-white"
              >
                Nuovo
              </Link>
            </div>
          </header>

          <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </section>
  );
}
