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
    image: "/Consultation%20general.png",
  },
  {
    slug: "pediatrie",
    titre: "Pédiatrie",
    description:
      "Suivi de croissance, vaccinations et consultations pour les enfants de 0 à 15 ans.",
    dureeMoyenne: "25 min",
    icone: "Baby",
    image: "/Pediatrie.png",
  },
  {
    slug: "cardiologie",
    titre: "Cardiologie",
    description:
      "Bilan cardiovasculaire, électrocardiogramme et suivi des pathologies chroniques.",
    dureeMoyenne: "30 min",
    icone: "HeartPulse",
    image: "/Cardiologe.png",
  },
  {
    slug: "dermatologie",
    titre: "Dermatologie",
    description:
      "Diagnostic et traitement des affections de la peau, des cheveux et des ongles.",
    dureeMoyenne: "20 min",
    icone: "Sparkles",
    image: "/Dermatologie.png",
  },
  {
    slug: "gynecologie",
    titre: "Gynécologie",
    description:
      "Suivi gynécologique, contraception et consultations prénatales.",
    dureeMoyenne: "30 min",
    icone: "Flower2",
    image: "/gynecologie.png",
  },
  {
    slug: "analyses-bilans",
    titre: "Analyses & bilans",
    description:
      "Prélèvements et bilans biologiques réalisés sur place, résultats sous 48h.",
    dureeMoyenne: "15 min",
    icone: "FlaskConical",
    image: "/Analyses%20&%20bilans.png",
  },
  {
    slug: "vaccinations",
    titre: "Vaccinations",
    description:
      "Vaccins recommandés et rappels pour adultes et enfants, avec suivi personnalisé.",
    dureeMoyenne: "20 min",
    icone: "Syringe",
    image: "/Vaccinations.png",
  },
  {
    slug: "soins-durgence",
    titre: "Soins d'urgence",
    description:
      "Prise en charge rapide des traumatismes légers, douleurs aiguës et urgences médicales bénignes.",
    dureeMoyenne: "20 min",
    icone: "Activity",
    image: "/Soins%20d'urgence.png",
  },
  {
    slug: "depistage-prevention",
    titre: "Dépistage & prévention",
    description:
      "Bilan préventif, dépistage des facteurs de risque et conseils santé personnalisés.",
    dureeMoyenne: "25 min",
    icone: "ShieldCheck",
    image: "/Dépistage%20&%20prévention.png",
  },
  {
    slug: "dentisterie",
    titre: "Dentisterie",
    description:
      "Soins dentaires, détartrage, traitement des caries et prothèses dentaires avec Dr Karine Ndiaye.",
    dureeMoyenne: "30 min",
    icone: "Tooth",
    image: "/Dentiserie.png",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
