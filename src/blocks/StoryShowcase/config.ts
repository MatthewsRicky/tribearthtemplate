import type { Block } from 'payload'

export const StoryShowcase: Block = {
  slug: 'story-showcase',

  labels: {
    singular: 'Story Showcase',
    plural: 'Story Showcases',
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
      name: 'stories',
      type: 'relationship',
      relationTo: 'stories',
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
