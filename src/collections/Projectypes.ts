import type { CollectionConfig } from 'payload'
import { slugField } from '../fields/slug'

export const ProjectTypes: CollectionConfig = {
  slug: 'project-types',
  labels: { singular: 'Tipo de proyecto', plural: 'Tipos de proyecto' },
  admin: { useAsTitle: 'title' },
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', required: true, label: 'Nombre' },
    slugField('title'),
    // Después agregás acá más campos (descripción, imagen, orden, etc.)
  ],
}
