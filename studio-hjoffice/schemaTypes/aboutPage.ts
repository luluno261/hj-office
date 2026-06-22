import { defineField, defineType } from 'sanity';

const imageField = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: 'image',
    options: { hotspot: true },
    fields: [
      defineField({ name: 'alt', title: 'Texte alternatif', type: 'string' }),
    ],
  });

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'Page À propos',
  type: 'document',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
    }),
    defineField({
      name: 'headline',
      title: 'Titre principal',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'polesCount',
      title: 'Nombre de pôles',
      type: 'number',
    }),
    defineField({
      name: 'polesTitle',
      title: 'Titre compteur pôles',
      type: 'string',
    }),
    defineField({
      name: 'polesDescription',
      title: 'Description pôles',
      type: 'text',
      rows: 4,
    }),
    imageField('imageLeft', 'Image gauche'),
    imageField('imageRight', 'Image droite'),
    defineField({
      name: 'missionTitle',
      title: 'Titre mission',
      type: 'string',
    }),
    defineField({
      name: 'missionText',
      title: 'Texte mission',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'visionTitle',
      title: 'Titre vision',
      type: 'string',
    }),
    defineField({
      name: 'visionText',
      title: 'Texte vision',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'ctaLabel',
      title: 'Libellé bouton',
      type: 'string',
    }),
  ],
});
