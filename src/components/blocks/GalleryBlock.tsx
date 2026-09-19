import Image from 'next/image'

type Media = {
  id?: number | string
  url?: string | null
  alt?: string | null
  width?: number | null
  height?: number | null
}

type GalleryBlockProps = {
  eyebrow?: string | null
  heading?: string | null
  description?: string | null
  images?: (Media | number)[] | null
  layout?: 'grid' | 'masonry' | 'featured' | null
}

export function GalleryBlock({
  eyebrow,
  heading,
  description,
  images,
  layout = 'masonry',
}: GalleryBlockProps) {
  const media = (images || []).filter(
    (image): image is Media => typeof image === 'object' && Boolean(image?.url),
  )

  if (media.length === 0) {
    return null
  }

  const layoutClasses = {
    grid: 'grid grid-cols-2 gap-4 md:grid-cols-3',
    masonry: 'columns-1 gap-4 sm:columns-2 lg:columns-3',
    featured: 'grid grid-cols-2 gap-4 md:grid-cols-4',
  }

  return (
    <section className="bg-tribearth-offwhite px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        {(eyebrow || heading || description) && (
          <div className="mb-12 max-w-2xl">
            {eyebrow && (
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-tribearth-gold">
                {eyebrow}
              </p>
            )}

            {heading && (
              <h2 className="text-4xl font-medium tracking-tight text-tribearth-green-deep md:text-5xl">
                {heading}
              </h2>
            )}

            {description && (
              <p className="mt-5 text-lg leading-relaxed text-tribearth-muted">{description}</p>
            )}
          </div>
        )}

        <div className={layoutClasses[layout || 'masonry']}>
          {media.map((image, index) => (
            <div
              key={image.id ?? index}
              className={`relative mb-4 overflow-hidden ${
                layout === 'masonry' ? 'break-inside-avoid' : ''
              } ${layout === 'featured' && index === 0 ? 'col-span-2 row-span-2' : ''}`}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={image.url!}
                  alt={image.alt || ''}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
