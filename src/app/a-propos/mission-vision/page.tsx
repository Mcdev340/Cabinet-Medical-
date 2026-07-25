import type { Metadata } from "next";
import {
  HeartHandshake,
  Award,
  Accessibility,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { siteConfig } from "@/data/config";
import { missionText, visionText, valeurs } from "@/data/about";

export const metadata: Metadata = {
  title: `Mission & vision — ${siteConfig.cabinetNom}`,
  description: "Notre mission, notre vision et les valeurs qui guident notre pratique médicale.",
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
      <SectionTitle
        eyebrow="Ce qui nous guide"
        title="Mission, vision & valeurs"
        description="Chaque consultation, chaque article de notre bibliothèque de santé et chaque interaction avec nos patients est guidée par un engagement clair envers votre bien-être."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-4 rounded-card border border-line bg-surface p-8">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Notre mission
          </span>
          <p className="text-base leading-relaxed text-ink-soft">{missionText}</p>
        </div>
        <div className="flex flex-col gap-4 rounded-card border border-line bg-surface p-8">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Notre vision
          </span>
          <p className="text-base leading-relaxed text-ink-soft">{visionText}</p>
        </div>
      </div>

      <div>
        <h2 className="font-heading text-xl font-semibold text-primary">Nos valeurs</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {valeurs.map((valeur) => {
            const Icon = iconMap[valeur.icone] || HeartHandshake;
            return (
              <div
                key={valeur.titre}
                className="flex flex-col gap-4 rounded-card border border-line bg-surface p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent-dark">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-primary">
                  {valeur.titre}
                </h3>
                <p className="text-sm leading-relaxed text-ink-soft">{valeur.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
