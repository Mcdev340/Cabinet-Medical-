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
import { ServiceIllustration } from "@/components/illustrations";

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
    <div className="card-lift group flex flex-col gap-4 overflow-hidden rounded-card border border-line bg-surface">
      <ServiceIllustration
        service={service}
        className="transition-transform duration-500 group-hover:scale-[1.02]"
      />

      <div className="flex flex-col gap-4 p-6 pt-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent-dark">
          <Icon size={20} strokeWidth={1.75} />
        </div>

        <h3 className="font-heading text-lg font-semibold text-primary">
          {service.titre}
        </h3>
        <p className="text-sm leading-relaxed text-ink-soft">
          {service.description}
        </p>

        <span className="mt-auto flex items-center gap-1.5 text-xs font-medium text-ink-soft">
          <Clock size={14} strokeWidth={1.75} />
          Durée moyenne : {service.dureeMoyenne}
        </span>
      </div>
    </div>
  );
}
