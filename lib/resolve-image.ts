import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { getImageUrl } from '@/sanity/lib/image';

export interface ResolvedImage {
  src: string;
  alt: string;
}

export function resolveImage(
  sanityImage?: { asset?: SanityImageSource; alt?: string } | null,
  fallback?: ResolvedImage
): ResolvedImage {
  const url = getImageUrl(sanityImage?.asset, 1600, 1200);
  if (url) {
    return { src: url, alt: sanityImage?.alt || fallback?.alt || '' };
  }
  return fallback ?? { src: '/logo.jpg', alt: 'HJ Offices' };
}

export function resolveImageSized(
  sanityImage: { asset?: SanityImageSource; alt?: string } | null | undefined,
  fallback: ResolvedImage,
  width: number,
  height?: number
): ResolvedImage {
  const url = getImageUrl(sanityImage?.asset, width, height);
  if (url) {
    return { src: url, alt: sanityImage?.alt || fallback.alt };
  }
  return fallback;
}
