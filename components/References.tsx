'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Eyebrow } from './ui/Eyebrow';
import { Button } from './ui/Button';
import { Building2, Briefcase, Calculator, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';
import { SectionBackground } from './ui/SectionBackground';
import { siteImageAlt, siteImages } from '@/lib/site-images';

const refs = [
  {
    title: "Création d'entreprise",
    desc: 'Accompagnement complet d\'un entrepreneur : choix de structure, formalités administratives, domiciliation et mise en conformité juridique.',
    icon: <Building2 className="h-8 w-8 text-teal-900" />,
    bg: siteImages.buildingExteriorDusk,
    bgAlt: siteImageAlt.buildingExteriorDusk,
  },
  {
    title: "Transmission d'entreprise",
    desc: 'Coordination notariale et juridique pour sécuriser la transmission d\'entreprise et protéger le patrimoine familial.',
    icon: <Briefcase className="h-8 w-8 text-teal-900" />,
    bg: siteImages.officeInterior,
    bgAlt: siteImageAlt.officeInterior,
  },
  {
    title: 'Optimisation fiscale PME',
    desc: 'Audit, déclarations, reporting et conseil stratégique pour optimiser la situation fiscale d\'une PME en toute conformité.',
    icon: <Calculator className="h-8 w-8 text-teal-900" />,
    bg: siteImages.conferenceRoom,
    bgAlt: siteImageAlt.conferenceRoom,
  },
];

export function References() {
  return (
    <section id="references" className="bg-white py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-6">
            <ScrollReveal>
              <Eyebrow>Références récentes</Eyebrow>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-[48px] font-semibold leading-tight text-teal-900">
                Nos interventions
                <br />
                récentes réussies
              </h2>
            </ScrollReveal>
          </div>
          <div className="max-w-[670px] space-y-6">
            <ScrollReveal delay={0.2}>
              <p className="text-[16px] leading-relaxed text-body">
                De la création d&apos;entreprise à la transmission
                patrimoniale, nos pôles interviennent de manière coordonnée pour
                sécuriser chaque étape de vos projets.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <Button>Voir plus</Button>
            </ScrollReveal>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {refs.map((ref, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <motion.div
                className="group relative flex h-[500px] cursor-pointer flex-col justify-end overflow-hidden rounded-[10px] bg-teal-900"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}>
                <motion.div
                  className="absolute inset-0 opacity-20 mix-blend-overlay"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}>
                  <SectionBackground
                    src={ref.bg}
                    alt={ref.bgAlt}
                    className="absolute inset-0 h-full w-full"
                    imageClassName="object-cover"
                  />
                </motion.div>

                <motion.div
                  className="absolute right-0 top-0 flex h-[77px] w-[82px] items-center justify-center rounded-bl-[10px] bg-gold"
                  whileHover={{ scale: 1.1 }}>
                  <ArrowUpRight className="h-8 w-8 text-white" />
                </motion.div>

                <motion.div
                  className="relative z-10 mx-6 mb-0 mt-auto flex h-[256px] flex-col items-center rounded-t-[10px] bg-cream p-8 text-center"
                  whileHover={{ y: -5 }}>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                    {ref.icon}
                  </div>
                  <h3 className="mb-4 text-[18px] font-semibold text-teal-900">
                    {ref.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-dark">
                    {ref.desc}
                  </p>
                </motion.div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
