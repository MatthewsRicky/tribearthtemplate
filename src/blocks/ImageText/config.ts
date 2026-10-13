import type { Block } from 'payload'

export const ImageText: Block = {
  slug: 'image-text',
  labels: {
    singular: 'Image & Text',
    plural: 'Image & Text Blocks',
  },
  fields: [
    {
      name: 'imageHeight',
      type: 'select',
      label: 'Image Height',
      defaultValue: 'auto',
      options: [
        { label: 'Use Aspect Ratio', value: 'auto' },
        { label: 'Compact', value: 'compact' },
        { label: 'Medium', value: 'medium' },
        { label: 'Tall', value: 'tall' },
        { label: 'Extra Tall', value: 'extra-tall' },
        { label: 'Viewport Height', value: 'viewport' },
      ],
    },
    {
      name: 'imageWidth',
      type: 'select',
      label: 'Image Column Width',
      defaultValue: 'equal',
      options: [
        { label: 'Equal Columns', value: 'equal' },
        { label: 'Image 40% / Text 60%', value: '40-60' },
        { label: 'Image 50% / Text 50%', value: '50-50' },
        { label: 'Image 60% / Text 40%', value: '60-40' },
      ],
    },
    {
      name: 'contentWidth',
      type: 'select',
      label: 'Content Width',
      defaultValue: 'wide',
      options: [
        { label: 'Medium', value: 'medium' },
        { label: 'Wide', value: 'wide' },
        { label: 'Extra Wide', value: 'extra-wide' },
        { label: 'Full Width', value: 'full' },
      ],
    },
    {
      name: 'sectionPadding',
      type: 'select',
      label: 'Section Padding',
      defaultValue: 'comfortable',
      options: [
        { label: 'None', value: 'none' },
        { label: 'Compact', value: 'compact' },
        { label: 'Comfortable', value: 'comfortable' },
        { label: 'Spacious', value: 'spacious' },
      ],
    },
    {
      name: 'columnGap',
      type: 'select',
      label: 'Space Between Columns',
      defaultValue: 'medium',
      options: [
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
      ],
    },
    {
      name: 'imageCorners',
      type: 'select',
      label: 'Image Corners',
      defaultValue: 'medium',
      options: [
        { label: 'Square Corners', value: 'none' },
        { label: 'Small Radius', value: 'small' },
        { label: 'Medium Radius', value: 'medium' },
        { label: 'Large Radius', value: 'large' },
      ],
    },
    {
      name: 'imageShadow',
      type: 'checkbox',
      label: 'Show Image Shadow',
      defaultValue: true,
    },

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
