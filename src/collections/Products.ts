import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',

  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'price', 'featured', 'status'],
    group: 'Shop',
  },

  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Basic Information',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'slug',
              type: 'text',
              required: true,
              unique: true,
            },
            {
              name: 'description',
              type: 'textarea',
            },
            {
              name: 'designNumber',
              type: 'text',
            },
          ],
        },

        {
          label: 'Classification',
          fields: [
            {
              name: 'category',
              type: 'relationship',
              relationTo: 'product-categories',
              required: true,
            },
            {
              name: 'collection',
              type: 'relationship',
              relationTo: 'collections',
            },
          ],
        },

        {
          label: 'Pricing',
          fields: [
            {
              name: 'price',
              type: 'number',
              required: true,
              min: 0,
            },
            {
              name: 'currency',
              type: 'select',
              defaultValue: 'USD',
              options: [
                {
                  label: 'US Dollar',
                  value: 'USD',
                },
                {
                  label: 'Kenyan Shilling',
                  value: 'KES',
                },
              ],
            },
          ],
        },

        {
          label: 'Materials',
          fields: [
            {
              name: 'materials',
              type: 'text',
            },
            {
              name: 'stone',
              type: 'text',
            },
          ],
        },

        {
          label: 'Specifications',
          fields: [
            {
              name: 'dimensions',
              type: 'text',
            },
            {
              name: 'weight',
              type: 'text',
            },
          ],
        },

        {
          label: 'Variants',
          fields: [
            {
              name: 'variants',
              type: 'array',
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'value',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'available',
                  type: 'checkbox',
                  defaultValue: true,
                },
              ],
            },
          ],
        },

        {
          label: 'Media',
          fields: [
            {
              name: 'images',
              type: 'upload',
              relationTo: 'media',
              hasMany: true,
            },
          ],
        },

        {
          label: 'Storefront',
          fields: [
            {
              name: 'featured',
              type: 'checkbox',
              defaultValue: false,
            },
            {
              name: 'status',
              type: 'select',
              defaultValue: 'draft',
              options: [
                {
                  label: 'Draft',
                  value: 'draft',
                },
                {
                  label: 'Active',
                  value: 'active',
                },
                {
                  label: 'Archived',
                  value: 'archived',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
