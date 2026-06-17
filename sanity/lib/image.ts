import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client } from './client';

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export function getPostImageUrl(
  source: SanityImageSource | undefined,
  width = 600,
  height = 400
): string | null {
  if (!source) return null;
  return urlFor(source).width(width).height(height).fit('crop').url();
}
