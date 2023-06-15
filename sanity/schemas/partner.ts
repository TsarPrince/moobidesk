import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'partner',
  title: 'Partner',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'subheading',
      title: 'Sub Heading',
      type: 'string',
    }),
    defineField({
      name: 'button',
      title: 'Buton',
      type: 'object',
      fields: [
        {
          name: 'partner',
          title: 'Partner',
          type: 'string'
        },
      ]
    }),
    defineField({
      name: 'section_1',
      title: 'Section 1',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string'
        },
        {
          name: 'subheading',
          title: 'Sub Heading',
          type: 'string'
        },
      ]
    }),
    defineField({
      name: 'section_2',
      title: 'Section 2',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string'
        },
        {
          name: 'cards',
          title: 'Cards',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'heading',
                title: 'Heading',
                type: 'string'
              },
              {
                name: 'description',
                title: 'Description',
                type: 'string'
              },
              {
                name: 'image',
                title: 'Image',
                type: 'image'
              },
              {
                name: 'btn_text',
                title: 'Button Text',
                type: 'string'
              },
            ]
          }]
        },
      ]
    }),
    defineField({
      name: 'section_3',
      title: 'Section 3',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string'
        },
        {
          name: 'cards',
          title: 'Cards',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'heading',
                title: 'Heading',
                type: 'string'
              },
              {
                name: 'description',
                title: 'Description',
                type: 'string'
              },
              {
                name: 'image',
                title: 'Image',
                type: 'image'
              },
            ]
          }]
        },
      ]
    }),
    defineField({
      name: 'endBanner',
      title: 'End Banner',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string'
        },
      ]
    })

  ],
  preview: {
    select: {
      title: 'heading',
      description: 'subheading'
    },
  },
})
