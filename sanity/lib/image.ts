import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client } from './client';

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export function getImageUrl(
  source: SanityImageSource | undefined,
  width = 1200,
  height?: number
): string | null {
  if (!source) return null;
  let img = urlFor(source).width(width);
  if (height) img = img.height(height).fit('crop');
  return img.url();
}

export function getPostImageUrl(
  source: SanityImageSource | undefined,
  width = 600,
  height = 400
): string | null {
  return getImageUrl(source, width, height);
}
