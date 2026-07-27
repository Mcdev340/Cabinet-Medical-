// Configuration centrale du site.
// Toutes les valeurs peuvent être surchargées via des variables d'environnement
// (voir .env.local.example). Les valeurs ci-dessous sont des données de démonstration
// à remplacer avant mise en production — voir le README, section "Mettre à jour le contenu".

export const siteConfig = {
  cabinetNom: process.env.NEXT_PUBLIC_CABINET_NOM || "Cabinet Yaye Fatou",
  cabinetAccroche:
    process.env.NEXT_PUBLIC_CABINET_ACCROCHE ||
    "Votre santé, notre priorité — un accueil chaleureux, des soins de confiance.",

  telephoneSecretariat:
    process.env.NEXT_PUBLIC_TELEPHONE_SECRETARIAT || "+221 33 800 12 34",
  whatsappNumero: process.env.NEXT_PUBLIC_WHATSAPP_NUMERO || "221 77 123 45 67",
  emailContact:
    process.env.NEXT_PUBLIC_EMAIL_CONTACT || "contact@cabinet-yayefatou.sn",

  adresse: {
    ligne1: process.env.NEXT_PUBLIC_ADRESSE_LIGNE1 || "Rue 10 x Corniche Ouest",
    ligne2: process.env.NEXT_PUBLIC_ADRESSE_LIGNE2 || "Quartier Point E",
    ville: process.env.NEXT_PUBLIC_ADRESSE_VILLE || "Dakar, Sénégal",
  },

  horaires: [
    { jours: "Lundi – Vendredi", heures: "08h00 – 18h00" },
    { jours: "Samedi", heures: "08h00 – 13h00" },
    { jours: "Dimanche", heures: "Fermé" },
  ],

  acces: {
    transport:
      "Arrêt de bus « Point E » à 3 min à pied, lignes BRT et Dakar Dem Dikk.",
    parking: "Parking gratuit disponible devant le cabinet.",
  },

  // URL d'intégration Google Maps (balise iframe). Voir le README pour générer la vôtre :
  // Google Maps → rechercher l'adresse → Partager → Intégrer une carte → copier le src de l'iframe.
  googleMapsEmbedUrl:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ||
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.0!2d-17.4676!3d14.7167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQzJzAwLjEiTiAxN8KwMjgnMDMuNCJX!5e0!3m2!1sfr!2ssn!4v0000000000000",

  emailjs: {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
  },

  reseaux: {
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
  },
};

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsappNumero}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
