import { defineType, defineField } from "sanity";

export default defineType({
  name: "lessonProfile",
  title: "講師プロフィール",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "名前",
      type: "string",
    }),
    defineField({
      name: "bio",
      title: "経歴",
      type: "text",
    }),
  ],
});