import type { Block } from 'payload'
import { nestedContentBlocks } from '@/blocks/NestedContentBlocks'

export const Container: Block = {
  slug: 'container',
  labels: {
    singular: 'Responsive Container',
    plural: 'Responsive Containers',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
    },
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'blocks',
      type: 'blocks',
      label: 'Container Content',
      blocks: nestedContentBlocks,
    },
    {
      name: 'maxWidth',
      type: 'select',
      defaultValue: 'wide',
      options: [
        { label: 'Medium', value: 'medium' },
        { label: 'Wide', value: 'wide' },
        { label: 'Extra Wide', value: 'extra-wide' },
        { label: 'Full Width', value: 'full' },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'select',
      defaultValue: 'transparent',
      options: [
        { label: 'Transparent', value: 'transparent' },
        { label: 'Cream', value: 'cream' },
        { label: 'Off-white', value: 'offwhite' },
        { label: 'Green', value: 'green' },
        { label: 'Deep Green', value: 'deep-green' },
        { label: 'Gold', value: 'gold' },
        { label: 'Charcoal', value: 'charcoal' },
      ],
    },
    {
      name: 'padding',
      type: 'select',
      defaultValue: 'comfortable',
      options: [
        { label: 'None', value: 'none' },
        { label: 'Compact', value: 'compact' },
        { label: 'Comfortable', value: 'comfortable' },
        { label: 'Spacious', value: 'spacious' },
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
      name: 'corners',
      type: 'select',
      defaultValue: 'none',
      options: [
        { label: 'Square', value: 'none' },
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
      ],
    },
    {
      name: 'shadow',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
