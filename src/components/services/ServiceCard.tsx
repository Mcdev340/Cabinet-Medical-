import {
  Stethoscope,
  Baby,
  HeartPulse,
  Sparkles,
  Flower2,
  FlaskConical,
  Clock,
  type LucideIcon,
} from "lucide-react";
import { Service } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  Stethoscope,
  Baby,
  HeartPulse,
  Sparkles,
  Flower2,
  FlaskConical,
};

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icone] || Stethoscope;

  return (
    <div className="flex flex-col gap-4 rounded-card border border-line bg-surface p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent-dark">
        <Icon size={22} strokeWidth={1.75} />
      </div>

      <h3 className="font-heading text-lg font-semibold text-primary">{service.titre}</h3>
      <p className="text-sm leading-relaxed text-ink-soft">{service.description}</p>

      <span className="mt-auto flex items-center gap-1.5 text-xs font-medium text-ink-soft">
        <Clock size={14} strokeWidth={1.75} />
        Durée moyenne : {service.dureeMoyenne}
      </span>
    </div>
  );
}
