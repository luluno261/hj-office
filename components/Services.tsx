'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Scale,
  Landmark,
  BarChart3,
  Briefcase,
  GraduationCap,
  Globe2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from 'lucide-react';

interface ServiceItem {
  num: string;
  title: string;
  icon: LucideIcon;
  description: string;
  shortDescription?: string;
  id?: string;
}

const services: ServiceItem[] = [
  {
    num: '01',
    title: "Cabinet d'Avocats",
    icon: Scale,
    description:
      'Conseil et défense devant les juridictions en droit fiscal, social, commercial, des affaires, public, international et pénal des affaires. Audit juridique, conformité, négociations et contentieux.',
  },
  {
    num: '02',
    title: 'Service Notarial',
    icon: Landmark,
    description:
      "Rédaction et authentification d'actes juridiques : opérations immobilières, successions, donations, testaments, contrats de mariage, transmission d'entreprise et protection du patrimoine familial.",
  },
  {
    num: '03',
    title: 'Expertise Comptable',
    icon: BarChart3,
    description:
      'Tenue comptable, états financiers, déclarations fiscales et sociales, audit, due diligence, optimisation fiscale et conseil financier. Reporting et tableaux de bord pour piloter votre activité.',
  },
  {
    num: '04',
    title: 'Pôle Entreprise',
    icon: Briefcase,
    description:
      "Guichet unique pour entrepreneurs et investisseurs : création d'entreprise, formalités administratives, domiciliation, modifications statutaires et accompagnement des projets d'investissement.",
  },
  {
    num: '05',
    title: 'Pôle Formations',
    icon: GraduationCap,
    description:
      'Programmes pour professionnels et entreprises : fiscalité, droit douanier, comptabilité, management, gouvernance, conformité et anglais professionnel, dispensés par des praticiens expérimentés.',
    id: 'formations',
  },
  {
    num: '06',
    title: 'Cabinet de Consultance',
    icon: Globe2,
    description:
      'Services de consultance spécialisés couvrant la gouvernance, la lutte contre la corruption, les réformes institutionnelles, la gestion de projets, l\'évaluation de politiques publiques et le développement durable. Notre approche analytique et participative aide les organisations internationales à atteindre des résultats mesurables et durables. Nous collaborons avec des partenaires nationaux et internationaux pour offrir des solutions innovantes adaptées aux contextes locaux complexes.',
    shortDescription:
      'Services de consultance spécialisés couvrant la gouvernance, la lutte contre la corruption, les réformes institutionnelles, la gestion de projets, l\'évaluation de politiques publiques et le développement durable.',
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const activeService = services[activeIndex];
  const ActiveIcon = activeService.icon;
  const displayDescription = (service: ServiceItem) =>
    service.shortDescription ?? service.description;

  return (
    <section id="services" className="bg-teal-900 px-4 py-16 font-sans lg:py-28">
      <div className="mx-auto flex max-w-[1800px] flex-col items-center gap-10 px-3.5 lg:gap-14">
        <div className="flex max-w-[840px] flex-col items-center justify-center gap-4 lg:gap-0">
          <div className="inline-flex items-center gap-[5px] rounded-[100px] border border-gold px-5 py-1.5">
            <div className="h-2.5 w-2.5 rounded-[5px] bg-gold" />
            <span className="font-sans text-base font-normal leading-5 text-gold lg:text-lg">
              Nos 6 Pôles d'expertise
            </span>
          </div>
          <div className="pt-4 lg:pt-7">
            <h2 className="text-center font-sans text-2xl font-semibold leading-tight text-white lg:text-5xl lg:leading-[62px]">
              L&apos;expertise HJ Offices Consortium
              <br />
              au service de vos projets
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] text-center text-base font-light leading-relaxed text-white/70 lg:text-lg">
              Six pôles d&apos;expertise réunis sous un même toit pour un
              accompagnement juridique, fiscal, entrepreneurial et institutionnel global.
            </p>
          </div>
        </div>

        {/* Mobile: Carousel */}
        <div className="relative w-full lg:hidden">
          <div className="relative h-[400px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0">
                <div
                  id={activeService.id}
                  className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-teal-800 p-6">
                  <div className="pointer-events-none absolute -bottom-10 -right-10 opacity-10">
                    <ActiveIcon size={200} color="white" />
                  </div>

                  <div className="relative z-10 flex items-start justify-between">
                    <span className="font-sans text-4xl font-bold text-gold">
                      {activeService.num}
                    </span>
                    <div className="rounded-full bg-white/10 p-3 text-gold backdrop-blur-sm">
                      <ActiveIcon size={28} />
                    </div>
                  </div>

                  <div className="relative z-10 flex flex-col gap-4">
                    <h3 className="font-sans text-2xl font-semibold leading-tight text-white">
                      {activeService.title}
                    </h3>
                    <p className="line-clamp-5 font-sans text-base font-light leading-relaxed text-white/70">
                      {displayDescription(activeService)}
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center gap-2 text-gold">
                    <span className="font-sans text-base font-medium">
                      En savoir plus
                    </span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-x-2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:bg-gold hover:text-white"
            aria-label="Service précédent">
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 translate-x-2 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:bg-gold hover:text-white"
            aria-label="Service suivant">
            <ChevronRight size={20} />
          </button>

          <div className="mt-6 flex justify-center gap-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1);
                  setActiveIndex(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-8 bg-gold'
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Aller au service ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Accordion */}
        <div className="hidden h-[480px] items-stretch justify-center gap-4 self-stretch lg:flex">
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            const Icon = service.icon;

            return (
              <motion.div
                key={service.num}
                id={service.id}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`relative cursor-pointer overflow-hidden rounded-[30px] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  isActive
                    ? 'flex-[3] bg-teal-800'
                    : 'flex-1 bg-cream hover:bg-white'
                }`}>
                {isActive && (
                  <div className="pointer-events-none absolute -bottom-20 -right-20 opacity-10">
                    <Icon size={280} color="white" />
                  </div>
                )}

                <div
                  className={`absolute inset-0 flex flex-col items-center justify-between py-10 transition-opacity duration-300 ${
                    isActive ? 'pointer-events-none opacity-0' : 'opacity-100'
                  }`}>
                  <span className="font-sans text-2xl font-bold text-teal-900">
                    {service.num}
                  </span>
                  <div className="flex h-full items-center justify-center">
                    <span className="rotate-180 whitespace-nowrap font-sans text-lg font-medium uppercase tracking-wide text-teal-900 [writing-mode:vertical-rl]">
                      {service.title}
                    </span>
                  </div>
                  <div className="rounded-full bg-white p-3 text-teal-900">
                    <Icon size={24} />
                  </div>
                </div>

                <div
                  className={`absolute inset-0 flex flex-col justify-between p-8 transition-opacity delay-100 duration-500 ${
                    isActive ? 'opacity-100' : 'pointer-events-none opacity-0'
                  }`}>
                  <div className="flex items-start justify-between">
                    <span className="font-sans text-4xl font-bold text-gold">
                      {service.num}
                    </span>
                    <div className="rounded-full bg-white/10 p-4 text-gold backdrop-blur-sm">
                      <Icon size={32} />
                    </div>
                  </div>

                  <div className="flex max-w-[80%] flex-col gap-6">
                    <h3 className="font-sans text-3xl font-semibold leading-tight text-white lg:text-4xl">
                      {service.title}
                    </h3>
                    <p className="line-clamp-5 font-sans text-lg font-light leading-relaxed text-white/70">
                      {displayDescription(service)}
                    </p>
                  </div>

                  <div className="group flex items-center gap-3 text-gold">
                    <span className="font-sans text-lg font-medium">
                      En savoir plus
                    </span>
                    <ArrowRight
                      className="transition-transform group-hover:translate-x-2"
                      size={20}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
