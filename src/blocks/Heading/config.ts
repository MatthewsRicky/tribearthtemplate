import type { Block } from 'payload'

export const Heading: Block = {
  slug: 'heading',
  labels: {
    singular: 'Heading',
    plural: 'Headings',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Small Label Above Heading',
    },
    {
      name: 'text',
      type: 'text',
      label: 'Heading Text',
      required: true,
    },
    {
      name: 'level',
      type: 'select',
      label: 'Semantic Heading Level',
      defaultValue: 'h2',
      required: true,
      options: [
        { label: 'H1 — Main Page Heading', value: 'h1' },
        { label: 'H2 — Section Heading', value: 'h2' },
        { label: 'H3 — Subheading', value: 'h3' },
        { label: 'H4 — Minor Heading', value: 'h4' },
        { label: 'H5', value: 'h5' },
        { label: 'H6', value: 'h6' },
      ],
    },
    {
      name: 'size',
      type: 'select',
      label: 'Visual Size',
      defaultValue: 'large',
      options: [
        { label: 'Extra Small', value: 'xs' },
        { label: 'Small', value: 'sm' },
        { label: 'Medium', value: 'md' },
        { label: 'Large', value: 'large' },
        { label: 'Extra Large', value: 'xl' },
        { label: 'Display', value: 'display' },
      ],
    },
    {
      name: 'weight',
      type: 'select',
      defaultValue: 'semibold',
      options: [
        { label: 'Normal', value: 'normal' },
        { label: 'Medium', value: 'medium' },
        { label: 'Semibold', value: 'semibold' },
        { label: 'Bold', value: 'bold' },
      ],
    },
    {
      name: 'alignment',
      type: 'select',
      defaultValue: 'left',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' },
      ],
    },
    {
      name: 'color',
      type: 'select',
      defaultValue: 'deep-green',
      options: [
        { label: 'Deep Green', value: 'deep-green' },
        { label: 'Green', value: 'green' },
        { label: 'Gold', value: 'gold' },
        { label: 'Charcoal', value: 'charcoal' },
        { label: 'Cream', value: 'cream' },
        { label: 'White', value: 'white' },
      ],
    },
    {
      name: 'maxWidth',
      type: 'select',
      defaultValue: 'full',
      options: [
        { label: 'Narrow', value: 'narrow' },
        { label: 'Medium', value: 'medium' },
        { label: 'Wide', value: 'wide' },
        { label: 'Full Width', value: 'full' },
      ],
    },
    {
      name: 'bottomSpacing',
      type: 'select',
      label: 'Space Below',
      defaultValue: 'medium',
      options: [
        { label: 'None', value: 'none' },
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
      ],
    },
  ],
}
