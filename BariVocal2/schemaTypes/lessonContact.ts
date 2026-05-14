import { defineType, defineField } from "sanity";

export default defineType({
  name: "lessonContact",
  title: "レッスン問い合わせ",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "タイトル",
      type: "string",
      initialValue: "レッスン申込・お問い合わせ",
    }),

    defineField({
      name: "description",
      title: "説明文",
      type: "text",
    }),

    defineField({
      name: "email",
      title: "メールアドレス",
      type: "string",
    }),

    defineField({
      name: "note",
      title: "補足（任意）",
      type: "text",
    }),
  ],
});
``