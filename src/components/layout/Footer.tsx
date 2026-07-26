import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/data/config";
import Container from "@/components/ui/Container";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";

function getInitials(nom: string) {
  const mots = nom.trim().split(/\s+/);
  if (mots.length === 1) return mots[0].slice(0, 2).toUpperCase();
  return (mots[0][0] + mots[mots.length - 1][0]).toUpperCase();
}

const cabinetLinks = [
  { href: "/a-propos", label: "À propos" },
  { href: "/medecins", label: "Nos médecins" },
  { href: "/services", label: "Nos services" },
];

const patientLinks = [
  { href: "/a-propos#bibliotheque-sante", label: "Bibliothèque de santé" },
  { href: "/rendez-vous", label: "Prendre rendez-vous" },
  { href: "/avis", label: "Avis des patients" },
];

const linkClasses = "text-sm text-white/80 transition-colors hover:text-white";

export default function Footer() {
  const hasSocial = Boolean(
    siteConfig.reseaux.facebook || siteConfig.reseaux.instagram,
  );

  return (
    <footer className="mt-24 bg-primary text-white">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-6">
        {/* Marque */}
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-2">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt={siteConfig.cabinetNom}
              width={44}
              height={44}
              className="rounded-md object-contain"
            />
            <span className="font-heading text-lg font-semibold leading-tight">
              {siteConfig.cabinetNom}
            </span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/70">
            {siteConfig.cabinetAccroche}
          </p>

          {hasSocial && (
            <div className="mt-1 flex items-center gap-2">
              {siteConfig.reseaux.facebook && (
                <a
                  href={siteConfig.reseaux.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Suivez-nous sur Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent"
                >
                  <FacebookIcon size={16} />
                </a>
              )}
              {siteConfig.reseaux.instagram && (
                <a
                  href={siteConfig.reseaux.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Suivez-nous sur Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent"
                >
                  <InstagramIcon size={16} />
                </a>
              )}
            </div>
          )}
        </div>

        {/* Cabinet */}
        <nav aria-label="Le cabinet" className="flex flex-col gap-4">
          <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-white/50">
            Le cabinet
          </h3>
          <ul className="flex flex-col gap-2.5">
            {cabinetLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClasses}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Patients */}
        <nav aria-label="Espace patients" className="flex flex-col gap-4">
          <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-white/50">
            Patients
          </h3>
          <ul className="flex flex-col gap-2.5">
            {patientLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClasses}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-white/50">
            Contact
          </h3>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href={`tel:${siteConfig.telephoneSecretariat.replace(/\s/g, "")}`}
                className="flex items-start gap-2.5 text-sm text-white/80 transition-colors hover:text-white"
              >
                <Phone
                  size={16}
                  strokeWidth={1.75}
                  className="mt-0.5 shrink-0 text-accent"
                />
                {siteConfig.telephoneSecretariat}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.emailContact}`}
                className="flex items-start gap-2.5 text-sm text-white/80 transition-colors hover:text-white"
              >
                <Mail
                  size={16}
                  strokeWidth={1.75}
                  className="mt-0.5 shrink-0 text-accent"
                />
                {siteConfig.emailContact}
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-white/80">
              <MapPin
                size={16}
                strokeWidth={1.75}
                className="mt-0.5 shrink-0 text-accent"
              />
              <span>
                {siteConfig.adresse.ligne1}
                <br />
                {siteConfig.adresse.ville}
              </span>
            </li>
          </ul>
        </div>

        {/* Horaires */}
        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-white/50">
            Horaires
          </h3>
          <ul className="flex flex-col gap-3">
            {siteConfig.horaires.map((horaire) => (
              <li
                key={horaire.jours}
                className="flex items-start gap-2.5 text-sm"
              >
                <Clock
                  size={16}
                  strokeWidth={1.75}
                  className="mt-0.5 shrink-0 text-accent"
                />
                <span>
                  <span className="block text-white">{horaire.jours}</span>
                  <span className="text-white/65">{horaire.heures}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-5">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs sm:flex-row">
          <span className="text-white/60">
            © {new Date().getFullYear()} {siteConfig.cabinetNom}. Tous droits
            réservés.
          </span>
          <span className="text-white/40">
            Les demandes de rendez-vous en ligne sont soumises à confirmation.
          </span>
        </Container>
      </div>
    </footer>
  );
}
