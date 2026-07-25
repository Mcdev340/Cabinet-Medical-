import Link from "next/link";
import { Clock, UserRound } from "lucide-react";
import { HealthArticle } from "@/types";
import { getCategoryLabel } from "@/data/healthLibrary";
import { getDoctorBySlug } from "@/data/doctors";

export default function HealthArticleCard({ article }: { article: HealthArticle }) {
  const author = getDoctorBySlug(article.auteurSlug);

  return (
    <Link
      href={`/a-propos/bibliotheque-sante/${article.slug}`}
      className="group flex flex-col gap-4 rounded-card border border-line bg-surface p-6 transition-shadow hover:shadow-md"
    >
      <span className="w-fit rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-dark">
        {getCategoryLabel(article.categorie)}
      </span>

      <h3 className="font-heading text-lg font-semibold text-primary group-hover:text-accent-dark">
        {article.titre}
      </h3>

      <p className="text-sm leading-relaxed text-ink-soft">{article.extrait}</p>

      <div className="mt-auto flex flex-wrap items-center gap-4 text-xs text-ink-soft">
        {author && (
          <span className="flex items-center gap-1.5">
            <UserRound size={14} strokeWidth={1.75} />
            {author.nom}
          </span>
        )}
        <span className="flex items-center gap-1.5">
          <Clock size={14} strokeWidth={1.75} />
          {article.dureeLecture}
        </span>
      </div>
    </Link>
  );
}
