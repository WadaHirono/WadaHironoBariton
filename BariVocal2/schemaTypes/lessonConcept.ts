import { defineType, defineField } from "sanity";

export default defineType({
  name: "lessonConcept",
  title: "レッスンコンセプト",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "タイトル",
      type: "string",
    }),
    defineField({
      name: "content",
      title: "内容",
      type: "text",
    }),
  ],
});