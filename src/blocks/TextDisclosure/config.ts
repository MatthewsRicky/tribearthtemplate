import type { Block } from 'payload'

const colorOptions = [
  { label: 'Tribearth Green', value: 'green' },
  { label: 'Deep Green', value: 'deep-green' },
  { label: 'Gold', value: 'gold' },
  { label: 'Light Gold', value: 'light-gold' },
  { label: 'Sage', value: 'sage' },
  { label: 'Cream', value: 'cream' },
  { label: 'Off-white', value: 'offwhite' },
  { label: 'Charcoal', value: 'charcoal' },
  { label: 'White', value: 'white' },
]

export const TextDisclosure: Block = {
  slug: 'text-disclosure',
  labels: {
    singular: 'Text & Disclosure',
    plural: 'Text & Disclosure Blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Small Label / Eyebrow',
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
    },
    {
      name: 'intro',
      type: 'textarea',
      label: 'Introductory Text',
    },
    {
      name: 'displayMode',
      type: 'select',
      required: true,
      defaultValue: 'always',
      options: [
        { label: 'Always Show Text', value: 'always' },
        { label: 'Accordion — Click to Reveal', value: 'accordion' },
      ],
    },
    {
      name: 'allowMultipleOpen',
      type: 'checkbox',
      label: 'Allow Multiple Items Open',
      defaultValue: true,
      admin: {
        condition: (_, siblingData) => siblingData?.displayMode === 'accordion',
        description: 'When disabled, opening one item closes the others.',
      },
    },
    {
      name: 'items',
      type: 'array',
      label: 'Text Items',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Title',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Description',
        },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'select',
      defaultValue: 'cream',
      options: colorOptions,
    },
    {
      name: 'headingColor',
      type: 'select',
      defaultValue: 'deep-green',
      options: colorOptions,
    },
    {
      name: 'textColor',
      type: 'select',
      defaultValue: 'charcoal',
      options: colorOptions,
    },
    {
      name: 'accentColor',
      type: 'select',
      defaultValue: 'gold',
      options: colorOptions,
    },
    {
      name: 'alignment',
      type: 'select',
      defaultValue: 'left',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
      ],
    },
    {
      name: 'contentWidth',
      type: 'select',
      defaultValue: 'wide',
      options: [
        { label: 'Narrow', value: 'narrow' },
        { label: 'Medium', value: 'medium' },
        { label: 'Wide', value: 'wide' },
        { label: 'Full Width', value: 'full' },
      ],
    },
    {
      name: 'corners',
      type: 'select',
      defaultValue: 'medium',
      options: [
        { label: 'Square', value: 'square' },
        { label: 'Small Radius', value: 'small' },
        { label: 'Medium Radius', value: 'medium' },
        { label: 'Large Radius', value: 'large' },
      ],
    },
    {
      name: 'shadow',
      type: 'checkbox',
      defaultValue: true,
      label: 'Enable Shadow',
    },
    {
      name: 'entranceAnimation',
      type: 'select',
      defaultValue: 'fade-up',
      options: [
        { label: 'None', value: 'none' },
        { label: 'Fade In', value: 'fade-in' },
        { label: 'Fade Up', value: 'fade-up' },
      ],
    },
    {
      name: 'hoverEffect',
      type: 'select',
      defaultValue: 'lift',
      options: [
        { label: 'None', value: 'none' },
        { label: 'Lift', value: 'lift' },
        { label: 'Accent Border', value: 'accent-border' },
      ],
    },
  ],
}
