import {defineType, defineField} from 'sanity'

export const profile = defineType({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'imageUrl',
      title: 'Image URL',
      type: 'string',
      description: 'Local assets/… path or absolute https URL',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role badge',
      type: 'localizedString',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'pitch',
      title: 'Hero pitch',
      type: 'localizedText',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'paragraphs',
      title: 'About paragraphs',
      type: 'array',
      of: [{type: 'localizedText'}],
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: 'focusAreas',
      title: 'Focus areas',
      type: 'localizedStringList',
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    prepare: () => ({title: 'Profile'}),
  },
})
