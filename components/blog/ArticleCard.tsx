import Image from 'next/image';
import Link from 'next/link';
import type { PostCard } from '@/sanity/types';
import { getPostImageUrl } from '@/sanity/lib/image';
import { formatCategoryLabel, formatPostDate } from '@/lib/format';

import { siteImages } from '@/lib/site-images';

const FALLBACK_IMAGE = siteImages.conferenceRoom;

interface ArticleCardProps {
  post: PostCard;
}

export function ArticleCard({ post }: ArticleCardProps) {
  const imageUrl =
    getPostImageUrl(post.mainImage?.asset) ?? FALLBACK_IMAGE;
  const category = formatCategoryLabel(post.category);

  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className="group block space-y-6">
      <div className="overflow-hidden rounded-[10px]">
        <Image
          src={imageUrl}
          alt={post.mainImage?.alt || post.title}
          width={600}
          height={400}
          className="h-[268px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="space-y-4">
        {category && (
          <p className="text-[12px] font-bold uppercase tracking-wide text-gold">
            {category}
          </p>
        )}
        <h3 className="text-[18px] font-semibold leading-snug text-teal-900 group-hover:text-gold">
          {post.title}
        </h3>
        <p className="text-[16px] text-body">
          {formatPostDate(post.publishedAt)}
        </p>
        <p className="text-[14px] font-bold uppercase text-teal-900">
          Lire l&apos;article
        </p>
      </div>
    </Link>
  );
}
