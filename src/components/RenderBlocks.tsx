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
import { ImpactPillarsBlock } from '@/components/blocks/ImpactPillarsBlock'
import { ImpactParallaxBlock } from '@/components/blocks/ImpactParallaxBlock'
import { ImpactInitiativesBlock } from '@/components/blocks/ImpactInitiativesBlock'
import { TextDisclosureBlock } from '@/components/blocks/TextDisclosureBlock'
import { ContainerBlock } from '@/components/blocks/ContainerBlock'
import { ResponsiveGridBlock } from '@/components/blocks/ResponsiveGridBlock'
import { ResponsiveSplitBlock } from '@/components/blocks/ResponsiveSplitBlock'
import { SingleImageBlock } from './blocks/SingleImageBlock'
import { ImageTextBlock } from './blocks/ImageTextBlock'
import { EmphasizedTextBlock } from './blocks/EmphasizedTextBlock'
import { HeadingBlock } from './blocks/HeadingBlock'

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

          case 'impact-pillars':
            return <ImpactPillarsBlock key={key} {...block} />

          case 'impact-parallax':
            return <ImpactParallaxBlock key={key} {...block} />

          case 'impact-initiatives':
            return <ImpactInitiativesBlock key={key} {...block} />
          
          case 'text-disclosure':
            return <TextDisclosureBlock key={key} {...block} />
          
          case 'container':
            return <ContainerBlock key={key} {...block} />

          case 'responsive-grid':
            return <ResponsiveGridBlock key={key} {...block} />

          case 'responsive-split':
            return <ResponsiveSplitBlock key={key} {...block} />
          
          case 'image-text':
            return <ImageTextBlock key={key} {...block} />
          
          case 'single-image':
            return <SingleImageBlock key={key} {...block} />

          case 'emphasized-text':
            return <EmphasizedTextBlock key={key} {...block} />
           
          case 'heading':
            return <HeadingBlock key={key} {...block} />  

          default:
            return null
        }
      })}
    </>
  )
}
