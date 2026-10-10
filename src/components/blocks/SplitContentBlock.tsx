
import Image from 'next/image'
import type { Media } from '@/payload-types'

type SplitContentBlockProps = {
  eyebrow?: string | null
  heading: string
  content: string
  image?: Media | number | null
  imagePosition?: 'left' | 'right' | null
  button?: {
    label?: string | null
    url?: string | null
  } | null
}

export function SplitContentBlock({
  eyebrow,
  heading,
  content,
  image,
  imagePosition = 'right',
  button,
}: SplitContentBlockProps) {
  const imageData =
    image && typeof image === 'object' ? image : null

  return (
    <section className="tribearth-section bg-tribearth-offwhite">
      <div className="tribearth-container grid gap-12 lg:grid-cols-2 lg:items-center">
        <div
          className={`relative aspect-[4/3] overflow-hidden bg-tribearth-sage/20 ${
            imagePosition === 'left' ? 'lg:order-first' : 'lg:order-last'
          }`}
        >
          {imageData?.url ? (
            <Image
              src={imageData.url}
              alt={imageData.alt || heading}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center p-6 text-center text-sm text-tribearth-muted">
              Select an image in the Payload CMS to display it here.
            </div>
          )}
        </div>

        <div
          className={
            imagePosition === 'left' ? 'lg:order-last' : 'lg:order-first'
          }
        >
          {eyebrow && (
            <p className="tribearth-eyebrow mb-5">{eyebrow}</p>
          )}

          <h2 className="text-4xl leading-tight text-tribearth-green-deep md:text-5xl">
            {heading}
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-tribearth-muted">
            {content}
          </p>

          {button?.label && button.url && (
            <a
              href={button.url}
              className="mt-8 inline-block border-b border-tribearth-gold pb-2 text-sm font-semibold uppercase tracking-wider text-tribearth-green-deep"
            >
              {button.label}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
