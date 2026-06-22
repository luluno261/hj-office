import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  PortableTextRenderer,
  type PortableTextValue,
} from '@/components/blog/PortableTextRenderer';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { formatCategoryLabel, formatPostDate } from '@/lib/format';
import { getPostImageUrl } from '@/sanity/lib/image';
import { getPostBySlug, getPostSlugs, getSiteSettingsResolved } from '@/sanity/lib/queries';

export const revalidate = 10;

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: 'Article introuvable' };
  }

  const imageUrl = getPostImageUrl(post.mainImage?.asset, 1200, 630);

  return {
    title: `${post.title} | HJ Offices Consortium`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      ...(imageUrl ? { images: [{ url: imageUrl }] } : {}),
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const [post, { settings, services }] = await Promise.all([
    getPostBySlug(slug),
    getSiteSettingsResolved(),
  ]);

  if (!post) {
    notFound();
  }

  const imageUrl = getPostImageUrl(post.mainImage?.asset, 1200, 600);
  const category = formatCategoryLabel(post.category);

  return (
    <div className="min-h-screen font-sans text-body selection:bg-gold selection:text-white">
      <Header logo={settings.logo} siteName={settings.siteName} />
      <main>
        <article className="bg-white py-16">
          <div className="mx-auto max-w-[800px] px-6">
            <Link
              href="/blog"
              className="mb-8 inline-block text-[14px] font-bold uppercase text-teal-900 hover:text-gold">
              ← Retour au blog
            </Link>

            {category && (
              <p className="mb-4 text-[12px] font-bold uppercase tracking-wide text-gold">
                {category}
              </p>
            )}

            <h1 className="mb-6 text-[40px] font-semibold leading-tight text-dark md:text-[48px]">
              {post.title}
            </h1>

            <p className="mb-10 text-[16px] text-body">
              {formatPostDate(post.publishedAt)}
            </p>

            {imageUrl && (
              <div className="mb-12 overflow-hidden rounded-[10px]">
                <Image
                  src={imageUrl}
                  alt={post.mainImage?.alt || post.title}
                  width={1200}
                  height={600}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            )}

            {post.body && (
              <PortableTextRenderer
                value={post.body as PortableTextValue}
              />
            )}
          </div>
        </article>
      </main>
      <Footer settings={settings} services={services} />
    </div>
  );
}
