import type { Block } from 'payload'

export const ImpactInitiativesBlock: Block = {
  slug: 'impact-initiatives',
  labels: {
    singular: 'Impact Initiatives',
    plural: 'Impact Initiatives Sections',
  },
  fields: [
    { name: 'eyebrow', type: 'text' },
    { name: 'heading', type: 'text', required: true },
    { name: 'description', type: 'textarea' },
    {
      name: 'initiatives',
      type: 'relationship',
      relationTo: 'impact-initiatives',
      hasMany: true,
      maxRows: 4,
    },
    {
      name: 'button',
      type: 'group',
      fields: [
        { name: 'label', type: 'text' },
        { name: 'url', type: 'text' },
      ],
    },
  ],
}
