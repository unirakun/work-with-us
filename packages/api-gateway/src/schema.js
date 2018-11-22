import { makeExecutableSchema } from 'graphql-tools'
import { cv } from '@work-with-us/data'
import typeDefs from './types'
import resources from './resources'

module.exports = () => {
  const {
    proposals,
  } = resources()

  const resolvers = {
    Query: {
      proposals: () => proposals.list(),
      cvs: (root, { name }) => {
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
    Mutation: {
      addProposal: async (root, { input }) => {
        try {
          await proposals.add(input)
        } catch (ex) {
          console.error(ex)
          return false
        }

        return true
      },
    },
  }

  return makeExecutableSchema({ typeDefs, resolvers })
}
