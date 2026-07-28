import { JSX } from "react";
import Image from "next/image";
import { Service } from "@/types";

function GeneralCare() {
  return (
    <svg viewBox="0 0 160 100" fill="none" className="h-full w-full">
      <circle cx="80" cy="50" r="30" fill="#E3F3EF" />
      <path
        d="M80 35v30M65 50h30"
        stroke="#2CA58D"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Pediatrics() {
  return (
    <svg viewBox="0 0 160 100" fill="none" className="h-full w-full">
      <circle cx="70" cy="38" r="16" fill="#FFD4B8" />
      <rect
        x="54"
        y="54"
        width="32"
        height="28"
        rx="8"
        fill="#2CA58D"
        opacity="0.35"
      />
      <circle cx="108" cy="42" r="10" fill="#E7EEF3" />
    </svg>
  );
}

function Cardiology() {
  return (
    <svg viewBox="0 0 160 100" fill="none" className="h-full w-full">
      <path
        d="M80 68c-16-12-32-22-32-38 0-12 10-18 20-18 8 0 12 4 12 10 0-6 4-10 12-10 10 0 20 6 20 18 0 16-16 26-32 38z"
        fill="#2CA58D"
        opacity="0.35"
      />
      <path
        d="M40 58h80"
        stroke="#1B4B6B"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.15"
      />
    </svg>
  );
}

function Dermatology() {
  return (
    <svg viewBox="0 0 160 100" fill="none" className="h-full w-full">
      <circle cx="80" cy="50" r="28" fill="#FFD4B8" opacity="0.45" />
      <circle cx="68" cy="44" r="4" fill="#2CA58D" opacity="0.4" />
      <circle cx="92" cy="56" r="3" fill="#2CA58D" opacity="0.3" />
    </svg>
  );
}

function Gynecology() {
  return (
    <svg viewBox="0 0 160 100" fill="none" className="h-full w-full">
      <circle cx="80" cy="36" r="18" fill="#F5D0C5" />
      <path d="M62 36c0-10 8-18 18-18s18 8 18 18" fill="#E3F3EF" />
      <path
        d="M62 70c10-14 26-14 36 0"
        stroke="#2CA58D"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  );
}

function Lab() {
  return (
    <svg viewBox="0 0 160 100" fill="none" className="h-full w-full">
      <path
        d="M64 24h32l-12 44H76L64 24z"
        fill="#E7EEF3"
        stroke="#1B4B6B"
        strokeWidth="2"
        opacity="0.5"
      />
      <rect
        x="72"
        y="68"
        width="16"
        height="12"
        rx="4"
        fill="#2CA58D"
        opacity="0.35"
      />
      <circle cx="88" cy="52" r="6" fill="#2CA58D" opacity="0.25" />
    </svg>
  );
}

const serviceMap: Record<string, () => JSX.Element> = {
  "consultation-generale": GeneralCare,
  pediatrie: Pediatrics,
  cardiologie: Cardiology,
  dermatologie: Dermatology,
  gynecologie: Gynecology,
  "analyses-bilans": Lab,
};

const serviceImageAltText: Record<string, string> = {
  "consultation-generale": "Consultation médicale générale avec un patient",
  pediatrie: "Suivi pédiatrique et consultation des enfants",
  cardiologie: "Consultation cardiologique et bilan cardiovasculaire",
  dermatologie: "Diagnostic et traitement des affections cutanées",
  dentisterie: "Soins dentaires et consultation dentaire",
  gynecologie: "Consultation gynécologique et suivi des femmes",
  "analyses-bilans": "Analyses biologiques et bilans de santé",
  vaccinations: "Vaccins et vaccination recommandée",
  "soins-durgence": "Soins d'urgence et prise en charge rapide",
  "depistage-prevention": "Dépistage médical et prévention santé",
};

const aboveTheFoldServices = [
  "consultation-generale",
  "pediatrie",
  "cardiologie",
  "dermatologie",
];

export default function ServiceIllustration({
  service,
  className = "",
}: {
  service: Service;
  className?: string;
}) {
  // If the service has an image, display it
  if (service.image) {
    const isAboveFold = aboveTheFoldServices.includes(service.slug);
    const altText = serviceImageAltText[service.slug] || service.titre;

    return (
      <div
        className={`relative h-40 w-full overflow-hidden rounded-t-card bg-gradient-to-br from-accent-soft to-primary-soft sm:h-52 ${className}`}
        aria-hidden="true"
      >
        <Image
          src={service.image}
          alt={altText}
          fill
          priority={isAboveFold}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-center"
        />
      </div>
    );
  }

  // Otherwise, show the SVG illustration
  const Illustration = serviceMap[service.slug] ?? GeneralCare;

  return (
    <div
      className={`flex h-40 w-full items-center justify-center overflow-hidden rounded-t-card bg-gradient-to-br from-accent-soft to-primary-soft sm:h-52 ${className}`}
      aria-hidden="true"
    >
      <Illustration />
    </div>
  );
}
