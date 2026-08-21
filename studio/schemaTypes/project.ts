import {defineType, defineField} from 'sanity'

const feature = defineField({
  name: 'features',
  title: 'Features',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        defineField({name: 'id', type: 'string', validation: (r) => r.required()}),
        defineField({
          name: 'icon',
          type: 'string',
          options: {
            list: [
              'shield',
              'bell',
              'terminal',
              'users',
              'api',
              'mobile',
              'code',
              'database',
            ],
          },
          validation: (r) => r.required(),
        }),
        defineField({name: 'title', type: 'localizedString', validation: (r) => r.required()}),
        defineField({name: 'description', type: 'localizedText', validation: (r) => r.required()}),
      ],
      preview: {
        select: {title: 'title.es', subtitle: 'icon'},
      },
    },
  ],
})

const gallery = defineField({
  name: 'gallery',
  title: 'Gallery',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        defineField({name: 'id', type: 'string', validation: (r) => r.required()}),
        defineField({name: 'imageUrl', type: 'string', validation: (r) => r.required()}),
        defineField({name: 'title', type: 'localizedString', validation: (r) => r.required()}),
        defineField({name: 'caption', type: 'localizedText', validation: (r) => r.required()}),
      ],
      preview: {
        select: {title: 'title.es', subtitle: 'imageUrl'},
      },
    },
  ],
})

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Stable ID (slug)',
      type: 'slug',
      description: 'Must match the Angular route id, e.g. nodejs-scheduler-back',
      options: {source: 'title', maxLength: 96},
      validation: (r) => r.required(),
    }),
    defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'description', type: 'localizedText', validation: (r) => r.required()}),
    defineField({
      name: 'technologies',
      type: 'array',
      of: [{type: 'string'}],
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: 'technologyIconUrls',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({name: 'repositoryUrl', type: 'url'}),
    defineField({name: 'demoUrl', type: 'url'}),
    defineField({
      name: 'imageUrl',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({name: 'featured', type: 'boolean', initialValue: false}),
    defineField({
      name: 'sortOrder',
      type: 'number',
      validation: (r) => r.required().integer().min(0),
    }),
    defineField({
      name: 'detail',
      title: 'Case study detail',
      type: 'object',
      fields: [
        defineField({name: 'summary', type: 'localizedText', validation: (r) => r.required()}),
        defineField({name: 'role', type: 'localizedString', validation: (r) => r.required()}),
        defineField({name: 'duration', type: 'localizedString', validation: (r) => r.required()}),
        defineField({name: 'team', type: 'localizedString', validation: (r) => r.required()}),
        defineField({name: 'year', type: 'string', validation: (r) => r.required()}),
        defineField({name: 'client', type: 'localizedString', validation: (r) => r.required()}),
        defineField({
          name: 'body',
          type: 'array',
          of: [{type: 'localizedText'}],
          validation: (r) => r.required().min(1),
        }),
        feature,
        gallery,
      ],
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
    select: {title: 'title', subtitle: 'slug.current', order: 'sortOrder'},
    prepare: ({title, subtitle, order}) => ({
      title: title || 'Untitled project',
      subtitle: `#${order ?? '?'} · ${subtitle || 'no-id'}`,
    }),
  },
})
