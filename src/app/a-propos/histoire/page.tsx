import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import IllustrationFrame from "@/components/ui/IllustrationFrame";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/data/config";
import { timelineEvents } from "@/data/about";
import { ClinicBuildingIllustration } from "@/components/illustrations";

export const metadata: Metadata = {
  title: `Notre histoire — ${siteConfig.cabinetNom}`,
  description: "L\u2019histoire du cabinet, de sa création à aujourd\u2019hui.",
};

export default function HistoirePage() {
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
            eyebrow="Notre parcours"
            title="Une histoire tissée avec la communauté"
            description="Depuis 2010, nous grandissons aux côtés des familles du quartier Point E et au-delà, en restant fidèles à nos valeurs d\u2019écoute et de proximité."
          />
        </Reveal>
        <Reveal variant="scale" delay={100} className="hidden lg:block">
          <IllustrationFrame glow="primary">
            <ClinicBuildingIllustration className="h-48 w-64" />
          </IllustrationFrame>
        </Reveal>
      </div>
      <div className="relative flex flex-col gap-0">
        {timelineEvents.map((event, index) => (
          <Reveal key={event.annee} delay={index * 80}>
            <div className="relative flex gap-6 pb-10 last:pb-0">
              {index < timelineEvents.length - 1 && (
                <span className="absolute left-[1.125rem] top-10 h-full w-px bg-line" />
              )}
              <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white transition-transform hover:scale-110">
                {index + 1}
              </div>
              <div className="card-lift flex flex-1 flex-col gap-2 rounded-card border border-line bg-surface p-6">
                <span className="text-sm font-semibold text-accent-dark">
                  {event.annee}
                </span>
                <h2 className="font-heading text-lg font-semibold text-primary">
                  {event.titre}
                </h2>
                <p className="text-sm leading-relaxed text-ink-soft">
                  {event.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
