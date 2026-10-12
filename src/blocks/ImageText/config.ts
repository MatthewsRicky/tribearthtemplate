import type { Block } from 'payload'

export const ImageText: Block = {
  slug: 'image-text',
  labels: {
    singular: 'Image & Text',
    plural: 'Image & Text Blocks',
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
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'imagePosition',
      type: 'select',
      defaultValue: 'left',
      options: [
        { label: 'Image Left', value: 'left' },
        { label: 'Image Right', value: 'right' },
      ],
    },
    {
      name: 'imageAspectRatio',
      type: 'select',
      defaultValue: 'portrait',
      options: [
        { label: 'Square', value: 'square' },
        { label: 'Portrait', value: 'portrait' },
        { label: 'Landscape', value: 'landscape' },
        { label: 'Wide', value: 'wide' },
      ],
    },
    {
      name: 'imageFit',
      type: 'select',
      defaultValue: 'cover',
      options: [
        { label: 'Crop to Fill', value: 'cover' },
        { label: 'Show Entire Image', value: 'contain' },
      ],
    },
    {
      name: 'verticalAlignment',
      type: 'select',
      defaultValue: 'center',
      options: [
        { label: 'Top', value: 'start' },
        { label: 'Center', value: 'center' },
        { label: 'Bottom', value: 'end' },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'select',
      defaultValue: 'transparent',
      options: [
        { label: 'Transparent', value: 'transparent' },
        { label: 'Cream', value: 'cream' },
        { label: 'Off-white', value: 'offwhite' },
        { label: 'Green', value: 'green' },
        { label: 'Deep Green', value: 'deep-green' },
        { label: 'Gold', value: 'gold' },
      ],
    },
    {
      name: 'textColor',
      type: 'select',
      defaultValue: 'charcoal',
      options: [
        { label: 'Charcoal', value: 'charcoal' },
        { label: 'Deep Green', value: 'deep-green' },
        { label: 'Green', value: 'green' },
        { label: 'White', value: 'white' },
      ],
    },
    {
      name: 'button',
      type: 'group',
      label: 'Optional Button',
      fields: [
        { name: 'label', type: 'text' },
        { name: 'url', type: 'text' },
      ],
    },
    {
      name: 'shadow',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
