import { defineField, defineType } from 'sanity'

export default defineType({
  "name": "customerSupportPage",
  "title": "Customer Support Page",
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
          "name": "description",
          "title": "Description",
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
          "name": "description",
          "title": "Description",
          "type": "string"
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
          "name": "description",
          "title": "Description",
          "type": "string"
        }
      ]
    }),
    defineField({
      "name": "client_images",
      "title": "Client images",
      "type": "array",
      "of": [
        {
          "type": "string"
        }
      ]
    }),
    defineField({
      "name": "social_urls",
      "title": "Social urls",
      "type": "array",
      "of": [
        {
          "type": "object",
          "fields": [
            {
              "name": "iamgeURL",
              "title": "Iamge U R L",
              "type": "string"
            },
            {
              "name": "name",
              "title": "Name",
              "type": "string"
            },
          ]
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
              "name": "imageURL",
              "title": "Image U R L",
              "type": "string"
            },
            {
              "name": "title",
              "title": "Title",
              "type": "string"
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
      "name": "section_6",
      "title": "Section 6",
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
    }),
    defineField({
      "name": "section_7",
      "title": "Section 7",
      "type": "object",
      "fields": [
        {
          "name": "title",
          "title": "Title",
          "type": "string"
        }
      ]
    }),
    defineField({
      "name": "section_8",
      "title": "Section 8",
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
      "name": "section_9",
      "title": "Section 9",
      "type": "object",
      "fields": [
        {
          "name": "heading",
          "title": "Heading",
          "type": "string"
        },
        {
          "name": "card_1",
          "title": "Card 1",
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
            }
          ]
        },
        {
          "name": "card_2",
          "title": "Card 2",
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
            }
          ]
        }
      ]
    }),
    defineField({
      "name": "section_10",
      "title": "Section 10",
      "type": "object",
      "fields": [
        {
          "name": "description",
          "title": "Description",
          "type": "string"
        },
        {
          "name": "person_name",
          "title": "Person name",
          "type": "string"
        },
        {
          "name": "person_title",
          "title": "Person title",
          "type": "string"
        }
      ]
    }),
    defineField({
      "name": "midBanner",
      "title": "Mid Banner",
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