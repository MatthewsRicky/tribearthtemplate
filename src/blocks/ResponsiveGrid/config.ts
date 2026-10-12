import type { Block } from 'payload'
import { nestedContentBlocks } from '@/blocks/NestedContentBlocks'

export const ResponsiveGrid: Block = {
  slug: 'responsive-grid',
  labels: {
    singular: 'Responsive Grid',
    plural: 'Responsive Grids',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'mobileColumns',
      type: 'select',
      defaultValue: '1',
      options: [
        { label: '1 Column', value: '1' },
        { label: '2 Columns', value: '2' },
      ],
    },
    {
      name: 'tabletColumns',
      type: 'select',
      defaultValue: '2',
      options: [
        { label: '1 Column', value: '1' },
        { label: '2 Columns', value: '2' },
        { label: '3 Columns', value: '3' },
      ],
    },
    {
      name: 'desktopColumns',
      type: 'select',
      defaultValue: '3',
      options: [
        { label: '1 Column', value: '1' },
        { label: '2 Columns', value: '2' },
        { label: '3 Columns', value: '3' },
        { label: '4 Columns', value: '4' },
      ],
    },
    {
      name: 'gap',
      type: 'select',
      defaultValue: 'medium',
      options: [
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
      ],
    },
    {
      name: 'items',
      type: 'array',
      label: 'Grid Items',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Admin Label',
          admin: {
            description: 'Optional label to help identify this grid item.',
          },
        },
        {
          name: 'blocks',
          type: 'blocks',
          label: 'Item Content',
          blocks: nestedContentBlocks,
        },
      ],
    },
  ],
}
