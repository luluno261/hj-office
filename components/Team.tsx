import { Eyebrow } from './ui/Eyebrow';
import { Button } from './ui/Button';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export function Team() {
  const team = [
    {
      name: 'Me Rakoto',
      role: 'Cabinet d\'Avocats',
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500',
    },
    {
      name: 'Me Andriamahefa',
      role: 'Service Notarial',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500',
    },
    {
      name: 'Expert-comptable HJ',
      role: 'Expertise Comptable',
      img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=500',
    },
    {
      name: 'Consultant HJ Offices',
      role: 'Pôle Entreprise',
      img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400&h=500',
    },
  ];

  return (
    <section id="team" className="bg-cream py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-6">
            <Eyebrow>Notre équipe</Eyebrow>
            <h2 className="text-[48px] font-semibold leading-tight text-teal-900">
              Nos experts dédiés
              <br />à votre réussite
            </h2>
          </div>
          <div className="max-w-[630px] space-y-6">
            <p className="text-[16px] leading-relaxed text-body">
              Des professionnels expérimentés au sein de nos cinq pôles
              d&apos;expertise collaborent au quotidien pour vous offrir un
              accompagnement global, sécurisé et adapté à vos ambitions.
            </p>
            <Button>Voir l&apos;équipe complète</Button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="relative h-[350px] overflow-hidden rounded-[10px]">
              <img
                src={member.img}
                alt={member.name}
                className="h-full w-full object-cover"
              />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-[12px] bg-white p-4 shadow-sm">
                <div>
                  <h3 className="text-[18px] font-semibold text-teal-900">
                    {member.name}
                  </h3>
                  <p className="text-[16px] text-body">{member.role}</p>
                </div>
                <div className="flex gap-1">
                  <a
                    href="#"
                    className="flex h-8 w-8 items-center justify-center rounded bg-cream text-gold hover:bg-gold hover:text-white"
                    aria-label={`LinkedIn de ${member.name}`}>
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="flex h-8 w-8 items-center justify-center rounded bg-cream text-gold hover:bg-gold hover:text-white"
                    aria-label={`Twitter de ${member.name}`}>
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="flex h-8 w-8 items-center justify-center rounded bg-cream text-gold hover:bg-gold hover:text-white"
                    aria-label={`Email de ${member.name}`}>
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
