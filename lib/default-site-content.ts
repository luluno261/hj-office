import { resolveImage, resolveImageSized } from '@/lib/resolve-image';
import type { ResolvedImage } from '@/lib/resolve-image';
import { siteImageAlt, siteImages } from '@/lib/site-images';
import type {
  AboutPageData,
  ContactPageData,
  FacilitiesPageData,
  HeroSlideData,
  HomePageContent,
  ServiceData,
  SiteSettings,
  TeamMemberData,
} from '@/sanity/types';

const img = (src: string, alt: string): ResolvedImage => ({ src, alt });

const MAP_LINK =
  'https://www.google.com/maps/place/HJ+OFFICES/@-18.9460739,47.5227842,17z/data=!3m1!4b1!4m6!3m5!1s0x21f07f003e3c6853:0x9106c5ae7d23e330!8m2!3d-18.9460739!4d47.5253591!16s%2Fg%2F11njy26wyk?entry=ttu';

const MAP_EMBED_URL =
  'https://maps.google.com/maps?q=HJ+OFFICES,-18.9460739,47.5253591&hl=fr&z=17&output=embed';

const fallbackImages = {
  logo: img(siteImages.logo, siteImageAlt.logo),
  hero: [
    img(siteImages.heroOffice, siteImageAlt.heroOffice),
    img(siteImages.conferenceRoom, siteImageAlt.conferenceRoom),
    img(siteImages.heroModernFrame, siteImageAlt.heroModernFrame),
  ],
  aboutLeft: img(siteImages.heroModernFrame, siteImageAlt.heroModernFrame),
  facilities: [
    img(siteImages.heroModernFrame, siteImageAlt.heroModernFrame),
    img(siteImages.conferenceRoom, siteImageAlt.conferenceRoom),
    img(siteImages.officeInterior, siteImageAlt.officeInterior),
  ],
  contactSide: img(siteImages.entranceSign, siteImageAlt.entranceSign),
};

export const defaultSiteSettings: SiteSettings = {
  siteName: 'HJ Offices Consortium',
  logo: { asset: undefined, alt: siteImageAlt.logo },
  email: 'contact@hjoffices.com',
  phone: '033 14 315 16',
  hours: 'Lun-Ven : 8h – 18h',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61568211755064',
  linkedinUrl: '#',
  mapLink: MAP_LINK,
  mapEmbedUrl: MAP_EMBED_URL,
  mapLocationLabel: 'HJ Offices — Antananarivo',
  heroTagline: 'Une vision à 360° de vos projets',
  servicesBadge: "Nos 6 Pôles d'expertise",
  servicesTitle: "L'expertise HJ Offices Consortium\nau service de vos projets",
  servicesSubtitle:
    "Six pôles d'expertise réunis sous un même toit pour un accompagnement juridique, fiscal, entrepreneurial et institutionnel global.",
  teamEyebrow: 'Notre équipe',
  teamTitle: 'Nos experts dédiés\nà votre réussite',
  teamIntro:
    "Des professionnels expérimentés au sein de nos six pôles d'expertise collaborent au quotidien pour vous offrir un accompagnement global, sécurisé et adapté à vos ambitions.",
  copyright: '© 2026 HJ Offices Consortium. Tous droits réservés.',
};

export const defaultHeroSlides: HeroSlideData[] = [
  {
    eyebrow: 'Bienvenue chez HJ Offices',
    title: 'Un consortium au service de votre réussite',
    description:
      'Les défis juridiques, fiscaux, financiers et entrepreneuriaux exigent une approche globale et coordonnée. HJ Offices Consortium réunit des experts reconnus pour un accompagnement complet, cohérent et efficace.',
    image: { asset: undefined, alt: siteImageAlt.heroOffice },
  },
  {
    eyebrow: 'Écosystème professionnel',
    title: 'Un écosystème de compétences',
    description:
      "Avocats, notaires, experts comptables, consultants, et formateurs unis au sein d'un même espace professionnel et collaborent pour apporter des solutions adaptées aux besoins des investisseurs et des entreprises",
    image: { asset: undefined, alt: siteImageAlt.conferenceRoom },
  },
  {
    eyebrow: 'Cadre moderne',
    title: 'Un cadre professionnel moderne',
    description:
      'Sept bureaux équipés, une salle de conférence de 25 places, une salle de réunion connectée, un parking privé sécurisé et un emplacement stratégique facilement accessible.',
    image: { asset: undefined, alt: siteImageAlt.heroModernFrame },
  },
];

