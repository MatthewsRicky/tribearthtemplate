import type { Page } from '@/payload-types'
import type { ReactNode } from 'react'

type HeadingBlockProps = Extract<NonNullable<Page['layout']>[number], { blockType: 'heading' }>

const sizeClasses = {
  xs: 'text-sm sm:text-base',
  sm: 'text-lg sm:text-xl',
  md: 'text-xl sm:text-2xl',
  large: 'text-2xl sm:text-3xl lg:text-4xl',
  xl: 'text-3xl sm:text-4xl lg:text-5xl',
  display: 'text-4xl sm:text-5xl lg:text-7xl',
} as const

const weightClasses = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
} as const

const colorClasses = {
  'deep-green': 'text-tribearth-green-deep',
  green: 'text-tribearth-green',
  gold: 'text-tribearth-gold',
  charcoal: 'text-tribearth-charcoal',
  cream: 'text-tribearth-cream',
  white: 'text-white',
} as const

const alignmentClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
} as const

const widthClasses = {
  narrow: 'max-w-xl',
  medium: 'max-w-3xl',
  wide: 'max-w-5xl',
  full: 'max-w-none',
} as const

const spacingClasses = {
  none: 'mb-0',
  small: 'mb-2',
  medium: 'mb-4',
  large: 'mb-8',
} as const

const headingTags = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
} as const

function renderHeading(level: keyof typeof headingTags, className: string, content: ReactNode) {
  switch (level) {
    case 'h1':
      return <h1 className={className}>{content}</h1>
    case 'h2':
      return <h2 className={className}>{content}</h2>
    case 'h3':
      return <h3 className={className}>{content}</h3>
    case 'h4':
      return <h4 className={className}>{content}</h4>
    case 'h5':
      return <h5 className={className}>{content}</h5>
    case 'h6':
      return <h6 className={className}>{content}</h6>
  }
}

export function HeadingBlock(props: HeadingBlockProps) {
  const { eyebrow, text, level, size, weight, alignment, color, maxWidth, bottomSpacing } = props

  const safeLevel = level ?? 'h2'
  const safeSize = size ?? 'large'
  const safeWeight = weight ?? 'semibold'
  const safeAlignment = alignment ?? 'left'
  const safeColor = color ?? 'deep-green'
  const safeWidth = maxWidth ?? 'full'
  const safeSpacing = bottomSpacing ?? 'medium'

  const Tag = headingTags[safeLevel]

  return (
    <div
      className={[
        'w-full',
        widthClasses[safeWidth],
        alignmentClasses[safeAlignment],
        spacingClasses[safeSpacing],
      ].join(' ')}
    >
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-tribearth-gold">
          {eyebrow}
        </p>
      )}

      {renderHeading(
        safeLevel,
        [
          'leading-tight tracking-tight',
          sizeClasses[safeSize],
          weightClasses[safeWeight],
          colorClasses[safeColor],
        ].join(' '),
        text,
      )}
    </div>
  )
}
