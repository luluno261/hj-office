'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { ResolvedHomePageContent } from '@/lib/default-site-content';

type AboutProps = {
  about: ResolvedHomePageContent['aboutPage'];
};

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

function MultilineHeadline({ text }: { text: string }) {
  const parts = text.split(/,\s*/);
  if (parts.length <= 1) {
    return <>{text}</>;
  }
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && ','}
          {i < parts.length - 1 && <br className="hidden lg:block" />}
          {i < parts.length - 1 && ' '}
        </span>
      ))}
    </>
  );
}

export function About({ about }: AboutProps) {
  return (
    <section id="about" className="overflow-hidden bg-white py-12 lg:py-24">
      <div className="container mx-auto max-w-[1350px] px-4 lg:px-8">
        <div className="flex flex-col gap-14">
          <motion.div
            className="flex flex-col gap-7"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}>
            {about.eyebrow ? (
              <div className="inline-flex items-center gap-2 self-start rounded-full border border-teal-900 px-5 py-1.5">
                <div className="h-2.5 w-2.5 rounded-sm bg-teal-900" />
                <span className="font-sans text-lg font-normal uppercase leading-5 tracking-wider text-teal-900">
                  {about.eyebrow}
                </span>
              </div>
            ) : null}
            <h2 className="font-sans text-3xl font-semibold leading-tight text-teal-900 lg:text-6xl lg:leading-[1.1]">
              <MultilineHeadline text={about.headline} />
            </h2>
          </motion.div>

          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
            <motion.div
              className="group relative w-full lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeFromLeft}>
              <div className="relative h-[400px] overflow-hidden rounded-[40px] shadow-2xl lg:h-[600px]">
                <Image
                  src={about.imageLeft.src}
                  alt={about.imageLeft.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-teal-900/10 mix-blend-multiply" />
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-full bg-gold opacity-20 blur-xl" />
            </motion.div>

            <motion.div
              className="flex w-full flex-col gap-10 lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeUp}
              custom={0.2}>
              <div className="space-y-8">
                <div className="border-l-4 border-gold pl-6">
                  <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-teal-900">
                    {about.missionTitle}
                  </h3>
                  <p className="mt-3 max-w-xl font-sans text-xl font-light leading-relaxed text-teal-900">
                    {about.missionText}
                  </p>
                </div>
                <div className="border-l-4 border-teal-900 pl-6">
                  <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-teal-900">
                    {about.visionTitle}
                  </h3>
                  <p className="mt-3 max-w-xl font-sans text-xl font-light leading-relaxed text-teal-900">
                    {about.visionText}
                  </p>
                </div>
              </div>
              <Link
                href="/#services"
                className="inline-flex w-fit items-center justify-center rounded-full bg-teal-900 px-8 py-3 font-sans text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-teal-800">
                {about.ctaLabel}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
