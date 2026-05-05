import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'concert',
  title: 'Concert',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'タイトル', type: 'string' }),
    defineField({ name: 'date', title: '日付', type: 'datetime' }),
    defineField({ name: 'venue', title: '会場', type: 'string' }),
    defineField({ name: 'description', title: '説明', type: 'text' }),
    defineField({ name: 'image', title: 'チラシ画像', type: 'image' }),
    defineField({ name: 'link', title: '予約リンク', type: 'url' }),
  ],
})