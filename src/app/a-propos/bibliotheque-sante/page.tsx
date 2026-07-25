import type { Metadata } from "next";
import { BookOpenCheck, Clock, ShieldCheck } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import HealthLibraryExplorer from "@/components/about/HealthLibraryExplorer";
import { siteConfig } from "@/data/config";
import { healthArticles } from "@/data/healthLibrary";

export const metadata: Metadata = {
  title: `Bibliothèque de santé — ${siteConfig.cabinetNom}`,
  description:
    "Articles de santé rédigés et validés par nos médecins. Trouvez des réponses fiables à vos questions, disponibles 24h/24.",
};

export default function BibliothequeSantePage() {
  return (
    <>
      <div className="relative overflow-hidden rounded-card border border-line bg-surface px-8 py-10">
        <div className="blob-primary pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4 max-w-xl">
            <SectionTitle
              eyebrow="Bibliothèque de santé"
              title="Des réponses fiables, à toute heure"
              description="Comme avoir un médecin disponible 24h/24 et 7j/7 : parcourez nos articles rédigés par des experts de confiance pour mieux comprendre votre santé."
            />
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <span className="flex items-center gap-2 text-sm text-ink-soft">
              <BookOpenCheck size={18} strokeWidth={1.75} className="text-accent-dark" />
              {healthArticles.length} articles disponibles
            </span>
            <span className="flex items-center gap-2 text-sm text-ink-soft">
              <Clock size={18} strokeWidth={1.75} className="text-accent-dark" />
              Accessible 24h/24, 7j/7
            </span>
            <span className="flex items-center gap-2 text-sm text-ink-soft">
              <ShieldCheck size={18} strokeWidth={1.75} className="text-accent-dark" />
              Validés par nos praticiens
            </span>
          </div>
        </div>
      </div>

      <HealthLibraryExplorer articles={healthArticles} />

      <div className="rounded-card border border-accent/20 bg-accent-soft px-6 py-5 text-sm text-ink-soft">
        <strong className="text-primary">Avertissement :</strong> ces contenus sont
        informatifs et ne remplacent pas une consultation médicale. En cas de symptômes
        persistants ou d&rsquo;urgence, contactez votre médecin ou les services
        d&rsquo;urgence.
      </div>
    </>
  );
}
