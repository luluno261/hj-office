/**
 * Adds missing _key fields to facilitiesPage.amenities (API seed fix).
 * Usage: pnpm fix:amenity-keys
 */

import { createClient } from '@sanity/client';
import { randomUUID } from 'node:crypto';

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

const doc = await client.fetch(`*[_id == "facilitiesPage"][0]{ amenities }`);

if (!doc?.amenities?.length) {
  console.error('facilitiesPage not found or amenities empty.');
  process.exit(1);
}

const amenities = doc.amenities.map((item) => ({
  ...item,
  _key: item._key || randomUUID().replace(/-/g, '').slice(0, 12),
}));

await client.patch('facilitiesPage').set({ amenities }).commit();

console.log(`Fixed ${amenities.length} amenity items with _key.`);
