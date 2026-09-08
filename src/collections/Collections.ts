import type { CollectionConfig } from 'payload'

export const Collections: CollectionConfig = {
  slug: 'collections',

  admin: {
    useAsTitle: 'name',
    group: 'Shop',
  },

  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
