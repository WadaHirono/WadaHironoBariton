export default {
  name: "repertoire",
  title: "レパートリー",
  type: "document",
  fields: [
    {
      name: "title",
      title: "曲名",
      type: "string",
    },

    {
      name: "composer",
      title: "作曲者（表示用）",
      type: "string",
    },

    // ✅ ここ追加（重要）
    {
      name: "composerKana",
      title: "作曲者（ふりがな）",
      type: "string",
      description: "カタカナで入力（例：シューベルト）",
    },

    {
      name: "genre",
      title: "ジャンル",
      type: "string",
      description: "例：歌曲 / オペラ など",
    },
  ],
};