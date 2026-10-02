import type { CollectionConfig } from 'payload'
import { slugField } from '../fields/slug'
import { rebuildPortfolio } from '../hooks/rebuildPortfolio'

export const Specialties: CollectionConfig = {
  slug: 'specialties',
  labels: { singular: 'Especialidad', plural: 'Especialidades' },
  admin: { useAsTitle: 'title' },
  access: { read: () => true },
  hooks:{
    afterChange: [rebuildPortfolio],
    afterDelete: [rebuildPortfolio],
  },
  defaultSort: '-title',
  fields: [{ name: 'title', type: 'text', required: true, label: 'Nombre' }, slugField('title')],
}
