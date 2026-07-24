export interface Doctor {
  slug: string;
  nom: string;
  specialite: string;
  anneesExperience: number;
  langues: string[];
  diplomes: string[];
  joursConsultation: string[];
  bio: string;
  initiales: string;
}

export interface Service {
  slug: string;
  titre: string;
  description: string;
  dureeMoyenne: string;
  icone: string;
}

export interface Review {
  id: string;
  nom: string;
  note: 1 | 2 | 3 | 4 | 5;
  commentaire: string;
  date: string;
}

export interface AppointmentFormData {
  nomComplet: string;
  telephone: string;
  email: string;
  medecin: string;
  motif: string;
  creneauSouhaite: string;
}
