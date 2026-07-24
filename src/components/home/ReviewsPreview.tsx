import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { ButtonLink } from "@/components/ui/Button";
import ReviewCard from "@/components/reviews/ReviewCard";
import { reviews, averageRating } from "@/data/reviews";

export default function ReviewsPreview() {
  const topReviews = [...reviews]
    .sort((a, b) => b.note - a.note)
    .slice(0, 3);

  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionTitle
          eyebrow={`Note moyenne ${averageRating()}/5`}
          title="Ce que disent nos patients"
          description="Des avis authentiques, recueillis auprès des patients ayant consulté au cabinet."
          align="center"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className="flex justify-center">
          <ButtonLink href="/avis" variant="ghost">
            Lire tous les avis
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
