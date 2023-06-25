import { defineField, defineType } from 'sanity'

export default defineType({
  "name": "footerSmall",
  "title": "Footer Small",
  "type": "document",
  "fields": [
    defineField({
      "name": "footer_line",
      "title": "Footer line",
      "type": "string"
    }),
    defineField({
      "name": "links",
      "title": "Links",
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
          "name": "pageLinks",
          "title": "Page Links",
          "type": "object",
          "fields": [
            {
              "name": "app_store",
              "title": "App Store",
              "type": "string"
            },
            {
              "name": "google_play",
              "title": "Google Play",
              "type": "string",
            },
          ]
        }
      ]
    })
  ]
})