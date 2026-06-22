import { defineField, defineType } from 'sanity';

export const heroSlide = defineType({
  name: 'heroSlide',
  title: 'Slide Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Badge',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Texte alternatif', type: 'string' }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Ordre',
      type: 'number',
      validation: (rule) => rule.required().min(0),
    }),
  ],
  orderings: [
    {
      title: 'Ordre',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'title', media: 'image', order: 'order' },
    prepare({ title, media, order }) {
      return { title: `${order ?? '?'}. ${title}`, media };
    },
  },
});
