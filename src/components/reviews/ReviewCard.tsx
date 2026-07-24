import { Quote } from "lucide-react";
import RatingStars from "@/components/ui/RatingStars";
import { Review } from "@/types";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex flex-col gap-4 rounded-card border border-line bg-surface p-6">
      <Quote size={22} strokeWidth={1.5} className="text-accent" />
      <p className="text-sm leading-relaxed text-ink">{review.commentaire}</p>
      <div className="mt-auto flex items-center justify-between pt-2">
        <div>
          <p className="font-heading text-sm font-semibold text-primary">{review.nom}</p>
          <p className="text-xs text-ink-soft">{review.date}</p>
        </div>
        <RatingStars note={review.note} />
      </div>
    </div>
  );
}
