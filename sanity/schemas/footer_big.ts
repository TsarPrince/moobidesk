import { defineField, defineType } from 'sanity'

export default defineType({
  "name": "footerBig",
  "title": "Footer Big",
  "type": "document",
  "fields": [
    defineField({
      "name": "topFooter",
      "title": "Top Footer",
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
          "name": "description",
          "title": "Description",
          "type": "string"
        },
        {
          "name": "websiteURL",
          "title": "Website URL",
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
        },
        {
          "name": "downloadOnImage",
          "title": "Download On Image",
          "type": "object",
          "fields": [
            {
              "name": "appstore",
              "title": "Appstore",
              "type": "image"
            },
            {
              "name": "googleplay",
              "title": "Googleplay",
              "type": "image"
            }
          ]
        },
        {
          "name": "contactUsSection",
          "title": "Contact Us Section",
          "type": "object",
          "fields": [
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
              "name": "details",
              "title": "Details",
              "type": "array",
              "of": [
                {
                  "type": "object",
                  "fields": [
                    {
                      "name": "field",
                      "title": "Field",
                      "type": "string"
                    },
                    {
                      "name": "value",
                      "title": "Value",
                      "type": "string"
                    },
                    {
                      "name": "URL",
                      "title": "URL",
                      "type": "string"
                    },
                  ]
                }
              ]
            }
          ]
        }
      ]
    }),
    defineField({
      "name": "footerBottom",
      "title": "Footer Bottom",
      "type": "object",
      "fields": [
        {
          "name": "socials",
          "title": "Socials",
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
                  "name": "link",
                  "title": "Link",
                  "type": "string"
                }
              ]
            }
          ]
        },
        {
          "name": "copyrightText",
          "title": "Copyright Text",
          "type": "string"
        },
        {
          "name": "links",
          "title": "Links",
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
      "name": "app_store",
      "title": "App Store",
      "type": "string",
    }),
    defineField({
      "name": "google_play",
      "title": "Google Play",
      "type": "string",
    }),
  ]
})