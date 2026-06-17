import Image from 'next/image';
import { siteImageAlt, siteImages } from '@/lib/site-images';

const poles = [
  "Cabinet d'Avocats",
  'Service Notarial',
  'Expertise Comptable',
  'Pôle Entreprise',
  'Pôle Formations',
];

export function LogoStrip() {
  return (
    <div className="border-y border-[#A8A8A8]/30 bg-white py-10">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
          <Image
            src={siteImages.logo}
            alt={siteImageAlt.logo}
            width={160}
            height={80}
            className="h-14 w-auto object-contain"
          />
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {poles.map((pole) => (
              <span
                key={pole}
                className="text-[13px] font-bold uppercase tracking-wide text-teal-900/70">
                {pole}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
