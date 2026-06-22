import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Paramètres du site',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Nom du site',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Texte alternatif', type: 'string' }),
      ],
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Téléphone',
      type: 'string',
    }),
    defineField({
      name: 'hours',
      title: "Horaires d'ouverture",
      type: 'string',
    }),
    defineField({
      name: 'facebookUrl',
      title: 'URL Facebook',
      type: 'url',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'URL LinkedIn',
      type: 'url',
    }),
    defineField({
      name: 'mapLink',
      title: 'Lien Google Maps',
      type: 'url',
    }),
    defineField({
      name: 'mapEmbedUrl',
      title: 'URL embed Google Maps',
      type: 'url',
    }),
    defineField({
      name: 'mapLocationLabel',
      title: 'Libellé localisation',
      type: 'string',
    }),
    defineField({
      name: 'heroTagline',
      title: 'Slogan hero',
      type: 'string',
    }),
    defineField({
      name: 'servicesBadge',
      title: 'Badge section services',
      type: 'string',
    }),
    defineField({
      name: 'servicesTitle',
      title: 'Titre section services',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'servicesSubtitle',
      title: 'Sous-titre section services',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'teamEyebrow',
      title: 'Eyebrow section équipe',
      type: 'string',
    }),
    defineField({
      name: 'teamTitle',
      title: 'Titre section équipe',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'teamIntro',
      title: 'Intro section équipe',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright',
      type: 'string',
    }),
  ],
});
