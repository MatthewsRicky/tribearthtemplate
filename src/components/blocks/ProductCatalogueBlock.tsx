import Image from 'next/image'
import Link from 'next/link'
import type { Page, Media } from '@/payload-types'
import { getPayloadClient } from '@/lib/payload'
import type { Where } from 'payload'

type Props = Extract<NonNullable<Page['layout']>[number], { blockType: 'product-catalogue' }>

export async function ProductCatalogueBlock(props: Props) {
  const payload = await getPayloadClient()

  const categoryId =
    props.category && typeof props.category === 'object' ? props.category.id : props.category

  const conditions: Where[] = [
    {
      status: {
        equals: 'active',
      },
    },
  ]

  if (categoryId) {
    conditions.push({
      category: {
        equals: categoryId,
      },
    })
  }

  const result = await payload.find({
    collection: 'products',
    where: { and: conditions },
    depth: 2,
    limit: props.limit ?? 24,
    sort: 'name',
  })

  const columns = {
    '2': 'grid-cols-1 sm:grid-cols-2',
    '3': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    '4': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  } as const

  const safeColumns = props.columns ?? '3'

  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:py-20">
      <header className="mb-8 max-w-3xl">
        {props.eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-tribearth-gold">
            {props.eyebrow}
          </p>
        )}

        {props.heading && (
          <h1 className="text-3xl font-semibold tracking-tight text-tribearth-green-deep sm:text-4xl">
            {props.heading}
          </h1>
        )}

        {props.description && (
          <p className="mt-4 leading-relaxed text-tribearth-charcoal">{props.description}</p>
        )}
      </header>

      {result.docs.length === 0 ? (
        <p className="py-12 text-tribearth-charcoal">
          No products are currently available in this collection.
        </p>
      ) : (
        <div className={`grid ${columns[safeColumns]} gap-x-5 gap-y-10`}>
          {result.docs.map((product) => {
            const firstImage = product.images?.find(
              (item): item is Media =>
                typeof item === 'object' && item !== null && 'url' in item && Boolean(item.url),
            )

            const category =
              product.category && typeof product.category === 'object' && 'name' in product.category
                ? product.category.name
                : null

            return (
              <article key={product.id} className="group min-w-0">
                <Link href={`/jewellery/${product.slug}`} className="block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-tribearth-cream">
                    {firstImage?.url ? (
                      <Image
                        src={firstImage.url}
                        alt={firstImage.alt || product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm text-tribearth-green-deep">
                        Image coming soon
                      </div>
                    )}
                  </div>

                  <div className="pt-4">
                    {props.showCategoryLabels && category && (
                      <p className="mb-1 text-xs uppercase tracking-wider text-tribearth-green">
                        {category}
                      </p>
                    )}

                    <h2 className="font-medium text-tribearth-green-deep">{product.name}</h2>

                    {props.showPrices && (
                      <p className="mt-2 text-sm text-tribearth-charcoal">
                        {product.currency === 'KES' ? 'KSh' : '$'}{' '}
                        {Number(product.price).toLocaleString()}
                      </p>
                    )}
                  </div>
                </Link>
              </article>
            )
          })}
        </div>
      )}
    </section>
  )
}
