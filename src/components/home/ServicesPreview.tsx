import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import ServiceCard from "@/components/services/ServiceCard";
import { services } from "@/data/services";

export default function ServicesPreview() {
  return (
    <section className="bg-primary-soft/40 py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <Reveal>
          <SectionTitle
            eyebrow="Nos prestations"
            title="Un accompagnement complet, sous le même toit"
            description="Consultations générales et spécialisées, bilans biologiques : nos équipes couvrent l'essentiel des besoins de santé de votre famille."
            align="center"
          />
        </Reveal>

        <div className="stagger-children grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <Reveal className="flex justify-center">
          <ButtonLink href="/services" variant="ghost">
            Voir tous nos services
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
