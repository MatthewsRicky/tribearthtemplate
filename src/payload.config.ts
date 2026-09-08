import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { ProductCategories } from './collections/ProductCategories'
import { Products } from './collections/Products'
import { Collections } from './collections/Collections'
import { Events } from './collections/Events'
import { MenuCategories } from './collections/MenuCategories'
import { TeamMembers } from './collections/TeamMembers'
import { Stories } from './collections/Stories'
import { MenuItems } from './collections/MenuItems'
import { ImpactInitiatives } from './collections/ImpactInitiatives'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, ProductCategories, Products, Collections, Events, MenuCategories, TeamMembers, Stories, MenuItems, ImpactInitiatives],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [],
})
