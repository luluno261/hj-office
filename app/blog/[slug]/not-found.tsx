import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function BlogPostNotFound() {
  return (
    <div className="min-h-screen font-sans text-body selection:bg-gold selection:text-white">
      <Header />
      <main className="flex min-h-[50vh] items-center justify-center bg-white py-24">
        <div className="text-center">
          <h1 className="mb-4 text-[40px] font-semibold text-dark">
            Article introuvable
          </h1>
          <p className="mb-8 text-body">
            Cet article n&apos;existe pas ou a été retiré.
          </p>
          <Link
            href="/blog"
            className="text-[14px] font-bold uppercase text-teal-900 hover:text-gold">
            Retour au blog
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
