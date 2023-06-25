import { defineField, defineType } from 'sanity'

export default defineType({
  "name": "navbar",
  "title": "Navbar",
  "type": "document",
  "fields": [
    defineField({
      "name": "dropdown_links",
      "title": "Dropdown links",
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
              "name": "dropdown",
              "title": "Dropdown",
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
        }
      ]
    }),
    defineField({
      "name": "links",
      "title": "Links",
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
              "name": "link",
              "title": "Link",
              "type": "string"
            }
          ]
        }
      ]
    }),
    defineField({
      "name": "button",
      "title": "Button",
      "type": "object",
      "fields": [
        {
          "name": "name",
          "title": "Name",
          "type": "string"
        },
        {
          "name": "link",
          "title": "Link",
          "type": "string"
        }
      ]
    })
  ]
})