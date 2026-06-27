import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Facilities } from '@/components/Facilities';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Resources } from '@/components/Resources';
import { Services } from '@/components/Services';
import { getHomePageContent, getLatestPosts } from '@/sanity/lib/queries';

export const revalidate = 10;

export default async function HomePage() {
  const [content, latestPosts] = await Promise.all([
    getHomePageContent(),
    getLatestPosts(3),
  ]);

  const { siteSettings } = content;

  return (
    <div className="min-h-screen font-sans text-body selection:bg-gold selection:text-white">
      <Header
        logo={siteSettings.logo}
        siteName={siteSettings.siteName}
        contactEmail={siteSettings.email}
      />
      <main>
        <Hero
          slides={content.heroSlides}
          heroTagline={siteSettings.heroTagline}
          contactEmail={siteSettings.email}
          facebookUrl={siteSettings.facebookUrl}
          linkedinUrl={siteSettings.linkedinUrl}
        />
        <Services
          services={content.services}
          badge={siteSettings.servicesBadge}
          title={siteSettings.servicesTitle}
          subtitle={siteSettings.servicesSubtitle}
        />
        <About about={content.aboutPage} />
        <Facilities facilities={content.facilitiesPage} />
        <Contact contact={content.contactPage} settings={siteSettings} />
        <Resources posts={latestPosts} />
      </main>
      <Footer settings={siteSettings} services={content.services} />
    </div>
  );
}
