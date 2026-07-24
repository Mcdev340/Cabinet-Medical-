import { Star } from "lucide-react";

export default function RatingStars({ note }: { note: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`Note : ${note} sur 5`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={16}
          strokeWidth={1.5}
          className={index < note ? "fill-accent text-accent" : "fill-transparent text-line"}
        />
      ))}
    </div>
  );
}
