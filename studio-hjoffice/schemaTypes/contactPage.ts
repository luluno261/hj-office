import { defineField, defineType } from 'sanity';

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Page Contact',
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
      name: 'sideImage',
      title: 'Image latérale',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Texte alternatif', type: 'string' }),
      ],
    }),
    defineField({
      name: 'mapSectionTitle',
      title: 'Titre section carte',
      type: 'string',
    }),
    defineField({
      name: 'mapSectionSubtitle',
      title: 'Sous-titre section carte',
      type: 'string',
    }),
    defineField({
      name: 'formNamePlaceholder',
      title: 'Placeholder nom',
      type: 'string',
    }),
    defineField({
      name: 'formEmailPlaceholder',
      title: 'Placeholder email',
      type: 'string',
    }),
    defineField({
      name: 'formPhonePlaceholder',
      title: 'Placeholder téléphone',
      type: 'string',
    }),
    defineField({
      name: 'formSubjectPlaceholder',
      title: 'Placeholder objet',
      type: 'string',
    }),
    defineField({
      name: 'formMessagePlaceholder',
      title: 'Placeholder message',
      type: 'string',
    }),
    defineField({
      name: 'formSubmitLabel',
      title: 'Libellé bouton envoi',
      type: 'string',
    }),
  ],
});
