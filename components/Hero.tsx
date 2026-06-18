'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Facebook, Linkedin } from 'lucide-react';
import { siteImageAlt, siteImages } from '@/lib/site-images';

const slides = [
  {
    eyebrow: 'Bienvenue chez HJ Offices',
    title: 'Un consortium au service de votre réussite',
    description:
      'Les défis juridiques, fiscaux, financiers et entrepreneuriaux exigent une approche globale et coordonnée. HJ Offices Consortium réunit des experts reconnus pour un accompagnement complet, cohérent et efficace.',
    image: siteImages.heroOffice,
    imageAlt: siteImageAlt.heroOffice,
  },
  {
    eyebrow: 'Écosystème professionnel',
    title: 'Un écosystème de compétences',
    description:
      'Avocats, notaires, experts-comptables, consultants et formateurs collaborent étroitement pour apporter des solutions adaptées aux entreprises, investisseurs, institutions et particuliers.',
    image: siteImages.conferenceRoom,
    imageAlt: siteImageAlt.conferenceRoom,
  },
  {
    eyebrow: 'Cadre moderne',
    title: 'Un cadre professionnel moderne',
    description:
      'Sept bureaux équipés, une salle de conférence de 25 places, une salle de réunion connectée, un parking privé sécurisé et un emplacement stratégique facilement accessible.',
    image: siteImages.heroModernFrame,
    imageAlt: siteImageAlt.heroModernFrame,
  },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

const AUTOPLAY_MS = 3000;

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(nextSlide, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section
      className="relative min-h-[calc(100svh-72px)] overflow-hidden lg:min-h-[calc(100svh-81px)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}>
      {/* Background carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, idx) => (
          <motion.div
            key={slide.image}
            className="absolute inset-0"
            initial={false}
            animate={{
              opacity: idx === currentSlide ? 1 : 0,
              scale: idx === currentSlide ? 1 : 1.06,
            }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}>
            <Image
              src={slide.image}
              alt={slide.imageAlt}
              fill
              className="object-cover"
              sizes="100vw"
              priority={idx === 0}
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-darker/95 via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-72px)] max-w-[1404px] items-center px-4 py-20 sm:px-6 lg:min-h-[calc(100svh-81px)] lg:px-8">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}>
              <span className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[13px] font-medium text-white backdrop-blur-sm">
                {slides[currentSlide].eyebrow}
              </span>

              <h1 className="mb-6 text-[36px] font-bold uppercase leading-[1.08] tracking-tight text-white sm:text-[48px] lg:text-[60px] xl:text-[70px]">
                {slides[currentSlide].title}
              </h1>

              <p className="mb-10 max-w-2xl text-[15px] leading-relaxed text-white/85 sm:text-[17px]">
                {slides[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <Link
            href="/#contact"
            className="group inline-flex items-center overflow-hidden rounded-full bg-darker/90 pl-7 pr-2 py-2 text-[13px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-darker sm:text-[14px]">
            <span className="py-2">Prendre rendez-vous</span>
            <span className="ml-5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold transition-transform group-hover:scale-105 sm:h-12 sm:w-12">
              <ArrowRight className="h-5 w-5" />
            </span>
          </Link>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <div className="flex -space-x-3">
              {slides.map((slide, i) => (
                <button
                  key={slide.image}
                  type="button"
                  onClick={() => setCurrentSlide(i)}
                  className={`relative h-12 w-12 overflow-hidden rounded-full border-2 transition-all sm:h-14 sm:w-14 ${
                    i === currentSlide
                      ? 'border-gold ring-2 ring-gold/40'
                      : 'border-white/80 opacity-75 hover:opacity-100'
                  }`}
                  aria-label={`Afficher la diapositive ${i + 1}`}
                  aria-current={i === currentSlide ? 'true' : undefined}>
                  <Image
                    src={slide.image}
                    alt={slide.imageAlt}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </button>
              ))}
            </div>
            <p className="max-w-[200px] text-[15px] font-semibold leading-snug text-white sm:text-[17px]">
              Une vision à 360° de vos projets
            </p>
          </div>
        </div>
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-8 right-4 z-10 flex items-center gap-2 sm:right-8">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === currentSlide ? 'w-8 bg-gold' : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Aller à la diapositive ${idx + 1}`}
            aria-current={idx === currentSlide ? 'true' : undefined}
          />
        ))}
      </div>

      {/* Vertical social bar */}
      <div className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-5 lg:flex xl:right-8">
        <span
          className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50"
          style={{ writingMode: 'vertical-rl' }}>
          Suivez-nous
        </span>
        <div className="flex flex-col gap-3">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-gold hover:text-gold">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
