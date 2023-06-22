import { defineField, defineType } from 'sanity'

export default defineType({
  "name": "retailPage",
  "title": "Retail Page",
  "type": "document",
  "fields": [
    defineField({
  "name": "section_1",
  "title": "Section 1",
  "type": "object",
  "fields": [
    {
      "name": "cap_heading",
      "title": "Cap heading",
      "type": "string"
    },
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
  "name": "section_4",
  "title": "Section 4",
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
})
  ]
})