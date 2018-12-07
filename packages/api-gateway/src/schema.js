import { makeExecutableSchema } from 'graphql-tools'
<<<<<<< HEAD
import { cv } from '@work-with-us/data'
=======
import makeProposals from '@work-with-us/api-proposals'
import { cv, showcase } from '@work-with-us/data'
>>>>>>> schema
import logger from '@work-with-us/logger'
import typeDefs from './types'
import schemaDirectives from './directives'

export default () => {
  const resolvers = {
    Query: {
      showcase: async (root, { clientName }) => {
        if (clientName) return { ...showcase, clientQuotes: [showcase.clientQuotes.find(c => c.name.toLowerCase() === clientName.toLowerCase())] }
        return showcase
      },
      cvs: (parent, { name }) => {
        if (!name) return Object.values(cv)

        const otherCode = name === 'fabien' ? 'guillaume' : 'fabien'
        const asked = cv[name]
        const other = cv[otherCode]

        return [
          {
            ...asked,
            who: {
              ...asked.who,
              otherCode,
              otherAvatar: other.who.avatar,
            },
          },
        ]
      },
    },
  }

  logger.info('creating graphql executable schema')
  return makeExecutableSchema({
    typeDefs,
    resolvers,
    schemaDirectives,
  })
}
