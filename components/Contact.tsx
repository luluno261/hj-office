import { Eyebrow } from './ui/Eyebrow';
import { Button } from './ui/Button';
import { Phone, Clock, Mail } from 'lucide-react';
import { SectionBackground } from './ui/SectionBackground';
import { siteImageAlt, siteImages } from '@/lib/site-images';

export function Contact() {
  return (
    <section id="contact" className="bg-cream py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex flex-col gap-16 lg:flex-row">
          <div className="relative min-h-[400px] flex-1 overflow-hidden rounded-[10px]">
            <SectionBackground
              src={siteImages.entranceSign}
              alt={siteImageAlt.entranceSign}
              imageClassName="object-cover opacity-30 mix-blend-multiply"
            />
          </div>

          <div className="flex-1 space-y-10">
            <div className="space-y-6">
              <Eyebrow>Besoin d&apos;un conseil ?</Eyebrow>
              <h2 className="text-[48px] font-semibold leading-tight text-dark">
                Demandez un premier entretien
              </h2>
              <p className="text-[16px] leading-relaxed text-body">
                Parlez-nous de votre projet — juridique, fiscal, comptable ou
                entrepreneurial. Nos cinq pôles d&apos;expertise coordonnent une
                réponse adaptée à vos besoins.
              </p>
            </div>

            <div className="border-t border-[#A8A8A8] pt-8">
              <div className="grid gap-6 sm:grid-cols-3">
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-semibold text-teal-900">
                      Téléphone
                    </h3>
                    <p className="text-[16px] text-body">+261388759740</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-semibold text-teal-900">
                      Horaires d&apos;ouverture
                    </h3>
                    <p className="text-[16px] text-body">Lun-Ven : 8h – 18h</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-semibold text-teal-900">
                      Adresse email
                    </h3>
                    <p className="text-[16px] text-body">
                      contact@hjoffices.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <form className="mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Nom complet"
                  className="w-full rounded border border-[#A8A8A8] bg-transparent px-4 py-3 text-teal-900 placeholder:text-teal-900/60 focus:border-gold focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Adresse email"
                  className="w-full rounded border border-[#A8A8A8] bg-transparent px-4 py-3 text-teal-900 placeholder:text-teal-900/60 focus:border-gold focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Téléphone"
                  className="w-full rounded border border-[#A8A8A8] bg-transparent px-4 py-3 text-teal-900 placeholder:text-teal-900/60 focus:border-gold focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Objet de votre demande"
                  className="w-full rounded border border-[#A8A8A8] bg-transparent px-4 py-3 text-teal-900 placeholder:text-teal-900/60 focus:border-gold focus:outline-none"
                />
              </div>
              <textarea
                placeholder="Votre message"
                rows={4}
                className="w-full rounded border border-[#A8A8A8] bg-transparent px-4 py-3 text-teal-900 placeholder:text-teal-900/60 focus:border-gold focus:outline-none"
              />
              <Button type="button">Envoyer ma demande</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
