import { TimelineEvent, Valeur } from "@/types";

export const aboutSubLinks = [
  { href: "/a-propos", label: "Vue d\u2019ensemble" },
  { href: "/a-propos/histoire", label: "Notre histoire" },
  { href: "/a-propos/mission-vision", label: "Mission & vision" },
  { href: "/a-propos/bibliotheque-sante", label: "Bibliothèque de santé" },
];

export const timelineEvents: TimelineEvent[] = [
  {
    annee: "2010",
    titre: "Les premiers pas",
    description:
      "Ouverture du cabinet au quartier Point E, avec une équipe de deux médecins généralistes déterminés à offrir un accueil humain et des soins accessibles.",
  },
  {
    annee: "2014",
    titre: "Élargissement de l\u2019équipe",
    description:
      "Arrivée d\u2019un cardiologue et d\u2019une pédiatre, permettant au cabinet de répondre aux besoins de santé de toute la famille sous un même toit.",
  },
  {
    annee: "2018",
    titre: "Modernisation des locaux",
    description:
      "Rénovation complète des espaces de consultation, équipement d\u2019un laboratoire d\u2019analyses rapides et mise en place d\u2019un système de prise de rendez-vous en ligne.",
  },
  {
    annee: "2022",
    titre: "Engagement préventif",
    description:
      "Lancement de campagnes de dépistage gratuites (diabète, hypertension) et création de la bibliothèque de santé en ligne pour informer les patients 24h/24.",
  },
  {
    annee: "Aujourd\u2019hui",
    titre: "Un cabinet ancré dans la communauté",
    description:
      "Plus de 15 000 patients suivis, une équipe pluridisciplinaire et une réputation fondée sur l\u2019écoute, la rigueur médicale et la proximité.",
  },
];

export const valeurs: Valeur[] = [
  {
    titre: "Écoute & respect",
    description:
      "Chaque patient est unique. Nous prenons le temps de comprendre vos préoccupations avant de proposer un parcours de soins adapté.",
    icone: "HeartHandshake",
  },
  {
    titre: "Excellence médicale",
    description:
      "Nos praticiens sont formés en continu et s\u2019appuient sur les recommandations internationales les plus récentes.",
    icone: "Award",
  },
  {
    titre: "Accessibilité",
    description:
      "Des horaires étendus, une prise de rendez-vous simplifiée et des contenus de santé gratuits pour tous.",
    icone: "Accessibility",
  },
  {
    titre: "Innovation au service du patient",
    description:
      "Outils numériques, téléconsultation et bibliothèque de santé : la technologie au service de votre bien-être.",
    icone: "Lightbulb",
  },
];

export const missionText =
  "Offrir à chaque patient des soins médicaux de qualité, dans un environnement chaleureux et rassurant, en plaçant la relation humaine et la prévention au cœur de notre pratique.";

export const visionText =
  "Devenir la référence locale en matière de santé familiale au Sénégal — un cabinet où chacun se sent écouté, informé et accompagné tout au long de sa vie.";
