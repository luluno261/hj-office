import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { CTABanner } from '@/components/CTABanner';
import { Facilities } from '@/components/Facilities';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { References } from '@/components/References';
import { Resources } from '@/components/Resources';
import { Services } from '@/components/Services';
import { Team } from '@/components/Team';
import { Testimonials } from '@/components/Testimonials';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { getLatestPosts } from '@/sanity/lib/queries';

export default async function HomePage() {
  const latestPosts = await getLatestPosts(3);

  return (
    <div className="min-h-screen font-sans text-body selection:bg-gold selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <References />
        <Facilities />
        <CTABanner />
        <WhyChooseUs />
        <Team />
        <Testimonials />
        <Contact />
        <Resources posts={latestPosts} />
      </main>
      <Footer />
    </div>
  );
}
