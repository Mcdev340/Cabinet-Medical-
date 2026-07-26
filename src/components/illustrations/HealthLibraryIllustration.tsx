export default function HealthLibraryIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Illustration bibliothèque de santé"
    >
      <ellipse cx="240" cy="310" rx="160" ry="14" fill="#1B4B6B" opacity="0.07" />

      <rect x="100" y="60" width="280" height="220" rx="20" fill="#FFFFFF" stroke="#E2E8EE" strokeWidth="3" />
      <rect x="130" y="90" width="220" height="28" rx="14" fill="#E7EEF3" />
      <circle cx="150" cy="104" r="6" fill="#2CA58D" />
      <path d="M168 104h160" stroke="#1B4B6B" strokeWidth="3" strokeLinecap="round" opacity="0.2" />

      <rect x="130" y="140" width="90" height="110" rx="12" fill="#E3F3EF" />
      <rect x="145" y="158" width="60" height="6" rx="3" fill="#2CA58D" opacity="0.5" />
      <rect x="145" y="174" width="48" height="4" rx="2" fill="#1B4B6B" opacity="0.2" />
      <rect x="145" y="186" width="56" height="4" rx="2" fill="#1B4B6B" opacity="0.2" />
      <rect x="145" y="198" width="40" height="4" rx="2" fill="#1B4B6B" opacity="0.2" />

      <rect x="240" y="140" width="110" height="50" rx="12" fill="#E7EEF3" />
      <rect x="240" y="200" width="110" height="50" rx="12" fill="#E7EEF3" />
      <circle cx="262" cy="165" r="8" fill="#2CA58D" opacity="0.35" />
      <circle cx="262" cy="225" r="8" fill="#1B4B6B" opacity="0.2" />

      <circle cx="380" cy="120" r="36" fill="#FFD4B8" />
      <path d="M344 120c0-20 16-36 36-36s36 16 36 36" fill="#2CA58D" />
      <rect x="344" y="156" width="72" height="80" rx="14" fill="#2CA58D" />
      <rect x="60" y="180" width="48" height="64" rx="10" fill="#1B4B6B" opacity="0.12" />
      <path d="M72 200h24M72 214h16" stroke="#1B4B6B" strokeWidth="3" strokeLinecap="round" opacity="0.25" />

      <rect x="170" y="290" width="140" height="12" rx="6" fill="#2CA58D" opacity="0.15" />
      <text x="240" y="299" textAnchor="middle" fill="#2CA58D" fontSize="8" fontFamily="sans-serif" fontWeight="600">
        24h/24
      </text>
    </svg>
  );
}
