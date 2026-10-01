import type { CollectionConfig } from 'payload'
import { slugField } from '../fields/slug'

export const Projects: CollectionConfig = {
  slug: 'projects',
  labels: { singular: 'Proyecto', plural: 'Proyectos' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'projectType', 'year', 'status', 'featured'],
  },
  access: { read: () => true },
  defaultSort: '-year',
  fields: [
    { name: 'title', type: 'text', required: true, label: 'Título' },
    slugField('title'),

    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Descripción corta',
      admin: { description: 'Se muestra en las tarjetas y listados.' },
    },

    {
      name: 'content',
      type: 'array',
      label: 'Texto del proyecto',
      labels: { singular: 'Párrafo', plural: 'Párrafos' },
      fields: [{ name: 'paragraph', type: 'textarea', required: true, label: 'Párrafo' }],
    },

    {
      type: 'row',
      fields: [
        { name: 'year', type: 'number', required: true, label: 'Año', admin: { width: '25%' } },
        {
          name: 'location',
          type: 'text',
          required: true,
          label: 'Ubicación',
          admin: { width: '75%' },
        },
      ],
    },

    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'in-progress',
      label: 'Estado',
      options: [
        { label: 'En progreso', value: 'in-progress' },
        { label: 'Completado', value: 'completed' },
      ],
    },

    { name: 'client', type: 'text', label: 'Cliente' },

    {
      name: 'projectType',
      type: 'relationship',
      relationTo: 'project-types',
      required: true,
      label: 'Tipo de proyecto',
    },
    {
      name: 'specialties',
      type: 'relationship',
      relationTo: 'specialties',
      hasMany: true,
      label: 'Especialidades',
    },

    {
      type: 'row',
      fields: [
        {
          name: 'siteArea',
          type: 'text',
          label: 'Superficie del terreno',
          admin: { width: '50%' },
        },
        {
          name: 'builtArea',
          type: 'text',
          label: 'Superficie construida',
          admin: { width: '50%' },
        },
      ],
    },

    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      label: 'Destacado (se muestra en el inicio)',
      admin: { position: 'sidebar' },
    },
    {
      name: 'images',
      type: 'array',
      label: 'Galería',
      minRows: 1,
      labels: { singular: 'Imagen', plural: 'Imágenes' },
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media', required: true, label: 'Imagen' },
        { name: 'caption', type: 'text', label: 'Epígrafe' },
      ],
    },
  ],
}
