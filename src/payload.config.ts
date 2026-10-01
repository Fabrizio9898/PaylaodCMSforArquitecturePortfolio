import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { About } from './globals/About'
import { Hero } from './globals/Hero'
import { Specialties } from './collections/Specialities'
import { ProjectTypes } from './collections/Projectypes'
import { Projects } from './collections/Projects'
import { es } from '@payloadcms/translations/languages/es'
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  i18n: {
    supportedLanguages: { es},
  },
  collections: [Users, Media, ProjectTypes, Specialties, Projects],
  cors: process.env.NODE_ENV === 'development' ? ['http://localhost:3000'] : [],
  globals: [Hero, About],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [],
})
