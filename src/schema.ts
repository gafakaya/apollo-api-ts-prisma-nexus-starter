import { makeSchema } from 'nexus'
import { join } from 'path'

export const schema = makeSchema({
  types: [],
  outputs: {
    typegen: __dirname + '/generated/nexus-typegen.ts',
    schema:  __dirname + '/generated/schema.graphql'
  },
})