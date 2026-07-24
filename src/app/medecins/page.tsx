import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import DoctorCard from "@/components/doctors/DoctorCard";
import { doctors } from "@/data/doctors";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: `Nos médecins — ${siteConfig.cabinetNom}`,
  description: "Découvrez l'équipe médicale du cabinet et leurs spécialités.",
};

export default function MedecinsPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionTitle
          eyebrow="Notre équipe"
          title="Une équipe médicale à votre écoute"
          description="Consultez les profils de nos médecins : spécialité, expérience, langues parlées et jours de consultation. Vous pouvez prendre rendez-vous directement avec le praticien de votre choix."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.slug} doctor={doctor} />
          ))}
        </div>
      </Container>
    </div>
  );
}
