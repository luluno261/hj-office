import Link from 'next/link';
import type { PostCard } from '@/sanity/types';
import { ArticleCard } from '@/components/blog/ArticleCard';
import { Eyebrow } from '@/components/ui/Eyebrow';

interface ResourcesProps {
  posts: PostCard[];
  showViewAll?: boolean;
}

export function Resources({ posts, showViewAll = true }: ResourcesProps) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mb-16 flex flex-col items-center text-center">
          <Eyebrow className="mb-6">Nos ressources</Eyebrow>
          <h2 className="text-[48px] font-semibold leading-tight text-dark">
            Articles & guides pratiques
          </h2>
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
            Aucun article publié pour le moment. Revenez bientôt.
          </p>
        )}

        {showViewAll && posts.length > 0 && (
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="text-[14px] font-bold uppercase text-teal-900 hover:text-gold">
              Voir tous les articles
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
