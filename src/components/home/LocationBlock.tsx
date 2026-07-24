import { MapPin, Clock, Car } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/data/config";

export default function LocationBlock() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col gap-6">
          <SectionTitle
            eyebrow="Nous trouver"
            title="Un cabinet facile d'accès"
            description="Notre équipe vous accueille du lundi au samedi, dans un cadre lumineux et calme."
          />

          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <MapPin size={20} strokeWidth={1.75} className="mt-0.5 shrink-0 text-accent-dark" />
              <p className="text-sm text-ink-soft">
                {siteConfig.adresse.ligne1}, {siteConfig.adresse.ligne2}
                <br />
                {siteConfig.adresse.ville}
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Clock size={20} strokeWidth={1.75} className="mt-0.5 shrink-0 text-accent-dark" />
              <div className="text-sm text-ink-soft">
                {siteConfig.horaires.map((horaire) => (
                  <p key={horaire.jours}>
                    {horaire.jours} : {horaire.heures}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Car size={20} strokeWidth={1.75} className="mt-0.5 shrink-0 text-accent-dark" />
              <p className="text-sm text-ink-soft">{siteConfig.acces.parking}</p>
            </div>
          </div>

          <ButtonLink href="/contact" variant="ghost" className="self-start">
            Voir l&rsquo;itinéraire complet
          </ButtonLink>
        </div>

        <div className="overflow-hidden rounded-card border border-line shadow-sm">
          <iframe
            src={siteConfig.googleMapsEmbedUrl}
            width="100%"
            height="360"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Localisation ${siteConfig.cabinetNom}`}
          />
        </div>
      </Container>
    </section>
  );
}
