import { ReactNode } from "react";
import IllustrationFrame from "@/components/ui/IllustrationFrame";

export default function PageBanner({
  eyebrow,
  title,
  description,
  illustration,
  glow = "accent",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  illustration: ReactNode;
  glow?: "accent" | "primary";
}) {
  return (
    <div className="relative overflow-hidden rounded-card border border-line bg-surface">
      <div className="blob-primary pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-60" />
      <div className="blob-accent pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full opacity-50" />

      <div className="relative grid items-center gap-8 p-8 sm:p-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-4">
          {eyebrow && (
            <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
              {eyebrow}
            </span>
          )}
          <h1 className="font-heading text-3xl font-semibold text-primary sm:text-4xl">{title}</h1>
          {description && (
            <p className="max-w-xl text-base leading-relaxed text-ink-soft">{description}</p>
          )}
        </div>

        <IllustrationFrame glow={glow} className="mx-auto w-full max-w-sm lg:max-w-none">
          {illustration}
        </IllustrationFrame>
      </div>
    </div>
  );
}
