import { defineType, defineField } from "sanity";

export default defineType({
  name: "lessonTop",
  title: "トップページ（レッスン）",
  type: "document",
  fields: [
    defineField({ name: "title", title: "タイトル", type: "string" }),
    defineField({ name: "description", title: "説明文", type: "text" }),
    defineField({ name: "image", title: "画像", type: "image" }),
  ],
});