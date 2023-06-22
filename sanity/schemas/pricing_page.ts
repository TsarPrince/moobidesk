import { defineField, defineType } from 'sanity'

export default defineType({
  "name": "pricingPage",
  "title": "Pricing Page",
  "type": "document",
  "fields": [
    defineField({
      "name": "SGDMonthlyPrice",
      "title": " S G D Monthly Price",
      "type": "number"
    }),
    defineField({
      "name": "section_1",
      "title": "Section 1",
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
      "name": "section_2",
      "title": "Section 2",
      "type": "object",
      "fields": [
        {
          "name": "subheading",
          "title": "Subheading",
          "type": "string"
        },
        {
          "name": "plan_1",
          "title": "Plan 1",
          "type": "object",
          "fields": [
            {
              "name": "title",
              "title": "Title",
              "type": "string"
            },
            {
              "name": "features",
              "title": "Features",
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
                      "name": "name",
                      "title": "Name",
                      "type": "string"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "plan_2",
          "title": "Plan 2",
          "type": "object",
          "fields": [
            {
              "name": "title",
              "title": "Title",
              "type": "string"
            },
            {
              "name": "subheading",
              "title": "Subheading",
              "type": "string"
            },
            {
              "name": "features",
              "title": "Features",
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
                      "name": "name",
                      "title": "Name",
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
          "name": "tables",
          "title": "Tables",
          "type": "array",
          "of": [
            {
              "type": "object",
              "fields": [
                {
                  "name": "c1",
                  "title": "C1",
                  "type": "string"
                },
                {
                  "name": "c2",
                  "title": "C2",
                  "type": "string"
                },
                {
                  "name": "c3",
                  "title": "C3",
                  "type": "string"
                },
                {
                  "name": "rows",
                  "title": "Rows",
                  "type": "array",
                  "of": [
                    {
                      "type": "object",
                      "fields": [
                        {
                          "name": "name",
                          "title": "Name",
                          "type": "string"
                        },
                        {
                          "name": "c1",
                          "title": "C1",
                          "type": "boolean"
                        },
                        {
                          "name": "c2",
                          "title": "C2",
                          "type": "boolean"
                        }
                      ]
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
      "name": "section_5",
      "title": "Section 5",
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