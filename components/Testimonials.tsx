import Image from 'next/image';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { siteImageAlt, siteImages } from '@/lib/site-images';

export function Testimonials() {
  return (
    <section className="bg-mint py-24 font-golos">
      <div className="mx-auto max-w-[1360px] px-6">
        <div className="mb-12 space-y-2">
          <p className="text-[14px] uppercase tracking-wider text-black">
            Témoignages
          </p>
          <h2 className="text-[42px] leading-tight text-black">
            Ce que disent nos clients
          </h2>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="flex w-full flex-col justify-between rounded border border-[#E6E6E6] bg-white p-8 lg:w-[427px]">
            <p className="text-[14px] uppercase tracking-wider text-[#515151]">
              Notre promesse
            </p>
            <div className="mt-24 space-y-4">
              <h3 className="text-[42px] text-black">360°</h3>
              <p className="font-inter text-[18px] leading-relaxed text-[#515151]">
                Une vision globale et coordonnée de vos projets juridiques,
                fiscaux, financiers et entrepreneuriaux.
              </p>
            </div>
          </div>

          <div className="relative flex flex-1 flex-col overflow-hidden rounded bg-teal-800 p-8 text-white lg:p-10">
            <div className="mb-8 flex items-center justify-between">
              <p className="text-[14px] uppercase tracking-wider">
                Témoignage client
              </p>
              <div className="flex gap-2">
                <button
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-teal-800 hover:bg-cream"
                  aria-label="Témoignage précédent">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-teal-800 hover:bg-cream"
                  aria-label="Témoignage suivant">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="flex-1 space-y-8">
                <Quote className="h-10 w-10 text-gold" />
                <p className="text-[26px] leading-snug">
                  &ldquo;Grâce à HJ Offices Consortium, j&apos;ai bénéficié d&apos;un
                  accompagnement juridique, fiscal et entrepreneurial coordonné
                  sous un même toit. Une synergie rare et précieuse.&rdquo;
                </p>
                <p className="font-inter text-[16px] text-[#A2B4B2]">
                  Marie-Claire R., Directrice générale, PME locale
                </p>
              </div>

              <div className="relative h-[210px] w-[210px] shrink-0 overflow-hidden rounded bg-white p-4">
                <Image
                  src={siteImages.logo}
                  alt={siteImageAlt.logo}
                  fill
                  className="object-contain p-4"
                  sizes="210px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