export const defaultServices: ServiceData[] = [
  {
    num: '01',
    title: "Cabinet d'Avocats",
    icon: 'scale',
    description: `Notre cabinet accompagne ses clients tant dans le conseil que dans la défense de leurs intérêts devant les juridictions et instances d'arbitrage.

Nous intervenons notamment en droit fiscal, droit social, droit commercial, droit des affaires, droit public, droit international et droit pénal des affaires.

Nos prestations comprennent l'audit juridique, la sécurisation des actes et contrats, la conformité réglementaire, la gestion des risques juridiques, les négociations stratégiques, le précontentieux ainsi que la représentation et l'assistance dans les procédures judiciaires et arbitrales.`,
    shortDescription:
      'Conseil et défense devant les juridictions en droit fiscal, social, commercial, des affaires, public, international et pénal des affaires.',
    order: 0,
  },
  {
    num: '02',
    title: 'Service Notarial',
    icon: 'landmark',
    description: `Le pôle notarial assure la rédaction et l'authentification des actes juridiques tout en garantissant leur sécurité et leur force probante.

Nous accompagnons nos clients dans les opérations immobilières, les successions, les donations, les testaments, les contrats de mariage, la transmission d'entreprise ainsi que l'organisation et la protection du patrimoine familial.`,
    shortDescription:
      "Rédaction et authentification d'actes juridiques : opérations immobilières, successions, donations et transmission d'entreprise.",
    order: 1,
  },
  {
    num: '03',
    title: 'Expertise Comptable',
    icon: 'barChart3',
    description: `Tenue de comptabilité, audit, conseil fiscal, optimisation financière et accompagnement des entreprises dans leur gestion.

1. Comptabilité & Reporting
* Tenue comptable
* Révision
* États financiers
* Clôture comptable
2. Fiscalité & Conformité
* Déclarations fiscales
* Contrôles fiscaux
* Conseil fiscal
3. Social & RH
* Paie
* Préparation déclarations sociales et fiscales
4. Audit & Due Diligence
* Révision
* Audit contractuel
* Due diligence d'acquisition
* Commissariat aux comptes
5. Conseil Financier & CFO Externalisé
* Tableaux de bord
* Budget
* Business plan
* Recherche de financement`,
    shortDescription:
      'Tenue de comptabilité, audit, conseil fiscal, optimisation financière et accompagnement des entreprises dans leur gestion.',
    order: 2,
  },
  {
    num: '04',
    title: 'Pôle Entreprise',
    icon: 'briefcase',
    description: `Pack création d'entreprise

* Déclaration fiscale 6 mois offert
* Domiciliation 1 an
* Création SARL, société individuelle, EI, Association, ONG
* Fiscalité : IRSA, TVA, IR, IS, RCBE, ...
* Accompagnement de sociétés
* Accompagnement bancaire
* Ressources humaines
* Créations et Déclarations sociales`,
    shortDescription:
      'Guichet unique pour entrepreneurs et sociétés : création, domiciliation, fiscalité et accompagnement de vos projets.',
    order: 3,
  },
  {
    num: '05',
    title: 'Pôle Formations',
    icon: 'graduationCap',
    description: `Parce que la performance repose sur la compétence, notre pôle formations propose des programmes destinés aux professionnels, aux entreprises et aux institutions.

Les formations sont dispensées par des praticiens expérimentés dans des domaines variés tels que la fiscalité, le droit douanier, la comptabilité, le management, la gouvernance, la conformité et l'anglais professionnel.

Chaque programme est conçu pour répondre aux exigences du monde professionnel et favoriser le développement durable des compétences.`,
    shortDescription:
      'Programmes pour professionnels et entreprises : fiscalité, management, gouvernance et conformité.',
    anchorId: 'formations',
    order: 4,
  },
  {
    num: '06',
    title: 'Cabinet de Consultance',
    icon: 'globe2',
    description: `Services de consultance dans le domaine de la gouvernance et communication institutionnelle.

Services de consultance spécialisés couvrant la gouvernance, la lutte contre la corruption, les réformes institutionnelles, la gestion de projets, l'évaluation de politiques publiques et le développement durable. Notre approche analytique et participative aide les organisations internationales à atteindre des résultats mesurables et durables. Nous collaborons avec des partenaires nationaux et internationaux pour offrir des solutions innovantes adaptées aux contextes locaux complexes.`,
    shortDescription:
      "Services de consultance spécialisés couvrant la gouvernance, la lutte contre la corruption, les réformes institutionnelles, la gestion de projets, l'évaluation de politiques publiques et le développement durable.",
    order: 5,
  },
];

