import type { Block } from 'payload'

export const SingleImage: Block = {
  slug: 'single-image',
  labels: {
    singular: 'Single Image',
    plural: 'Single Images',
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'altText',
      type: 'text',
      label: 'Alternative Text Override',
      admin: {
        description: 'Describe the image for accessibility. If blank, the media alt text is used.',
      },
    },
    {
      name: 'caption',
      type: 'text',
    },
    {
      name: 'aspectRatio',
      type: 'select',
      defaultValue: 'auto',
      options: [
        { label: 'Original Image Ratio', value: 'auto' },
        { label: 'Square', value: 'square' },
        { label: 'Portrait', value: 'portrait' },
        { label: 'Landscape', value: 'landscape' },
        { label: 'Wide', value: 'wide' },
      ],
    },
    {
      name: 'fit',
      type: 'select',
      defaultValue: 'cover',
      options: [
        { label: 'Crop to Fill', value: 'cover' },
        { label: 'Show Entire Image', value: 'contain' },
      ],
    },
    {
      name: 'objectPosition',
      type: 'select',
      defaultValue: 'center',
      options: [
        { label: 'Center', value: 'center' },
        { label: 'Top', value: 'top' },
        { label: 'Bottom', value: 'bottom' },
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
      ],
    },
    {
      name: 'corners',
      type: 'select',
      defaultValue: 'medium',
      options: [
        { label: 'Square', value: 'none' },
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
      ],
    },
    {
      name: 'shadow',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'link',
      type: 'text',
      label: 'Optional Link URL',
    },
  ],
}
