import {
  getMockPostBySlug,
  getMockPostCards,
  getMockPostSlugs,
} from '@/lib/mock-posts';
import type { Post, PostCard } from '../types';
import { getSanityClient } from './client';

const postCardFields = `{
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  category,
  mainImage
}`;

const postFields = `{
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  category,
  mainImage,
  body
}`;

export async function getPosts(): Promise<PostCard[]> {
  const client = getSanityClient();
  if (!client) return getMockPostCards();

  const posts = await client.fetch<PostCard[]>(
    `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) ${postCardFields}`
  );

  return posts.length > 0 ? posts : getMockPostCards();
}

export async function getLatestPosts(limit: number): Promise<PostCard[]> {
  const posts = await getPosts();
  return posts.slice(0, limit);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const client = getSanityClient();
  if (!client) return getMockPostBySlug(slug);

  const post = await client.fetch<Post | null>(
    `*[_type == "post" && slug.current == $slug][0] ${postFields}`,
    { slug }
  );

  return post ?? getMockPostBySlug(slug);
}

export async function getPostSlugs(): Promise<string[]> {
  const client = getSanityClient();
  if (!client) return getMockPostSlugs();

  const posts = await client.fetch<{ slug: string }[]>(
    `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`
  );

  if (posts.length === 0) return getMockPostSlugs();

  return posts.map((post) => post.slug);
}
