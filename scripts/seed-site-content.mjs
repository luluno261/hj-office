/**
 * Seed script for site content (hero, services, team, pages, settings).
 * Uses deterministic document IDs — safe to re-run (updates, does not duplicate).
 *
 * Usage:
 *   pnpm seed:site
 */

import { createClient } from '@sanity/client';
import { keyed } from './sanity-keys.mjs';
import { createReadStream } from 'node:fs';
import { basename, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error(
    'Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN'
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
});

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const publicDir = join(root, 'public');

function docId(type, key) {
  return `${type}-${key}`;
}

const ECOSYSTEM_DESCRIPTION =
  "Avocats, notaires, experts comptables, consultants, et formateurs unis au sein d'un même espace professionnel et collaborent pour apporter des solutions adaptées aux besoins des investisseurs et des entreprises";

const SERVICE_01_DESCRIPTION = `Notre cabinet accompagne ses clients tant dans le conseil que dans la défense de leurs intérêts devant les juridictions et instances d'arbitrage.

Nous intervenons notamment en droit fiscal, droit social, droit commercial, droit des affaires, droit public, droit international et droit pénal des affaires.

Nos prestations comprennent l'audit juridique, la sécurisation des actes et contrats, la conformité réglementaire, la gestion des risques juridiques, les négociations stratégiques, le précontentieux ainsi que la représentation et l'assistance dans les procédures judiciaires et arbitrales.`;

const SERVICE_01_SHORT =
  'Conseil et défense devant les juridictions en droit fiscal, social, commercial, des affaires, public, international et pénal des affaires.';

const SERVICE_02_DESCRIPTION = `Le pôle notarial assure la rédaction et l'authentification des actes juridiques tout en garantissant leur sécurité et leur force probante.

Nous accompagnons nos clients dans les opérations immobilières, les successions, les donations, les testaments, les contrats de mariage, la transmission d'entreprise ainsi que l'organisation et la protection du patrimoine familial.`;

const SERVICE_02_SHORT =
  "Rédaction et authentification d'actes juridiques : opérations immobilières, successions, donations et transmission d'entreprise.";

const SERVICE_03_DESCRIPTION = `Tenue de comptabilité, audit, conseil fiscal, optimisation financière et accompagnement des entreprises dans leur gestion.

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
* Recherche de financement`;

const SERVICE_03_SHORT =
  'Tenue de comptabilité, audit, conseil fiscal, optimisation financière et accompagnement des entreprises dans leur gestion.';

const SERVICE_04_DESCRIPTION = `Pack création d'entreprise

* Déclaration fiscale 6 mois offert
* Domiciliation 1 an
* Création SARL, société individuelle, EI, Association, ONG
* Fiscalité : IRSA, TVA, IR, IS, RCBE, ...
* Accompagnement de sociétés
* Accompagnement bancaire
* Ressources humaines
* Créations et Déclarations sociales`;

const SERVICE_04_SHORT =
  'Guichet unique pour entrepreneurs et sociétés : création, domiciliation, fiscalité et accompagnement de vos projets.';

const SERVICE_05_DESCRIPTION = `Parce que la performance repose sur la compétence, notre pôle formations propose des programmes destinés aux professionnels, aux entreprises et aux institutions.

Les formations sont dispensées par des praticiens expérimentés dans des domaines variés tels que la fiscalité, le droit douanier, la comptabilité, le management, la gouvernance, la conformité et l'anglais professionnel.

Chaque programme est conçu pour répondre aux exigences du monde professionnel et favoriser le développement durable des compétences.`;

const SERVICE_05_SHORT =
  'Programmes pour professionnels et entreprises : fiscalité, management, gouvernance et conformité.';

const SERVICE_06_DESCRIPTION = `Services de consultance dans le domaine de la gouvernance et communication institutionnelle.

Services de consultance spécialisés couvrant la gouvernance, la lutte contre la corruption, les réformes institutionnelles, la gestion de projets, l'évaluation de politiques publiques et le développement durable. Notre approche analytique et participative aide les organisations internationales à atteindre des résultats mesurables et durables. Nous collaborons avec des partenaires nationaux et internationaux pour offrir des solutions innovantes adaptées aux contextes locaux complexes.`;

