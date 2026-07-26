export default function MedicalTeamIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Illustration de l'équipe médicale"
    >
      <ellipse cx="240" cy="320" rx="180" ry="16" fill="#1B4B6B" opacity="0.07" />

      <circle cx="120" cy="150" r="34" fill="#F5D0C5" />
      <path d="M86 150c0-19 15-34 34-34s34 15 34 34" fill="#1B4B6B" />
      <rect x="86" y="184" width="68" height="100" rx="14" fill="#1B4B6B" />
      <rect x="98" y="210" width="44" height="8" rx="4" fill="#2CA58D" />

      <circle cx="240" cy="130" r="40" fill="#FFD4B8" />
      <path d="M200 130c0-22 18-40 40-40s40 18 40 40" fill="#2CA58D" />
      <rect x="200" y="170" width="80" height="114" rx="16" fill="#2CA58D" />
      <path d="M220 200h40M220 218h28" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
      <circle cx="240" cy="248" r="10" fill="#FFFFFF" opacity="0.35" />

      <circle cx="360" cy="150" r="34" fill="#F5D0C5" />
      <path d="M326 150c0-19 15-34 34-34s34 15 34 34" fill="#FFFFFF" stroke="#E2E8EE" strokeWidth="2" />
      <rect x="326" y="184" width="68" height="100" rx="14" fill="#FFFFFF" stroke="#E2E8EE" strokeWidth="2" />
      <rect x="342" y="210" width="36" height="8" rx="4" fill="#E3F3EF" />

      <rect x="160" y="50" width="160" height="44" rx="22" fill="#E7EEF3" />
      <path d="M188 72h104M188 82h72" stroke="#1B4B6B" strokeWidth="3" strokeLinecap="round" opacity="0.25" />
      <circle cx="176" cy="72" r="8" fill="#2CA58D" />
    </svg>
  );
}
