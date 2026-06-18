'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { siteImageAlt, siteImages } from '@/lib/site-images';

const viewport = { once: true, margin: '-15% 0px' as const };

const fadeUp = {
  hidden: { y: 50, opacity: 0 },
  visible: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, delay, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

const fadeFromLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const fadeFromRight = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const digitVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function About() {
  return (
    <section id="about" className="overflow-hidden bg-white py-12 lg:py-24">
      <div className="container mx-auto max-w-[1350px] px-4 lg:px-8">
        <div className="flex flex-col gap-14">
          {/* Header */}
          <motion.div
            className="flex flex-col gap-7"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}>
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-teal-900 px-5 py-1.5">
              <div className="h-2.5 w-2.5 rounded-sm bg-teal-900" />
              <span className="font-sans text-lg font-normal uppercase leading-5 tracking-wider text-teal-900">
                À propos de HJ Offices Consortium
              </span>
            </div>

            <h2 className="font-sans text-3xl font-semibold leading-tight text-teal-900 lg:text-6xl lg:leading-[1.1]">
              Un écosystème de compétences
              <br className="hidden lg:block" />
              au service de votre réussite,
              <br className="hidden lg:block" />
              avec une approche globale et coordonnée.
            </h2>
          </motion.div>

          {/* Image left + stats right */}
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
            <motion.div
              className="group relative w-full lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeFromLeft}>
              <div className="relative h-[400px] overflow-hidden rounded-[40px] shadow-2xl lg:h-[600px]">
                <Image
                  src={siteImages.entranceSign}
                  alt={siteImageAlt.entranceSign}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-teal-900/10 mix-blend-multiply" />
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-full bg-gold opacity-20 blur-xl" />
            </motion.div>

            <div className="flex w-full flex-col gap-10 lg:w-1/2">
              <div className="relative flex flex-col gap-6 pl-0 lg:pl-11">
                <motion.div
                  className="flex items-baseline gap-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: { staggerChildren: 0.2 },
                    },
                  }}>
                  <motion.span
                    variants={digitVariants}
                    className="select-none font-sans text-8xl font-bold leading-none text-teal-900 lg:text-[180px]">
                    6
                  </motion.span>
                  <motion.span
                    variants={digitVariants}
                    className="select-none font-sans text-6xl font-bold leading-none text-gold lg:text-[120px]">
                    +
                  </motion.span>
                </motion.div>

                <motion.div
                  className="flex flex-col gap-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  variants={fadeUp}
                  custom={0.3}>
                  <h3 className="font-sans text-3xl font-semibold uppercase tracking-tight text-teal-900">
                    Pôles d&apos;expertise
                  </h3>
                  <p className="max-w-xl font-sans text-xl font-light leading-relaxed text-teal-900">
                    Plus qu&apos;un simple centre d&apos;affaires, HJ Offices
                    Consortium réunit avocats, notaires, experts-comptables,
                    consultants et formateurs pour offrir à chaque client une
                    vision à 360° de ses projets.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Mission / vision left + image right */}
          <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:gap-20">
            <div className="flex w-full flex-col gap-12 lg:w-1/2">
              <motion.div
                className="flex flex-col gap-5 border-l-4 border-gold pl-8"
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={fadeUp}
                custom={0}>
                <h3 className="font-sans text-3xl font-semibold uppercase tracking-wide text-teal-900">
                  Notre mission
                </h3>
                <p className="font-sans text-xl font-light leading-relaxed text-teal-900">
                  Offrir à chaque client une vision à 360° de ses projets grâce
                  à la complémentarité de nos expertises juridiques, fiscales,
                  financières et opérationnelles, pour anticiper les risques et
                  optimiser les opportunités.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col gap-5 border-l-4 border-teal-900 pl-8"
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={fadeUp}
                custom={0.3}>
                <h3 className="font-sans text-3xl font-semibold uppercase tracking-wide text-teal-900">
                  Notre vision
                </h3>
                <p className="font-sans text-xl font-light leading-relaxed text-teal-900">
                  Une vision commune, plusieurs expertises, un seul objectif :
                  votre réussite. Devenir le partenaire de confiance des
                  entreprises, investisseurs et institutions.
                </p>
              </motion.div>

              <motion.div
                className="pt-4"
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={fadeUp}
                custom={0.6}>
                <Link
                  href="/#services"
                  className="inline-block rounded-full bg-teal-900 px-14 py-5 font-sans text-lg font-bold text-white shadow-xl shadow-teal-900/20 transition-all hover:scale-105 hover:bg-teal-800">
                  Découvrir nos pôles
                </Link>
              </motion.div>
            </div>

            <motion.div
              className="group relative w-full lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeFromRight}>
              <div className="relative h-[400px] overflow-hidden rounded-[40px] shadow-2xl lg:h-[600px]">
                <Image
                  src={siteImages.officeInterior}
                  alt={siteImageAlt.officeInterior}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-teal-900/10 mix-blend-multiply" />
              </div>
              <div className="absolute -left-6 -top-6 -z-10 h-32 w-32 rounded-full bg-teal-900 opacity-20 blur-xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
