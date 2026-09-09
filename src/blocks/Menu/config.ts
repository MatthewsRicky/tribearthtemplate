import type { Block } from 'payload'

export const Menu: Block = {
  slug: 'menu',

  labels: {
    singular: 'Menu',
    plural: 'Menu Sections',
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
      name: 'items',
      type: 'relationship',
      relationTo: 'menu-items',
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
