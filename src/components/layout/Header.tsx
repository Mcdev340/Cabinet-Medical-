"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/data/config";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/medecins", label: "Médecins" },
  { href: "/services", label: "Services" },
  { href: "/avis", label: "Avis" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="font-heading text-lg font-semibold text-primary">
          {siteConfig.cabinetNom}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive ? "text-accent-dark" : "text-ink-soft hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href="/rendez-vous" className="!px-5 !py-2.5 text-sm">
            Prendre rendez-vous
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex items-center justify-center rounded-lg p-2 text-primary md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line bg-white px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-primary-soft"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/rendez-vous"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-xl bg-accent px-3 py-2.5 text-center text-sm font-heading font-medium text-white"
          >
            Prendre rendez-vous
          </Link>
        </nav>
      )}
    </header>
  );
}
