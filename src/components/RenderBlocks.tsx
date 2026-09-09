import React from 'react'

import type { Page } from '@/payload-types'

import { HeroBlock } from '@/components/blocks/HeroBlock'
import { SplitContentBlock } from '@/components/blocks/SplitContentBlock'
import { GalleryBlock } from '@/components/blocks/GalleryBlock'
import { ProductShowcaseBlock } from '@/components/blocks/ProductShowcaseBlock'
import { StoryShowcaseBlock } from '@/components/blocks/StoryShowcaseBlock'
import { ImpactStatsBlock } from '@/components/blocks/ImpactStatsBlock'
import { EventsBlock } from '@/components/blocks/EventsBlock'
import { MenuBlock } from '@/components/blocks/MenuBlock'
import { CallToActionBlock } from '@/components/blocks/CallToActionBlock'

type PageBlock = NonNullable<Page['layout']>[number]

export function RenderBlocks({ blocks }: { blocks?: PageBlock[] | null }) {
  if (!blocks || blocks.length === 0) {
    return null
  }

  return (
    <>
      {blocks.map((block, index) => {
        const key = block.id ?? `${block.blockType}-${index}`

        switch (block.blockType) {
          case 'hero':
            return <HeroBlock key={key} {...block} />

          case 'split-content':
            return <SplitContentBlock key={key} {...block} />

          case 'gallery':
            return <GalleryBlock key={key} {...block} />

          case 'product-showcase':
            return <ProductShowcaseBlock key={key} {...block} />

          case 'story-showcase':
            return <StoryShowcaseBlock key={key} {...block} />

          case 'impact-stats':
            return <ImpactStatsBlock key={key} {...block} />

          case 'events':
            return <EventsBlock key={key} {...block} />

          case 'menu':
            return <MenuBlock key={key} {...block} />

          case 'call-to-action':
            return <CallToActionBlock key={key} {...block} />

          default:
            return null
        }
      })}
    </>
  )
}
