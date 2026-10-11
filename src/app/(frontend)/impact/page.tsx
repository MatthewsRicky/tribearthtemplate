import { notFound } from 'next/navigation'
import { getPayloadClient } from '@/lib/payload'
import { RenderBlocks } from '@/components/RenderBlocks'

export default async function ImpactPage() {
  const payload = await getPayloadClient()

  const result = await payload.find({
    collection: 'pages',
    where: {
      and: [{ slug: { equals: 'impact' } }, { status: { equals: 'published' } }],
    },
    depth: 2,
    limit: 1,
  })

  const page = result.docs[0]

  if (!page) {
    notFound()
  }

  return <RenderBlocks blocks={page.layout} />
}
