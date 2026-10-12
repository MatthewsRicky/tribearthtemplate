import Image from 'next/image'
import type { Media } from '@/payload-types'

type Props = {
  image?: Media | number | null
  altText?: string | null
  caption?: string | null
  aspectRatio?: 'auto' | 'square' | 'portrait' | 'landscape' | 'wide' | null
  fit?: 'cover' | 'contain' | null
  objectPosition?: 'center' | 'top' | 'bottom' | 'left' | 'right' | null
  corners?: 'none' | 'small' | 'medium' | 'large' | null
  shadow?: boolean | null
  link?: string | null
}

const ratios = {
  square: 'aspect-square',
  portrait: 'aspect-[4/5]',
  landscape: 'aspect-[4/3]',
  wide: 'aspect-[16/9]',
}

const positions = {
  center: 'object-center',
  top: 'object-top',
  bottom: 'object-bottom',
  left: 'object-left',
  right: 'object-right',
}

const cornersMap = {
  none: 'rounded-none',
  small: 'rounded-md',
  medium: 'rounded-xl',
  large: 'rounded-3xl',
}

export function SingleImageBlock({
  image,
  altText,
  caption,
  aspectRatio = 'auto',
  fit = 'cover',
  objectPosition = 'center',
  corners = 'medium',
  shadow = false,
  link,
}: Props) {
  const media = image && typeof image === 'object' && 'url' in image ? image : null

  if (!media?.url) {
    return (
      <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-tribearth-cream p-6 text-center text-sm text-tribearth-muted">
        Select an image in the CMS
      </div>
    )
  }

  const safeRatio = aspectRatio && aspectRatio in ratios ? aspectRatio : 'auto'

  const safePosition = objectPosition && objectPosition in positions ? objectPosition : 'center'

  const safeCorners = corners && corners in cornersMap ? corners : 'medium'

  const imageElement = (
    <div
      className={[
        'relative w-full overflow-hidden',
        safeRatio === 'auto' ? '' : ratios[safeRatio],
        cornersMap[safeCorners],
        shadow ? 'shadow-xl' : '',
      ].join(' ')}
    >
      {safeRatio === 'auto' && media.width && media.height ? (
        <Image
          src={media.url}
          alt={altText || media.alt || caption || ''}
          width={media.width}
          height={media.height}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={[
            'h-auto w-full',
            fit === 'contain' ? 'object-contain' : 'object-cover',
            positions[safePosition],
          ].join(' ')}
        />
      ) : (
        <Image
          src={media.url}
          alt={altText || media.alt || caption || ''}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={[
            fit === 'contain' ? 'object-contain' : 'object-cover',
            positions[safePosition],
          ].join(' ')}
        />
      )}
    </div>
  )

  return (
    <figure className="w-full">
      {link ? (
        <a href={link} aria-label={altText || media.alt || caption || 'Open image'}>
          {imageElement}
        </a>
      ) : (
        imageElement
      )}

      {caption && (
        <figcaption className="mt-3 text-sm leading-6 text-tribearth-muted">{caption}</figcaption>
      )}
    </figure>
  )
}
