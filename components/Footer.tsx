import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Linkedin } from 'lucide-react';
import type { ResolvedHomePageContent } from '@/lib/default-site-content';
import { buildMailtoUrl, buildRendezVousMailtoUrl } from '@/lib/email-links';

const siteLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Nos services', href: '/#services' },
  { label: 'Notre espace', href: '/#facilities' },
];

const resourceLinks = [
  { label: 'Articles', href: '/blog' },
  { label: 'Formations', href: '/#formations' },
  { label: 'Contact', href: '/#contact' },
] as const;

type FooterProps = {
  settings: ResolvedHomePageContent['siteSettings'];
  services: ResolvedHomePageContent['services'];
};

export function Footer({ settings, services }: FooterProps) {
  const rendezVousHref = buildRendezVousMailtoUrl(settings.email);
  const emailHref = buildMailtoUrl(settings.email);

  return (
    <footer className="bg-cream pt-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid gap-12 pb-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <Image
              src={settings.logo.src}
              alt={settings.logo.alt}
              width={120}
              height={120}
              className="h-20 w-auto object-contain"
            />
            <h2 className="font-logo text-[32px] font-bold leading-none text-gold">
              {settings.siteName}
            </h2>
            <div className="space-y-2">
              <p className="text-[18px] font-semibold text-teal-900">
                <a href={emailHref} className="hover:text-gold">
                  {settings.email}
                </a>
              </p>
              <p className="text-[18px] font-semibold text-teal-900">{settings.phone}</p>
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
              {services.map((service) => (
                <li key={service._id ?? service.num}>
                  <Link
                    href={service.anchorId ? `/#${service.anchorId}` : '/#services'}
                    className="hover:text-gold">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-[18px] font-semibold text-gold">Ressources</h3>
            <ul className="space-y-3 text-[16px] text-dark">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={rendezVousHref} className="hover:text-gold">
                  Prendre rendez-vous
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#A8A8A8] py-8 md:flex-row">
          <p className="text-[16px] text-dark">{settings.copyright}</p>

          <div className="flex gap-4 text-dark">
            {settings.facebookUrl && (
              <a
                href={settings.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
                aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            )}
            {settings.linkedinUrl && (
              <a
                href={settings.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
                aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            )}
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
