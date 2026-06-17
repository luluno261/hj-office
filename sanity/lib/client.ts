import { createClient } from 'next-sanity';
import { apiVersion, dataset, isSanityConfigured, projectId } from '../env';

export const client = createClient({
  projectId: projectId || 'placeholder',
  dataset,
  apiVersion,
  useCdn: true,
  perspective: 'published',
});

export function getSanityClient() {
  if (!isSanityConfigured) {
    return null;
  }
  return client;
}
