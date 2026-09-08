import Image from 'next/image'
import Link from 'next/link'

type ProductCardProps = {
  product: {
    id: string
    name: string
    slug: string
    price: number
    currency?: string | null
    images?: Array<{
      url?: string | null
      alt?: string | null
    }> | null
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  const image = product.images?.[0]

  return (
    <Link href={`/jewellery/${product.slug}`} className="group block">
      <div className="relative aspect-square overflow-hidden bg-neutral-100">
        {image?.url && (
          <Image
            src={image.url}
            alt={image.alt || product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        )}
      </div>

      <div className="mt-4">
        <h3 className="text-sm font-medium">{product.name}</h3>

        <p className="mt-1 text-sm text-black/50">
          {product.currency || 'USD'} {product.price}
        </p>
      </div>
    </Link>
  )
}
