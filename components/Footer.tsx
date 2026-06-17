import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
import { siteImageAlt, siteImages } from '@/lib/site-images';

const siteLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/#about' },
  { label: 'Nos services', href: '/#services' },
  { label: 'Notre espace', href: '/#facilities' },
  { label: 'Références', href: '/#references' },
  { label: 'Notre équipe', href: '/#team' },
];

const expertiseLinks = [
  { label: "Cabinet d'Avocats", href: '/#services' },
  { label: 'Service Notarial', href: '/#services' },
  { label: 'Expertise Comptable', href: '/#services' },
  { label: 'Pôle Entreprise', href: '/#services' },
  { label: 'Pôle Formations', href: '/#formations' },
];

const resourceLinks = [
  { label: 'Blog & actualités', href: '/blog' },
  { label: 'Formations', href: '/#formations' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Prendre rendez-vous', href: '/#contact' },
];

export function Footer() {
  return (
    <footer className="bg-cream pt-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid gap-12 pb-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <Image
              src={siteImages.logo}
              alt={siteImageAlt.logo}
              width={120}
              height={120}
              className="h-20 w-auto object-contain"
            />
            <h2 className="font-logo text-[32px] font-bold leading-none text-gold">
              HJ Offices Consortium
            </h2>
            <div className="space-y-2">
              <p className="text-[18px] font-semibold text-teal-900">
                contact@hjoffices.com
              </p>
              <p className="text-[18px] font-semibold text-teal-900">
                + 261 38 87 597 40
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-[18px] font-semibold text-gold">Le site</h3>
            <ul className="space-y-3 text-[16px] text-dark">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-[18px] font-semibold text-gold">
              Nos pôles d&apos;expertise
            </h3>
            <ul className="space-y-3 text-[16px] text-dark">
              {expertiseLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-[18px] font-semibold text-gold">Ressources</h3>
            <ul className="space-y-3 text-[16px] text-dark">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#A8A8A8] py-8 md:flex-row">
          <p className="text-[16px] text-dark">
            © 2026 HJ Offices Consortium. Tous droits réservés.
          </p>

          <div className="flex gap-4 text-dark">
            <a href="#" className="hover:text-gold" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-gold" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-gold" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          <p className="text-[16px] text-dark">
            <Link href="/#contact" className="hover:text-gold">
              Politique de confidentialité
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
