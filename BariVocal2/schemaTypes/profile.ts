export default {
  name: "profile",
  title: "プロフィール",
  type: "document",
  fields: [
    {
      name: "name",
      title: "名前",
      type: "string",
    },

    // ✅ ローマ字（追加）
    {
      name: "roman",
      title: "ローマ字",
      type: "string",
    },

    {
      name: "image",
      title: "プロフィール画像",
      type: "image",
      options: { hotspot: true },
    },

    {
      name: "bio",
      title: "本文",
      type: "text",
    },
  ],
};