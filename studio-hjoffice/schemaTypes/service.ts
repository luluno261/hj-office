import { defineField, defineType } from 'sanity';
import { iconOptions } from './iconField';

export const service = defineType({
  name: 'service',
  title: "Pôle d'expertise",
  type: 'document',
  fields: [
    defineField({
      name: 'num',
      title: 'Numéro',
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
      name: 'icon',
      title: 'Icône',
      type: 'string',
      options: { list: [...iconOptions] },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description complète',
      type: 'text',
      rows: 12,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Description courte (optionnel)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'anchorId',
      title: 'ID ancre HTML (optionnel)',
      type: 'string',
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
    select: { title: 'title', num: 'num' },
    prepare({ title, num }) {
      return { title: `${num} — ${title}` };
    },
  },
});
