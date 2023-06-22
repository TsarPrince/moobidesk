import { defineField, defineType } from 'sanity'

export default defineType({
  "name": "homePage",
  "title": "Home Page",
  "type": "document",
  "fields": [
    defineField({
      "name": "topBanner",
      "title": "Top Banner",
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
          "name": "bannerButton",
          "title": "Banner Button",
          "type": "object",
          "fields": [
            {
              "name": "text",
              "title": "Text",
              "type": "string"
            },
            {
              "name": "image",
              "title": "Image",
              "type": "image"
            }
          ]
        }
      ]
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
        },
        {
          "name": "subheading",
          "title": "Sub Heading",
          "type": "string"
        }
      ]
    }),
    defineField({
      "name": "companyImages",
      "title": "Company Images",
      "type": "array",
      "of": [
        {
          "type": "image"
        }
      ]
    }),
    defineField({
      "name": "statHeading",
      "title": "Stat Heading",
      "type": "string"
    }),
    defineField({
      "name": "statCards",
      "title": "Stat Cards",
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
              "name": "percentage",
              "title": "Percentage",
              "type": "number"
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
          "name": "heading_1",
          "title": "Heading 1",
          "type": "string"
        },
        {
          "name": "heading_2",
          "title": "Heading 2",
          "type": "string"
        },
        {
          "name": "subheading",
          "title": "Subheading",
          "type": "string"
        },
        {
          "name": "images",
          "title": "Images",
          "type": "array",
          "of": [
            {
              "type": "image"
            }
          ]
        },
        {
          "name": "desc_1",
          "title": "Desc 1",
          "type": "string"
        },
        {
          "name": "desc_2",
          "title": "Desc 2",
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
          "name": "subheading",
          "title": "Sub Heading",
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
        }
      ]
    }),
    defineField({
      "name": "endBanner",
      "title": "End Banner",
      "type": "object",
      "fields": [
        {
          "name": "heading",
          "title": "Heading",
          "type": "string"
        },
        {
          "name": "buttonText",
          "title": "Button Text",
          "type": "string"
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
          "name": "cards",
          "title": "Cards",
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
          "name": "subheading_1",
          "title": "Subheading 1",
          "type": "string"
        },
        {
          "name": "subheading_2",
          "title": "Subheading 2",
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
      "name": "midBanner",
      "title": "Mid Banner",
      "type": "object",
      "fields": [
        {
          "name": "heading",
          "title": "Heading",
          "type": "string"
        },
        {
          "name": "buttonText",
          "title": "Button Text",
          "type": "string"
        }
      ]
    }),
  ]
})