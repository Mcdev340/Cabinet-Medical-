import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageBanner from "@/components/ui/PageBanner";
import Reveal from "@/components/ui/Reveal";
import DoctorCard from "@/components/doctors/DoctorCard";
import { doctors } from "@/data/doctors";
import { siteConfig } from "@/data/config";
import { MedicalTeamIllustration } from "@/components/illustrations";

export const metadata: Metadata = {
  title: `Nos médecins — ${siteConfig.cabinetNom}`,
  description: "Découvrez l'équipe médicale du cabinet et leurs spécialités.",
};

export default function MedecinsPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <Reveal>
          <PageBanner
            eyebrow="Notre équipe"
            title="Une équipe médicale à votre écoute"
            description="Consultez les profils de nos médecins : spécialité, expérience, langues parlées et jours de consultation. Vous pouvez prendre rendez-vous directement avec le praticien de votre choix."
            illustration={<MedicalTeamIllustration className="h-auto w-full" />}
          />
        </Reveal>

        <div className="stagger-children grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.slug} doctor={doctor} />
          ))}
        </div>
      </Container>
    </div>
  );
}
