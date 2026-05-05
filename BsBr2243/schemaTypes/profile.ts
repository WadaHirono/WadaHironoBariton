import { defineType, defineField } from "sanity";

export const profile = defineType({
  name: "profile",
  type: "document",
  title: "プロフィール",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "名前",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "写真",
    }),
    defineField({
      name: "bio",
      type: "text",
      title: "プロフィール",
    }),
    
  ],
});