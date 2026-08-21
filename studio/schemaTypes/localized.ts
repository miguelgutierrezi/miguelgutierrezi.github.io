import {defineType, defineField} from 'sanity'

/** Short bilingual label (titles, roles, badges). */
export const localizedString = defineType({
  name: 'localizedString',
  title: 'Localized string',
  type: 'object',
  fields: [
    defineField({name: 'es', title: 'Español', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'en', title: 'English', type: 'string', validation: (r) => r.required()}),
  ],
})

/** Longer bilingual body copy. */
export const localizedText = defineType({
  name: 'localizedText',
  title: 'Localized text',
  type: 'object',
  fields: [
    defineField({name: 'es', title: 'Español', type: 'text', rows: 4, validation: (r) => r.required()}),
    defineField({name: 'en', title: 'English', type: 'text', rows: 4, validation: (r) => r.required()}),
  ],
})

/** Bilingual list of short strings (focus areas, responsibilities). */
export const localizedStringList = defineType({
  name: 'localizedStringList',
  title: 'Localized string list',
  type: 'object',
  fields: [
    defineField({
      name: 'es',
      title: 'Español',
      type: 'array',
      of: [{type: 'string'}],
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: 'en',
      title: 'English',
      type: 'array',
      of: [{type: 'string'}],
      validation: (r) => r.required().min(1),
    }),
  ],
})
