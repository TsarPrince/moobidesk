import { defineField, defineType } from 'sanity'

export default defineType({
  "name": "requestDemoPage",
  "title": "Request Demo Page",
  "type": "document",
  "fields": [
    defineField({
      "name": "section_1",
      "title": "Section 1",
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
        }
      ]
    }),
    defineField({
      "name": "section_2",
      "title": "Section 2",
      "type": "object",
      "fields": [
        {
          "name": "portion_1",
          "title": "Portion 1",
          "type": "object",
          "fields": [
            {
              "name": "heading",
              "title": "Heading",
              "type": "string"
            },
            {
              "name": "sections",
              "title": "Sections",
              "type": "array",
              "of": [
                {
                  "type": "object",
                  "fields": [
                    {
                      "name": "imageURL",
                      "title": "Image U R L",
                      "type": "string"
                    },
                    {
                      "name": "text",
                      "title": "Text",
                      "type": "string"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "portion_2",
          "title": "Portion 2",
          "type": "object",
          "fields": [
            {
              "name": "heading",
              "title": "Heading",
              "type": "string"
            },
            {
              "name": "urls",
              "title": "Urls",
              "type": "array",
              "of": [
                {
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