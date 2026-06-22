import { Eyebrow } from './ui/Eyebrow';
import { Phone, Clock, Mail } from 'lucide-react';
import { SectionBackground } from './ui/SectionBackground';
import { ContactForm } from './ContactForm';
import type { ResolvedHomePageContent } from '@/lib/default-site-content';
import { buildMailtoUrl } from '@/lib/email-links';

type ContactProps = {
  contact: ResolvedHomePageContent['contactPage'];
  settings: ResolvedHomePageContent['siteSettings'];
};

export function Contact({ contact, settings }: ContactProps) {
  const emailHref = buildMailtoUrl(settings.email);

  return (
    <section id="contact" className="bg-cream py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex flex-col gap-16 lg:flex-row">
          <div className="relative min-h-[400px] flex-1 overflow-hidden rounded-[10px]">
            <SectionBackground
              src={contact.sideImage.src}
              alt={contact.sideImage.alt}
              imageClassName="object-cover opacity-30 mix-blend-multiply"
            />
          </div>

          <div className="flex-1 space-y-10">
            <div className="space-y-6">
              <Eyebrow>{contact.eyebrow}</Eyebrow>
              <h2 className="text-[48px] font-semibold leading-tight text-dark">
                {contact.title}
              </h2>
              <p className="text-[16px] leading-relaxed text-body">{contact.intro}</p>
            </div>

            <div className="border-t border-[#A8A8A8] pt-8">
              <div className="grid gap-6 sm:grid-cols-3">
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-semibold text-teal-900">Téléphone</h3>
                    <p className="text-[16px] text-body">{settings.phone}</p>
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
                    <p className="text-[16px] text-body">{settings.hours}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-semibold text-teal-900">Adresse email</h3>
                    <p className="text-[16px] text-body">
                      <a href={emailHref} className="hover:text-gold">
                        {settings.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm
              toEmail={settings.email}
              namePlaceholder={contact.formNamePlaceholder}
              emailPlaceholder={contact.formEmailPlaceholder}
              phonePlaceholder={contact.formPhonePlaceholder}
              subjectPlaceholder={contact.formSubjectPlaceholder}
              messagePlaceholder={contact.formMessagePlaceholder}
              submitLabel={contact.formSubmitLabel}
            />
          </div>
        </div>

        <div className="mt-16 space-y-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-[24px] font-semibold text-teal-900">
                {contact.mapSectionTitle}
              </h3>
              <p className="text-[16px] text-body">{contact.mapSectionSubtitle}</p>
            </div>
            <a
              href={settings.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-semibold text-gold hover:text-gold/80">
              Ouvrir dans Google Maps →
            </a>
          </div>
          <div className="relative h-[320px] overflow-hidden rounded-[10px] border border-[#A8A8A8]/40 shadow-sm sm:h-[400px] lg:h-[450px]">
            <iframe
              src={settings.mapEmbedUrl}
              title="Carte Google Maps — HJ Offices"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
