import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const footerLinks = [
  { label: "Marketplace", href: "/marketplace" },
  { label: "Auto nuove", href: "/marketplace?tipo=nuovo" },
  { label: "Auto usate", href: "/marketplace?tipo=usato" },
  { label: "Noleggio", href: "/noleggio" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:py-16">
        <div>
          <Link href="/" className="inline-flex flex-col leading-none">
            <span className="text-2xl font-black tracking-[0.18em] text-white">
              AFLUXURY
            </span>
            <span className="text-xs font-semibold tracking-[0.48em] text-primary">
              CAR
            </span>
          </Link>

          <p className="mt-5 max-w-md text-sm leading-7 text-muted">
            Marketplace dedicato ad auto nuove e usate selezionate. Offriamo
            inoltre un servizio di noleggio auto per eventi e noleggio
            giornaliero con assistenza dedicata.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
            Navigazione
          </h3>

          <div className="mt-5 flex flex-col gap-3">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted transition hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
            Contatti
          </h3>

          <div className="mt-5 flex flex-col gap-4 text-sm text-muted">
            <a
              href="tel:+393272938732"
              className="flex items-center gap-3 transition hover:text-primary"
            >
              <Phone size={17} />
              +39 327 293 8732 - +39 334 983 1084
            </a>

            <a
              href="mailto:info@afluxurycar.it"
              className="flex items-center gap-3 transition hover:text-primary"
            >
              <Mail size={17} />
              afluxurycar@gmal.com
            </a>

            <div className="flex items-center gap-3">
              <MapPin size={17} />
              Italia
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container-page flex flex-col gap-3 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} AFLUXURYCAR. Tutti i diritti riservati.
          </p>

          <div className="flex gap-5">
            <Link href="/privacy" className="transition hover:text-primary">
              Privacy Policy
            </Link>

            <Link href="/cookie" className="transition hover:text-primary">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
