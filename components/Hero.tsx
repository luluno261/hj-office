'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Facebook, Linkedin } from 'lucide-react';
import type { ResolvedHomePageContent } from '@/lib/default-site-content';

type HeroProps = {
  slides: ResolvedHomePageContent['heroSlides'];
  heroTagline: string;
  facebookUrl?: string;
  linkedinUrl?: string;
};

const AUTOPLAY_MS = 7000;

export function Hero({
  slides,
  heroTagline,
  facebookUrl = '#',
  linkedinUrl = '#',
}: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (isPaused || slides.length === 0) return;
    const timer = window.setInterval(nextSlide, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [isPaused, nextSlide, slides.length]);

  if (slides.length === 0) return null;

  const socialLinks = [
    { icon: Facebook, href: facebookUrl, label: 'Facebook' },
    { icon: Linkedin, href: linkedinUrl, label: 'LinkedIn' },
  ];

  return (
    <section
      className="relative min-h-[calc(100svh-72px)] overflow-hidden lg:min-h-[calc(100svh-81px)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}>
      <div className="absolute inset-0">
        {slides.map((slide, idx) => (
          <motion.div
            key={slide._id ?? `${slide.title}-${idx}`}
            className="absolute inset-0"
            initial={false}
            animate={{
              opacity: idx === currentSlide ? 1 : 0,
              scale: idx === currentSlide ? 1 : 1.06,
            }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}>
            <Image
              src={slide.image.src}
              alt={slide.image.alt}
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
                  key={slide._id ?? `${slide.title}-${i}`}
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
                    src={slide.image.src}
                    alt={slide.image.alt}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </button>
              ))}
            </div>
            <p className="max-w-[200px] text-[15px] font-semibold leading-snug text-white sm:text-[17px]">
              {heroTagline}
            </p>
          </div>
        </div>
      </div>

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
              target="_blank"
              rel="noopener noreferrer"
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
