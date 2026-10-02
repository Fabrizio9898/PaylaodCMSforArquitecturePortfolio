import type { GlobalConfig } from 'payload'
import { rebuildPortfolio } from '../hooks/rebuildPortfolio'

export const About: GlobalConfig = {
  slug: 'about',
  label: 'Sobre mí',
  access: { read: () => true },
    hooks:{
      afterChange: [rebuildPortfolio],
    },
  fields: [
    {
      name: 'bio',
      type: 'array',
      label: 'Biografía',
      labels: { singular: 'Párrafo', plural: 'Párrafos' },
      fields: [
        {
          name: 'paragraph',
          type: 'textarea',
          required: true,
          label: 'Párrafo',
          admin: {
            description: 'Para poner negrita, escribí el texto entre dos asteriscos: **así**.',
          },
        },
      ],
    },
    { name: 'instagram', type: 'text', label: 'Instagram (URL)' },
    { name: 'email', type: 'email', label: 'Email' },
  ],
}
