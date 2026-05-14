export default {
  name: "concert",
  title: "Concert",
  type: "document",
  fields: [
    {
      name: "title",
      title: "タイトル",
      type: "string",
    },
    {
      name: "date",
      title: "日付",
      type: "datetime",
    },

    {
      name: "mainImage",
      title: "メイン画像",
      type: "image",
      options: { hotspot: true },
    },

    {
      name: "gallery",
      title: "サブ画像",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
        }, // ✅ fields削除
      ],
    },

    {
      name: "venue",
      title: "会場",
      type: "string",
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, "-"),
      },
    },

    {
      name: "description",
      title: "詳細",
      type: "text",
    },
    {
      name: "price",
      title: "料金",
      type: "string",
    },
    {
      name: "mapUrl",
      title: "地図",
      type: "url",
    },
    {
      name: "ticketUrl",
      title: "チケットURL",
      type: "url",
    },
    {
      name: "officialUrl",
      title: "公式URL",
      type: "url",
    },
  ],
};