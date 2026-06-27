'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { getIcon } from '@/lib/icon-map';
import type { ResolvedHomePageContent } from '@/lib/default-site-content';

type FacilitiesProps = {
  facilities: ResolvedHomePageContent['facilitiesPage'];
};

const viewport = { once: true, margin: '-12% 0px' as const };

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

export function Facilities({ facilities }: FacilitiesProps) {
  return (
    <section id="facilities" className="overflow-hidden bg-cream py-16 lg:py-24">
      <div className="mx-auto max-w-[1350px] px-4 lg:px-8">
        <div className="flex flex-col gap-14 lg:gap-20">
          <motion.div
            className="flex max-w-[900px] flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}>
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-teal-900 px-5 py-1.5">
              <div className="h-2.5 w-2.5 rounded-sm bg-gold" />
              <span className="font-sans text-base font-normal uppercase tracking-wider text-teal-900 lg:text-lg">
                {facilities.eyebrow}
              </span>
            </div>
            <h2 className="font-sans text-3xl font-semibold leading-tight text-teal-900 lg:text-5xl lg:leading-[1.15]">
              {facilities.title}
            </h2>
            <p className="max-w-2xl font-sans text-lg font-light leading-relaxed text-body">
              {facilities.intro}
            </p>
            {facilities.availabilityBadge ? (
              <div className="inline-flex items-center gap-2 self-start rounded-full border border-gold bg-gold/10 px-5 py-2 text-sm font-semibold text-gold">
                <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                {facilities.availabilityBadge}
              </div>
            ) : null}
          </motion.div>

          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
            <motion.div
              className="grid w-full grid-cols-2 gap-4 lg:w-[45%] lg:shrink-0"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeUp}
              custom={0.1}>
              <div className="relative col-span-2 h-[220px] overflow-hidden rounded-[24px] shadow-lg lg:h-[280px]">
                <Image
                  src={facilities.galleryMain.src}
                  alt={facilities.galleryMain.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="relative h-[160px] overflow-hidden rounded-[20px] shadow-md lg:h-[200px]">
                <Image
                  src={facilities.gallerySecondary1.src}
                  alt={facilities.gallerySecondary1.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 20vw"
                />
              </div>
              <div className="relative h-[160px] overflow-hidden rounded-[20px] shadow-md lg:h-[200px]">
                <Image
                  src={facilities.gallerySecondary2.src}
                  alt={facilities.gallerySecondary2.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 20vw"
                />
              </div>
            </motion.div>

            <div className="grid flex-1 gap-4 sm:grid-cols-2">
              {facilities.amenities.map((item, index) => {
                const Icon = getIcon(item.icon);
                return (
                  <motion.div
                    key={item.title}
                    className="group rounded-[20px] border border-teal-900/10 bg-white p-6 transition-shadow hover:shadow-lg"
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    variants={fadeUp}
                    custom={0.05 * index}>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold transition-colors group-hover:bg-gold group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 font-sans text-lg font-semibold text-teal-900">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[15px] leading-relaxed text-body">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
