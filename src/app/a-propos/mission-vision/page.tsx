import type { Metadata } from "next";
import {
  HeartHandshake,
  Award,
  Accessibility,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import IllustrationFrame from "@/components/ui/IllustrationFrame";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/data/config";
import { missionText, visionText, valeurs } from "@/data/about";
import { MedicalTeamIllustration } from "@/components/illustrations";

export const metadata: Metadata = {
  title: `Mission & vision — ${siteConfig.cabinetNom}`,
  description:
    "Notre mission, notre vision et les valeurs qui guident notre pratique médicale.",
};

const iconMap: Record<string, LucideIcon> = {
  HeartHandshake,
  Award,
  Accessibility,
  Lightbulb,
};

export default function MissionVisionPage() {
  return (
    <>
      <div className="mb-8 flex justify-start">
        <ButtonLink href="/a-propos" variant="ghost">
          Retour à la page À propos
        </ButtonLink>
      </div>

      <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
        <Reveal>
          <SectionTitle
            eyebrow="Ce qui nous guide"
            title="Mission, vision & valeurs"
            description="Chaque consultation, chaque article de notre bibliothèque de santé et chaque interaction avec nos patients est guidée par un engagement clair envers votre bien-être."
          />
        </Reveal>
        <Reveal variant="scale" delay={100} className="hidden lg:block">
          <IllustrationFrame glow="accent">
            <MedicalTeamIllustration className="h-44 w-72" />
          </IllustrationFrame>
        </Reveal>
      </div>

      <div className="stagger-children grid gap-6 sm:grid-cols-2">
        <div className="card-lift flex flex-col gap-4 rounded-card border border-line bg-surface p-8">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Notre mission
          </span>
          <p className="text-base leading-relaxed text-ink-soft">
            {missionText}
          </p>
        </div>
        <div className="card-lift flex flex-col gap-4 rounded-card border border-line bg-surface p-8">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Notre vision
          </span>
          <p className="text-base leading-relaxed text-ink-soft">
            {visionText}
          </p>
        </div>
      </div>

      <Reveal>
        <div>
          <h2 className="font-heading text-xl font-semibold text-primary">
            Nos valeurs
          </h2>
          <div className="stagger-children mt-6 grid gap-6 sm:grid-cols-2">
            {valeurs.map((valeur) => {
              const Icon = iconMap[valeur.icone] || HeartHandshake;
              return (
                <div
                  key={valeur.titre}
                  className="card-lift flex flex-col gap-4 rounded-card border border-line bg-surface p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent-dark transition-transform duration-300 hover:scale-110">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-primary">
                    {valeur.titre}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    {valeur.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </>
  );
}
