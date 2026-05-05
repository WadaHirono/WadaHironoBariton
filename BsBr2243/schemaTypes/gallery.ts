import { defineType, defineField } from "sanity";

export const gallery = defineType({
  name: "gallery",
  title: "写真・動画",
  type: "document",
  fields: [
    // ✅ タイトル
    defineField({
      name: "title",
      title: "タイトル",
      type: "string",
    }),

    // ✅ 写真（複数アップロード）
    defineField({
      name: "images",
      title: "写真",
      type: "array",
      of: [{ type: "image" }],
    }),

    // ✅ 動画URL（YouTubeなど）
    defineField({
      name: "videos",
      title: "動画URL",
      type: "array",
      of: [{ type: "url" }],
    }),
  ],
});