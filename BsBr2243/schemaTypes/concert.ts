import { defineType, defineField } from "sanity";

export const concert = defineType({
  name: "concert",
  type: "document",
  title: "Concert",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "タイトル",
    }),
    defineField({
      name: "date",
      type: "datetime",
      title: "日付",
    }),
    defineField({
      name: "venue",
      type: "string",
      title: "会場",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "詳細",
    }),
    defineField({
  name: "performers",
  type: "array",
  title: "出演者",
  of: [{ type: "string" }],
}),
   defineField({
  name: "gallery",
  type: "array",
  title: "写真一覧",
  of: [{ type: "image" }],
}),
  defineField({
  name: "ticketUrl",
  type: "url",
  title: "チケットURL",
}),

defineField({
  name: "mapUrl",
  type: "url",
  title: "GoogleマップURL",
}),
],
});