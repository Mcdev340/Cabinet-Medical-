import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, UserRound, CalendarDays } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import Avatar from "@/components/ui/Avatar";
import { CategoryIllustration } from "@/components/illustrations";
import {
  getHealthArticleBySlug,
  getCategoryLabel,
  healthArticles,
} from "@/data/healthLibrary";
import { getDoctorBySlug } from "@/data/doctors";
import { siteConfig } from "@/data/config";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return healthArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const article = getHealthArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.titre} — Bibliothèque de santé — ${siteConfig.cabinetNom}`,
    description: article.extrait,
  };
}

export default async function HealthArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = getHealthArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const author = getDoctorBySlug(article.auteurSlug);
  const formattedDate = new Date(article.datePublication).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="flex flex-col gap-10">
      <Link
        href="/a-propos/bibliotheque-sante"
        className="inline-flex w-fit items-center gap-2 text-sm font-medium text-accent-dark hover:text-primary"
      >
        <ArrowLeft size={16} strokeWidth={1.75} />
        Retour à la bibliothèque
      </Link>

      <CategoryIllustration category={article.categorie} className="h-44 sm:h-52" />

      <header className="flex flex-col gap-4">
        <span className="w-fit rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-dark">
          {getCategoryLabel(article.categorie)}
        </span>
        <h1 className="font-heading text-3xl font-semibold text-primary sm:text-4xl">
          {article.titre}
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-ink-soft">{article.extrait}</p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-ink-soft">
          {author && (
            <span className="flex items-center gap-2">
              <UserRound size={16} strokeWidth={1.75} />
              Rédigé par {author.nom}
            </span>
          )}
          <span className="flex items-center gap-2">
            <Clock size={16} strokeWidth={1.75} />
            {article.dureeLecture} de lecture
          </span>
          <span className="flex items-center gap-2">
            <CalendarDays size={16} strokeWidth={1.75} />
            {formattedDate}
          </span>
        </div>
      </header>

      {author && (
        <div className="flex items-center gap-4 rounded-card border border-line bg-surface p-5">
          <Avatar initiales={author.initiales} seed={author.slug} size="md" />
          <div>
            <p className="font-heading text-sm font-semibold text-primary">{author.nom}</p>
            <p className="text-xs text-accent-dark">{author.specialite}</p>
            <p className="mt-1 text-xs text-ink-soft">{author.bio}</p>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-8">
        {article.contenu.map((section, index) => (
          <section key={index} className="flex flex-col gap-3">
            {section.titre && (
              <h2 className="font-heading text-xl font-semibold text-primary">{section.titre}</h2>
            )}
            {section.paragraphes.map((paragraph, pIndex) => (
              <p key={pIndex} className="leading-relaxed text-ink-soft">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>

      <div className="rounded-card border border-accent/20 bg-accent-soft px-6 py-5 text-sm text-ink-soft">
        <strong className="text-primary">Avertissement médical :</strong> cet article est
        fourni à titre informatif et ne constitue pas un avis médical personnalisé. Pour
        un diagnostic ou un traitement adapté à votre situation, consultez un
        professionnel de santé.
      </div>

      {author && (
        <div className="flex flex-col items-center gap-4 rounded-card bg-primary-soft px-8 py-10 text-center">
          <h2 className="font-heading text-xl font-semibold text-primary">
            Besoin d&rsquo;un avis personnalisé ?
          </h2>
          <p className="max-w-md text-sm text-ink-soft">
            Prenez rendez-vous avec {author.nom.replace("Dr ", "le Dr ")} pour discuter de
            votre situation en consultation.
          </p>
          <ButtonLink href={`/rendez-vous?medecin=${author.slug}`}>
            Prendre rendez-vous
          </ButtonLink>
        </div>
      )}
    </article>
  );
}
