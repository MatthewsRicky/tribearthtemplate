import type { CollectionConfig } from 'payload'

export const Stories: CollectionConfig = {
  slug: 'stories',

  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'status', 'publishedAt'],
    group: 'Content',
  },

  fields: [
    {
      name: 'title',
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
      name: 'excerpt',
      type: 'textarea',
    },

    {
      name: 'content',
      type: 'textarea',
      required: true,
    },

    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
    },

    {
      name: 'author',
      type: 'relationship',
      relationTo: 'team-members',
    },

    {
      name: 'category',
      type: 'select',
      options: [
        {
          label: 'Journal',
          value: 'journal',
        },
        {
          label: 'Impact',
          value: 'impact',
        },
        {
          label: 'Jewellery',
          value: 'jewellery',
        },
        {
          label: 'Art & Culture',
          value: 'art-culture',
        },
        {
          label: 'Wellness',
          value: 'wellness',
        },
        {
          label: 'Café',
          value: 'cafe',
        },
      ],
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
          label: 'Published',
          value: 'published',
        },
        {
          label: 'Archived',
          value: 'archived',
        },
      ],
    },

    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },

    {
      name: 'publishedAt',
      type: 'date',
    },

    {
      name: 'seoTitle',
      type: 'text',
    },

    {
      name: 'seoDescription',
      type: 'textarea',
    },
  ],
}
