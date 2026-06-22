import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleCard } from '@/components/blog/ArticleCard';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { studioUrl } from '@/lib/studio-url';
import { getPosts, getSiteSettingsResolved } from '@/sanity/lib/queries';

export const revalidate = 10;

export const metadata: Metadata = {
  title: 'Blog & actualités | HJ Offices Consortium',
  description:
    'Articles, guides pratiques et actualités juridiques, fiscales et entrepreneuriales par HJ Offices Consortium.',
};

export default async function BlogPage() {
  const [posts, { settings, services }] = await Promise.all([
    getPosts(),
    getSiteSettingsResolved(),
  ]);

  return (
    <div className="min-h-screen font-sans text-body selection:bg-gold selection:text-white">
      <Header
        logo={settings.logo}
        siteName={settings.siteName}
        contactEmail={settings.email}
      />
      <main>
        <section className="bg-white py-24">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="mb-16 flex flex-col items-center text-center">
              <Eyebrow className="mb-6">Blog</Eyebrow>
              <h1 className="text-[48px] font-semibold leading-tight text-dark">
                Blog & actualités
              </h1>
              <p className="mt-4 max-w-2xl text-[18px] text-body">
                Retrouvez nos articles, guides pratiques et analyses sur le
                droit des affaires, la fiscalité et l&apos;entrepreneuriat.
              </p>
            </div>

            {posts.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-3">
                {posts.map((post) => (
                  <article key={post._id}>
                    <ArticleCard post={post} />
                  </article>
                ))}
              </div>
            ) : (
              <p className="text-center text-[16px] text-body">
                Aucun article publié pour le moment. Les administrateurs peuvent
                publier du contenu via{' '}
                <a
                  href={studioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold underline">
                  Sanity Studio
                </a>
                .
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer settings={settings} services={services} />
    </div>
  );
}
