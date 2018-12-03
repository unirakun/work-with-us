import { defaultFieldResolver } from 'graphql'
import { SchemaDirectiveVisitor } from 'graphql-tools'

const ORDER = [
  'auth',
  'api',
]

const resolvers = new Map()

export const registerResolver = (directiveName, resolver) => {
  resolvers.set(directiveName, resolver)
}

export const sortedResolve = baseResolve => (field) => {
  const {
    astNode,
  } = field

  const {
    directives,
  } = astNode

  const directiveNames = directives.map(({ name }) => name.value)

  const middlewares = directiveNames
    .map(key => resolvers.get(key))
    .sort((a, b) => ORDER.indexOf(a) - ORDER.indexOf(b))
  middlewares.push(() => baseResolve)

  return async (...args) => {
    const middlewaresToExecute = [...middlewares]
    let index = 0

    const next = async () => {
      const nextMiddleware = middlewaresToExecute[index]
      index += 1
      const nextRes = await nextMiddleware(next)(args)
      return nextRes
    }

    const res = await next()
    return res
  }
}

export const createVisitFieldDefinition = (directiveName, creator, resolver) => {
  registerResolver(directiveName, resolver)

  return class extends SchemaDirectiveVisitor {
    visitFieldDefinition(field, details) {
      creator(field, this.args)

      if (!field._hasResolverAttached) {
        field._hasResolverAttached = true
        field.resolve = sortedResolve(field.resolve)(field)
      }
    }
  }
}

// auth.js
export default createVisitFieldDefinition(
  'auth',
  (field, args) => { field._requiredAuthRole = args.requires },
  (next) => (...args) => {
    // if good role
    return next()

    return []
  },
)

// api.js
export default createVisitFieldDefinition(
  'api',
  (field, args) => { field._requiredAuthRole = args.requires },
  (next) => (...args) => {
    // si j'ai pas d'api
    return next()

    // call de l'api
    return models[blabla]
  },
)
