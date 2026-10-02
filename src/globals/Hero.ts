import { rebuildPortfolio } from '@/hooks/rebuildPortfolio'
import type { GlobalConfig } from 'payload'

export const Hero: GlobalConfig = {
  slug: 'hero',
  label: 'Hero (inicio)',
  access: { read: () => true },
  hooks:{
    afterChange: [rebuildPortfolio],
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'nameLine1',
          type: 'text',
          required: true,
          label: 'Nombre (línea 1)',
          defaultValue: 'Federico',
        },
        {
          name: 'nameLine2',
          type: 'text',
          required: true,
          label: 'Nombre (línea 2)',
          defaultValue: 'Dávalos',
        },
      ],
    },
    {
      name: 'images',
      type: 'array',
      label: 'Imágenes del hero',
      labels: { singular: 'Imagen', plural: 'Imágenes' },
      minRows: 7,
      maxRows: 7,
      admin: {
        description:
          'Son 7 imágenes. Se acomodan en orden de izquierda a derecha y de arriba hacia abajo. Podés arrastrarlas para cambiar el orden.',
      },
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media', required: true, label: 'Imagen' },
      ],
    },
  ],
}
