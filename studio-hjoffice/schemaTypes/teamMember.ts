import { defineField, defineType } from 'sanity';

export const teamMember = defineType({
  name: 'teamMember',
  title: "Membre de l'équipe",
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Rôle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Texte alternatif', type: 'string' }),
      ],
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn',
      type: 'url',
    }),
    defineField({
      name: 'email',
      title: 'Email',
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
    select: { title: 'name', subtitle: 'role', media: 'photo' },
  },
});
