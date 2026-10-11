import type { Block } from 'payload'

export const ImpactParallax: Block = {
  slug: 'impact-parallax',
  labels: {
    singular: 'Impact Parallax Section',
    plural: 'Impact Parallax Sections',
  },
  fields: [
    { name: 'eyebrow', type: 'text' },
    { name: 'heading', type: 'text', required: true },
    { name: 'content', type: 'textarea' },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'overlayOpacity',
      type: 'number',
      defaultValue: 55,
      min: 0,
      max: 100,
      admin: {
        description: 'Overlay opacity as a percentage, from 0 to 100.',
      },
    },
    {
      name: 'alignment',
      type: 'select',
      defaultValue: 'center',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
      ],
    },
    {
      name: 'height',
      type: 'select',
      defaultValue: 'large',
      options: [
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
      ],
    },
    {
      name: 'button',
      type: 'group',
      fields: [
        { name: 'label', type: 'text' },
        { name: 'url', type: 'text' },
      ],
    },
  ],
}
