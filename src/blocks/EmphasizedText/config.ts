import type { Block } from 'payload'

export const EmphasizedText: Block = {
  slug: 'emphasized-text',
  labels: {
    singular: 'Emphasized Text',
    plural: 'Emphasized Text Blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Small Label',
    },
    {
      name: 'text',
      type: 'textarea',
      label: 'Text',
      required: true,
    },
    {
      name: 'style',
      type: 'select',
      defaultValue: 'lead',
      options: [
        { label: 'Lead Paragraph', value: 'lead' },
        { label: 'Pull Quote', value: 'quote' },
        { label: 'Highlighted Statement', value: 'statement' },
        { label: 'Supporting Text', value: 'supporting' },
      ],
    },
    {
      name: 'size',
      type: 'select',
      defaultValue: 'medium',
      options: [
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
        { label: 'Extra Large', value: 'xl' },
      ],
    },
    {
      name: 'weight',
      type: 'select',
      defaultValue: 'normal',
      options: [
        { label: 'Normal', value: 'normal' },
        { label: 'Medium', value: 'medium' },
        { label: 'Semibold', value: 'semibold' },
        { label: 'Bold', value: 'bold' },
      ],
    },
    {
      name: 'italic',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'color',
      type: 'select',
      defaultValue: 'charcoal',
      options: [
        { label: 'Charcoal', value: 'charcoal' },
        { label: 'Deep Green', value: 'deep-green' },
        { label: 'Green', value: 'green' },
        { label: 'Gold', value: 'gold' },
        { label: 'Cream', value: 'cream' },
        { label: 'White', value: 'white' },
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
      name: 'maxWidth',
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
      name: 'decoration',
      type: 'select',
      defaultValue: 'none',
      options: [
        { label: 'None', value: 'none' },
        { label: 'Gold Left Border', value: 'gold-border' },
        { label: 'Gold Highlight Background', value: 'gold-background' },
        { label: 'Cream Background', value: 'cream-background' },
      ],
    },
  ],
}
