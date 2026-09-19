import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import type { Product } from '@/payload-types'

type ProductShowcaseBlockProps = {
  eyebrow?: string | null
  heading: string
  description?: string | null
  products?: (number | Product)[] | null
  button?: {
    label?: string | null
    url?: string | null
  } | null
}

export function ProductShowcaseBlock({
  eyebrow,
  heading,
  description,
  products,
  button,
}: ProductShowcaseBlockProps) {
  const populatedProducts = (products || []).filter(
    (product): product is Product =>
      typeof product === 'object' && Boolean(product?.id) && Boolean(product?.name),
  )

  if (populatedProducts.length === 0) {
    return null
  }

  return (
    <section className="bg-tribearth-cream px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            {eyebrow && (
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-tribearth-gold">
                {eyebrow}
              </p>
            )}

            <h2 className="text-4xl font-medium tracking-tight text-tribearth-green-deep md:text-5xl">
              {heading}
            </h2>

            {description && (
              <p className="mt-5 text-lg leading-relaxed text-tribearth-muted">{description}</p>
            )}
          </div>

          {button?.label && button.url && (
            <Link
              href={button.url}
              className="shrink-0 text-sm font-medium uppercase tracking-[0.15em] text-tribearth-green transition hover:text-tribearth-gold"
            >
              {button.label}
            </Link>
          )}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {populatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
