/**
 * Seed script for initial blog posts.
 * Requires SANITY_API_WRITE_TOKEN with Editor permissions.
 *
 * Usage:
 *   NEXT_PUBLIC_SANITY_PROJECT_ID=xxx SANITY_API_WRITE_TOKEN=xxx node scripts/seed-posts.mjs
 */

import { createClient } from '@sanity/client';

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

const posts = [
  {
    _type: 'post',
    title:
      '5 erreurs juridiques que font les entrepreneurs à la création de leur société',
    slug: {
      _type: 'slug',
      current: '5-erreurs-juridiques-creation-societe',
    },
    excerpt:
      'Découvrez les erreurs les plus fréquentes lors de la création d’une société et comment les éviter pour sécuriser votre projet entrepreneurial.',
    category: 'droit-des-affaires',
    publishedAt: '2024-12-01T10:00:00.000Z',
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'La création d’une société est une étape décisive. Pourtant, de nombreux entrepreneurs commettent des erreurs juridiques évitables qui peuvent avoir des conséquences durables sur la gouvernance, la fiscalité ou la responsabilité des associés.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: '1. Choisir une forme juridique inadaptée',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'SARL, SAS, SA… chaque statut a ses avantages et contraintes. Un mauvais choix initial peut compliquer une levée de fonds ou une transmission ultérieure.',
          },
        ],
      },
    ],
  },
  {
    _type: 'post',
    title:
      "Optimisation fiscale : ce que toute PME doit savoir avant la clôture de l'exercice",
    slug: {
      _type: 'slug',
      current: 'optimisation-fiscale-pme-cloture-exercice',
    },
    excerpt:
      'Avant la clôture de l’exercice, plusieurs leviers fiscaux peuvent être activés pour optimiser la situation de votre PME en toute conformité.',
    category: 'droit-fiscal',
    publishedAt: '2024-12-05T10:00:00.000Z',
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'La fin d’exercice est le moment idéal pour revoir votre stratégie fiscale. Amortissements, provisions, rémunération du dirigeant : chaque décision doit être anticipée.',
          },
        ],
      },
    ],
  },
  {
    _type: 'post',
    title:
      "Transmission d'entreprise : anticiper pour mieux protéger votre patrimoine",
    slug: {
      _type: 'slug',
      current: 'transmission-entreprise-proteger-patrimoine',
    },
    excerpt:
      'Anticiper la transmission de votre entreprise permet de protéger votre patrimoine et d’assurer la continuité de l’activité dans les meilleures conditions.',
    category: 'transmission',
    publishedAt: '2024-12-10T10:00:00.000Z',
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'La transmission d’entreprise est un processus complexe qui touche à la fois au droit des sociétés, à la fiscalité et au droit de la famille. Une anticipation de plusieurs années est souvent nécessaire.',
          },
        ],
      },
    ],
  },
];

async function seed() {
  const transaction = client.transaction();

  for (const post of posts) {
    const id = `post-${post.slug.current}`;
    transaction.createOrReplace({ ...post, _id: id });
  }

  await transaction.commit();
  console.log(`Seeded ${posts.length} posts successfully.`);
  console.log(
    'Add images via Sanity Studio at /studio for each article.'
  );
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
