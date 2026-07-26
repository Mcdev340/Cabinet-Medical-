"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/data/config";
import { aboutSubLinks } from "@/data/about";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/medecins", label: "Médecins" },
  { href: "/services", label: "Services" },
  { href: "/avis", label: "Avis" },
  { href: "/contact", label: "Contact" },
];

const aboutLinks = aboutSubLinks.filter((link) => link.href !== "/a-propos");

export default function Header() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const pathname = usePathname();
  const isAboutSection = pathname.startsWith("/a-propos");

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="inline-flex items-center gap-3">
          <Image
            src="/logo.png"
            alt={siteConfig.cabinetNom}
            width={44}
            height={44}
            className="rounded-md object-contain"
          />
          <span className="font-heading text-lg font-semibold text-primary">
            {siteConfig.cabinetNom}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.slice(0, 3).map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-accent-dark"
                    : "text-ink-soft hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <Link
              href="/a-propos"
              className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${
                isAboutSection
                  ? "text-accent-dark"
                  : "text-ink-soft hover:text-primary"
              }`}
            >
              À propos
              <ChevronDown
                size={14}
                strokeWidth={2}
                className={`transition-transform ${aboutOpen ? "rotate-180" : ""}`}
              />
            </Link>

            {aboutOpen && (
              <div className="absolute top-full left-1/2 z-50 mt-2 w-56 -translate-x-1/2 rounded-xl border border-line bg-white py-2 shadow-lg">
                {aboutLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 text-sm text-ink-soft transition-colors hover:bg-primary-soft hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(3).map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-accent-dark"
                    : "text-ink-soft hover:text-primary"
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

          <div className="mt-1 flex flex-col gap-1">
            <Link
              href="/a-propos"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-primary-soft"
            >
              À propos
            </Link>
            <div className="ml-3 flex flex-col gap-0.5 border-l border-line pl-3">
              {aboutLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-ink-soft hover:bg-primary-soft hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

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
