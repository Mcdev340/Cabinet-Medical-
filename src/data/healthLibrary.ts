import { HealthArticle, HealthCategory } from "@/types";

export const healthCategories: { id: HealthCategory; label: string }[] = [
  { id: "prevention", label: "Prévention & bien-être" },
  { id: "maladies-courantes", label: "Maladies courantes" },
  { id: "nutrition", label: "Nutrition" },
  { id: "sante-femme", label: "Santé de la femme" },
  { id: "sante-enfant", label: "Santé de l\u2019enfant" },
  { id: "coeur", label: "Cœur & circulation" },
];

export const healthArticles: HealthArticle[] = [
  {
    slug: "comprendre-l-hypertension",
    titre: "Comprendre l\u2019hypertension artérielle",
    extrait:
      "Qu\u2019est-ce que la tension artérielle ? Comment la mesurer et quand consulter ? Nos cardiologues répondent aux questions les plus fréquentes.",
    categorie: "coeur",
    auteurSlug: "dr-moustapha-ndiaye",
    dureeLecture: "5 min",
    datePublication: "2025-11-12",
    motsCles: ["hypertension", "tension", "cœur", "pression"],
    contenu: [
      {
        paragraphes: [
          "L\u2019hypertension artérielle, souvent appelée « tension élevée », survient lorsque la force du sang contre les parois des artères est trop forte. Elle touche près d\u2019un adulte sur trois au Sénégal, souvent sans symptôme visible.",
          "Une tension normale se situe en dessous de 120/80 mmHg. Au-delà de 140/90 mmHg de manière répétée, on parle d\u2019hypertension et un suivi médical devient nécessaire.",
        ],
      },
      {
        titre: "Facteurs de risque",
        paragraphes: [
          "L\u2019âge, l\u2019hérédité, le surpoids, la sédentarité, une alimentation riche en sel et le tabac sont les principaux facteurs. En Afrique de l\u2019Ouest, la consommation excessive de sel dans les plats traditionnels est un facteur souvent sous-estimé.",
        ],
      },
      {
        titre: "Que faire au quotidien ?",
        paragraphes: [
          "Réduire le sel, pratiquer une activité physique régulière (30 minutes de marche rapide, 5 jours par semaine), limiter l\u2019alcool et surveiller son poids sont des gestes simples et efficaces.",
          "Si vous avez plus de 40 ans ou des antécédents familiaux, faites contrôler votre tension au moins une fois par an. En cas de maux de tête persistants, de vertiges ou de vision trouble, consultez sans attendre.",
        ],
      },
    ],
  },
  {
    slug: "alimentation-equilibree-senegal",
    titre: "Manger équilibré au Sénégal : conseils pratiques",
    extrait:
      "Thiéboudiène, yassa, fruits locaux… Comment concilier la richesse de notre gastronomie avec une alimentation saine au quotidien.",
    categorie: "nutrition",
    auteurSlug: "dr-awa-diop",
    dureeLecture: "6 min",
    datePublication: "2025-10-28",
    motsCles: ["nutrition", "alimentation", "régime", "fruits"],
    contenu: [
      {
        paragraphes: [
          "La cuisine sénégalaise est variée et nutritive. L\u2019enjeu n\u2019est pas de renoncer à nos plats traditionnels, mais de modérer certaines portions et d\u2019enrichir nos assiettes.",
          "Privilégiez les céréales complètes (mil, riz brun), les légumes locaux (gombo, choux, carottes) et les protéines maigres (poisson, poulet, légumineuses).",
        ],
      },
      {
        titre: "Limiter le sel et les graisses",
        paragraphes: [
          "Le sel ajouté dans la cuisson peut être réduit progressivement : vos papilles s\u2019y habitueront en quelques semaines. Pour les fritures, alternez avec des cuissons au four ou à la vapeur.",
          "Les fruits de saison (mangue, papaye, goyave) sont d\u2019excellentes collations. Buvez au moins 1,5 litre d\u2019eau par jour, surtout pendant la saison chaude.",
        ],
      },
    ],
  },
  {
    slug: "vaccination-enfant-calendrier",
    titre: "Calendrier vaccinal de l\u2019enfant : ce qu\u2019il faut savoir",
    extrait:
      "BCG, pentavalent, ROR… Un guide clair pour ne manquer aucun vaccin essentiel à la santé de votre enfant.",
    categorie: "sante-enfant",
    auteurSlug: "dr-fatou-sarr",
    dureeLecture: "7 min",
    datePublication: "2025-09-15",
    motsCles: ["vaccin", "enfant", "bébé", "pédiatrie"],
    contenu: [
      {
        paragraphes: [
          "La vaccination est l\u2019un des moyens les plus efficaces de protéger votre enfant contre des maladies graves. Le calendrier vaccinal sénégalais suit les recommandations de l\u2019OMS et du PEV (Programme Élargi de Vaccination).",
          "Dès la naissance, le vaccin BCG protège contre la tuberculose. À 6 semaines, 10 semaines et 14 semaines, le vaccin pentavalent couvre la diphtérie, le tétanos, la coqueluche, l\u2019hépatite B et Haemophilus influenzae.",
        ],
      },
      {
        titre: "Rappels importants",
        paragraphes: [
          "Le vaccin ROR (rougeole, oreillons, rubéole) est administré à 9 et 15 mois. Un carnet de vaccination permet de suivre les dates et de ne rien oublier.",
          "En cas de fièvre légère ou de rhume le jour du rendez-vous, la vaccination reste généralement possible. En cas de doute, consultez votre pédiatre.",
        ],
      },
    ],
  },
  {
    slug: "diabete-signes-alerte",
    titre: "Diabète : reconnaître les signes d\u2019alerte",
    extrait:
      "Soif intense, fatigue, vision floue… Apprenez à identifier les symptômes du diabète de type 2 et quand demander un dépistage.",
    categorie: "maladies-courantes",
    auteurSlug: "dr-awa-diop",
    dureeLecture: "5 min",
    datePublication: "2025-08-20",
    motsCles: ["diabète", "glycémie", "soif", "fatigue"],
    contenu: [
      {
        paragraphes: [
          "Le diabète de type 2 se développe progressivement. Contrairement au type 1, les symptômes peuvent passer inaperçus pendant des mois, voire des années.",
          "Les signes les plus fréquents sont une soif inhabituelle, des urines fréquentes, une fatigue persistante, une perte de poids inexpliquée et des plaies qui cicatrisent lentement.",
        ],
      },
      {
        titre: "Qui doit se faire dépister ?",
        paragraphes: [
          "Toute personne de plus de 45 ans, ou plus jeune en cas de surpoids, d\u2019antécédents familiaux ou d\u2019hypertension, devrait mesurer sa glycémie à jeun au moins une fois par an.",
          "Un dépistage précoce permet de prévenir les complications (problèmes oculaires, rénaux, cardiovasculaires) grâce à des changements de mode de vie et, si nécessaire, un traitement adapté.",
        ],
      },
    ],
  },
  {
    slug: "grossesse-premiers-trimestres",
    titre: "Grossesse : les essentiels du premier trimestre",
    extrait:
      "Consultations, alimentation, activité physique et signes d\u2019alerte : tout ce qu\u2019une future maman doit savoir dès les premières semaines.",
    categorie: "sante-femme",
    auteurSlug: "dr-awa-diop",
    dureeLecture: "8 min",
    datePublication: "2025-07-05",
    motsCles: ["grossesse", "maternité", "bébé", "femme"],
    contenu: [
      {
        paragraphes: [
          "La première consultation prénatale doit avoir lieu avant la 12e semaine de grossesse. Elle permet de confirmer la grossesse, d\u2019établir un suivi personnalisé et de débuter la supplémentation en acide folique.",
          "Les nausées matinales sont fréquentes et généralement bénignes. Fractionner les repas, rester hydratée et éviter les odeurs fortes peut aider.",
        ],
      },
      {
        titre: "Quand consulter en urgence ?",
        paragraphes: [
          "Contactez immédiatement votre médecin en cas de saignements abondants, de douleurs abdominales intenses, de fièvre élevée ou de vomissements incoercibles empêchant toute alimentation.",
        ],
      },
    ],
  },
  {
    slug: "activite-physique-adultes",
    titre: "Bouger chaque jour : recommandations pour les adultes",
    extrait:
      "150 minutes par semaine suffisent pour protéger votre cœur, votre poids et votre moral. Découvrez comment intégrer l\u2019activité physique dans votre routine.",
    categorie: "prevention",
    auteurSlug: "dr-moustapha-ndiaye",
    dureeLecture: "4 min",
    datePublication: "2025-06-18",
    motsCles: ["sport", "exercice", "marche", "prévention"],
    contenu: [
      {
        paragraphes: [
          "L\u2019OMS recommande au moins 150 minutes d\u2019activité modérée par semaine pour les adultes, soit environ 30 minutes par jour, 5 jours sur 7.",
          "La marche rapide, la natation, le vélo et la danse sont d\u2019excellentes options. L\u2019important est de choisir une activité que vous appréciez pour la maintenir dans la durée.",
        ],
      },
      {
        titre: "Commencer en douceur",
        paragraphes: [
          "Si vous êtes sédentaire depuis longtemps, débutez par 10 minutes de marche quotidienne et augmentez progressivement. Consultez votre médecin avant de débuter un programme intensif si vous avez plus de 50 ans ou des problèmes cardiaques.",
        ],
      },
    ],
  },
  {
    slug: "paludisme-prevention",
    titre: "Paludisme : prévention et protection efficace",
    extrait:
      "Moustiquaires, répulsifs, chimioprophylaxie… Les mesures concrètes pour vous protéger, vous et votre famille, toute l\u2019année.",
    categorie: "maladies-courantes",
    auteurSlug: "dr-awa-diop",
    dureeLecture: "6 min",
    datePublication: "2025-05-22",
    motsCles: ["paludisme", "moustique", "fièvre", "prévention"],
    contenu: [
      {
        paragraphes: [
          "Le paludisme reste l\u2019une des maladies les plus fréquentes en zone tropicale. Il est transmis par la piqûre de moustiques Anophèles, principalement actifs entre le crépuscule et l\u2019aube.",
          "Dormir sous une moustiquaire imprégnée d\u2019insecticide, porter des vêtements couvrants le soir et utiliser des répulsifs cutanés sont les mesures les plus efficaces.",
        ],
      },
      {
        titre: "Reconnaître les symptômes",
        paragraphes: [
          "Fièvre, frissons, maux de tête et courbatures peuvent apparaître 7 à 15 jours après une piqûre. En cas de fièvre en zone endémique, consultez rapidement pour un test de diagnostic et un traitement précoce.",
        ],
      },
    ],
  },
  {
    slug: "stress-gerer-quotidien",
    titre: "Gérer le stress au quotidien",
    extrait:
      "Respiration, sommeil, limites numériques… Des stratégies simples et validées par nos médecins pour retrouver calme et équilibre.",
    categorie: "prevention",
    auteurSlug: "dr-awa-diop",
    dureeLecture: "5 min",
    datePublication: "2025-04-10",
    motsCles: ["stress", "sommeil", "bien-être", "mental"],
    contenu: [
      {
        paragraphes: [
          "Un stress occasionnel est normal, mais un stress chronique peut affecter votre sommeil, votre digestion et votre système immunitaire.",
          "La respiration profonde (4 secondes d\u2019inspiration, 4 de rétention, 6 d\u2019expiration) active le système nerveux parasympathique et réduit l\u2019anxiété en quelques minutes.",
        ],
      },
      {
        titre: "Habitudes protectrices",
        paragraphes: [
          "Maintenez des horaires de sommeil réguliers, limitez les écrans une heure avant le coucher et accordez-vous des moments de pause sans obligation. Si le stress devient envahissant, n\u2019hésitez pas à en parler à votre médecin.",
        ],
      },
    ],
  },
];

export function getHealthArticleBySlug(slug: string): HealthArticle | undefined {
  return healthArticles.find((article) => article.slug === slug);
}

export function getCategoryLabel(id: HealthCategory): string {
  return healthCategories.find((cat) => cat.id === id)?.label ?? id;
}
