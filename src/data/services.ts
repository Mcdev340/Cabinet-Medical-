import { Service } from "@/types";

// Données de démonstration — à remplacer par les vraies prestations du cabinet.
export const services: Service[] = [
  {
    slug: "consultation-generale",
    titre: "Consultation générale",
    description:
      "Bilan de santé, suivi courant et orientation vers le bon spécialiste si besoin.",
    dureeMoyenne: "20 min",
    icone: "Stethoscope",
  },
  {
    slug: "pediatrie",
    titre: "Pédiatrie",
    description:
      "Suivi de croissance, vaccinations et consultations pour les enfants de 0 à 15 ans.",
    dureeMoyenne: "25 min",
    icone: "Baby",
  },
  {
    slug: "cardiologie",
    titre: "Cardiologie",
    description:
      "Bilan cardiovasculaire, électrocardiogramme et suivi des pathologies chroniques.",
    dureeMoyenne: "30 min",
    icone: "HeartPulse",
  },
  {
    slug: "dermatologie",
    titre: "Dermatologie",
    description:
      "Diagnostic et traitement des affections de la peau, des cheveux et des ongles.",
    dureeMoyenne: "20 min",
    icone: "Sparkles",
  },
  {
    slug: "gynecologie",
    titre: "Gynécologie",
    description:
      "Suivi gynécologique, contraception et consultations prénatales.",
    dureeMoyenne: "30 min",
    icone: "Flower2",
  },
  {
    slug: "analyses-bilans",
    titre: "Analyses & bilans",
    description:
      "Prélèvements et bilans biologiques réalisés sur place, résultats sous 48h.",
    dureeMoyenne: "15 min",
    icone: "FlaskConical",
  },
  {
    slug: "vaccinations",
    titre: "Vaccinations",
    description:
      "Vaccins recommandés et rappels pour adultes et enfants, avec suivi personnalisé.",
    dureeMoyenne: "20 min",
    icone: "Syringe",
  },
  {
    slug: "soins-durgence",
    titre: "Soins d'urgence",
    description:
      "Prise en charge rapide des traumatismes légers, douleurs aiguës et urgences médicales bénignes.",
    dureeMoyenne: "20 min",
    icone: "Activity",
  },
  {
    slug: "depistage-prevention",
    titre: "Dépistage & prévention",
    description:
      "Bilan préventif, dépistage des facteurs de risque et conseils santé personnalisés.",
    dureeMoyenne: "25 min",
    icone: "ShieldCheck",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
