import type { Metadata } from "next";
import { MapPin, Clock, Car, Bus, Phone, Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import PageBanner from "@/components/ui/PageBanner";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig, whatsappLink } from "@/data/config";
import { ClinicBuildingIllustration } from "@/components/illustrations";

export const metadata: Metadata = {
  title: `Contact & localisation — ${siteConfig.cabinetNom}`,
  description: "Adresse, horaires et moyens de contact du cabinet.",
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <Reveal>
          <PageBanner
            eyebrow="Contact & localisation"
            title="Venez nous rencontrer"
            description="Une question, un empêchement, une urgence ? Contactez-nous par téléphone, e-mail ou WhatsApp — ou passez directement au cabinet."
            illustration={<ClinicBuildingIllustration className="h-auto w-full" />}
          />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal variant="left" className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 rounded-card border border-line bg-surface p-6">
              <h2 className="font-heading text-lg font-semibold text-primary">Adresse</h2>
              <p className="flex items-start gap-3 text-sm text-ink-soft">
                <MapPin size={18} strokeWidth={1.75} className="mt-0.5 shrink-0 text-accent-dark" />
                {siteConfig.adresse.ligne1}, {siteConfig.adresse.ligne2}
                <br />
                {siteConfig.adresse.ville}
              </p>
            </div>

            <div className="flex flex-col gap-4 rounded-card border border-line bg-surface p-6">
              <h2 className="font-heading text-lg font-semibold text-primary">Horaires</h2>
              <div className="flex flex-col gap-2 text-sm text-ink-soft">
                {siteConfig.horaires.map((horaire) => (
                  <p key={horaire.jours} className="flex items-center gap-3">
                    <Clock size={18} strokeWidth={1.75} className="shrink-0 text-accent-dark" />
                    {horaire.jours} : {horaire.heures}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-card border border-line bg-surface p-6">
              <h2 className="font-heading text-lg font-semibold text-primary">Accès</h2>
              <p className="flex items-start gap-3 text-sm text-ink-soft">
                <Bus size={18} strokeWidth={1.75} className="mt-0.5 shrink-0 text-accent-dark" />
                {siteConfig.acces.transport}
              </p>
              <p className="flex items-start gap-3 text-sm text-ink-soft">
                <Car size={18} strokeWidth={1.75} className="mt-0.5 shrink-0 text-accent-dark" />
                {siteConfig.acces.parking}
              </p>
            </div>

            <div className="flex flex-col gap-4 rounded-card border border-line bg-surface p-6">
              <h2 className="font-heading text-lg font-semibold text-primary">Nous contacter</h2>
              <a
                href={`tel:${siteConfig.telephoneSecretariat.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-sm text-ink-soft hover:text-primary"
              >
                <Phone size={18} strokeWidth={1.75} className="shrink-0 text-accent-dark" />
                {siteConfig.telephoneSecretariat}
              </a>
              <a
                href={`mailto:${siteConfig.emailContact}`}
                className="flex items-center gap-3 text-sm text-ink-soft hover:text-primary"
              >
                <Mail size={18} strokeWidth={1.75} className="shrink-0 text-accent-dark" />
                {siteConfig.emailContact}
              </a>

              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <ButtonLink
                  href={whatsappLink("Bonjour, j'ai une question pour le cabinet.")}
                  target="_blank"
                  className="flex-1 justify-center"
                >
                  Écrire sur WhatsApp
                </ButtonLink>
                <ButtonLink href="/rendez-vous" variant="ghost" className="flex-1 justify-center">
                  Prendre rendez-vous
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" delay={100} className="overflow-hidden rounded-card border border-line shadow-sm lg:sticky lg:top-24">
            <iframe
              src={siteConfig.googleMapsEmbedUrl}
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Localisation ${siteConfig.cabinetNom}`}
            />
          </Reveal>
        </div>
      </Container>
    </div>
  );
}
