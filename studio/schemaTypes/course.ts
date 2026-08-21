import {defineType, defineField} from 'sanity'

export const course = defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Stable ID (slug)',
      type: 'slug',
      description: 'Must match the Angular course id, e.g. platzi-react',
      options: {source: 'title.es', maxLength: 96},
      validation: (r) => r.required(),
    }),
    defineField({name: 'title', type: 'localizedString', validation: (r) => r.required()}),
    defineField({name: 'institution', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'date', type: 'localizedString', validation: (r) => r.required()}),
    defineField({
      name: 'imageUrl',
      type: 'string',
      description: 'Local assets/… path or absolute https URL',
      validation: (r) => r.required(),
    }),
    defineField({name: 'credentialUrl', type: 'url'}),
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
    select: {title: 'title.es', subtitle: 'institution', order: 'sortOrder'},
    prepare: ({title, subtitle, order}) => ({
      title: title || 'Untitled course',
      subtitle: `#${order ?? '?'} · ${subtitle || 'no-institution'}`,
    }),
  },
})
