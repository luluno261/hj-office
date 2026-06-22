/**
 * Seed script for site content (hero, services, team, pages, settings).
 * Requires SANITY_API_WRITE_TOKEN with Editor permissions.
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

  console.log('Creating site settings...');
  await client.createOrReplace({
    _id: 'siteSettings',
    _type: 'siteSettings',
    siteName: 'HJ Offices Consortium',
    logo: images.logo,
    email: 'contact@hjoffices.com',
    phone: '+261388759740',
    hours: 'Lun-Ven : 8h – 18h',
    facebookUrl: '#',
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
      eyebrow: 'Bienvenue chez HJ Offices',
      title: 'Un consortium au service de votre réussite',
      description:
        'Les défis juridiques, fiscaux, financiers et entrepreneuriaux exigent une approche globale et coordonnée.',
      image: images.heroOffice,
      order: 0,
    },
    {
      eyebrow: 'Écosystème professionnel',
      title: 'Un écosystème de compétences',
      description:
        'Avocats, notaires, experts-comptables, consultants et formateurs collaborent étroitement.',
      image: images.conferenceRoom,
      order: 1,
    },
    {
      eyebrow: 'Cadre moderne',
      title: 'Un cadre professionnel moderne',
      description:
        'Sept bureaux équipés, une salle de conférence de 25 places et un parking privé sécurisé.',
      image: images.heroModernFrame,
      order: 2,
    },
  ];

  console.log('Creating hero slides...');
  for (const slide of heroSlides) {
    await client.create({
      _type: 'heroSlide',
      ...slide,
    });
  }

  const services = [
    {
      num: '01',
      title: "Cabinet d'Avocats",
      icon: 'scale',
      description: 'Conseil et défense devant les juridictions en droit fiscal, social, commercial et des affaires.',
      order: 0,
    },
    {
      num: '02',
      title: 'Service Notarial',
      icon: 'landmark',
      description: "Rédaction et authentification d'actes juridiques et opérations immobilières.",
      order: 1,
    },
    {
      num: '03',
      title: 'Expertise Comptable',
      icon: 'barChart3',
      description: 'Tenue comptable, états financiers, déclarations fiscales et conseil financier.',
      order: 2,
    },
    {
      num: '04',
      title: 'Pôle Entreprise',
      icon: 'briefcase',
      description: "Guichet unique pour entrepreneurs : création d'entreprise et domiciliation.",
      order: 3,
    },
    {
      num: '05',
      title: 'Pôle Formations',
      icon: 'graduationCap',
      description: 'Programmes pour professionnels : fiscalité, management et gouvernance.',
      anchorId: 'formations',
      order: 4,
    },
    {
      num: '06',
      title: 'Cabinet de Consultance',
      icon: 'globe2',
      description:
        "Services de consultance spécialisés couvrant la gouvernance, la lutte contre la corruption, les réformes institutionnelles, la gestion de projets, l'évaluation de politiques publiques et le développement durable.",
      shortDescription:
        "Services de consultance spécialisés couvrant la gouvernance, la lutte contre la corruption, les réformes institutionnelles, la gestion de projets, l'évaluation de politiques publiques et le développement durable.",
      order: 5,
    },
  ];

  console.log('Creating services...');
  for (const service of services) {
    await client.create({ _type: 'service', ...service });
  }

  console.log('Creating team members...');
  const team = [
    { name: 'Me Rakoto', role: "Cabinet d'Avocats", order: 0 },
    { name: 'Me Andriamahefa', role: 'Service Notarial', order: 1 },
    { name: 'Expert-comptable HJ', role: 'Expertise Comptable', order: 2 },
    { name: 'Consultant HJ Offices', role: 'Pôle Entreprise', order: 3 },
  ];
  for (const member of team) {
    await client.create({
      _type: 'teamMember',
      ...member,
      photo: images.logo,
    });
  }

  console.log('Creating page singletons...');
  await client.createOrReplace({
    _id: 'aboutPage',
    _type: 'aboutPage',
    eyebrow: 'À propos de HJ Offices Consortium',
    headline:
      'Un écosystème de compétences au service de votre réussite, avec une approche globale et coordonnée.',
    polesCount: 6,
    polesTitle: "Pôles d'expertise",
    polesDescription:
      "Plus qu'un simple centre d'affaires, HJ Offices Consortium réunit avocats, notaires, experts-comptables, consultants et formateurs.",
    imageLeft: images.entranceSign,
    imageRight: images.officeInterior,
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
    eyebrow: "Besoin d'un conseil ?",
    title: 'Demandez un premier entretien',
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

  console.log('Site content seeded successfully.');
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
