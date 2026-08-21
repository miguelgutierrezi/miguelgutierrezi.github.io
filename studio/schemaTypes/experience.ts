import {defineType, defineField} from 'sanity'

export const experience = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Stable ID (slug)',
      type: 'slug',
      description: 'Must match the Angular experience id, e.g. globant',
      options: {source: 'company', maxLength: 96},
      validation: (r) => r.required(),
    }),
    defineField({name: 'company', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'role', type: 'localizedString', validation: (r) => r.required()}),
    defineField({name: 'duration', type: 'localizedString', validation: (r) => r.required()}),
    defineField({
      name: 'responsibilities',
      type: 'localizedStringList',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'imageUrl',
      type: 'string',
      description: 'Local assets/… path or absolute https URL',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'sortOrder',
      type: 'number',
      validation: (r) => r.required().integer().min(0),
    }),
  ],
  orderings: [
    {
      title: 'Sort order',
      name: 'sortOrderAsc',
      by: [{field: 'sortOrder', direction: 'asc'}],
    },
  ],
  preview: {
    select: {title: 'company', subtitle: 'slug.current', order: 'sortOrder'},
    prepare: ({title, subtitle, order}) => ({
      title: title || 'Untitled experience',
      subtitle: `#${order ?? '?'} · ${subtitle || 'no-id'}`,
    }),
  },
})
