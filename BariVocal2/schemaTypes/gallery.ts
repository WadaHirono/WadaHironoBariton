export default {
  name: "gallery",
  title: "ギャラリー",
  type: "document",
  fields: [
    {
      name: "title",
      title: "タイトル（任意）",
      type: "string",
    },

    // ✅ 互換用（既存データを壊さないため残す）
    {
      name: "image",
      title: "画像（旧・単体）",
      type: "image",
      options: { hotspot: true },
    },

    // ✅ 新：複数画像
    {
      name: "images",
      title: "写真（複数）",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "caption", title: "説明（任意）", type: "string" },
          ],
        },
      ],
    },

    // ✅ 複数動画（YouTube URL）
    {
      name: "videos",
      title: "動画（複数URL）",
      type: "array",
      of: [{ type: "url" }],
    },
  ],
};