import { JSX } from "react";
import { HealthCategory } from "@/types";

function PreventionIllustration() {
  return (
    <svg viewBox="0 0 120 80" fill="none" className="h-full w-full">
      <circle cx="60" cy="40" r="28" fill="#E3F3EF" />
      <path d="M48 40l8 8 16-16" stroke="#2CA58D" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="24" cy="20" r="8" fill="#E7EEF3" />
      <circle cx="96" cy="60" r="10" fill="#E7EEF3" />
    </svg>
  );
}

function HeartIllustration() {
  return (
    <svg viewBox="0 0 120 80" fill="none" className="h-full w-full">
      <path
        d="M60 58c-14-10-28-20-28-34 0-10 8-16 16-16 6 0 10 3 12 8 2-5 6-8 12-8 8 0 16 6 16 16 0 14-14 24-28 34z"
        fill="#2CA58D"
        opacity="0.35"
      />
      <path d="M30 50h60" stroke="#1B4B6B" strokeWidth="3" strokeLinecap="round" opacity="0.2" />
    </svg>
  );
}

function NutritionIllustration() {
  return (
    <svg viewBox="0 0 120 80" fill="none" className="h-full w-full">
      <circle cx="44" cy="48" r="18" fill="#E3F3EF" />
      <path d="M44 36v24M36 44h16" stroke="#2CA58D" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="78" cy="50" rx="16" ry="12" fill="#FFD4B8" opacity="0.6" />
      <path d="M70 42c8-8 16-8 24 0" stroke="#2CA58D" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function ChildIllustration() {
  return (
    <svg viewBox="0 0 120 80" fill="none" className="h-full w-full">
      <circle cx="50" cy="30" r="14" fill="#FFD4B8" />
      <rect x="36" y="44" width="28" height="24" rx="8" fill="#2CA58D" opacity="0.35" />
      <circle cx="82" cy="34" r="10" fill="#E7EEF3" />
      <path d="M76 34h12" stroke="#1B4B6B" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}

function WomanIllustration() {
  return (
    <svg viewBox="0 0 120 80" fill="none" className="h-full w-full">
      <circle cx="60" cy="28" r="16" fill="#F5D0C5" />
      <path d="M44 28c0-9 7-16 16-16s16 7 16 16" fill="#2CA58D" opacity="0.4" />
      <path d="M44 56c8-12 24-12 32 0" stroke="#1B4B6B" strokeWidth="3" strokeLinecap="round" opacity="0.25" />
    </svg>
  );
}

function GeneralIllustration() {
  return (
    <svg viewBox="0 0 120 80" fill="none" className="h-full w-full">
      <rect x="36" y="24" width="48" height="32" rx="10" fill="#E7EEF3" />
      <path d="M52 40h16M60 32v16" stroke="#2CA58D" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

const categoryMap: Record<HealthCategory, () => JSX.Element> = {
  prevention: PreventionIllustration,
  "maladies-courantes": GeneralIllustration,
  nutrition: NutritionIllustration,
  "sante-femme": WomanIllustration,
  "sante-enfant": ChildIllustration,
  coeur: HeartIllustration,
};

export default function CategoryIllustration({
  category,
  className = "",
}: {
  category: HealthCategory;
  className?: string;
}) {
  const Illustration = categoryMap[category] ?? GeneralIllustration;

  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary-soft to-accent-soft ${className}`}
      aria-hidden="true"
    >
      <Illustration />
    </div>
  );
}
