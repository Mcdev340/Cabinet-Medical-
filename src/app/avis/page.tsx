/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ReviewCard from "@/components/reviews/ReviewCard";
import { ButtonLink } from "@/components/ui/Button";
import { reviews, averageRating } from "@/data/reviews";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: `Avis des patients — ${siteConfig.cabinetNom}`,
  description: "Découvrez les témoignages de nos patients.",
};

export default function AvisPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionTitle
          title="La confiance de nos patients"
          description="Ces témoignages sont partagés par des patients ayant consulté au cabinet. Ils sont actuellement gérés manuellement et pourront évoluer vers un affichage dynamique (Google Reviews)."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className="flex justify-center rounded-card bg-primary-soft px-8 py-10 text-center">
          <div className="flex flex-col items-center gap-4">
            <h2 className="font-heading text-xl font-semibold text-primary">
              Vous avez été suivi au cabinet ?
            </h2>
            <p className="max-w-md text-sm text-ink-soft">
              Partagez votre expérience en nous contactant directement par
              WhatsApp.
            </p>
            <ButtonLink href="/contact">Nous contacter</ButtonLink>
          </div>
        </div>
      </Container>
    </div>
  );
}
