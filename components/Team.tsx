import Image from 'next/image';
import { Eyebrow } from './ui/Eyebrow';
import { Button } from './ui/Button';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import type { ResolvedHomePageContent } from '@/lib/default-site-content';

type TeamProps = {
  members: ResolvedHomePageContent['teamMembers'];
  eyebrow: string;
  title: string;
  intro: string;
};

export function Team({ members, eyebrow, title, intro }: TeamProps) {
  const titleLines = title.split('\n');

  return (
    <section id="team" className="bg-cream py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-6">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="text-[48px] font-semibold leading-tight text-teal-900">
              {titleLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < titleLines.length - 1 && <br />}
                </span>
              ))}
            </h2>
          </div>
          <div className="max-w-[630px] space-y-6">
            <p className="text-[16px] leading-relaxed text-body">{intro}</p>
            <Button>Voir l&apos;équipe complète</Button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <div
              key={member._id ?? member.name}
              className="relative h-[350px] overflow-hidden rounded-[10px]">
              <Image
                src={member.photo.src}
                alt={member.photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-[12px] bg-white p-4 shadow-sm">
                <div>
                  <h3 className="text-[18px] font-semibold text-teal-900">
                    {member.name}
                  </h3>
                  <p className="text-[16px] text-body">{member.role}</p>
                </div>
                <div className="flex gap-1">
                  {member.linkedinUrl && (
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded bg-cream text-gold hover:bg-gold hover:text-white"
                      aria-label={`LinkedIn de ${member.name}`}>
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  <a
                    href="#"
                    className="flex h-8 w-8 items-center justify-center rounded bg-cream text-gold hover:bg-gold hover:text-white"
                    aria-label={`Twitter de ${member.name}`}>
                    <Twitter className="h-4 w-4" />
                  </a>
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="flex h-8 w-8 items-center justify-center rounded bg-cream text-gold hover:bg-gold hover:text-white"
                      aria-label={`Email de ${member.name}`}>
                      <Mail className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
