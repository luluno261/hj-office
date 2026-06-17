import { Button } from './ui/Button';
import { SectionBackground } from './ui/SectionBackground';
import { siteImageAlt, siteImages } from '@/lib/site-images';

export function CTABanner() {
  return (
    <section className="relative flex min-h-[520px] items-center justify-center bg-teal-900 py-24 text-center">
      <SectionBackground
        src={siteImages.buildingExteriorDusk}
        alt={siteImageAlt.buildingExteriorDusk}
        imageClassName="object-cover opacity-20 mix-blend-overlay"
      />

      <div className="relative z-10 mx-auto flex max-w-[727px] flex-col items-center gap-8 px-6 text-white">
        <div className="inline-flex items-center justify-center rounded-[50px] border border-white/30 px-6 py-2">
          <span className="text-[16px] font-semibold uppercase tracking-wider text-white">
            Rejoignez-nous
          </span>
        </div>

        <h2 className="text-[48px] font-semibold leading-tight">
          Rejoignez HJ Offices Consortium
        </h2>

        <p className="text-[16px] leading-relaxed text-white/90">
          En réunissant plusieurs expertises au sein d&apos;une même structure,
          nous offrons à nos clients un interlocuteur de confiance capable
          d&apos;apporter des solutions complètes, sécurisées et adaptées à
          leurs ambitions.
        </p>

        <Button>Prendre rendez-vous</Button>
      </div>
    </section>
  );
}
