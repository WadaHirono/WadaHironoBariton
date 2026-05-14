import { defineType, defineField } from "sanity";

export default defineType({
  name: "lessonContent",
  title: "レッスン内容",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "タイトル",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "本文",
      type: "text",
    }),
  ],
});
