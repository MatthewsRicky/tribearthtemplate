import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Media } from '@/payload-types'
import { getPayloadClient } from '@/lib/payload'

type Props = {
  params: Promise<{ slug: string }>
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params
  const payload = await getPayloadClient()

  const result = await payload.find({
    collection: 'products',
    where: {
      and: [{ slug: { equals: slug } }, { status: { equals: 'active' } }],
    },
    depth: 2,
    limit: 1,
  })

  const product = result.docs[0]

  if (!product) notFound()

  const images = (product.images ?? []).filter(
    (item): item is Media =>
      typeof item === 'object' && item !== null && 'url' in item && Boolean(item.url),
  )

  const availableVariants = (product.variants ?? []).filter(
    (variant) => variant.available !== false,
  )

  return (
    <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-16">
      <nav className="mb-8 text-sm text-tribearth-green">
        <Link href="/shop" className="hover:underline">
          Shop
        </Link>
        <span className="mx-2">/</span>
        <span className="text-tribearth-charcoal">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="grid grid-cols-2 content-start gap-3">
          {images.length > 0 ? (
            images.map((image, index) => (
              <div
                key={image.id ?? index}
                className={[
                  'relative aspect-[4/5] overflow-hidden bg-tribearth-cream',
                  index === 0 ? 'col-span-2' : '',
                ].join(' ')}
              >
                <Image
                  src={image.url!}
                  alt={image.alt || product.name}
                  fill
                  sizes={
                    index === 0
                      ? '(max-width: 1024px) 100vw, 50vw'
                      : '(max-width: 1024px) 50vw, 25vw'
                  }
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))
          ) : (
            <div className="col-span-2 flex aspect-[4/5] items-center justify-center bg-tribearth-cream text-tribearth-green-deep">
              Product images coming soon
            </div>
          )}
        </div>

        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-tribearth-green-deep sm:text-4xl">
            {product.name}
          </h1>

          <p className="mt-4 text-lg text-tribearth-charcoal">
            {product.currency === 'KES' ? 'KSh' : '$'} {Number(product.price).toLocaleString()}
          </p>

          {product.description && (
            <p className="mt-6 leading-relaxed text-tribearth-charcoal">{product.description}</p>
          )}

          {product.designNumber && (
            <p className="mt-5 text-sm text-tribearth-charcoal">
              <span className="font-medium">Design number:</span> {product.designNumber}
            </p>
          )}

          {availableVariants.length > 0 && (
            <div className="mt-8">
              <p className="mb-3 font-medium text-tribearth-green-deep">Available options</p>

              <div className="flex flex-wrap gap-2">
                {availableVariants.map((variant, index) => (
                  <span
                    key={variant.id ?? index}
                    className="border border-tribearth-border px-4 py-2 text-sm text-tribearth-charcoal"
                  >
                    {variant.name}: {variant.value}
                  </span>
                ))}
              </div>
            </div>
          )}

          <Link
            href="/ring-size-chart"
            className="mt-6 inline-block text-sm font-medium text-tribearth-green underline underline-offset-4"
          >
            View ring size chart
          </Link>

          <button
            type="button"
            disabled
            title="Cart functionality will be implemented separately"
            className="mt-8 block w-full cursor-not-allowed bg-tribearth-green-deep px-6 py-4 font-medium text-white opacity-60"
          >
            Add to cart — integration pending
          </button>

          <div className="mt-10 space-y-5 border-t border-tribearth-border pt-6">
            {product.materials && (
              <div>
                <h2 className="font-medium text-tribearth-green-deep">Materials and sourcing</h2>
                <p className="mt-2 text-sm leading-relaxed text-tribearth-charcoal">
                  {product.materials}
                </p>
              </div>
            )}

            {product.stone && (
              <div>
                <h2 className="font-medium text-tribearth-green-deep">Stone</h2>
                <p className="mt-1 text-sm text-tribearth-charcoal">{product.stone}</p>
              </div>
            )}

            {product.dimensions && (
              <div>
                <h2 className="font-medium text-tribearth-green-deep">Dimensions</h2>
                <p className="mt-1 text-sm text-tribearth-charcoal">{product.dimensions}</p>
              </div>
            )}

            {product.weight && (
              <div>
                <h2 className="font-medium text-tribearth-green-deep">Weight</h2>
                <p className="mt-1 text-sm text-tribearth-charcoal">{product.weight}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
