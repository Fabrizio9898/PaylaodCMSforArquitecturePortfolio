import type { GlobalConfig } from 'payload'
import { rebuildPortfolio } from '../hooks/rebuildPortfolio'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Contacto y redes',
  access: { read: () => true },
  hooks: {
    afterChange: [rebuildPortfolio],
  },
  fields: [
    { name: 'email', type: 'email', label: 'Email' },
    {
      name: 'whatsapp',
      type: 'text',
      label: 'WhatsApp',
      admin: { description: 'Formato internacional, sin + ni espacios. Ej: 5491123456789' },
    },
    {
      name: 'whatsappText',
      type: 'text',
      label: 'Mensaje de WhatsApp prellenado',
    },
    {
      name: 'socials',
      type: 'array',
      label: 'Redes sociales',
      labels: { singular: 'Red', plural: 'Redes' },
      fields: [
        { name: 'label', type: 'text', required: true, label: 'Nombre' },
        { name: 'url', type: 'text', required: true, label: 'URL' },
      ],
    },
  ],
}
