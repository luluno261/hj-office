import Image from 'next/image';
import { Eyebrow } from './ui/Eyebrow';
import { MessageCircle, Settings, FileText } from 'lucide-react';
import { SectionBackground } from './ui/SectionBackground';
import { siteImageAlt, siteImages } from '@/lib/site-images';

const features = [
  {
    title: 'Consultation initiale',
    desc: 'Un premier échange pour comprendre vos besoins et identifier les expertises les mieux adaptées à votre situation.',
    icon: <MessageCircle className="h-5 w-5 text-white" />,
  },
  {
    title: 'Coordination multidisciplinaire',
    desc: 'Chaque dossier est traité sous ses aspects juridiques, fiscaux, financiers et opérationnels pour une vision globale et cohérente.',
    icon: <Settings className="h-5 w-5 text-white" />,
  },
  {
    title: 'Suivi opérationnel',
    desc: 'Sécurisation des actes, conformité réglementaire, reporting et accompagnement jusqu\'à la réalisation de vos objectifs.',
    icon: <FileText className="h-5 w-5 text-white" />,
  },
];

const highlightImages = [
  { src: siteImages.conferenceRoom, alt: siteImageAlt.conferenceRoom },
  { src: siteImages.entranceSign, alt: siteImageAlt.entranceSign },
  { src: siteImages.officeInterior, alt: siteImageAlt.officeInterior },
  { src: siteImages.logo, alt: siteImageAlt.logo },
];

export function WhyChooseUs() {
  return (
    <section className="radial-cream-white py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex flex-col gap-16 lg:flex-row">
          <div className="flex-1 space-y-10">
            <div className="space-y-6">
              <Eyebrow>Pourquoi nous choisir</Eyebrow>
              <h2 className="text-[48px] font-semibold leading-tight text-teal-900">
                Votre partenaire de confiance
                <br />
                pour tous vos projets
              </h2>
              <p className="text-[16px] leading-relaxed text-body">
                Une vision globale et coordonnée de vos défis juridiques,
                fiscaux, financiers et entrepreneuriaux — sous un même toit.
              </p>
            </div>

            <div className="space-y-8">
              {features.map((feat, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-gold">
                    {feat.icon}
                  </div>
                  <div>
                    <h3 className="mb-2 text-[16px] font-semibold uppercase text-teal-900">
                      {feat.title}
                    </h3>
                    <p className="text-[16px] leading-relaxed text-body">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex flex-1 flex-col justify-end overflow-hidden rounded-[10px] bg-teal-900 p-8">
            <SectionBackground
              src={siteImages.buildingExteriorDay}
              alt={siteImageAlt.buildingExteriorDay}
              imageClassName="object-cover opacity-40 mix-blend-overlay"
            />

            <div className="relative z-10 space-y-8">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  {highlightImages.map((image) => (
                    <div
                      key={image.src}
                      className="relative h-[68px] w-[68px] overflow-hidden rounded-full border-4 border-white">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="68px"
                      />
                    </div>
                  ))}
                </div>
                <p className="max-w-[200px] text-[18px] font-semibold leading-tight text-white">
                  6 pôles d&apos;expertise réunis sous un même toit
                </p>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-1 flex-col items-center rounded-[10px] bg-white p-6 text-center">
                  <div className="mb-4 flex h-[100px] w-[100px] items-center justify-center rounded-full border-8 border-cream">
                    <span className="text-[36px] font-bold text-gold">6</span>
                  </div>
                  <h4 className="text-[14px] font-bold uppercase text-teal-900">
                    Pôles d&apos;expertise
                  </h4>
                </div>

                <div className="flex flex-1 flex-col items-center rounded-[10px] bg-white p-6 text-center">
                  <div className="mb-4 flex h-[100px] w-[100px] items-center justify-center rounded-full border-8 border-cream">
                    <span className="text-[36px] font-bold text-gold">7</span>
                  </div>
                  <h4 className="text-[14px] font-bold uppercase text-teal-900">
                    Bureaux équipés
                  </h4>
                </div>

                <div className="flex flex-1 flex-col items-center rounded-[10px] bg-white p-6 text-center">
                  <div className="mb-4 flex h-[100px] w-[100px] items-center justify-center rounded-full border-8 border-cream">
                    <span className="text-[28px] font-bold text-gold">25</span>
                  </div>
                  <h4 className="text-[14px] font-bold uppercase text-teal-900">
                    Places en salle de conférence
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
