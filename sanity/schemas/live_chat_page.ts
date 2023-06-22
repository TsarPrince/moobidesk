import { defineField, defineType } from 'sanity'

export default defineType({
  "name": "liveChatPage",
  "title": "Live Chat Page",
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
          "name": "cards",
          "title": "Cards",
          "type": "array",
          "of": [
            {
              "type": "object",
              "fields": [
                {
                  "name": "heading",
                  "title": "Heading",
                  "type": "string"
                },
                {
                  "name": "description",
                  "title": "Description",
                  "type": "string"
                },
                {
                  "name": "image",
                  "title": "Image",
                  "type": "string"
                }
              ]
            }
          ]
        }
      ]
    }),
    defineField({
      "name": "section_3",
      "title": "Section 3",
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
          "name": "panels",
          "title": "Panels",
          "type": "array",
          "of": [
            {
              "type": "object",
              "fields": [
                {
                  "name": "heading",
                  "title": "Heading",
                  "type": "string"
                },
                {
                  "name": "description",
                  "title": "Description",
                  "type": "string"
                },
                {
                  "name": "imageURL",
                  "title": "Image U R L",
                  "type": "string"
                }
              ]
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
          "name": "subheading",
          "title": "Subheading",
          "type": "string"
        },
        {
          "name": "clients",
          "title": "Clients",
          "type": "array",
          "of": [
            {
              "type": "string"
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
          "name": "subheading",
          "title": "Subheading",
          "type": "string"
        },
        {
          "name": "questions",
          "title": "Questions",
          "type": "array",
          "of": [
            {
              "type": "object",
              "fields": [
                {
                  "name": "question",
                  "title": "Question",
                  "type": "string"
                },
                {
                  "name": "answer",
                  "title": "Answer",
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
        }
      ]
    }),
    defineField({
      "name": "section_6",
      "title": "Section 6",
      "type": "object",
      "fields": [
        {
          "name": "heading",
          "title": "Heading",
          "type": "string"
        }
      ]
    })
  ]
})