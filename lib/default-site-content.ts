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
  aboutLeft: img(siteImages.entranceSign, siteImageAlt.entranceSign),
  aboutRight: img(siteImages.officeInterior, siteImageAlt.officeInterior),
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
  phone: '+261388759740',
  hours: 'Lun-Ven : 8h – 18h',
  facebookUrl: '#',
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
      'Avocats, notaires, experts-comptables, consultants et formateurs collaborent étroitement pour apporter des solutions adaptées aux entreprises, investisseurs, institutions et particuliers.',
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
    description:
      'Conseil et défense devant les juridictions en droit fiscal, social, commercial, des affaires, public, international et pénal des affaires. Audit juridique, conformité, négociations et contentieux.',
    order: 0,
  },
  {
    num: '02',
    title: 'Service Notarial',
    icon: 'landmark',
    description:
      "Rédaction et authentification d'actes juridiques : opérations immobilières, successions, donations, testaments, contrats de mariage, transmission d'entreprise et protection du patrimoine familial.",
    order: 1,
  },
  {
    num: '03',
    title: 'Expertise Comptable',
    icon: 'barChart3',
    description:
      'Tenue comptable, états financiers, déclarations fiscales et sociales, audit, due diligence, optimisation fiscale et conseil financier. Reporting et tableaux de bord pour piloter votre activité.',
    order: 2,
  },
  {
    num: '04',
    title: 'Pôle Entreprise',
    icon: 'briefcase',
    description:
      "Guichet unique pour entrepreneurs et investisseurs : création d'entreprise, formalités administratives, domiciliation, modifications statutaires et accompagnement des projets d'investissement.",
    order: 3,
  },
  {
    num: '05',
    title: 'Pôle Formations',
    icon: 'graduationCap',
    description:
      'Programmes pour professionnels et entreprises : fiscalité, droit douanier, comptabilité, management, gouvernance, conformité et anglais professionnel, dispensés par des praticiens expérimentés.',
    anchorId: 'formations',
    order: 4,
  },
  {
    num: '06',
    title: 'Cabinet de Consultance',
    icon: 'globe2',
    description:
      "Services de consultance spécialisés couvrant la gouvernance, la lutte contre la corruption, les réformes institutionnelles, la gestion de projets, l'évaluation de politiques publiques et le développement durable. Notre approche analytique et participative aide les organisations internationales à atteindre des résultats mesurables et durables. Nous collaborons avec des partenaires nationaux et internationaux pour offrir des solutions innovantes adaptées aux contextes locaux complexes.",
    shortDescription:
      "Services de consultance spécialisés couvrant la gouvernance, la lutte contre la corruption, les réformes institutionnelles, la gestion de projets, l'évaluation de politiques publiques et le développement durable.",
    order: 5,
  },
];

export const defaultAboutPage: AboutPageData = {
  eyebrow: 'À propos de HJ Offices Consortium',
  headline:
    'Un écosystème de compétences au service de votre réussite, avec une approche globale et coordonnée.',
  polesCount: 6,
  polesTitle: "Pôles d'expertise",
  polesDescription:
    "Plus qu'un simple centre d'affaires, HJ Offices Consortium réunit avocats, notaires, experts-comptables, consultants et formateurs pour offrir à chaque client une vision à 360° de ses projets.",
  imageLeft: { asset: undefined, alt: siteImageAlt.entranceSign },
  imageRight: { asset: undefined, alt: siteImageAlt.officeInterior },
  missionTitle: 'Notre mission',
  missionText:
    'Offrir à chaque client une vision à 360° de ses projets grâce à la complémentarité de nos expertises juridiques, fiscales, financières et opérationnelles, pour anticiper les risques et optimiser les opportunités.',
  visionTitle: 'Notre vision',
  visionText:
    'Une vision commune, plusieurs expertises, un seul objectif : votre réussite. Devenir le partenaire de confiance des entreprises, investisseurs et institutions.',
  ctaLabel: 'Découvrir nos pôles',
};

export const defaultFacilitiesPage: FacilitiesPageData = {
  eyebrow: 'Notre espace',
  title: 'Un cadre professionnel moderne',
  intro:
    'HJ Offices Consortium met à la disposition de ses membres et de ses clients un environnement de travail moderne et fonctionnel.',
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
  eyebrow: "Besoin d'un conseil ?",
  title: 'Demandez un premier entretien',
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
  aboutPage: Omit<AboutPageData, 'imageLeft' | 'imageRight'> & {
    imageLeft: ResolvedImage;
    imageRight: ResolvedImage;
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
      imageRight: resolveImage(raw.aboutPage.imageRight, fallbackImages.aboutRight),
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
