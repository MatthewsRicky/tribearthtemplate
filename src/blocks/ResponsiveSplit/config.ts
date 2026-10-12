import type { Block } from 'payload'
import { nestedContentBlocks } from '@/blocks/NestedContentBlocks'

export const ResponsiveSplit: Block = {
  slug: 'responsive-split',
  labels: {
    singular: 'Responsive Split Layout',
    plural: 'Responsive Split Layouts',
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
      name: 'desktopRatio',
      type: 'select',
      defaultValue: 'equal',
      options: [
        { label: 'Equal — 50/50', value: 'equal' },
        { label: '40/60', value: '40-60' },
        { label: '60/40', value: '60-40' },
        { label: 'One Third / Two Thirds', value: '33-67' },
        { label: 'Two Thirds / One Third', value: '67-33' },
      ],
    },
    {
      name: 'mobileOrder',
      type: 'select',
      defaultValue: 'first',
      options: [
        { label: 'First Content, Then Second', value: 'first' },
        { label: 'Second Content, Then First', value: 'second' },
      ],
    },
    {
      name: 'gap',
      type: 'select',
      defaultValue: 'large',
      options: [
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
      ],
    },
    {
      name: 'verticalAlignment',
      type: 'select',
      defaultValue: 'center',
      options: [
        { label: 'Start', value: 'start' },
        { label: 'Center', value: 'center' },
        { label: 'End', value: 'end' },
      ],
    },
    {
      name: 'firstContent',
      type: 'blocks',
      label: 'First Column Content',
      blocks: nestedContentBlocks,
    },
    {
      name: 'secondContent',
      type: 'blocks',
      label: 'Second Column Content',
      blocks: nestedContentBlocks,
    },
  ],
}
