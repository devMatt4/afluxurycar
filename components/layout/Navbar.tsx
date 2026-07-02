"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Nuovo", href: "/marketplace?tipo=nuovo" },
  { label: "Usato", href: "/marketplace?tipo=usato" },
  { label: "Noleggio", href: "/noleggio" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-black/85 backdrop-blur-2xl shadow-2xl"
          : "bg-transparent"
      )}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="text-xl font-black tracking-[0.20em] text-white transition group-hover:text-primary-soft">
            AFLUXURY
          </span>

          <span className="mt-1 text-[11px] font-bold tracking-[0.55em] text-primary-soft">
            CAR
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active =
              pathname === link.href ||
              (link.href.startsWith("/marketplace") &&
                pathname.startsWith("/marketplace"));

            return (
              <Link
                key={link.label}
                href={link.href}
                className={clsx(
                  "relative text-sm font-semibold transition",
                  active ? "text-white" : "text-zinc-400 hover:text-white"
                )}
              >
                {link.label}

                {active && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-primary-soft" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/marketplace"
            className="rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-primary-hover"
          >
            Esplora auto
          </Link>

          <Link
            href="/contatti"
            className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-primary hover:bg-primary/10"
          >
            Contattaci
          </Link>

          <Link
            href="/admin"
            className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:bg-white/5 hover:text-white"
          >
            Admin
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-black/95 backdrop-blur-xl lg:hidden">
          <div className="container-page flex flex-col gap-2 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-4 text-base font-semibold text-white transition hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/marketplace"
              className="mt-3 rounded-2xl bg-primary py-4 text-center font-bold text-white"
            >
              Esplora Marketplace
            </Link>

            <Link
              href="/contatti"
              className="rounded-2xl border border-white/10 py-4 text-center font-semibold text-white"
            >
              Contattaci
            </Link>

            <Link
              href="/admin"
              className="rounded-2xl border border-white/10 py-4 text-center font-semibold text-zinc-300"
            >
              Area Admin
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
