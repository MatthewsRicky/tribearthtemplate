import type { Block } from 'payload'

export const ImpactStats: Block = {
  slug: 'impact-stats',

  labels: {
    singular: 'Impact Stats',
    plural: 'Impact Stats Sections',
  },

  fields: [
    {
      name: 'eyebrow',
      type: 'text',
    },

    {
      name: 'heading',
      type: 'text',
      required: true,
    },

    {
      name: 'description',
      type: 'textarea',
    },

    {
      name: 'stats',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },

    {
      name: 'initiatives',
      type: 'relationship',
      relationTo: 'impact-initiatives',
      hasMany: true,
    },
  ],
}
