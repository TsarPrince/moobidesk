import { defineField, defineType } from 'sanity'

export default defineType({
  "name": "whatsappPage",
  "title": "Whatsapp Page",
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
      "name": "description",
      "title": "Description",
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
      "name": "tabular",
      "title": "Tabular",
      "type": "object",
      "fields": [
        {
          "name": "topic1",
          "title": "Topic1",
          "type": "string"
        },
        {
          "name": "topic2",
          "title": "Topic2",
          "type": "string"
        },
        {
          "name": "rowDetails",
          "title": "Row Details",
          "type": "array",
          "of": [
            {
              "type": "object",
              "fields": [
                {
                  "name": "title",
                  "title": "Title",
                  "type": "string"
                },
                {
                  "name": "isTopic1",
                  "title": "Is Topic1",
                  "type": "boolean"
                },
                {
                  "name": "isTopic2",
                  "title": "Is Topic2",
                  "type": "boolean"
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
    },
    {
      "name": "subheading",
      "title": "Subheading",
      "type": "string"
    },
    {
      "name": "icons",
      "title": "Icons",
      "type": "array",
      "of": [
        {
          "type": "object",
          "fields": [
            {
              "name": "url",
              "title": "Url",
              "type": "string"
            },
            {
              "name": "name",
              "title": "Name",
              "type": "string"
            }
          ]
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
      "name": "heading",
      "title": "Heading",
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
})
  ]
})