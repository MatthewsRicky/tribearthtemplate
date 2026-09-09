import type { Block } from 'payload'

export const ProductShowcase: Block = {
  slug: 'product-showcase',

  labels: {
    singular: 'Product Showcase',
    plural: 'Product Showcases',
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
      name: 'products',
      type: 'relationship',
      relationTo: 'products',
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
