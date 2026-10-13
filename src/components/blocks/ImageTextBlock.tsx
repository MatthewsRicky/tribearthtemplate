import Image from 'next/image'
import type { CSSProperties } from 'react'
import type { Media } from '@/payload-types'

type ImageHeight = 'auto' | 'compact' | 'medium' | 'tall' | 'extra-tall' | 'viewport'
type ImageWidth = 'equal' | '40-60' | '50-50' | '60-40'
type ContentWidth = 'medium' | 'wide' | 'extra-wide' | 'full'
type SectionPadding = 'none' | 'compact' | 'comfortable' | 'spacious'
type ColumnGap = 'small' | 'medium' | 'large'
type ImageCorners = 'none' | 'small' | 'medium' | 'large'
type ImageRatio = 'square' | 'portrait' | 'landscape' | 'wide'
type VerticalAlignment = 'start' | 'center' | 'end'

type Props = {
  eyebrow?: string | null
  heading?: string | null
  description?: string | null
  image?: Media | number | null
  imagePosition?: 'left' | 'right' | null
  imageAspectRatio?: ImageRatio | null
  imageFit?: 'cover' | 'contain' | null
  imageHeight?: ImageHeight | null
  imageWidth?: ImageWidth | null
  contentWidth?: ContentWidth | null
  sectionPadding?: SectionPadding | null
  columnGap?: ColumnGap | null
  imageCorners?: ImageCorners | null
  imageShadow?: boolean | null
  verticalAlignment?: VerticalAlignment | null
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

const ratios: Record<ImageRatio, string> = {
  square: 'aspect-square',
  portrait: 'aspect-[4/5]',
  landscape: 'aspect-[4/3]',
  wide: 'aspect-[16/9]',
}

const alignment: Record<VerticalAlignment, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
}

const imageHeights: Record<Exclude<ImageHeight, 'auto'>, string> = {
  compact: 'h-64',
  medium: 'h-80',
  tall: 'h-96',
  'extra-tall': 'h-[32rem]',
  viewport: 'h-[70vh] min-h-[24rem]',
}

const contentWidths: Record<ContentWidth, string> = {
  medium: 'max-w-5xl',
  wide: 'max-w-7xl',
  'extra-wide': 'max-w-[90rem]',
  full: 'max-w-none',
}

const sectionPaddings: Record<SectionPadding, string> = {
  none: 'px-0 py-0',
  compact: 'px-4 py-6 sm:px-6 sm:py-8',
  comfortable: 'px-5 py-10 sm:px-8 sm:py-14 lg:px-12',
  spacious: 'px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24',
}

const columnGaps: Record<ColumnGap, string> = {
  small: 'gap-4 lg:gap-6',
  medium: 'gap-8 lg:gap-12',
  large: 'gap-10 lg:gap-16',
}

const imageCornerClasses: Record<ImageCorners, string> = {
  none: 'rounded-none',
  small: 'rounded-md',
  medium: 'rounded-xl',
  large: 'rounded-3xl',
}

const imageWidths: Record<ImageWidth, [number, number]> = {
  equal: [50, 50],
  '40-60': [40, 60],
  '50-50': [50, 50],
  '60-40': [60, 40],
}

export function ImageTextBlock({
  eyebrow,
  heading,
  description,
  image,
  imagePosition = 'left',
  imageAspectRatio = 'portrait',
  imageFit = 'cover',
  imageHeight = 'auto',
  imageWidth = 'equal',
  contentWidth = 'wide',
  sectionPadding = 'comfortable',
  columnGap = 'medium',
  imageCorners = 'medium',
  imageShadow = true,
  verticalAlignment = 'center',
  backgroundColor = 'transparent',
  textColor = 'charcoal',
  button,
  shadow = false,
}: Props) {
  const media = image && typeof image === 'object' && 'url' in image ? image : null

  const safeBackground =
    backgroundColor && backgroundColor in backgrounds ? backgroundColor : 'transparent'

  const safeTextColor = textColor && textColor in textColors ? textColor : 'charcoal'

  const safeRatio: ImageRatio =
    imageAspectRatio && imageAspectRatio in ratios ? imageAspectRatio : 'portrait'

  const safeAlignment: VerticalAlignment =
    verticalAlignment && verticalAlignment in alignment ? verticalAlignment : 'center'

  const safeImageHeight: ImageHeight = imageHeight ?? 'auto'
  const safeImageCorners: ImageCorners = imageCorners ?? 'medium'
  const safeImageWidth: ImageWidth = imageWidth ?? 'equal'
  const safeContentWidth: ContentWidth = contentWidth ?? 'wide'
  const safeSectionPadding: SectionPadding = sectionPadding ?? 'comfortable'
  const safeColumnGap: ColumnGap = columnGap ?? 'medium'

  const [imagePercent, textPercent] = imageWidths[safeImageWidth]

  const imageColumnWidth = imagePosition === 'right' ? textPercent : imagePercent
  const textColumnWidth = imagePosition === 'right' ? imagePercent : textPercent

  const imageHeightClass =
    safeImageHeight === 'auto' ? ratios[safeRatio] : imageHeights[safeImageHeight]

  const imageColumn = media?.url ? (
    <div
      className={[
        'relative w-full overflow-hidden',
        imageHeightClass,
        imageCornerClasses[safeImageCorners],
        imageShadow ? 'shadow-xl' : '',
      ].join(' ')}
    >
      <Image
        src={media.url}
        alt={media.alt || heading || 'Tribearth image'}
        fill
        sizes="(max-width: 1023px) 100vw, 50vw"
        className={imageFit === 'contain' ? 'object-contain' : 'object-cover'}
      />
    </div>
  ) : (
    <div
      className={[
        'flex aspect-[4/3] w-full items-center justify-center',
        'bg-tribearth-cream text-tribearth-muted',
        imageCornerClasses[safeImageCorners],
      ].join(' ')}
    >
      Select an image in the CMS
    </div>
  )

  const textColumn = (
    <div
      className={[
        'flex flex-col justify-center',
        textColors[safeTextColor],
        shadow ? 'rounded-xl p-6 shadow-lg sm:p-8' : '',
      ].join(' ')}
    >
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

  const gridStyle = {
    '--image-column': `${imageColumnWidth}fr`,
    '--text-column': `${textColumnWidth}fr`,
  } as CSSProperties

  return (
    <section
      className={[sectionPaddings[safeSectionPadding], backgrounds[safeBackground]].join(' ')}
    >
      <div
        className={[
          'image-text-grid mx-auto grid items-stretch',
          contentWidths[safeContentWidth],
          columnGaps[safeColumnGap],
          alignment[safeAlignment],
        ].join(' ')}
        style={gridStyle}
      >
        <div className={imagePosition === 'right' ? 'lg:order-2' : ''}>{imageColumn}</div>

        <div className={imagePosition === 'right' ? 'lg:order-1' : ''}>{textColumn}</div>
      </div>
    </section>
  )
}
