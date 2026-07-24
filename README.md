# Cabinet Médical — Site vitrine & prise de rendez-vous

Site vitrine Next.js pour un cabinet médical : présentation des médecins,
services, prise de rendez-vous en ligne (EmailJS), localisation Google Maps,
contact WhatsApp et avis patients.

Stack : **Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS v4 · EmailJS · lucide-react**.

---

## 1. Installation

### Prérequis

- Node.js **20.9 ou supérieur** (LTS recommandée)
- npm (fourni avec Node.js)

### Étapes

```bash
# 1. Se placer dans le dossier du projet
cd cabinet-medical

# 2. Installer les dépendances
npm install

# 3. Créer votre fichier de configuration locale
cp .env.local.example .env.local
# puis éditer .env.local avec vos propres valeurs (voir section 3)

# 4. Lancer le serveur de développement
npm run dev
```

Le site est alors accessible sur **http://localhost:3000**.

### Autres commandes utiles

```bash
npm run build   # build de production
npm run start   # lance le build de production (après npm run build)
npx eslint .    # vérifie la qualité du code
```

---

## 2. Structure du projet

```
src/
├── app/                    # Pages (App Router)
│   ├── layout.tsx          # Layout racine (polices, header, footer, bouton WhatsApp)
│   ├── page.tsx             # Page d'accueil
│   ├── medecins/            # Liste des médecins + fiche détail ([slug])
│   ├── services/             # Liste des services
│   ├── rendez-vous/          # Formulaire de prise de rendez-vous
│   ├── avis/                 # Témoignages patients
│   └── contact/               # Coordonnées, horaires, carte
├── components/
│   ├── layout/               # Header, Footer, bouton WhatsApp
│   ├── ui/                    # Composants génériques (boutons, cartes, titres...)
│   ├── home/                  # Sections spécifiques à la page d'accueil
│   ├── doctors/, services/, reviews/, appointment/
├── data/                     # Contenu du site (voir section 4)
│   ├── config.ts             # Coordonnées, horaires, clés EmailJS...
│   ├── doctors.ts, services.ts, reviews.ts
├── lib/emailjs.ts             # Logique d'envoi du formulaire de RDV
└── types/index.ts              # Types TypeScript partagés
```

---

## 3. Configuration (variables d'environnement)

Toutes les valeurs modifiables se trouvent dans `.env.local` (voir
`.env.local.example` pour la liste complète et le détail de chaque variable) :

- Informations du cabinet (nom, accroche, adresse, téléphone, e-mail)
- Numéro WhatsApp
- URL d'intégration Google Maps
- Identifiants EmailJS
- Liens réseaux sociaux (optionnel)

### Configurer EmailJS (formulaire de rendez-vous)

