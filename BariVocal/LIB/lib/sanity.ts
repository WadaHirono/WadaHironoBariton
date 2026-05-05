import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'tgv066pc',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})
export async function getConcerts() {
  return await client.fetch(`
    *[_type == "concert"] | order(date desc) {
      _id,
      title,
      date,
      venue,
      description,
      link
    }
  `)
}