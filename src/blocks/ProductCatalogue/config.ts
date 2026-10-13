import type { Block } from 'payload'

export const ProductCatalogue: Block = {
  slug: 'product-catalogue',
  labels: {
    singular: 'Product Catalogue',
    plural: 'Product Catalogues',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Small Label',
    },
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Explore Our Jewellery',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'product-categories',
      label: 'Limit to Category',
      admin: {
        description: 'Leave empty to show products from all categories.',
      },
    },
    {
      name: 'limit',
      type: 'number',
      label: 'Maximum Products',
      defaultValue: 24,
      min: 1,
      max: 100,
      required: true,
    },
    {
      name: 'columns',
      type: 'select',
      defaultValue: '3',
      options: [
        { label: '2 Columns', value: '2' },
        { label: '3 Columns', value: '3' },
        { label: '4 Columns', value: '4' },
      ],
    },
    {
      name: 'showPrices',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'showCategoryLabels',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
