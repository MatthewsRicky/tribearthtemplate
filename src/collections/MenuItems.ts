import type { CollectionConfig } from 'payload'

export const MenuItems: CollectionConfig = {
  slug: 'menu-items',

  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'price', 'available'],
    group: 'Café',
  },

  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },

    {
      name: 'description',
      type: 'textarea',
    },

    {
      name: 'category',
      type: 'relationship',
      relationTo: 'menu-categories',
      required: true,
    },

    {
      name: 'price',
      type: 'number',
      min: 0,
    },

    {
      name: 'currency',
      type: 'select',
      defaultValue: 'KES',
      options: [
        {
          label: 'Kenyan Shilling',
          value: 'KES',
        },
        {
          label: 'US Dollar',
          value: 'USD',
        },
      ],
    },

    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },

    {
      name: 'dietaryTags',
      type: 'select',
      hasMany: true,
      options: [
        {
          label: 'Vegan',
          value: 'vegan',
        },
        {
          label: 'Gluten Free',
          value: 'gluten-free',
        },
        {
          label: 'Spicy',
          value: 'spicy',
        },
      ],
    },

    {
      name: 'available',
      type: 'checkbox',
      defaultValue: true,
    },

    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },

    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
    },
  ],
}
