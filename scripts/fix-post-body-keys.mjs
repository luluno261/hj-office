/**
 * Adds missing _key fields to post body (Portable Text).
 * Usage: pnpm fix:post-keys
 */

import { createClient } from '@sanity/client';
import { ensurePortableTextKeys } from './sanity-keys.mjs';

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

const posts = await client.fetch(`*[_type == "post"]{ _id, body }`);

if (!posts.length) {
  console.error('No posts found.');
  process.exit(1);
}

let fixed = 0;

for (const post of posts) {
  if (!Array.isArray(post.body)) continue;

  const body = ensurePortableTextKeys(post.body);
  const needsFix = post.body.some(
    (block, i) => block._key !== body[i]._key || block.children?.some((c, j) => c._key !== body[i].children?.[j]?._key)
  );

  if (needsFix) {
    await client.patch(post._id).set({ body }).commit();
    fixed += 1;
    console.log(`Fixed: ${post._id}`);
  }
}

console.log(`Done. ${fixed} post(s) updated.`);
