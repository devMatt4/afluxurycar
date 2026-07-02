"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Car, LayoutDashboard, Plus, Settings } from "lucide-react";
import clsx from "clsx";

type AdminSidebarLinkProps = {
  label: string;
  href: string;
};

const icons = {
  Dashboard: LayoutDashboard,
  Veicoli: Car,
  "Nuovo veicolo": Plus,
  Impostazioni: Settings,
};

export default function AdminSidebarLink({
  label,
  href,
}: AdminSidebarLinkProps) {
  const pathname = usePathname();
  const Icon = icons[label as keyof typeof icons];

  const isActive =
    pathname === href || (href !== "/admin" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition",
        isActive
          ? "bg-blue-50 text-blue-700"
          : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950"
      )}
    >
      {Icon ? <Icon size={18} /> : null}
      {label}
    </Link>
  );
}
