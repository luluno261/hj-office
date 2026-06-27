import { defineField, defineType } from 'sanity';
import { iconOptions } from './iconField';

export const facilitiesPage = defineType({
  name: 'facilitiesPage',
  title: 'Page Notre espace',
  type: 'document',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
    }),
    defineField({
      name: 'intro',
      title: 'Introduction',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'availabilityBadge',
      title: 'Badge disponibilité',
      type: 'string',
      description: 'Ex. : Encore quelques bureaux libres',
    }),
    defineField({
      name: 'galleryMain',
      title: 'Image principale galerie',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Texte alternatif', type: 'string' }),
      ],
    }),
    defineField({
      name: 'gallerySecondary1',
      title: 'Image secondaire 1',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Texte alternatif', type: 'string' }),
      ],
    }),
    defineField({
      name: 'gallerySecondary2',
      title: 'Image secondaire 2',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Texte alternatif', type: 'string' }),
      ],
    }),
    defineField({
      name: 'amenities',
      title: 'Équipements',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icône',
              type: 'string',
              options: { list: [...iconOptions] },
            }),
            defineField({ name: 'title', title: 'Titre', type: 'string' }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
            }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'description' },
          },
        },
      ],
    }),
  ],
});
