import { CalendarCheck2, ShieldCheck, Star } from "lucide-react";
import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { doctors } from "@/data/doctors";
import { averageRating, reviews } from "@/data/reviews";
import Avatar from "@/components/ui/Avatar";
import { siteConfig } from "@/data/config";

export default function Hero() {
  const featured = doctors[0];

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="blob-accent pointer-events-none absolute -right-32 -top-24 h-[28rem] w-[28rem] rounded-full" />
      <div className="blob-primary pointer-events-none absolute -left-40 bottom-0 h-[24rem] w-[24rem] rounded-full" />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="reveal-on-load flex flex-col items-start gap-6">
          <span className="rounded-full bg-primary-soft px-4 py-1.5 text-sm font-medium text-primary">
            Cabinet médical à {siteConfig.adresse.ville}
          </span>

          <h1 className="text-4xl font-semibold leading-tight text-primary sm:text-5xl">
            Des soins attentifs, à l&rsquo;écoute de votre famille.
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-ink-soft">
            Consultez nos médecins, réservez votre créneau en ligne à toute heure, et
            recevez une confirmation rapide de notre secrétariat. Simple, rassurant,
            sans appel à passer.
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
              <ShieldCheck size={18} strokeWidth={1.75} className="text-accent-dark" />
              {doctors.length} médecins spécialistes
            </span>
            <span className="flex items-center gap-2">
              <Star size={18} strokeWidth={1.75} className="fill-accent text-accent" />
              {averageRating()}/5 sur {reviews.length}+ avis patients
            </span>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="w-full max-w-sm rounded-card border border-line bg-surface p-6 shadow-xl shadow-primary/10">
            <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
              Confirmation de rendez-vous
            </span>

            <div className="mt-4 flex items-center gap-3">
              <Avatar initiales={featured.initiales} seed={featured.slug} size="md" />
              <div>
                <p className="font-heading font-semibold text-primary">{featured.nom}</p>
                <p className="text-sm text-ink-soft">{featured.specialite}</p>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between rounded-xl bg-primary-soft px-4 py-3">
              <span className="text-sm font-medium text-primary">Jeu. 24 juillet · 10h30</span>
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                En attente
              </span>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-ink-soft">
              Votre demande est transmise instantanément à notre secrétariat, qui vous
              confirme le créneau dans les meilleurs délais.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
