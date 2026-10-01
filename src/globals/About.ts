import type { GlobalConfig } from 'payload'

export const About: GlobalConfig = {
  slug: 'about',
  label: 'Sobre mí',
  access: { read: () => true },
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
