import { Doctor } from "@/types";

// Données de démonstration — à remplacer par les vrais profils du cabinet.
// Pour ajouter/modifier un médecin, voir le guide dans le README ("Mettre à jour le contenu").
export const doctors: Doctor[] = [
  {
    slug: "dr-awa-diop",
    nom: "Dr Awa Diop",
    specialite: "Médecine générale",
    anneesExperience: 12,
    langues: ["Français", "Wolof", "Anglais"],
    diplomes: [
      "Doctorat en Médecine, Université Cheikh Anta Diop de Dakar",
      "DU de Médecine Familiale",
    ],
    joursConsultation: ["Lundi", "Mardi", "Jeudi", "Vendredi"],
    bio: "Le Dr Diop accompagne les familles du quartier depuis plus de dix ans, avec une attention particulière portée au suivi préventif et au dialogue avec ses patients.",
    initiales: "AD",
  },
  {
    slug: "dr-moustapha-ndiaye",
    nom: "Dr Moustapha Ndiaye",
    specialite: "Cardiologie",
    anneesExperience: 15,
    langues: ["Français", "Wolof"],
    diplomes: [
      "Doctorat en Médecine, Université Cheikh Anta Diop de Dakar",
      "Spécialisation en Cardiologie, CHU de Fann",
    ],
    joursConsultation: ["Lundi", "Mercredi", "Vendredi"],
    bio: "Spécialiste des maladies cardiovasculaires, le Dr Ndiaye met l'accent sur la prévention et l'éducation thérapeutique de ses patients.",
    initiales: "MN",
  },
  {
    slug: "dr-fatou-sarr",
    nom: "Dr Fatou Sarr",
    specialite: "Pédiatrie",
    anneesExperience: 9,
    langues: ["Français", "Wolof", "Pulaar"],
    diplomes: [
      "Doctorat en Médecine, Université Cheikh Anta Diop de Dakar",
      "DES de Pédiatrie",
    ],
    joursConsultation: ["Mardi", "Mercredi", "Jeudi", "Samedi"],
    bio: "Le Dr Sarr suit les enfants de la naissance à l'adolescence, dans une approche douce et rassurante pensée pour mettre les plus petits en confiance.",
    initiales: "FS",
  },
  {
    slug: "dr-ibrahima-kane",
    nom: "Dr Ibrahima Kane",
    specialite: "Dermatologie",
    anneesExperience: 8,
    langues: ["Français", "Wolof", "Anglais"],
    diplomes: [
      "Doctorat en Médecine, Université Cheikh Anta Diop de Dakar",
      "DES de Dermatologie et Vénérologie",
    ],
    joursConsultation: ["Lundi", "Jeudi", "Vendredi"],
    bio: "Le Dr Kane traite les affections de la peau les plus courantes comme les cas plus complexes, avec un souci constant du confort du patient.",
    initiales: "IK",
  },
];

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find((doctor) => doctor.slug === slug);
}
