import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Avatar from "@/components/ui/Avatar";
import { Doctor } from "@/types";

const specialtyGradients: Record<string, string> = {
  "Médecine générale": "from-primary-soft to-accent-soft",
  Cardiologie: "from-accent-soft to-primary-soft",
  Pédiatrie: "from-accent-soft/80 to-primary-soft/80",
};

export default function DoctorCard({ doctor }: { doctor: Doctor }) {
  const gradient = specialtyGradients[doctor.specialite] ?? "from-primary-soft to-accent-soft";

  return (
    <Link
      href={`/medecins/${doctor.slug}`}
      className="card-lift group flex flex-col overflow-hidden rounded-card border border-line bg-surface"
    >
      <div
        className={`relative flex h-28 items-center justify-center bg-gradient-to-br ${gradient}`}
      >
        <div className="animate-float-slow">
          <Avatar initiales={doctor.initiales} seed={doctor.slug} size="lg" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(44,165,141,0.15),transparent_50%)]" />
      </div>

      <div className="flex flex-col gap-4 p-6">
        <div>
          <h3 className="font-heading text-lg font-semibold text-primary">{doctor.nom}</h3>
          <p className="text-sm font-medium text-accent-dark">{doctor.specialite}</p>
        </div>

        <p className="text-sm text-ink-soft">{doctor.anneesExperience} ans d&rsquo;expérience</p>

        <span className="mt-auto flex items-center gap-1.5 text-sm font-medium text-primary">
          Voir le profil
          <ArrowRight size={16} strokeWidth={1.75} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
