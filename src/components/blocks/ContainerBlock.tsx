import type { Page } from '@/payload-types'
import { RenderBlocks } from '@/components/RenderBlocks'

type NestedBlock = NonNullable<Page['layout']>[number]

type Props = {
  eyebrow?: string | null
  heading?: string | null
  blocks?: NestedBlock[] | null
  maxWidth?: 'medium' | 'wide' | 'extra-wide' | 'full' | null
  backgroundColor?: string | null
  padding?: 'none' | 'compact' | 'comfortable' | 'spacious' | null
  gap?: 'small' | 'medium' | 'large' | null
  corners?: 'none' | 'small' | 'medium' | 'large' | null
  shadow?: boolean | null
}

const widths = {
  medium: 'max-w-4xl',
  wide: 'max-w-6xl',
  'extra-wide': 'max-w-7xl',
  full: 'max-w-none',
}

const backgrounds: Record<string, string> = {
  transparent: 'bg-transparent',
  cream: 'bg-tribearth-cream',
  offwhite: 'bg-tribearth-offwhite',
  green: 'bg-tribearth-green',
  'deep-green': 'bg-tribearth-green-deep',
  gold: 'bg-tribearth-gold',
  charcoal: 'bg-tribearth-charcoal',
}

const paddings = {
  none: 'p-0',
  compact: 'px-4 py-6 sm:px-6 sm:py-8',
  comfortable: 'px-5 py-10 sm:px-8 sm:py-12 lg:px-10',
  spacious: 'px-5 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20',
}

const gaps = {
  small: 'space-y-4',
  medium: 'space-y-6',
  large: 'space-y-10',
}

const cornersMap = {
  none: 'rounded-none',
  small: 'rounded-md',
  medium: 'rounded-xl',
  large: 'rounded-3xl',
}

export function ContainerBlock({
  eyebrow,
  heading,
  blocks,
  maxWidth = 'wide',
  backgroundColor = 'transparent',
  padding = 'comfortable',
  gap = 'medium',
  corners = 'none',
  shadow = false,
}: Props) {
  const safeWidth = maxWidth ?? 'wide'
  const safePadding = padding ?? 'comfortable'
  const safeGap = gap ?? 'medium'
  const safeCorners = corners ?? 'none'
  const safeBackground = backgrounds[backgroundColor ?? 'transparent']
    ? (backgroundColor ?? 'transparent')
    : 'transparent'

  return (
    <section className={`${backgrounds[safeBackground]} ${paddings[safePadding]}`}>
      <div
        className={[
          'mx-auto',
          widths[safeWidth],
          cornersMap[safeCorners],
          shadow ? 'shadow-lg' : '',
        ].join(' ')}
      >
        {(eyebrow || heading) && (
          <header className="mb-8">
            {eyebrow && (
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-tribearth-gold">
                {eyebrow}
              </p>
            )}
            {heading && (
              <h2 className="text-3xl font-semibold text-tribearth-green-deep sm:text-4xl">
                {heading}
              </h2>
            )}
          </header>
        )}

        <div className={gaps[safeGap]}>
          <RenderBlocks blocks={blocks} />
        </div>
      </div>
    </section>
  )
}
