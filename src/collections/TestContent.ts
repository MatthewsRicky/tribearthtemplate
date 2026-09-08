import type { CollectionConfig } from 'payload'

export const TestContent: CollectionConfig = {
  slug: 'test-content',

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
  ],
}