export const defaultAboutPage: AboutPageData = {
  eyebrow: '',
  headline:
    'Un écosystème de compétences au service de votre réussite, avec une approche globale et coordonnée.',
  imageLeft: { asset: undefined, alt: siteImageAlt.heroModernFrame },
  missionTitle: 'Notre mission',
  missionText:
    'Offrir à chaque client une vision à 360° de ses projets grâce à la complémentarité de nos expertises.',
  visionTitle: 'Notre vision',
  visionText:
    'Une vision commune, plusieurs expertises, un seul objectif : votre réussite.',
  ctaLabel: 'Découvrir nos pôles',
};

export const defaultFacilitiesPage: FacilitiesPageData = {
  eyebrow: 'Notre espace',
  title: 'Un cadre professionnel moderne',
  intro:
    'HJ Offices Consortium met à la disposition de ses membres un environnement de travail moderne.',
  availabilityBadge: 'Encore quelques bureaux libres',
  galleryMain: { asset: undefined, alt: siteImageAlt.heroModernFrame },
  gallerySecondary1: { asset: undefined, alt: siteImageAlt.conferenceRoom },
  gallerySecondary2: { asset: undefined, alt: siteImageAlt.officeInterior },
  amenities: [
    {
      icon: 'building2',
      title: '7 bureaux équipés',
      description:
        'Sept bureaux indépendants et entièrement équipés pour vos équipes et vos rendez-vous clients.',
    },
    {
      icon: 'users',
      title: 'Salle de conférence',
      description:
        "Jusqu'à 25 participants pour réunions, séminaires, formations et événements professionnels.",
    },
    {
      icon: 'monitor',
      title: 'Salle de réunion connectée',
      description:
        'Espace moderne pour vos visioconférences et réunions collaboratives.',
    },
    {
      icon: 'car',
      title: 'Parking privé sécurisé',
      description:
        'Stationnement dédié pour le confort et la sécurité de vos collaborateurs et visiteurs.',
    },
    {
      icon: 'wifi',
      title: 'Internet haut débit',
      description: 'Connexion performante pour un travail fluide au quotidien.',
    },
    {
      icon: 'mapPin',
      title: 'Emplacement stratégique',
      description:
        'Un site facilement accessible, au cœur de votre activité professionnelle.',
    },
  ],
};

export const defaultContactPage: ContactPageData = {
  eyebrow: 'Contactez-nous',
  title: 'Contactez-nous',
  intro:
    "Parlez-nous de votre projet — juridique, fiscal, comptable ou entrepreneurial. Nos six pôles d'expertise coordonnent une réponse adaptée à vos besoins.",
  sideImage: { asset: undefined, alt: siteImageAlt.entranceSign },
  mapSectionTitle: 'Notre localisation',
  mapSectionSubtitle: 'HJ Offices — Antananarivo',
  formNamePlaceholder: 'Nom complet',
  formEmailPlaceholder: 'Adresse email',
  formPhonePlaceholder: 'Téléphone',
  formSubjectPlaceholder: 'Objet de votre demande',
  formMessagePlaceholder: 'Votre message',
  formSubmitLabel: 'Envoyer ma demande',
};

