import Image from 'next/image'
import type { Media } from '@/payload-types'

type Props = {
  eyebrow?: string | null
  heading?: string | null
  description?: string | null
  image?: Media | number | null
  imagePosition?: 'left' | 'right' | null
  imageAspectRatio?: 'square' | 'portrait' | 'landscape' | 'wide' | null
  imageFit?: 'cover' | 'contain' | null
  verticalAlignment?: 'start' | 'center' | 'end' | null
  backgroundColor?: string | null
  textColor?: string | null
  button?: {
    label?: string | null
    url?: string | null
  } | null
  shadow?: boolean | null
}

const backgrounds: Record<string, string> = {
  transparent: 'bg-transparent',
  cream: 'bg-tribearth-cream',
  offwhite: 'bg-tribearth-offwhite',
  green: 'bg-tribearth-green',
  'deep-green': 'bg-tribearth-green-deep',
  gold: 'bg-tribearth-gold',
}

const textColors: Record<string, string> = {
  charcoal: 'text-tribearth-charcoal',
  'deep-green': 'text-tribearth-green-deep',
  green: 'text-tribearth-green',
  white: 'text-white',
}

const ratios = {
  square: 'aspect-square',
  portrait: 'aspect-[4/5]',
  landscape: 'aspect-[4/3]',
  wide: 'aspect-[16/9]',
}

const alignment = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
}

export function ImageTextBlock({
  eyebrow,
  heading,
  description,
  image,
  imagePosition = 'left',
  imageAspectRatio = 'portrait',
  imageFit = 'cover',
  verticalAlignment = 'center',
  backgroundColor = 'transparent',
  textColor = 'charcoal',
  button,
  shadow = false,
}: Props) {
  const media = image && typeof image === 'object' && 'url' in image ? image : null

  const safeBackground = backgrounds[backgroundColor ?? 'transparent']
    ? (backgroundColor ?? 'transparent')
    : 'transparent'

  const safeTextColor = textColors[textColor ?? 'charcoal'] ? (textColor ?? 'charcoal') : 'charcoal'

  const safeRatio = imageAspectRatio && imageAspectRatio in ratios ? imageAspectRatio : 'portrait'

  const safeAlignment =
    verticalAlignment && verticalAlignment in alignment ? verticalAlignment : 'center'

  const imageColumn = media?.url ? (
    <div
      className={[
        'relative w-full overflow-hidden rounded-xl',
        ratios[safeRatio],
        shadow ? 'shadow-xl' : '',
      ].join(' ')}
    >
      <Image
        src={media.url}
        alt={media.alt || heading || 'Tribearth image'}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className={imageFit === 'contain' ? 'object-contain' : 'object-cover'}
      />
    </div>
  ) : (
    <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-tribearth-cream text-tribearth-muted">
      Select an image in the CMS
    </div>
  )

  const textColumn = (
    <div className={`flex flex-col justify-center ${textColors[safeTextColor]}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-tribearth-gold">
          {eyebrow}
        </p>
      )}

      {heading && <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{heading}</h2>}

      {description && (
        <p className="mt-5 whitespace-pre-line leading-7 opacity-90">{description}</p>
      )}

      {button?.label && button.url && (
        <a
          href={button.url}
          className="mt-6 inline-flex w-fit items-center rounded-full bg-tribearth-green-deep px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-tribearth-green"
        >
          {button.label}
        </a>
      )}
    </div>
  )

  return (
    <section className={`px-5 py-10 sm:px-8 sm:py-14 lg:px-12 ${backgrounds[safeBackground]}`}>
      <div
        className={`mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 ${alignment[safeAlignment]}`}
      >
        <div className={imagePosition === 'right' ? 'lg:order-2' : ''}>{imageColumn}</div>

        <div className={imagePosition === 'right' ? 'lg:order-1' : ''}>{textColumn}</div>
      </div>
    </section>
  )
}
