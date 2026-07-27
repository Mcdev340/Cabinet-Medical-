import Image from "next/image";
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
  const gradient =
    specialtyGradients[doctor.specialite] ?? "from-primary-soft to-accent-soft";

  return (
    <Link
      href={`/medecins/${doctor.slug}`}
      className="card-lift group flex flex-col overflow-hidden rounded-card border border-line bg-surface"
    >
      <div
        className={`relative h-72 overflow-hidden bg-gradient-to-br ${gradient}`}
      >
        {doctor.photo ? (
          <div className="absolute inset-0">
            <Image
              src={doctor.photo}
              alt={`Portrait de ${doctor.nom}`}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "top center",
              }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,0,0,0.15),transparent_50%)]" />
          </div>
        ) : (
          <div className="relative flex h-full items-center justify-center">
            <Avatar initiales={doctor.initiales} seed={doctor.slug} size="lg" />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 p-6">
        <div>
          <h3 className="font-heading text-lg font-semibold text-primary">
            {doctor.nom}
          </h3>
          <p className="text-sm font-medium text-accent-dark">
            {doctor.specialite}
          </p>
        </div>

        <p className="text-sm text-ink-soft">
          {doctor.anneesExperience} ans d&rsquo;expérience
        </p>

        <span className="mt-auto flex items-center gap-1.5 text-sm font-medium text-primary">
          Voir le profil
          <ArrowRight
            size={16}
            strokeWidth={1.75}
            className="transition-transform group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
