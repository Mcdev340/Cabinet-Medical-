import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { GraduationCap, Languages, CalendarDays } from "lucide-react";
import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import Avatar from "@/components/ui/Avatar";
import { doctors, getDoctorBySlug } from "@/data/doctors";
import { siteConfig } from "@/data/config";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return doctors.map((doctor) => ({ slug: doctor.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) return {};
  return {
    title: `${doctor.nom} — ${siteConfig.cabinetNom}`,
    description: doctor.bio,
  };
}

export default async function DoctorPage({ params }: { params: Params }) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);

  if (!doctor) {
    notFound();
  }

  return (
    <div className="py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="flex flex-col items-start gap-5 rounded-card border border-line bg-surface p-8">
          <div className="relative h-40 w-40 overflow-hidden rounded-full border border-line bg-surface">
            {doctor.photo ? (
              <Image
                src={doctor.photo}
                alt={`Portrait de ${doctor.nom}`}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "top center",
                }}
              />
            ) : (
              <Avatar
                initiales={doctor.initiales}
                seed={doctor.slug}
                size="lg"
              />
            )}
          </div>
          <div>
            <h1 className="font-heading text-2xl font-semibold text-primary">
              {doctor.nom}
            </h1>
            <p className="text-sm font-medium text-accent-dark">
              {doctor.specialite}
            </p>
          </div>
          <p className="text-sm text-ink-soft">
            {doctor.anneesExperience} ans d&rsquo;expérience
          </p>

          <ButtonLink
            href={`/rendez-vous?medecin=${doctor.slug}`}
            className="w-full justify-center"
          >
            Prendre rendez-vous avec {doctor.nom.replace("Dr ", "le Dr ")}
          </ButtonLink>
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <h2 className="font-heading text-xl font-semibold text-primary">
              Présentation
            </h2>
            <p className="mt-3 leading-relaxed text-ink-soft">{doctor.bio}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-2 font-heading text-sm font-semibold text-primary">
                <GraduationCap size={18} strokeWidth={1.75} />
                Diplômes
              </span>
              <ul className="flex flex-col gap-1.5 text-sm text-ink-soft">
                {doctor.diplomes.map((diplome) => (
                  <li key={diplome}>{diplome}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-2 font-heading text-sm font-semibold text-primary">
                <Languages size={18} strokeWidth={1.75} />
                Langues parlées
              </span>
              <p className="text-sm text-ink-soft">
                {doctor.langues.join(", ")}
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:col-span-2">
              <span className="flex items-center gap-2 font-heading text-sm font-semibold text-primary">
                <CalendarDays size={18} strokeWidth={1.75} />
                Jours de consultation
              </span>
              <p className="text-sm text-ink-soft">
                {doctor.joursConsultation.join(", ")}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
