import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import DoctorCard from "@/components/doctors/DoctorCard";
import { doctors } from "@/data/doctors";

export default function DoctorsPreview() {
  const featured = doctors.slice(0, 4);

  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionTitle
              eyebrow="Notre équipe"
              title="Des médecins expérimentés, à votre écoute"
              description="Chaque médecin du cabinet consulte selon un planning régulier, avec la possibilité de choisir directement votre praticien lors de la prise de rendez-vous."
            />
            <ButtonLink href="/medecins" variant="ghost" className="shrink-0">
              Voir toute l&rsquo;équipe
            </ButtonLink>
          </div>
        </Reveal>

        <div className="stagger-children grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((doctor) => (
            <DoctorCard key={doctor.slug} doctor={doctor} />
          ))}
        </div>
      </Container>
    </section>
  );
}
