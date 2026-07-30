import { CalendarCheck2, ShieldCheck, Star } from "lucide-react";
import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import IllustrationFrame from "@/components/ui/IllustrationFrame";
import Reveal from "@/components/ui/Reveal";
import { doctors } from "@/data/doctors";
import { averageRating, reviews } from "@/data/reviews";
import { siteConfig } from "@/data/config";
import { HeroConsultationIllustration } from "@/components/illustrations";

export default function Hero() {

  return (
    <section className="relative overflow-hidden py-8 sm:py-10 lg:py-12">
      <div className="blob-accent animate-blob-drift pointer-events-none absolute -right-32 -top-24 h-112 w-md rounded-full" />
      <div className="blob-primary animate-blob-drift pointer-events-none absolute -left-40 bottom-0 h-96 w-[24rem] rounded-full [animation-delay:2s]" />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="reveal-on-load flex flex-col items-start gap-6">
          <span className="rounded-full bg-primary-soft px-4 py-1.5 text-sm font-medium text-primary">
            Cabinet médical à {siteConfig.adresse.ville}
          </span>

          <h1 className="text-4xl font-semibold leading-tight text-primary sm:text-5xl">
            Des soins attentifs, à l&rsquo;écoute de votre famille.
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-ink-soft">
            Consultez nos médecins, réservez votre créneau en ligne à toute
            heure, et recevez une confirmation rapide de notre secrétariat.
            Simple, rassurant, sans appel à passer.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/rendez-vous" variant="primary">
              <CalendarCheck2 size={18} strokeWidth={1.75} />
              Prendre rendez-vous
            </ButtonLink>
            <ButtonLink href="/medecins" variant="ghost">
              Découvrir nos médecins
            </ButtonLink>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink-soft">
            <span className="flex items-center gap-2">
              <ShieldCheck
                size={18}
                strokeWidth={1.75}
                className="text-accent-dark"
              />
              {doctors.length} médecins spécialistes
            </span>
            <span className="flex items-center gap-2">
              <Star
                size={18}
                strokeWidth={1.75}
                className="fill-accent text-accent"
              />
              {averageRating()}/5 sur {reviews.length}+ avis patients
            </span>
          </div>
        </div>

        <Reveal
          variant="right"
          delay={150}
          className="relative flex flex-col items-center gap-6"
        >
          <IllustrationFrame className="w-full max-w-md">
            <HeroConsultationIllustration className="h-auto w-full" />
          </IllustrationFrame>
        </Reveal>
      </Container>
    </section>
  );
}
