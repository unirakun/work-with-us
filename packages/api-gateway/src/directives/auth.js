import { GraphQLList } from 'graphql'
import { createVisitFieldDefinition } from 'graphql-directives-middlewares'

export default createVisitFieldDefinition(
  'auth',
  (params, next) => async (...args) => {
    const {
      requires: requiredRole,
    } = params

    if (!requiredRole) {
      return next()
    }

    const [, , context, definition] = args
    const { role } = context

    if (!role || !role.includes(requiredRole)) {
      if (definition.returnType instanceof GraphQLList) return []
      throw new Error('Unauthorized')
    }

    return next()
  },
)
