import type { CollectionConfig } from 'payload'
import { slugField } from '../fields/slug'

export const Specialties: CollectionConfig = {
  slug: 'specialties',
  labels: { singular: 'Especialidad', plural: 'Especialidades' },
  admin: { useAsTitle: 'title' },
  access: { read: () => true },
  fields: [{ name: 'title', type: 'text', required: true, label: 'Nombre' }, slugField('title')],
}
