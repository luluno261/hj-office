import { defineField, defineType } from 'sanity';

const imageField = (name: string, title: string, fieldset?: string) =>
  defineField({
    name,
    title,
    type: 'image',
    fieldset,
    options: { hotspot: true },
    fields: [
      defineField({ name: 'alt', title: 'Texte alternatif', type: 'string' }),
    ],
  });

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'Page À propos',
  type: 'document',
  fieldsets: [
    { name: 'header', title: 'En-tête', options: { collapsible: true } },
    { name: 'visual', title: 'Image', options: { collapsible: true } },
    { name: 'missionVision', title: 'Mission & Vision', options: { collapsible: true } },
  ],
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      fieldset: 'header',
    }),
    defineField({
      name: 'headline',
      title: 'Titre principal',
      type: 'text',
      rows: 3,
      fieldset: 'header',
    }),
    imageField('imageLeft', 'Image principale', 'visual'),
    defineField({
      name: 'missionTitle',
      title: 'Titre mission',
      type: 'string',
      fieldset: 'missionVision',
    }),
    defineField({
      name: 'missionText',
      title: 'Texte mission',
      type: 'text',
      rows: 4,
      fieldset: 'missionVision',
    }),
    defineField({
      name: 'visionTitle',
      title: 'Titre vision',
      type: 'string',
      fieldset: 'missionVision',
    }),
    defineField({
      name: 'visionText',
      title: 'Texte vision',
      type: 'text',
      rows: 4,
      fieldset: 'missionVision',
    }),
    defineField({
      name: 'ctaLabel',
      title: 'Libellé bouton',
      type: 'string',
      fieldset: 'missionVision',
    }),
  ],
});
