import type { CollectionConfig } from 'payload'

export const MenuCategories: CollectionConfig = {
  slug: 'menu-categories',

  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'order'],
    group: 'Café',
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
      name: 'order',
      type: 'number',
      defaultValue: 0,
    },
  ],
}
