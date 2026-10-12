import type { Page } from '@/payload-types'
import { RenderBlocks } from '@/components/RenderBlocks'

type NestedBlock = NonNullable<Page['layout']>[number]

type Props = {
  heading?: string | null
  description?: string | null
  mobileColumns?: string | null
  tabletColumns?: string | null
  desktopColumns?: string | null
  gap?: 'small' | 'medium' | 'large' | null
  items?:
    | {
        id?: string | null
        title?: string | null
        blocks?: NestedBlock[] | null
      }[]
    | null
}

const mobileMap: Record<string, string> = {
  '1': 'grid-cols-1',
  '2': 'grid-cols-2',
}

const tabletMap: Record<string, string> = {
  '1': 'sm:grid-cols-1',
  '2': 'sm:grid-cols-2',
  '3': 'sm:grid-cols-3',
}

const desktopMap: Record<string, string> = {
  '1': 'lg:grid-cols-1',
  '2': 'lg:grid-cols-2',
  '3': 'lg:grid-cols-3',
  '4': 'lg:grid-cols-4',
}

const gapMap = {
  small: 'gap-4',
  medium: 'gap-6',
  large: 'gap-10',
}

export function ResponsiveGridBlock({
  heading,
  description,
  mobileColumns = '1',
  tabletColumns = '2',
  desktopColumns = '3',
  gap = 'medium',
  items,
}: Props) {
  const safeMobile = mobileMap[mobileColumns ?? '1'] ? (mobileColumns ?? '1') : '1'
  const safeTablet = tabletMap[tabletColumns ?? '2'] ? (tabletColumns ?? '2') : '2'
  const safeDesktop = desktopMap[desktopColumns ?? '3'] ? (desktopColumns ?? '3') : '3'
  const safeGap = gap ?? 'medium'

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
          'grid items-start',
          mobileMap[safeMobile],
          tabletMap[safeTablet],
          desktopMap[safeDesktop],
          gapMap[safeGap],
        ].join(' ')}
      >
        {items?.map((item, index) => (
          <div key={item.id ?? `grid-item-${index}`} className="min-w-0">
            <RenderBlocks blocks={item.blocks} />
          </div>
        ))}
      </div>
    </section>
  )
}
