const palettes = [
  "bg-primary text-white",
  "bg-accent text-white",
  "bg-primary-soft text-primary",
  "bg-accent-soft text-accent-dark",
];

function paletteIndex(seed: string) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash + seed.charCodeAt(i)) % palettes.length;
  }
  return hash;
}

export default function Avatar({
  initiales,
  seed,
  size = "md",
}: {
  initiales: string;
  seed: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClasses = {
    sm: "h-12 w-12 text-sm",
    md: "h-20 w-20 text-xl",
    lg: "h-32 w-32 text-3xl",
  }[size];

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full font-heading font-semibold ${palettes[paletteIndex(seed)]} ${sizeClasses}`}
      aria-hidden="true"
    >
      {initiales}
    </div>
  );
}
