import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',

  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'startDate', 'location', 'status'],
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
      name: 'description',
      type: 'textarea',
    },

    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },

    {
      name: 'startDate',
      type: 'date',
      required: true,
    },

    {
      name: 'endDate',
      type: 'date',
    },

    {
      name: 'location',
      type: 'text',
    },

    {
      name: 'artist',
      type: 'text',
    },

    {
      name: 'category',
      type: 'select',
      options: [
        {
          label: 'Art',
          value: 'art',
        },
        {
          label: 'Music',
          value: 'music',
        },
        {
          label: 'Wellness',
          value: 'wellness',
        },
        {
          label: 'Workshop',
          value: 'workshop',
        },
        {
          label: 'Community',
          value: 'community',
        },
        {
          label: 'Other',
          value: 'other',
        },
      ],
    },

    {
      name: 'bookingUrl',
      type: 'text',
    },

    {
      name: 'status',
      type: 'select',
      defaultValue: 'upcoming',
      options: [
        {
          label: 'Upcoming',
          value: 'upcoming',
        },
        {
          label: 'Completed',
          value: 'completed',
        },
        {
          label: 'Cancelled',
          value: 'cancelled',
        },
      ],
    },

    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
