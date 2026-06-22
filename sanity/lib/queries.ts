import {
  defaultAboutPage,
  defaultContactPage,
  defaultFacilitiesPage,
  defaultHeroSlides,
  defaultHomePageContent,
  defaultServices,
  defaultSiteSettings,
  defaultTeamMembers,
  getDefaultResolvedHomePageContent,
  resolveHomePageContent,
  type ResolvedHomePageContent,
} from '@/lib/default-site-content';
import {
  getMockPostBySlug,
  getMockPostCards,
  getMockPostSlugs,
} from '@/lib/mock-posts';
import type {
  AboutPageData,
  ContactPageData,
  FacilitiesPageData,
  HeroSlideData,
  HomePageContent,
  Post,
  PostCard,
  ServiceData,
  SiteSettings,
  TeamMemberData,
} from '../types';
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

const siteSettingsQuery = `*[_type == "siteSettings" && _id == "siteSettings"][0]{
  siteName,
  logo,
  email,
  phone,
  hours,
  facebookUrl,
  linkedinUrl,
  mapLink,
  mapEmbedUrl,
  mapLocationLabel,
  heroTagline,
  servicesBadge,
  servicesTitle,
  servicesSubtitle,
  teamEyebrow,
  teamTitle,
  teamIntro,
  copyright
}`;

const heroSlidesQuery = `*[_type == "heroSlide"] | order(order asc) {
  _id,
  eyebrow,
  title,
  description,
  image
}`;

const servicesQuery = `*[_type == "service"] | order(order asc) {
  _id,
  num,
  title,
  icon,
  description,
  shortDescription,
  anchorId,
  order
}`;

const teamQuery = `*[_type == "teamMember"] | order(order asc) {
  _id,
  name,
  role,
  photo,
  linkedinUrl,
  email,
  order
}`;

const aboutPageQuery = `*[_type == "aboutPage" && _id == "aboutPage"][0]{
  eyebrow,
  headline,
  polesCount,
  polesTitle,
  polesDescription,
  imageLeft,
  imageRight,
  missionTitle,
  missionText,
  visionTitle,
  visionText,
  ctaLabel
}`;

const facilitiesPageQuery = `*[_type == "facilitiesPage" && _id == "facilitiesPage"][0]{
  eyebrow,
  title,
  intro,
  galleryMain,
  gallerySecondary1,
  gallerySecondary2,
  amenities
}`;

const contactPageQuery = `*[_type == "contactPage" && _id == "contactPage"][0]{
  eyebrow,
  title,
  intro,
  sideImage,
  mapSectionTitle,
  mapSectionSubtitle,
  formNamePlaceholder,
  formEmailPlaceholder,
  formPhonePlaceholder,
  formSubjectPlaceholder,
  formMessagePlaceholder,
  formSubmitLabel
}`;

async function fetchSiteSettings(): Promise<SiteSettings> {
  const client = getSanityClient();
  if (!client) return defaultSiteSettings;
  const data = await client.fetch<SiteSettings | null>(siteSettingsQuery);
  return data ?? defaultSiteSettings;
}

async function fetchHeroSlides(): Promise<HeroSlideData[]> {
  const client = getSanityClient();
  if (!client) return defaultHeroSlides;
  const data = await client.fetch<HeroSlideData[]>(heroSlidesQuery);
  return data.length > 0 ? data : defaultHeroSlides;
}

async function fetchServices(): Promise<ServiceData[]> {
  const client = getSanityClient();
  if (!client) return defaultServices;
  const data = await client.fetch<ServiceData[]>(servicesQuery);
  return data.length > 0 ? data : defaultServices;
}

async function fetchTeamMembers(): Promise<TeamMemberData[]> {
  const client = getSanityClient();
  if (!client) return defaultTeamMembers;
  const data = await client.fetch<TeamMemberData[]>(teamQuery);
  return data.length > 0 ? data : defaultTeamMembers;
}

async function fetchAboutPage(): Promise<AboutPageData> {
  const client = getSanityClient();
  if (!client) return defaultAboutPage;
  const data = await client.fetch<AboutPageData | null>(aboutPageQuery);
  return data ?? defaultAboutPage;
}

async function fetchFacilitiesPage(): Promise<FacilitiesPageData> {
  const client = getSanityClient();
  if (!client) return defaultFacilitiesPage;
  const data = await client.fetch<FacilitiesPageData | null>(facilitiesPageQuery);
  return data ?? defaultFacilitiesPage;
}

async function fetchContactPage(): Promise<ContactPageData> {
  const client = getSanityClient();
  if (!client) return defaultContactPage;
  const data = await client.fetch<ContactPageData | null>(contactPageQuery);
  return data ?? defaultContactPage;
}

export async function getHomePageContent(): Promise<ResolvedHomePageContent> {
  const client = getSanityClient();
  if (!client) return getDefaultResolvedHomePageContent();

  const [siteSettings, heroSlides, services, teamMembers, aboutPage, facilitiesPage, contactPage] =
    await Promise.all([
      fetchSiteSettings(),
      fetchHeroSlides(),
      fetchServices(),
      fetchTeamMembers(),
      fetchAboutPage(),
      fetchFacilitiesPage(),
      fetchContactPage(),
    ]);

  const raw: HomePageContent = {
    siteSettings,
    heroSlides,
    services,
    teamMembers,
    aboutPage,
    facilitiesPage,
    contactPage,
  };

  return resolveHomePageContent(raw);
}

export async function getSiteSettingsResolved() {
  const content = await getHomePageContent();
  return { settings: content.siteSettings, services: content.services };
}

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

export { defaultHomePageContent };
