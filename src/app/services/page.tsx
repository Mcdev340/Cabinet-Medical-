import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageBanner from "@/components/ui/PageBanner";
import Reveal from "@/components/ui/Reveal";
import ServiceCard from "@/components/services/ServiceCard";
import { ButtonLink } from "@/components/ui/Button";
import { services } from "@/data/services";
import { siteConfig } from "@/data/config";
import { HeroConsultationIllustration } from "@/components/illustrations";

export const metadata: Metadata = {
  title: `Nos services — ${siteConfig.cabinetNom}`,
  description: "Découvrez l'ensemble des prestations proposées par le cabinet.",
};

export default function ServicesPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <Reveal>
          <PageBanner
            eyebrow="Nos prestations"
            title="Des soins adaptés à chaque étape de la vie"
            description="Du suivi pédiatrique aux bilans cardiovasculaires, notre cabinet propose un accompagnement complet pour vous et votre famille."
            illustration={<HeroConsultationIllustration className="h-auto w-full" />}
            glow="primary"
          />
        </Reveal>

        <div className="stagger-children grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <Reveal>
          <div className="flex justify-center rounded-card bg-primary-soft px-8 py-10 text-center">
            <div className="flex flex-col items-center gap-4">
              <h2 className="font-heading text-xl font-semibold text-primary">
                Une question sur une prestation ?
              </h2>
              <p className="max-w-md text-sm text-ink-soft">
                Notre secrétariat vous répond rapidement pour vous orienter vers le bon
                médecin.
              </p>
              <ButtonLink href="/rendez-vous">Prendre rendez-vous</ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
