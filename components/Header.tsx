'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import type { ResolvedImage } from '@/lib/resolve-image';
import { buildRendezVousMailtoUrl } from '@/lib/email-links';
import { Button } from './ui/Button';

const navLinks = [
  { href: '/', label: 'Accueil', shortLabel: 'Accueil' },
  { href: '/#services', label: 'Nos 6 Pôles d\'expertise', shortLabel: 'Pôles d\'expertise' },
  { href: '/blog', label: 'Articles', shortLabel: 'Articles' },
  { href: '/#contact', label: 'Contact', shortLabel: 'Contact' },
] as const;

function NavLink({
  href,
  label,
  onClick,
  className = '',
}: {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
}) {
  const isHome = href === '/';

  return (
    <Link
      href={href}
      onClick={onClick}
      title={label}
      className={`whitespace-nowrap text-[11px] font-bold uppercase tracking-wide transition-colors hover:text-gold xl:text-[12px] ${
        isHome ? 'text-gold' : 'text-teal-900'
      } ${className}`}>
      {label}
    </Link>
  );
}

export function Header({
  logo,
  siteName = 'HJ Offices',
  contactEmail,
}: {
  logo: ResolvedImage;
  siteName?: string;
  contactEmail: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const rendezVousHref = buildRendezVousMailtoUrl(contactEmail);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-teal-900/5 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1404px] items-center justify-between gap-3 px-4 sm:px-6 lg:h-[81px]">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
          onClick={closeMenu}>
          <Image
            src={logo.src}
            alt={logo.alt}
            width={48}
            height={48}
            className="h-9 w-auto object-contain sm:h-11 lg:h-12"
            priority
          />
          <span className="hidden font-logo text-xl font-bold leading-none text-gold sm:block lg:text-2xl">
            HJ Offices
          </span>
        </Link>

        {/* Desktop navigation — libellés courts */}
        <nav
          className="hidden min-w-0 flex-1 justify-center lg:block"
          aria-label="Navigation principale">
          <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 xl:gap-x-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href} label={link.shortLabel} />
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a href={rendezVousHref} className="hidden lg:block">
            <Button className="px-4 py-2.5 text-[11px] xl:px-5 xl:text-[12px]">
              Rendez-vous
            </Button>
          </a>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-teal-900/15 text-teal-900 transition-colors hover:border-gold hover:text-gold lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}>
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-40 bg-teal-900/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
              aria-label="Fermer le menu"
            />

            <motion.nav
              id="mobile-nav"
              className="fixed left-0 top-0 z-50 flex h-full w-[min(320px,88vw)] flex-col bg-white shadow-2xl lg:hidden"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              aria-label="Navigation mobile">
              <div className="flex h-[72px] items-center justify-between border-b border-teal-900/10 px-6">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={closeMenu}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={40}
                    height={40}
                    className="h-10 w-auto object-contain"
                  />
                  <span className="font-logo text-xl font-bold text-gold">
                    {siteName}
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-teal-900 hover:bg-cream"
                  aria-label="Fermer le menu">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <ul className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + index * 0.04 }}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={`block rounded-xl px-4 py-3 text-[15px] font-bold uppercase tracking-wide transition-colors hover:bg-cream hover:text-gold ${
                        link.href === '/' ? 'text-gold' : 'text-teal-900'
                      }`}>
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="border-t border-teal-900/10 p-6">
                <a
                  href={rendezVousHref}
                  onClick={closeMenu}
                  className="block w-full">
                  <Button className="w-full justify-center">
                    Prendre rendez-vous
                  </Button>
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
