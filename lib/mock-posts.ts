import type { Post, PostCard } from '@/sanity/types';

function block(
  text: string,
  style: 'normal' | 'h2' | 'h3' = 'normal'
) {
  return {
    _type: 'block' as const,
    style,
    children: [{ _type: 'span' as const, text }],
  };
}

const mockPosts: Post[] = [
  {
    _id: 'mock-post-1',
    title:
      '5 erreurs juridiques que font les entrepreneurs à la création de leur société',
    slug: { current: '5-erreurs-juridiques-creation-societe' },
    excerpt:
      'Découvrez les erreurs les plus fréquentes lors de la création d’une société et comment les éviter pour sécuriser votre projet entrepreneurial.',
    category: 'droit-des-affaires',
    publishedAt: '2025-01-15T10:00:00.000Z',
    body: [
      block(
        'La création d’une société est une étape décisive. Pourtant, de nombreux entrepreneurs commettent des erreurs juridiques évitables qui peuvent avoir des conséquences durables sur la gouvernance, la fiscalité ou la responsabilité des associés.'
      ),
      block('1. Choisir une forme juridique inadaptée', 'h2'),
      block(
        'SARL, SAS, SA… chaque statut a ses avantages et contraintes. Un mauvais choix initial peut compliquer une levée de fonds, l’entrée d’un investisseur ou une transmission ultérieure. L’accompagnement d’un conseil juridique dès le départ permet d’aligner la structure sur vos objectifs réels.'
      ),
      block('2. Négliger les pactes d’associés', 'h2'),
      block(
        'Les statuts posent le cadre légal, mais le pacte d’associés organise la vie quotidienne : prise de décision, sortie d’un associé, clause de non-concurrence, répartition des dividendes. Sans ce document, les conflits deviennent coûteux et longs à résoudre.'
      ),
      block('3. Sous-estimer les obligations sociales et fiscales', 'h2'),
      block(
        'Déclarations, cotisations, TVA, obligations comptables : la création d’une société ouvre un calendrier administratif strict. Anticiper ces obligations avec un expert-comptable évite les pénalités et libère du temps pour le développement commercial.'
      ),
    ],
  },
  {
    _id: 'mock-post-2',
    title:
      "Optimisation fiscale : ce que toute PME doit savoir avant la clôture de l'exercice",
    slug: { current: 'optimisation-fiscale-pme-cloture-exercice' },
    excerpt:
      'Avant la clôture de l’exercice, plusieurs leviers fiscaux peuvent être activés pour optimiser la situation de votre PME en toute conformité.',
    category: 'droit-fiscal',
    publishedAt: '2025-02-10T10:00:00.000Z',
    body: [
      block(
        'La fin d’exercice est le moment idéal pour revoir votre stratégie fiscale. Amortissements, provisions, rémunération du dirigeant : chaque décision doit être anticipée et documentée pour rester conforme au droit en vigueur.'
      ),
      block('Anticiper les investissements', 'h2'),
      block(
        'Certains investissements peuvent être déduits ou amortis selon des règles spécifiques. Planifier les acquisitions de matériel, de véhicules ou de logiciels avant la clôture permet parfois d’optimiser le résultat imposable de l’exercice.'
      ),
      block('Structurer la rémunération du dirigeant', 'h2'),
      block(
        'Salaire, dividendes, avantages en nature : l’équilibre entre ces composantes influence directement la charge fiscale et sociale de l’entreprise comme celle du dirigeant. Une revue annuelle avec votre conseil fiscal est indispensable.'
      ),
      block('Vérifier l’éligibilité aux dispositifs d’aide', 'h2'),
      block(
        'Crédit d’impôt recherche, réduction d’impôt pour sous-traitance, zones franches : de nombreux dispositifs existent selon votre secteur et votre localisation. Les identifier tôt évite de passer à côté d’économies significatives.'
      ),
    ],
  },
  {
    _id: 'mock-post-3',
    title:
      "Transmission d'entreprise : anticiper pour mieux protéger votre patrimoine",
    slug: { current: 'transmission-entreprise-proteger-patrimoine' },
    excerpt:
      'Anticiper la transmission de votre entreprise permet de protéger votre patrimoine et d’assurer la continuité de l’activité dans les meilleures conditions.',
    category: 'transmission',
    publishedAt: '2025-03-05T10:00:00.000Z',
    body: [
      block(
        'La transmission d’entreprise est un processus complexe qui touche au droit des sociétés, à la fiscalité et au droit de la famille. Une anticipation de plusieurs années est souvent nécessaire pour préserver la valeur créée et sécuriser les parties prenantes.'
      ),
      block('Évaluer l’entreprise avec méthode', 'h2'),
      block(
        'Une valorisation objective — fondée sur l’activité, les actifs et les perspectives — constitue le point de départ de toute opération. Elle facilite les négociations familiales ou avec un repreneur externe et évite les litiges post-transmission.'
      ),
      block('Choisir le bon vecteur de transmission', 'h2'),
      block(
        'Donation-partage, vente, pacte Dutreil, holding familiale : les options sont nombreuses et leurs impacts fiscaux très différents. Le choix dépend de votre situation patrimoniale, de l’âge des repreneurs et de la gouvernance souhaitée.'
      ),
      block('Préparer la relève opérationnelle', 'h2'),
      block(
        'Au-delà des aspects juridiques et fiscaux, la réussite d’une transmission repose sur la préparation des successeurs et la structuration des équipes. Un plan de transition sur 2 à 5 ans réduit les risques de rupture d’activité.'
      ),
    ],
  },
];

export function getMockPosts(): Post[] {
  return mockPosts;
}

export function getMockPostCards(): PostCard[] {
  return mockPosts.map(({ body: _body, ...card }) => card);
}

export function getMockPostBySlug(slug: string): Post | null {
  return mockPosts.find((post) => post.slug.current === slug) ?? null;
}

export function getMockPostSlugs(): string[] {
  return mockPosts.map((post) => post.slug.current);
}
