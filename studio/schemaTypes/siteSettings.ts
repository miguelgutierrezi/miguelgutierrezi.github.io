import {defineType, defineField} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full name',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'brandHandle',
      title: 'Brand handle (nav)',
      type: 'string',
      description: 'e.g. miguel.gutierrez',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'emails',
      title: 'Emails',
      type: 'array',
      of: [{type: 'string'}],
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'id', type: 'string', validation: (r) => r.required()}),
            defineField({name: 'label', type: 'string', validation: (r) => r.required()}),
            defineField({name: 'url', type: 'string', validation: (r) => r.required()}),
            defineField({name: 'iconUrl', type: 'url'}),
          ],
          preview: {
            select: {title: 'label', subtitle: 'url'},
          },
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'brandHandle'},
  },
})
