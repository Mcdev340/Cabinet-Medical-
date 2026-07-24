import type { Metadata } from "next";
import { Suspense } from "react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AppointmentForm from "@/components/appointment/AppointmentForm";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: `Prendre rendez-vous — ${siteConfig.cabinetNom}`,
  description: "Réservez votre créneau en ligne, à toute heure.",
};

export default function RendezVousPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionTitle
          eyebrow="Prise de rendez-vous"
          title="Réservez votre créneau en ligne"
          description="Renseignez ce formulaire, notre secrétariat vous recontacte pour confirmer le créneau. Pour une demande urgente, contactez-nous directement par WhatsApp."
          align="center"
        />

        <Suspense fallback={null}>
          <AppointmentForm />
        </Suspense>
      </Container>
    </div>
  );
}
