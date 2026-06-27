/**
 * Purge site collection documents (heroSlide, service, teamMember).
 * Does not delete blog posts or page singletons.
 *
 * Usage:
 *   pnpm purge:site
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

const SITE_TYPES = ['heroSlide', 'service', 'teamMember'];

async function purge() {
  const ids = await client.fetch(
    `*[_type in $types]._id`,
    { types: SITE_TYPES }
  );

  if (ids.length === 0) {
    console.log('No site collection documents to purge.');
    return;
  }

  console.log(`Purging ${ids.length} document(s): ${SITE_TYPES.join(', ')}...`);

  await client.delete({
    query: `*[_type in $types]`,
    params: { types: SITE_TYPES },
  });

  console.log('Purge complete. Run pnpm seed:site to recreate content.');
}

purge().catch((err) => {
  console.error(err);
  process.exit(1);
});
