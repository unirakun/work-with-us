import { makeExecutableSchema } from 'graphql-tools'
import { cv } from '@work-with-us/data'
import typeDefs from './types'

const proposals = [
]

const resolvers = {
  Query: {
    proposals: () => proposals,
    cvs: (root, { name }) => {
      if (!name) return Object.values(cv)
      return [cv[name]]
    },
  },
  Mutation: {
    addProposal: (root, { input }) => {
      proposals.push(input)
      return true
    },
  },
}

module.exports = makeExecutableSchema({ typeDefs, resolvers })
