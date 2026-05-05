import { defineType, defineField } from "sanity";

export const repertoire = defineType({
  name: "repertoire",
  type: "document",
  title: "レパートリー",
  fields: [
    defineField({
      name: "composer",
      type: "string",
      title: "作曲者",
    }),
    defineField({
      name: "title",
      type: "string",
      title: "曲名",
    }),
    defineField({
      name: "category",
      type: "string",
      title: "区分（オペラ /歌曲 /宗教曲など）",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "補足説明",
    }),
  ],
});
``