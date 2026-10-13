import type { CollectionConfig } from 'payload'

import { Hero } from '@/blocks/Hero/config'
import { SplitContent } from '@/blocks/SplitContent/config'
import { Gallery } from '@/blocks/Gallery/config'
import { ProductShowcase } from '@/blocks/ProductShowcase/config'
import { StoryShowcase } from '@/blocks/StoryShowcase/config'
import { ImpactStats } from '@/blocks/ImpactStats/config'
import { Events } from '@/blocks/Events/config'
import { Menu } from '@/blocks/Menu/config'
import { CallToAction } from '@/blocks/CallToAction/config'
import { ImpactPillars } from '@/blocks/ImpactPillars/config'
import { ImpactParallax } from '@/blocks/ImpactParallax/config'
import { ImpactInitiativesBlock } from '@/blocks/ImpactInitiatives/config'
import { TextDisclosure } from '@/blocks/TextDisclosure/config'
import { Container } from '@/blocks/Container/config'
import { ResponsiveGrid } from '@/blocks/ResponsiveGrid/config'
import { ResponsiveSplit } from '@/blocks/ResponsiveSplit/config'
import { ImageText } from '@/blocks/ImageText/config'
import { SingleImage } from '@/blocks/SingleImage/config'
import { EmphasizedText } from '@/blocks/EmphasizedText/config'
import { Heading } from '@/blocks/Heading/config'
import { ProductCatalogue } from '@/blocks/ProductCatalogue/config'

export const Pages: CollectionConfig = {
  slug: 'pages',

  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'status'],
    group: 'Website',
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },

    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },

    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        },
      ],
    },

    {
      name: 'layout',
      type: 'blocks',

      blocks: [
        Hero,
        SplitContent,
        Gallery,
        ProductShowcase,
        StoryShowcase,
        ImpactStats,
        Events,
        Menu,
        CallToAction,
        ImpactPillars,
        ImpactParallax,
        ImpactInitiativesBlock,
        TextDisclosure,
        Container,
        ResponsiveGrid,
        ResponsiveSplit,
        ImageText,
        SingleImage,
        EmphasizedText,
        Heading,
        ProductCatalogue,
      ],
    },

    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },
  ],
}
