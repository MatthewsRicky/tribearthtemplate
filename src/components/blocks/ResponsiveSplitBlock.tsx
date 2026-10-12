import type { Page } from '@/payload-types'
import { RenderBlocks } from '@/components/RenderBlocks'

type NestedBlock = NonNullable<Page['layout']>[number]

type Props = {
  heading?: string | null
  description?: string | null
  desktopRatio?: string | null
  mobileOrder?: 'first' | 'second' | null
  gap?: 'small' | 'medium' | 'large' | null
  verticalAlignment?: 'start' | 'center' | 'end' | null
  firstContent?: NestedBlock[] | null
  secondContent?: NestedBlock[] | null
}

const ratios: Record<string, string> = {
  equal: 'lg:grid-cols-2',
  '40-60': 'lg:grid-cols-[2fr_3fr]',
  '60-40': 'lg:grid-cols-[3fr_2fr]',
  '33-67': 'lg:grid-cols-[1fr_2fr]',
  '67-33': 'lg:grid-cols-[2fr_1fr]',
}

const gaps = {
  small: 'gap-4',
  medium: 'gap-6',
  large: 'gap-10',
}

const alignment = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
}

export function ResponsiveSplitBlock({
  heading,
  description,
  desktopRatio = 'equal',
  mobileOrder = 'first',
  gap = 'large',
  verticalAlignment = 'center',
  firstContent,
  secondContent,
}: Props) {
  const safeRatio = ratios[desktopRatio ?? 'equal'] ? (desktopRatio ?? 'equal') : 'equal'
  const safeGap = gap ?? 'large'
  const safeAlignment = verticalAlignment ?? 'center'
  const firstOrder = mobileOrder === 'second' ? 'order-2 lg:order-1' : 'order-1'
  const secondOrder = mobileOrder === 'second' ? 'order-1 lg:order-2' : 'order-2'

  return (
    <section className="px-5 py-12 sm:px-8 lg:px-12">
      {(heading || description) && (
        <header className="mx-auto mb-8 max-w-3xl">
          {heading && (
            <h2 className="text-3xl font-semibold text-tribearth-green-deep sm:text-4xl">
              {heading}
            </h2>
          )}
          {description && (
            <p className="mt-4 whitespace-pre-line leading-7 text-tribearth-muted">{description}</p>
          )}
        </header>
      )}

      <div
        className={[
          'grid grid-cols-1',
          ratios[safeRatio],
          gaps[safeGap],
          alignment[safeAlignment],
        ].join(' ')}
      >
        <div className={`min-w-0 ${firstOrder}`}>
          <RenderBlocks blocks={firstContent} />
        </div>

        <div className={`min-w-0 ${secondOrder}`}>
          <RenderBlocks blocks={secondContent} />
        </div>
      </div>
    </section>
  )
}
