import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Avatar from "@/components/ui/Avatar";
import { Doctor } from "@/types";

export default function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <Link
      href={`/medecins/${doctor.slug}`}
      className="group flex flex-col gap-4 rounded-card border border-line bg-surface p-6 transition-shadow hover:shadow-lg hover:shadow-primary/10"
    >
      <Avatar initiales={doctor.initiales} seed={doctor.slug} size="lg" />

      <div>
        <h3 className="font-heading text-lg font-semibold text-primary">{doctor.nom}</h3>
        <p className="text-sm font-medium text-accent-dark">{doctor.specialite}</p>
      </div>

      <p className="text-sm text-ink-soft">{doctor.anneesExperience} ans d&rsquo;expérience</p>

      <span className="mt-auto flex items-center gap-1.5 text-sm font-medium text-primary">
        Voir le profil
        <ArrowRight size={16} strokeWidth={1.75} className="transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
