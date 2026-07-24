import { Review } from "@/types";

// Données de démonstration — à remplacer par les vrais avis des patients.
// Évolution possible vers une gestion dynamique (back-office ou API Google Reviews).
export const reviews: Review[] = [
  {
    id: "1",
    nom: "Aminata B.",
    note: 5,
    commentaire:
      "Accueil très chaleureux et prise en charge rapide. Le Dr Diop prend vraiment le temps d'écouter.",
    date: "Juin 2026",
  },
  {
    id: "2",
    nom: "Cheikh T.",
    note: 5,
    commentaire:
      "J'ai pu prendre rendez-vous en ligne un dimanche soir, confirmé dès le lundi matin. Très pratique.",
    date: "Mai 2026",
  },
  {
    id: "3",
    nom: "Marième D.",
    note: 4,
    commentaire:
      "Cabinet propre et bien organisé. Un peu d'attente le jour de ma visite mais le suivi est excellent.",
    date: "Mai 2026",
  },
  {
    id: "4",
    nom: "Ousmane F.",
    note: 5,
    commentaire:
      "Le Dr Sarr est formidable avec les enfants, ma fille n'a même pas eu peur du stéthoscope.",
    date: "Avril 2026",
  },
  {
    id: "5",
    nom: "Bineta S.",
    note: 5,
    commentaire:
      "Réponse rapide sur WhatsApp pour une question urgente. On sent une vraie disponibilité.",
    date: "Avril 2026",
  },
];

export function averageRating(): number {
  const total = reviews.reduce((sum, review) => sum + review.note, 0);
  return Math.round((total / reviews.length) * 10) / 10;
}
