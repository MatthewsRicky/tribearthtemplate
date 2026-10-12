import type { Block } from 'payload'

export const ImpactPillars: Block = {
  slug: 'impact-pillars',
  labels: {
    singular: 'Impact Pillars',
    plural: 'Impact Pillars Sections',
  },
  fields: [
    { name: 'eyebrow', type: 'text' },
    { name: 'heading', type: 'text', required: true },
    { name: 'description', type: 'textarea' },
    {
      name: 'background',
      type: 'select',
      defaultValue: 'cream',
      options: [
        { label: 'Cream', value: 'cream' },
        { label: 'Off-white', value: 'offwhite' },
        { label: 'Deep green', value: 'green' },
      ],
    },
    {
      name: 'textColor',
      type: 'select',
      defaultValue: 'dark',
      options: [
        { label: 'Dark', value: 'dark' },
        { label: 'Light', value: 'light' },
      ],
    },
    {
      name: 'pillars',
      type: 'array',
      minRows: 1,
      maxRows: 4,
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        { name: 'link', type: 'text' },
        { name: 'linkLabel', type: 'text' },
      ],
    },
  ],
}
