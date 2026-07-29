import { Doctor } from "@/types";

// Données de démonstration — à remplacer par les vrais profils du cabinet.
// Pour ajouter/modifier un médecin, voir le guide dans le README ("Mettre à jour le contenu").
export const doctors: Doctor[] = [
  {
    slug: "dr-awa-diop",
    nom: "Dr Yaye Fatou Sadio",
    specialite: "Médecine générale",
    anneesExperience: 12,
    langues: ["Français", "Wolof", "Anglais"],
    diplomes: [
      "Doctorat en Médecine, Université Cheikh Anta Diop de Dakar",
      "DU de Médecine Familiale",
    ],
    joursConsultation: ["Lundi", "Mardi", "Jeudi", "Vendredi"],
    bio: "Le Dr Yaye Fatou Sadioaccompagne les familles du quartier depuis plus de dix ans, avec une attention particulière portée au suivi préventif et au dialogue avec ses patients.",
    photo: "/Dr%20Yaye%20Fatou.png",
    initiales: "YFD",
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
    photo: "/Dr%20Moustapha%20Ndiaye1.png",
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
    photo: "/Dr%20Fatou%20Sarr.png",
    initiales: "FS",
  },
  {
    slug: "dr-ibrahima-kane",
    nom: "Dr Ibrahima Kane",
    specialite: "Dermatologie et soins de la peau",
    anneesExperience: 10,
    langues: ["Français", "Wolof", "Anglais"],
    diplomes: [
      "Doctorat en Médecine, Université Cheikh Anta Diop de Dakar",
      "DES de Dermatologie et Vénérologie",
      "Formation continue en dermatoscopie et prise en charge des affections cutanées",
    ],
    joursConsultation: ["Lundi", "Mercredi", "Vendredi"],
    bio: "Le Dr Ibrahima Kane accompagne ses patients dans le diagnostic et le traitement des affections cutanées avec un suivi attentif, des soins adaptés et un accompagnement personnalisé.",
    photo: "/Dr%20Ibrahima%20kane.png",
    initiales: "IK",
  },
  {
    slug: "dr-aminata-fall",
    nom: "Dr Aminata Fall",
    specialite: "Gynécologie",
    anneesExperience: 14,
    langues: ["Français", "Wolof", "Anglais"],
    diplomes: [
      "Doctorat en Médecine, Université Cheikh Anta Diop de Dakar",
      "DES de Gynécologie-Obstétrique",
    ],
    joursConsultation: ["Mardi", "Mercredi", "Vendredi"],
    bio: "Le Dr Fall accompagne les femmes à chaque étape de leur vie, entre suivi gynécologique, contraception et maternité.",
    photo: "/Dr%20Aminata%20Fall.png",
    initiales: "AF",
  },
  {
    slug: "dr-babacar-diouf",
    nom: "Dr Babacar Diouf",
    specialite: "Ophtalmologie",
    anneesExperience: 11,
    langues: ["Français", "Wolof"],
    diplomes: [
      "Doctorat en Médecine, Université Cheikh Anta Diop de Dakar",
      "Spécialisation en Ophtalmologie",
    ],
    joursConsultation: ["Lundi", "Mercredi", "Jeudi"],
    bio: "Le Dr Diouf traite les troubles de la vision et assure des bilans ophtalmologiques complets pour enfants et adultes.",
    photo: "/Dr%20Babacar%20Diouf.png",
    initiales: "BD",
  },
  {
    slug: "dr-karine-ndiaye",
    nom: "Dr Karine Ndiaye",
    specialite: "Dentisterie",
    anneesExperience: 10,
    langues: ["Français", "Anglais"],
    diplomes: [
      "Doctorat en Chirurgie Dentaire, Université Cheikh Anta Diop",
      "Formation en soins conservateurs et prothèses dentaires",
    ],
    joursConsultation: ["Mardi", "Jeudi", "Samedi"],
    bio: "Le Dr Ndiaye propose des soins dentaires doux et personnalisés, de la prévention aux prothèses esthétiques.",
    photo: "/Dr%20Karine%20Ndiaye.png",
    initiales: "KN",
  },
  {
    slug: "dr-ousmane-cisse",
    nom: "Dr Ousmane Cissé",
    specialite: "Psychiatrie",
    anneesExperience: 13,
    langues: ["Français", "Wolof"],
    diplomes: [
      "Doctorat en Médecine, Université Cheikh Anta Diop de Dakar",
      "DES de Psychiatrie",
    ],
    joursConsultation: ["Lundi", "Mardi", "Vendredi"],
    bio: "Le Dr Cissé accueille les patients pour des consultations psychiatriques et un accompagnement sur les troubles de l'humeur et du stress.",
    photo: "/Dr%20Ousmane%20Cisse.png",
    initiales: "OC",
  },
];

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find((doctor) => doctor.slug === slug);
}
