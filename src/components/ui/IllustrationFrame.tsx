import { ReactNode } from "react";

export default function IllustrationFrame({
  children,
  className = "",
  glow = "accent",
}: {
  children: ReactNode;
  className?: string;
  glow?: "accent" | "primary";
}) {
  const glowClass = glow === "primary" ? "illustration-glow-primary" : "illustration-glow-accent";

  return (
    <div className={`relative ${className}`}>
      <div
        className={`pointer-events-none absolute inset-4 rounded-full blur-3xl ${glowClass}`}
        aria-hidden="true"
      />
      <div className="animate-float relative">{children}</div>
    </div>
  );
}
