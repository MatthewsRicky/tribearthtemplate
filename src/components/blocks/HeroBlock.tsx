import Image from 'next/image'
import Link from 'next/link'

type Media = {
  url?: string | null
  alt?: string | null
  width?: number | null
  height?: number | null
}

type HeroBlockProps = {
  eyebrow?: string | null
  heading: string
  subheading?: string | null
  backgroundImage?: Media | number | null
  primaryButton?: {
    label?: string | null
    url?: string | null
  } | null
  secondaryButton?: {
    label?: string | null
    url?: string | null
  } | null
  alignment?: 'left' | 'center' | 'right' | null
}

export function HeroBlock({
  eyebrow,
  heading,
  subheading,
  backgroundImage,
  primaryButton,
  secondaryButton,
  alignment = 'center',
}: HeroBlockProps) {
  const image = typeof backgroundImage === 'object' ? backgroundImage : null

  const alignmentClasses = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  }

  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-tribearth-green-deep text-tribearth-cream">
      {image?.url && (
        <Image
          src={image.url}
          alt={image.alt || ''}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-tribearth-green-deep/65" />

      <div
        className={`relative z-10 mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-center px-6 py-24 md:px-10 ${alignmentClasses[alignment || 'center']}`}
      >
        {eyebrow && (
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-tribearth-gold">
            {eyebrow}
          </p>
        )}

        <h1 className="max-w-5xl text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
          {heading}
        </h1>

        {subheading && (
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-tribearth-cream/85 md:text-xl">
            {subheading}
          </p>
        )}

        {(primaryButton?.label || secondaryButton?.label) && (
          <div className="mt-10 flex flex-wrap gap-4">
            {primaryButton?.label && primaryButton.url && (
              <Link
                href={primaryButton.url}
                className="rounded-full bg-tribearth-gold px-7 py-3.5 text-sm font-medium text-tribearth-green-deep transition hover:bg-tribearth-gold-light"
              >
                {primaryButton.label}
              </Link>
            )}

            {secondaryButton?.label && secondaryButton.url && (
              <Link
                href={secondaryButton.url}
                className="rounded-full border border-tribearth-cream/60 px-7 py-3.5 text-sm font-medium text-tribearth-cream transition hover:bg-tribearth-cream hover:text-tribearth-green-deep"
              >
                {secondaryButton.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
