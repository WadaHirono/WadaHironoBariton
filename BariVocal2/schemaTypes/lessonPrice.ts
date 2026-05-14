import { defineType, defineField } from "sanity";

export default defineType({
  name: "lessonPrice",
  title: "レッスン料金",
  type: "document",
  fields: [
    defineField({
      name: "menu",
      title: "メニュー",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "料金",
      type: "string",
    }),
  ],
});