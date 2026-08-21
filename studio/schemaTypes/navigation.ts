import {defineType, defineField} from 'sanity'

const SECTION_IDS = [
  {title: 'About', value: 'about'},
  {title: 'Projects', value: 'projects'},
  {title: 'Experience', value: 'experience'},
  {title: 'Courses', value: 'courses'},
]

export const navigation = defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'items',
      title: 'Nav items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'id',
              title: 'Section id',
              type: 'string',
              options: {list: SECTION_IDS},
              validation: (r) => r.required(),
            }),
            defineField({
              name: 'label',
              type: 'localizedString',
              validation: (r) => r.required(),
            }),
          ],
          preview: {
            select: {title: 'label.es', subtitle: 'id'},
          },
        },
      ],
      validation: (r) => r.required().min(1),
    }),
  ],
  preview: {
    prepare: () => ({title: 'Navigation'}),
  },
})
