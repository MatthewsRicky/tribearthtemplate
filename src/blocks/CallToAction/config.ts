import type { Block } from 'payload'

export const CallToAction: Block = {
  slug: 'call-to-action',

  labels: {
    singular: 'Call To Action',
    plural: 'Call To Actions',
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
      name: 'button',
      type: 'group',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },

    {
      name: 'style',
      type: 'select',
      defaultValue: 'green',
      options: [
        {
          label: 'Green',
          value: 'green',
        },
        {
          label: 'Gold',
          value: 'gold',
        },
        {
          label: 'Cream',
          value: 'cream',
        },
      ],
    },
  ],
}
