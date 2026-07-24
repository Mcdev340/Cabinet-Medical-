import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/data/config";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-primary text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3">
          <span className="font-heading text-xl font-semibold">{siteConfig.cabinetNom}</span>
          <p className="text-sm leading-relaxed text-white/70">{siteConfig.cabinetAccroche}</p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white/60">
            Navigation
          </h3>
          <Link href="/medecins" className="text-sm text-white/85 hover:text-white">
            Nos médecins
          </Link>
          <Link href="/services" className="text-sm text-white/85 hover:text-white">
            Nos services
          </Link>
          <Link href="/rendez-vous" className="text-sm text-white/85 hover:text-white">
            Prendre rendez-vous
          </Link>
          <Link href="/avis" className="text-sm text-white/85 hover:text-white">
            Avis des patients
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white/60">
            Contact
          </h3>
          <a
            href={`tel:${siteConfig.telephoneSecretariat.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-sm text-white/85 hover:text-white"
          >
            <Phone size={16} strokeWidth={1.5} />
            {siteConfig.telephoneSecretariat}
          </a>
          <a
            href={`mailto:${siteConfig.emailContact}`}
            className="flex items-center gap-2 text-sm text-white/85 hover:text-white"
          >
            <Mail size={16} strokeWidth={1.5} />
            {siteConfig.emailContact}
          </a>
          <span className="flex items-start gap-2 text-sm text-white/85">
            <MapPin size={16} strokeWidth={1.5} className="mt-0.5 shrink-0" />
            {siteConfig.adresse.ligne1}, {siteConfig.adresse.ville}
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white/60">
            Horaires
          </h3>
          {siteConfig.horaires.map((horaire) => (
            <span
              key={horaire.jours}
              className="flex items-center gap-2 text-sm text-white/85"
            >
              <Clock size={16} strokeWidth={1.5} className="shrink-0" />
              {horaire.jours} : {horaire.heures}
            </span>
          ))}
        </div>
      </Container>

      <div className="border-t border-white/10 py-5">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-white/60 sm:flex-row">
          <span>
            © {new Date().getFullYear()} {siteConfig.cabinetNom}. Tous droits réservés.
          </span>
          <span>Les demandes de rendez-vous en ligne sont soumises à confirmation.</span>
        </Container>
      </div>
    </footer>
  );
}