const SERVICE_06_SHORT =
  "Services de consultance spécialisés couvrant la gouvernance, la lutte contre la corruption, les réformes institutionnelles, la gestion de projets, l'évaluation de politiques publiques et le développement durable.";

async function uploadImage(filename, alt) {
  const filepath = join(publicDir, filename);
  const asset = await client.assets.upload('image', createReadStream(filepath), {
    filename: basename(filepath),
  });
  return {
    _type: 'image',
    asset: { _type: 'reference', _ref: asset._id },
    alt,
  };
}

async function seed() {
  console.log('Uploading images...');
  const images = {
    logo: await uploadImage('logo.jpg', 'Logo HJ Offices Consortium'),
    heroOffice: await uploadImage('hjoffice-hero.jpeg', 'Consultation professionnelle'),
    conferenceRoom: await uploadImage('Image2.jpg', 'Salle de conférence'),
    heroModernFrame: await uploadImage('Image1.jpg', 'Façade moderne au crépuscule'),
    entranceSign: await uploadImage('Image3.jpg', "Panneau d'accueil"),
    officeInterior: await uploadImage('Image4.jpg', 'Bureau moderne équipé'),
  };

  console.log('Upserting site settings...');
  await client.createOrReplace({
    _id: 'siteSettings',
    _type: 'siteSettings',
    siteName: 'HJ Offices Consortium',
    logo: images.logo,
    email: 'contact@hjoffices.com',
    phone: '033 14 315 16',
    hours: 'Lun-Ven : 8h – 18h',
    facebookUrl: 'https://www.facebook.com/profile.php?id=61568211755064',
    linkedinUrl: '#',
    mapLink:
      'https://www.google.com/maps/place/HJ+OFFICES/@-18.9460739,47.5227842,17z',
    mapEmbedUrl:
      'https://maps.google.com/maps?q=HJ+OFFICES,-18.9460739,47.5253591&hl=fr&z=17&output=embed',
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
  });

  const heroSlides = [
    {
      id: docId('heroSlide', 0),
      eyebrow: 'Bienvenue chez HJ Offices',
      title: 'Un consortium au service de votre réussite',
      description:
        'Les défis juridiques, fiscaux, financiers et entrepreneuriaux exigent une approche globale et coordonnée.',
      image: images.heroOffice,
      order: 0,
    },
    {
      id: docId('heroSlide', 1),
      eyebrow: 'Écosystème professionnel',
      title: 'Un écosystème de compétences',
      description: ECOSYSTEM_DESCRIPTION,
      image: images.conferenceRoom,
      order: 1,
    },
    {
      id: docId('heroSlide', 2),
      eyebrow: 'Cadre moderne',
      title: 'Un cadre professionnel moderne',
      description:
        'Sept bureaux équipés, une salle de conférence de 25 places et un parking privé sécurisé.',
      image: images.heroModernFrame,
      order: 2,
    },
  ];

  console.log('Upserting hero slides...');
  for (const { id, ...slide } of heroSlides) {
    await client.createOrReplace({
      _id: id,
      _type: 'heroSlide',
      ...slide,
    });
  }

  const services = [
    {
      id: docId('service', '01'),
      num: '01',
      title: "Cabinet d'Avocats",
      icon: 'scale',
      description: SERVICE_01_DESCRIPTION,
      shortDescription: SERVICE_01_SHORT,
      order: 0,
    },
    {
      id: docId('service', '02'),
      num: '02',
      title: 'Service Notarial',
      icon: 'landmark',
      description: SERVICE_02_DESCRIPTION,
      shortDescription: SERVICE_02_SHORT,
      order: 1,
    },
    {
      id: docId('service', '03'),
      num: '03',
      title: 'Expertise Comptable',
      icon: 'barChart3',
      description: SERVICE_03_DESCRIPTION,
      shortDescription: SERVICE_03_SHORT,
      order: 2,
    },
    {
      id: docId('service', '04'),
      num: '04',
      title: 'Pôle Entreprise',
      icon: 'briefcase',
      description: SERVICE_04_DESCRIPTION,
      shortDescription: SERVICE_04_SHORT,
      order: 3,
    },
    {
      id: docId('service', '05'),
      num: '05',
      title: 'Pôle Formations',
      icon: 'graduationCap',
      description: SERVICE_05_DESCRIPTION,
      shortDescription: SERVICE_05_SHORT,
      anchorId: 'formations',
      order: 4,
    },
    {
      id: docId('service', '06'),
      num: '06',
      title: 'Cabinet de Consultance',
      icon: 'globe2',
      description: SERVICE_06_DESCRIPTION,
      shortDescription: SERVICE_06_SHORT,
      order: 5,
    },
  ];

  console.log('Upserting services...');
  for (const { id, ...service } of services) {
    await client.createOrReplace({
      _id: id,
      _type: 'service',
      ...service,
    });
  }

  console.log('Upserting team members...');
  const team = [
    { name: 'Me Rakoto', role: "Cabinet d'Avocats", order: 0 },
    { name: 'Me Andriamahefa', role: 'Service Notarial', order: 1 },
    { name: 'Expert-comptable HJ', role: 'Expertise Comptable', order: 2 },
    { name: 'Consultant HJ Offices', role: 'Pôle Entreprise', order: 3 },
  ];
  for (const member of team) {
    await client.createOrReplace({
      _id: docId('teamMember', member.order),
      _type: 'teamMember',
      ...member,
      photo: images.logo,
    });
  }

  console.log('Upserting page singletons...');
  await client.createOrReplace({
    _id: 'aboutPage',
    _type: 'aboutPage',
    eyebrow: '',
    headline:
      'Un écosystème de compétences au service de votre réussite, avec une approche globale et coordonnée.',
    imageLeft: images.heroModernFrame,
    missionTitle: 'Notre mission',
    missionText:
      'Offrir à chaque client une vision à 360° de ses projets grâce à la complémentarité de nos expertises.',
    visionTitle: 'Notre vision',
    visionText:
      'Une vision commune, plusieurs expertises, un seul objectif : votre réussite.',
    ctaLabel: 'Découvrir nos pôles',
  });

  await client.createOrReplace({
    _id: 'facilitiesPage',
    _type: 'facilitiesPage',
    eyebrow: 'Notre espace',
    title: 'Un cadre professionnel moderne',
    intro:
      'HJ Offices Consortium met à la disposition de ses membres un environnement de travail moderne.',
    availabilityBadge: 'Encore quelques bureaux libres',
    galleryMain: images.heroModernFrame,
    gallerySecondary1: images.conferenceRoom,
    gallerySecondary2: images.officeInterior,
    amenities: [
      keyed({
        icon: 'building2',
        title: '7 bureaux équipés',
        description: 'Sept bureaux indépendants et entièrement équipés.',
      }),
      keyed({
        icon: 'users',
        title: 'Salle de conférence',
        description: "Jusqu'à 25 participants pour réunions et séminaires.",
      }),
      keyed({
        icon: 'monitor',
        title: 'Salle de réunion connectée',
        description: 'Espace moderne pour vos visioconférences.',
      }),
      keyed({
        icon: 'car',
        title: 'Parking privé sécurisé',
        description: 'Stationnement dédié pour vos collaborateurs.',
      }),
      keyed({
        icon: 'wifi',
        title: 'Internet haut débit',
        description: 'Connexion performante au quotidien.',
      }),
      keyed({
        icon: 'mapPin',
        title: 'Emplacement stratégique',
        description: 'Un site facilement accessible.',
      }),
    ],
  });

  await client.createOrReplace({
    _id: 'contactPage',
    _type: 'contactPage',
    eyebrow: 'Contactez-nous',
    title: 'Contactez-nous',
    intro:
      "Parlez-nous de votre projet — juridique, fiscal, comptable ou entrepreneurial.",
    sideImage: images.entranceSign,
    mapSectionTitle: 'Notre localisation',
    mapSectionSubtitle: 'HJ Offices — Antananarivo',
    formNamePlaceholder: 'Nom complet',
    formEmailPlaceholder: 'Adresse email',
    formPhonePlaceholder: 'Téléphone',
    formSubjectPlaceholder: 'Objet de votre demande',
    formMessagePlaceholder: 'Votre message',
    formSubmitLabel: 'Envoyer ma demande',
  });

  console.log('Site content seeded successfully (upsert, no duplicates).');
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
