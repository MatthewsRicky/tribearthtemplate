import type { Block } from 'payload'

export const Hero: Block = {
  slug: 'hero',

  labels: {
    singular: 'Hero',
    plural: 'Heroes',
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
      name: 'subheading',
      type: 'textarea',
    },

    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
    },

    {
      name: 'primaryButton',
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

    {
      name: 'secondaryButton',
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

    {
      name: 'alignment',
      type: 'select',
      defaultValue: 'center',
      options: [
        {
          label: 'Left',
          value: 'left',
        },
        {
          label: 'Center',
          value: 'center',
        },
        {
          label: 'Right',
          value: 'right',
        },
      ],
    },
  ],
}
