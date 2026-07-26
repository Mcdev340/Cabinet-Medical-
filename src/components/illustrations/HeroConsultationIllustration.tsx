export default function HeroConsultationIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Illustration d'une consultation médicale"
    >
      <rect x="40" y="280" width="400" height="8" rx="4" fill="#E2E8EE" />
      <rect x="80" y="120" width="180" height="160" rx="20" fill="#E7EEF3" />
      <rect x="100" y="140" width="140" height="100" rx="12" fill="#FFFFFF" />
      <path d="M120 200h100M120 180h70" stroke="#1B4B6B" strokeWidth="4" strokeLinecap="round" opacity="0.3" />
      <circle cx="170" cy="170" r="18" fill="#2CA58D" opacity="0.2" />
      <path d="M163 170l5 5 10-10" stroke="#2CA58D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      <ellipse cx="330" cy="310" rx="70" ry="12" fill="#1B4B6B" opacity="0.08" />

      <circle cx="310" cy="170" r="42" fill="#FFD4B8" />
      <path
        d="M268 170c0-24 19-42 42-42s42 18 42 42v8H268v-8z"
        fill="#1B4B6B"
      />
      <rect x="268" y="218" width="84" height="90" rx="16" fill="#2CA58D" />
      <rect x="286" y="238" width="48" height="6" rx="3" fill="#FFFFFF" opacity="0.5" />
      <circle cx="310" cy="200" r="4" fill="#2B2B2B" />
      <circle cx="322" cy="200" r="4" fill="#2B2B2B" />
      <path d="M308 212c4 4 12 4 16 0" stroke="#2B2B2B" strokeWidth="2.5" strokeLinecap="round" />

      <circle cx="390" cy="190" r="36" fill="#F5D0C5" />
      <path d="M354 190c0-20 16-36 36-36s36 16 36 36" fill="#FFFFFF" />
      <rect x="354" y="226" width="72" height="82" rx="14" fill="#FFFFFF" stroke="#E2E8EE" strokeWidth="2" />
      <path
        d="M420 250c-8 12-22 12-30 0"
        stroke="#2CA58D"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="378" cy="188" r="3" fill="#2B2B2B" />
      <circle cx="402" cy="188" r="3" fill="#2B2B2B" />

      <path
        d="M350 248c20-8 40-8 60 0"
        stroke="#1B4B6B"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="380" cy="248" r="8" fill="#1B4B6B" />
      <path d="M372 248h16M380 240v16" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />

      <rect x="60" y="60" width="56" height="56" rx="14" fill="#E3F3EF" />
      <path
        d="M78 88h20M88 78v20"
        stroke="#2CA58D"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <rect x="360" y="50" width="80" height="48" rx="12" fill="#FFFFFF" stroke="#E2E8EE" strokeWidth="2" />
      <path
        d="M378 74h44M378 84h28"
        stroke="#1B4B6B"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.35"
      />
      <circle cx="372" cy="74" r="6" fill="#2CA58D" opacity="0.5" />

      <path
        d="M140 90c0-16 12-28 28-28s28 12 28 28"
        stroke="#2CA58D"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        className="animate-pulse-soft"
      />
      <path
        d="M154 90c0-8 6-14 14-14s14 6 14 14"
        fill="#2CA58D"
        opacity="0.25"
      />
    </svg>
  );
}
