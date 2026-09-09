import { notFound } from 'next/navigation'

import { RenderBlocks } from '@/components/RenderBlocks'
import { getPayloadClient } from '@/lib/payload'

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params

  const payload = await getPayloadClient()

  const result = await payload.find({
    collection: 'pages',
    where: {
      and: [
        {
          slug: {
            equals: slug,
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
