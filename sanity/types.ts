import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import type { IconName } from '@/sanity/icon-field';

export interface SanityImage {
  asset?: SanityImageSource;
  alt?: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  category?: string;
  mainImage?: SanityImage;
  body?: unknown[];
}

export interface PostCard {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  category?: string;
  mainImage?: SanityImage;
}

export interface SiteSettings {
  siteName: string;
  logo: SanityImage;
  email: string;
  phone: string;
  hours: string;
  facebookUrl?: string;
  linkedinUrl?: string;
  mapLink: string;
  mapEmbedUrl: string;
  mapLocationLabel: string;
  heroTagline: string;
  servicesBadge: string;
  servicesTitle: string;
  servicesSubtitle: string;
  teamEyebrow: string;
  teamTitle: string;
  teamIntro: string;
  copyright: string;
}

export interface HeroSlideData {
  _id?: string;
  eyebrow: string;
  title: string;
  description: string;
  image: SanityImage;
}

export interface ServiceData {
  _id?: string;
  num: string;
  title: string;
  icon: IconName;
  description: string;
  shortDescription?: string;
  anchorId?: string;
  order: number;
}

export interface TeamMemberData {
  _id?: string;
  name: string;
  role: string;
  photo?: SanityImage;
  photoUrl?: string;
  linkedinUrl?: string;
  email?: string;
  order: number;
}

export interface AboutPageData {
  eyebrow: string;
  headline: string;
  polesCount: number;
  polesTitle: string;
  polesDescription: string;
  imageLeft: SanityImage;
  imageRight: SanityImage;
  missionTitle: string;
  missionText: string;
  visionTitle: string;
  visionText: string;
  ctaLabel: string;
}

export interface AmenityData {
  icon: IconName;
  title: string;
  description: string;
}

export interface FacilitiesPageData {
  eyebrow: string;
  title: string;
  intro: string;
  galleryMain: SanityImage;
  gallerySecondary1: SanityImage;
  gallerySecondary2: SanityImage;
  amenities: AmenityData[];
}

export interface ContactPageData {
  eyebrow: string;
  title: string;
  intro: string;
  sideImage: SanityImage;
  mapSectionTitle: string;
  mapSectionSubtitle: string;
  formNamePlaceholder: string;
  formEmailPlaceholder: string;
  formPhonePlaceholder: string;
  formSubjectPlaceholder: string;
  formMessagePlaceholder: string;
  formSubmitLabel: string;
}

export interface HomePageContent {
  siteSettings: SiteSettings;
  heroSlides: HeroSlideData[];
  services: ServiceData[];
  aboutPage: AboutPageData;
  facilitiesPage: FacilitiesPageData;
  contactPage: ContactPageData;
  teamMembers: TeamMemberData[];
}