export const defaultTeamMembers: TeamMemberData[] = [
  {
    name: 'Me Rakoto',
    role: "Cabinet d'Avocats",
    photoUrl:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500',
    order: 0,
  },
  {
    name: 'Me Andriamahefa',
    role: 'Service Notarial',
    photoUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500',
    order: 1,
  },
  {
    name: 'Expert-comptable HJ',
    role: 'Expertise Comptable',
    photoUrl:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=500',
    order: 2,
  },
  {
    name: 'Consultant HJ Offices',
    role: 'Pôle Entreprise',
    photoUrl:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400&h=500',
    order: 3,
  },
];

export const defaultHomePageContent: HomePageContent = {
  siteSettings: defaultSiteSettings,
  heroSlides: defaultHeroSlides,
  services: defaultServices,
  aboutPage: defaultAboutPage,
  facilitiesPage: defaultFacilitiesPage,
  contactPage: defaultContactPage,
  teamMembers: defaultTeamMembers,
};

export interface ResolvedHomePageContent {
  siteSettings: SiteSettings & { logo: ResolvedImage };
  heroSlides: Array<Omit<HeroSlideData, 'image'> & { image: ResolvedImage }>;
  services: ServiceData[];
  aboutPage: Omit<AboutPageData, 'imageLeft'> & {
    imageLeft: ResolvedImage;
  };
  facilitiesPage: Omit<
    FacilitiesPageData,
    'galleryMain' | 'gallerySecondary1' | 'gallerySecondary2'
  > & {
    galleryMain: ResolvedImage;
    gallerySecondary1: ResolvedImage;
    gallerySecondary2: ResolvedImage;
  };
  contactPage: Omit<ContactPageData, 'sideImage'> & { sideImage: ResolvedImage };
  teamMembers: Array<
    Omit<TeamMemberData, 'photo' | 'photoUrl'> & { photo: ResolvedImage; _id?: string }
  >;
}

export function resolveHomePageContent(raw: HomePageContent): ResolvedHomePageContent {
  const members = raw.teamMembers.length > 0 ? raw.teamMembers : defaultTeamMembers;

  return {
    siteSettings: {
      ...raw.siteSettings,
      logo: resolveImage(raw.siteSettings.logo, fallbackImages.logo),
    },
    heroSlides: (raw.heroSlides.length > 0 ? raw.heroSlides : defaultHeroSlides).map(
      (slide, i) => ({
        ...slide,
        image: resolveImage(slide.image, fallbackImages.hero[i] ?? fallbackImages.hero[0]),
      })
    ),
    services: raw.services.length > 0 ? raw.services : defaultServices,
    aboutPage: {
      ...raw.aboutPage,
      imageLeft: resolveImage(raw.aboutPage.imageLeft, fallbackImages.aboutLeft),
    },
    facilitiesPage: {
      ...raw.facilitiesPage,
      galleryMain: resolveImage(
        raw.facilitiesPage.galleryMain,
        fallbackImages.facilities[0]
      ),
      gallerySecondary1: resolveImage(
        raw.facilitiesPage.gallerySecondary1,
        fallbackImages.facilities[1]
      ),
      gallerySecondary2: resolveImage(
        raw.facilitiesPage.gallerySecondary2,
        fallbackImages.facilities[2]
      ),
    },
    contactPage: {
      ...raw.contactPage,
      sideImage: resolveImage(raw.contactPage.sideImage, fallbackImages.contactSide),
    },
    teamMembers: members.map((member, i) => ({
      _id: member._id,
      name: member.name,
      role: member.role,
      order: member.order,
      linkedinUrl: member.linkedinUrl,
      email: member.email,
      photo: member.photoUrl
        ? { src: member.photoUrl, alt: member.name }
        : resolveImageSized(
            member.photo,
            {
              src:
                defaultTeamMembers[i]?.photoUrl ??
                'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500',
              alt: member.name,
            },
            400,
            500
          ),
    })),
  };
}

export function getDefaultResolvedHomePageContent(): ResolvedHomePageContent {
  return resolveHomePageContent(defaultHomePageContent);
}
