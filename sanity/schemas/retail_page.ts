import { defineField, defineType } from 'sanity'

export default defineType({
  "name": "retailPage",
  "title": "Retail Page",
  "type": "document",
  "fields": [
    defineField({
      "name": "section_1",
      "title": "Section 1",
      "type": "object",
      "fields": [
        {
          "name": "cap_heading",
          "title": "Cap heading",
          "type": "string"
        },
        {
          "name": "heading",
          "title": "Heading",
          "type": "string"
        },
        {
          "name": "subheading",
          "title": "Subheading",
          "type": "string"
        },
        {
          "name": "buttons",
          "title": "Buttons",
          "type": "array",
          "of": [
            {
              "type": "object",
              "fields": [
                {
                  "name": "text",
                  "title": "Text",
                  "type": "string"
                },
                {
                  "name": "url",
                  "title": "Url",
                  "type": "string"
                }
              ]
            }
          ]
        }
      ]
    }),
    defineField({
      "name": "section_2",
      "title": "Section 2",
      "type": "object",
      "fields": [
        {
          "name": "heading",
          "title": "Heading",
          "type": "string"
        },
        {
          "name": "subheading",
          "title": "Subheading",
          "type": "string"
        },
        {
          "name": "image",
          "title": "Image",
          "type": "image"
        }
      ]
    }),
    defineField({
      "name": "panels",
      "title": "Panels",
      "type": "array",
      "of": [
        {
          "type": "object",
          "fields": [
            {
              "name": "image",
              "title": "Image",
              "type": "image"
            },
            {
              "name": "heading",
              "title": "Heading",
              "type": "string"
            },
            {
              "name": "description",
              "title": "Description",
              "type": "string"
            }
          ]
        }
      ]
    }),
    defineField({
      "name": "section_4",
      "title": "Section 4",
      "type": "object",
      "fields": [
        {
          "name": "heading",
          "title": "Heading",
          "type": "string"
        },
        {
          "name": "reasons",
          "title": "Reasons",
          "type": "array",
          "of": [
            {
              "type": "object",
              "fields": [
                {
                  "name": "image",
                  "title": "Image",
                  "type": "image"
                },
                {
                  "name": "title",
                  "title": "Title",
                  "type": "string"
                },
                {
                  "name": "description",
                  "title": "Description",
                  "type": "string"
                }
              ]
            }
          ]
        }
      ]
    }),
    defineField({
      "name": "section_5",
      "title": "Section 5",
      "type": "object",
      "fields": [
        {
          "name": "heading",
          "title": "Heading",
          "type": "string"
        },
        {
          "name": "buttons",
          "title": "Buttons",
          "type": "array",
          "of": [
            {
              "type": "object",
              "fields": [
                {
                  "name": "text",
                  "title": "Text",
                  "type": "string"
                },
                {
                  "name": "url",
                  "title": "Url",
                  "type": "string"
                }
              ]
            }
          ]
        }
      ]
    })
  ]
})