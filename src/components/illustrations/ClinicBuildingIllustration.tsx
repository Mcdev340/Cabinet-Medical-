export default function ClinicBuildingIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Illustration du cabinet médical"
    >
      <rect x="60" y="290" width="360" height="8" rx="4" fill="#E2E8EE" />
      <rect x="120" y="80" width="240" height="210" rx="16" fill="#FFFFFF" stroke="#E2E8EE" strokeWidth="3" />
      <rect x="120" y="80" width="240" height="48" rx="16" fill="#1B4B6B" />
      <rect x="120" y="112" width="240" height="16" fill="#1B4B6B" />

      <rect x="150" y="150" width="50" height="50" rx="8" fill="#E7EEF3" />
      <rect x="215" y="150" width="50" height="50" rx="8" fill="#E7EEF3" />
      <rect x="280" y="150" width="50" height="50" rx="8" fill="#E7EEF3" />

      <rect x="200" y="230" width="80" height="60" rx="8" fill="#E3F3EF" />
      <circle cx="240" cy="260" r="6" fill="#2CA58D" />

      <rect x="210" y="40" width="60" height="40" rx="8" fill="#2CA58D" />
      <path d="M225 60h30M240 45v30" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />

      <circle cx="90" cy="120" r="28" fill="#E3F3EF" />
      <circle cx="90" cy="112" r="12" fill="#2CA58D" opacity="0.4" />
      <rect x="74" y="132" width="32" height="40" rx="8" fill="#2CA58D" opacity="0.25" />

      <circle cx="390" cy="130" r="24" fill="#E7EEF3" />
      <path d="M378 130h24M390 118v24" stroke="#1B4B6B" strokeWidth="3" strokeLinecap="round" opacity="0.3" />

      <path
        d="M40 290c40-30 80-30 120 0s80 30 120 0 80-30 120 0"
        stroke="#2CA58D"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.2"
        fill="none"
      />
    </svg>
  );
}
