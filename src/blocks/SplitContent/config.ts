import type { Block } from 'payload'

export const SplitContent: Block = {
  slug: 'split-content',

  labels: {
    singular: 'Split Content',
    plural: 'Split Content Sections',
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
      name: 'content',
      type: 'textarea',
      required: true,
    },

    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },

    {
      name: 'imagePosition',
      type: 'select',
      defaultValue: 'right',
      options: [
        {
          label: 'Left',
          value: 'left',
        },
        {
          label: 'Right',
          value: 'right',
        },
      ],
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
