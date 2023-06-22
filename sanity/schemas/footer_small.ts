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
                  "name": "imageURL",
                  "title": "Image U R L",
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
        },
        {
          "name": "pageLinks",
          "title": "Page Links",
          "type": "object",
          "fields": [
            {
              "name": "home",
              "title": "Home",
              "type": "string"
            },
            {
              "name": "products",
              "title": "Products",
              "type": "array",
              "of": [
                {
                  "type": "string"
                }
              ]
            },
            {
              "name": "industries",
              "title": "Industries",
              "type": "array",
              "of": [
                {
                  "type": "string"
                }
              ]
            },
            {
              "name": "partner",
              "title": "Partner",
              "type": "string"
            },
            {
              "name": "pricing",
              "title": "Pricing",
              "type": "string"
            },
            {
              "name": "talk_to_expert",
              "title": "Talk to expert",
              "type": "string"
            },
            {
              "name": "watch_video",
              "title": "Watch video",
              "type": "string"
            },
            {
              "name": "app_store",
              "title": "App store",
              "type": "string"
            },
            {
              "name": "google_play",
              "title": "Google play",
              "type": "string"
            }
          ]
        }
      ]
    })
  ]
})