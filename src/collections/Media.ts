import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: { singular: 'Media', plural: 'Media' },
  access: { read: () => true },
  upload: {
    mimeTypes: ['image/*'],
    imageSizes: [
      { name: 'thumbnail', width: 600 },
      { name: 'card', width: 1200 },
      { name: 'full', width: 2000 },
    ],
  },
  fields: [{ name: 'alt', type: 'text', required: true, label: 'Texto alternativo' }],
}