Le formulaire `/rendez-vous` envoie les demandes par e-mail via
[EmailJS](https://www.emailjs.com), sans nécessiter de backend :

1. Créez un compte gratuit sur [emailjs.com](https://www.emailjs.com).
2. Dans **Email Services**, ajoutez votre service d'envoi (Gmail, Outlook...) →
   notez le **Service ID**.
3. Dans **Email Templates**, créez un template utilisant les variables
   suivantes (déjà envoyées par le formulaire) : `nom_complet`, `telephone`,
   `email`, `medecin_souhaite`, `motif`, `creneau_souhaite` → notez le
   **Template ID**.
4. Dans **Account → General**, récupérez votre **Public Key**.
5. Renseignez ces trois valeurs dans `.env.local` :
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID="votre_service_id"
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID="votre_template_id"
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY="votre_public_key"
   ```
6. Redémarrez le serveur (`npm run dev`) pour prendre en compte les changements.

> Tant que ces variables ne sont pas renseignées, le formulaire affiche un
> message d'erreur clair plutôt que d'échouer silencieusement.

### Configurer Google Maps

1. Ouvrez [Google Maps](https://maps.google.com) et recherchez l'adresse du cabinet.
2. Cliquez sur **Partager** → onglet **Intégrer une carte**.
3. Copiez l'attribut `src="..."` de l'iframe proposée.
4. Collez cette URL dans `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL` dans `.env.local`.

### Configurer le numéro WhatsApp

Renseignez `NEXT_PUBLIC_WHATSAPP_NUMERO` au format international, **sans** le
`+` ni espaces (ex. `221771234567` pour +221 77 123 45 67).

---

## 4. Mettre à jour le contenu

Le contenu du site est actuellement en **données de démonstration**
(médecins, services, avis fictifs pour un cabinet exemple à Dakar). Pour le
remplacer par vos vraies données, éditez simplement les fichiers suivants —
aucune connaissance technique avancée n'est requise.

### Ajouter / modifier un médecin

Fichier : `src/data/doctors.ts`

```ts
{
  slug: "dr-prenom-nom",        // utilisé dans l'URL /medecins/dr-prenom-nom
  nom: "Dr Prénom Nom",
  specialite: "Médecine générale",
  anneesExperience: 10,
  langues: ["Français", "Wolof"],
  diplomes: ["Doctorat en Médecine, Université ..."],
  joursConsultation: ["Lundi", "Mercredi"],
  bio: "Quelques phrases de présentation...",
  initiales: "PN",               // affichées dans l'avatar tant qu'aucune photo n'est intégrée
}
```

> **Photos des médecins** : le site affiche pour l'instant un avatar avec les
> initiales de chaque médecin (aucune photo de démonstration n'étant
> disponible). Pour intégrer de vraies photos, ajoutez vos images dans
> `public/images/medecins/`, puis remplacez le composant `Avatar` par un
> composant `next/image` dans `src/components/doctors/DoctorCard.tsx` et
> `src/app/medecins/[slug]/page.tsx`.

### Ajouter / modifier un service

Fichier : `src/data/services.ts`. Le champ `icone` accepte un nom d'icône
parmi : `Stethoscope`, `Baby`, `HeartPulse`, `Sparkles`, `Flower2`,
`FlaskConical` (voir [lucide.dev/icons](https://lucide.dev/icons) pour
découvrir d'autres icônes disponibles à ajouter dans
`src/components/services/ServiceCard.tsx`).

### Ajouter / modifier un avis

Fichier : `src/data/reviews.ts`. La note (`note`) va de 1 à 5.

> **Évolution possible** : ces avis sont pour l'instant gérés en statique.
> Une évolution vers une gestion dynamique (back-office avec formulaire
> d'ajout, ou intégration de l'API Google Reviews) est possible dans une
> prochaine itération.

### Modifier les coordonnées, horaires et accès

Fichier : `src/data/config.ts` (ou directement via les variables
d'environnement dans `.env.local`, qui sont prioritaires).

---

## 5. Déploiement

Le projet est prêt pour un déploiement sur [Vercel](https://vercel.com)
(recommandé pour Next.js) :

1. Poussez le code sur un dépôt Git (GitHub, GitLab...).
2. Importez le dépôt dans Vercel.
3. Renseignez les mêmes variables d'environnement que dans `.env.local`
   (section **Settings → Environment Variables** du projet Vercel).
4. Déployez — Vercel détecte automatiquement Next.js.

Toutes les pages du site sont pré-rendues statiquement (Static / SSG), ce qui
garantit des temps de chargement rapides conformes à l'objectif de score
Lighthouse ≥ 90 fixé dans le cahier des charges.

---

## 6. Notes techniques

- **Formulaire de rendez-vous** : envoi via EmailJS depuis le navigateur
  (aucun backend requis). La demande n'est jamais une réservation ferme —
  le secrétariat confirme le créneau manuellement, comme précisé à l'écran.
- **Confidentialité** : aucune donnée patient n'est stockée par le site ; le
  formulaire ne fait que transmettre l'e-mail via EmailJS.
- **Polices** : Poppins (titres) et Inter (texte courant) sont chargées
  depuis Google Fonts via des balises `<link>` dans `src/app/layout.tsx`. Si
  vous préférez les auto-héberger (recommandé pour un score de confidentialité
  et de performance optimal), migrez vers
  [`next/font/google`](https://nextjs.org/docs/app/getting-started/fonts) —
  cela nécessite un accès réseau à `fonts.gstatic.com` au moment du build.
- **Accessibilité** : navigation clavier, contrastes conformes à la charte
  graphique, textes alternatifs sur les éléments visuels.
