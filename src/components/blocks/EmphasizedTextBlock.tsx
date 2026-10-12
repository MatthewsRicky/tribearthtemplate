import type { Page } from '@/payload-types'

type EmphasizedTextBlockProps = Extract<
  NonNullable<Page['layout']>[number],
  { blockType: 'emphasized-text' }
>

const sizeClasses = {
  small: 'text-sm sm:text-base',
  medium: 'text-base sm:text-lg',
  large: 'text-lg sm:text-xl lg:text-2xl',
  xl: 'text-xl sm:text-2xl lg:text-3xl',
} as const

const weightClasses = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
} as const

const colorClasses = {
  charcoal: 'text-tribearth-charcoal',
  'deep-green': 'text-tribearth-green-deep',
  green: 'text-tribearth-green',
  gold: 'text-tribearth-gold',
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

const decorationClasses = {
  none: '',
  'gold-border': 'border-l-4 border-tribearth-gold pl-5 sm:pl-7',
  'gold-background': 'rounded-lg bg-tribearth-gold/10 p-5 sm:p-8',
  'cream-background': 'rounded-lg bg-tribearth-cream p-5 sm:p-8',
} as const

const styleClasses = {
  lead: 'leading-relaxed',
  quote: 'font-serif leading-relaxed',
  statement: 'leading-snug tracking-tight',
  supporting: 'leading-relaxed',
} as const

export function EmphasizedTextBlock(props: EmphasizedTextBlockProps) {
  const { eyebrow, text, style, size, weight, italic, color, alignment, maxWidth, decoration } =
    props

  const safeStyle = style ?? 'lead'
  const safeSize = size ?? 'medium'
  const safeWeight = weight ?? 'normal'
  const safeColor = color ?? 'charcoal'
  const safeAlignment = alignment ?? 'left'
  const safeWidth = maxWidth ?? 'wide'
  const safeDecoration = decoration ?? 'none'

  return (
    <div
      className={[
        'w-full',
        widthClasses[safeWidth],
        alignmentClasses[safeAlignment],
        decorationClasses[safeDecoration],
      ].join(' ')}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-tribearth-gold">
          {eyebrow}
        </p>
      )}

      <p
        className={[
          sizeClasses[safeSize],
          weightClasses[safeWeight],
          colorClasses[safeColor],
          styleClasses[safeStyle],
          italic ? 'italic' : '',
        ].join(' ')}
      >
        {safeStyle === 'quote' ? `“${text}”` : text}
      </p>
    </div>
  )
}
