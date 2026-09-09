import type { Block } from 'payload'

export const Gallery: Block = {
  slug: 'gallery',

  labels: {
    singular: 'Gallery',
    plural: 'Galleries',
  },

  fields: [
    {
      name: 'eyebrow',
      type: 'text',
    },

    {
      name: 'heading',
      type: 'text',
    },

    {
      name: 'description',
      type: 'textarea',
    },

    {
      name: 'images',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
      minRows: 1,
    },

    {
      name: 'layout',
      type: 'select',
      defaultValue: 'masonry',
      options: [
        {
          label: 'Grid',
          value: 'grid',
        },
        {
          label: 'Masonry',
          value: 'masonry',
        },
        {
          label: 'Featured',
          value: 'featured',
        },
      ],
    },
  ],
}
