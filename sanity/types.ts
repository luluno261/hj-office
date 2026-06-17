import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  category?: string;
  mainImage?: {
    asset: SanityImageSource;
    alt?: string;
  };
  body?: unknown[];
}

export interface PostCard {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  category?: string;
  mainImage?: {
    asset: SanityImageSource;
    alt?: string;
  };
}
