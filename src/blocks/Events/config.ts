import type { Block } from 'payload'

export const Events: Block = {
  slug: 'events',

  labels: {
    singular: 'Events',
    plural: 'Event Sections',
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
      name: 'events',
      type: 'relationship',
      relationTo: 'events',
      hasMany: true,
    },

    {
      name: 'button',
      type: 'group',
      fields: [
        {
          name: 'label',
          type: 'text',
        },
        {
          name: 'url',
          type: 'text',
        },
      ],
    },
  ],
}
