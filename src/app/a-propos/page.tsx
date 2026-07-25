import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, History, Target, Clock, ShieldCheck } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/data/config";
import { missionText, visionText } from "@/data/about";

export const metadata: Metadata = {
  title: `À propos — ${siteConfig.cabinetNom}`,
  description:
    "Découvrez notre histoire, notre mission et notre bibliothèque de santé — des réponses fiables à vos questions, rédigées par nos médecins.",
};

const highlights = [
  {
    href: "/a-propos/histoire",
    icon: History,
    titre: "Notre histoire",
    description: "De l\u2019ouverture du cabinet à aujourd\u2019hui, un parcours au service de la communauté.",
  },
  {
    href: "/a-propos/mission-vision",
    icon: Target,
    titre: "Mission & vision",
    description: "Nos valeurs, notre engagement et la vision qui guide chaque consultation.",
  },
  {
    href: "/a-propos/bibliotheque-sante",
    icon: BookOpen,
    titre: "Bibliothèque de santé",
    description: "Articles validés par nos médecins — comme un conseil médical disponible 24h/24.",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="relative overflow-hidden rounded-card bg-primary px-8 py-12 text-white sm:px-12 sm:py-16">
        <div className="blob-accent pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative flex flex-col gap-6 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-white/70">
            À propos de nous
          </span>
          <h1 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
            Votre santé mérite des soins et des réponses de confiance
          </h1>
          <p className="text-base leading-relaxed text-white/85">
            {siteConfig.cabinetNom} accompagne les familles de Dakar depuis plus de
            quinze ans. Au-delà des consultations, nous mettons à votre disposition une
            bibliothèque de santé rédigée par nos praticiens — pour vous informer, vous
            rassurer et vous orienter, à toute heure.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-white/80">
            <span className="flex items-center gap-2">
              <Clock size={16} strokeWidth={1.75} />
              Contenus disponibles 24h/24, 7j/7
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck size={16} strokeWidth={1.75} />
              Validés par nos médecins
            </span>
          </div>
        </div>
      </div>

      <SectionTitle
        eyebrow="Explorer"
        title="Tout savoir sur notre cabinet"
        description="Parcourez nos sections pour découvrir qui nous sommes, ce qui nous anime et comment nous pouvons répondre à vos questions de santé."
      />

      <div className="grid gap-6 sm:grid-cols-3">
        {highlights.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col gap-4 rounded-card border border-line bg-surface p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent-dark">
                <Icon size={22} strokeWidth={1.75} />
              </div>
              <h2 className="font-heading text-lg font-semibold text-primary group-hover:text-accent-dark">
                {item.titre}
              </h2>
              <p className="text-sm leading-relaxed text-ink-soft">{item.description}</p>
            </Link>
          );
        })}
      </div>

      <div className="grid gap-8 rounded-card border border-line bg-surface p-8 sm:grid-cols-2">
        <div className="flex flex-col gap-3">
          <h2 className="font-heading text-lg font-semibold text-primary">Notre mission</h2>
          <p className="text-sm leading-relaxed text-ink-soft">{missionText}</p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-heading text-lg font-semibold text-primary">Notre vision</h2>
          <p className="text-sm leading-relaxed text-ink-soft">{visionText}</p>
        </div>
      </div>

      <div className="flex justify-center rounded-card bg-primary-soft px-8 py-10 text-center">
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-heading text-xl font-semibold text-primary">
            Une question de santé ?
          </h2>
          <p className="max-w-md text-sm text-ink-soft">
            Consultez notre bibliothèque de santé ou prenez rendez-vous avec l&rsquo;un de
            nos médecins pour un avis personnalisé.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/a-propos/bibliotheque-sante">Bibliothèque de santé</ButtonLink>
            <ButtonLink href="/rendez-vous" variant="ghost">
              Prendre rendez-vous
            </ButtonLink>
          </div>
        </div>
      </div>
    </>
  );
}
