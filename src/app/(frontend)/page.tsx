import { notFound } from 'next/navigation'

import { RenderBlocks } from '@/components/RenderBlocks'
import { getPayloadClient } from '@/lib/payload'

export default async function HomePage() {
  const payload = await getPayloadClient()

  const result = await payload.find({
    collection: 'pages',
    where: {
      and: [
        {
          slug: {
            equals: 'home',
          },
        },
        {
          status: {
            equals: 'published',
          },
        },
      ],
    },
    limit: 1,
  })

  const page = result.docs[0]

  if (!page) {
    notFound()
  }

  return (
    <main>
      <RenderBlocks blocks={page.layout} />
    </main>
  )
}
