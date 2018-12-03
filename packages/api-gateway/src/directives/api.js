/* eslint-disable no-underscore-dangle, no-param-reassign */
import { defaultFieldResolver } from 'graphql'
import { SchemaDirectiveVisitor } from 'graphql-tools'
import { Resolver } from 'dns';

function ensureFieldsWrapped(objectType) {
  // Mark the GraphQLObjectType object to avoid re-wrapping:
  if (objectType._apiFieldsWrapped) return
  objectType._apiFieldsWrapped = true

  const fields = objectType.getFields()

  Object.keys(fields).forEach((fieldName) => {
    const field = fields[fieldName]
    const { resolve = defaultFieldResolver } = field

    // mettre dans l'ordre
    console.log('directives', field.astNode.directives)

    field.resolve = next => async (...args) => {
      const apiName = (
        field._apiName
        || objectType._apiName
      )

      if (!apiName) {
        return next()
      }

      const [, { input }, context, definition] = args
      const { models } = context
      // console.log('api-directive', definition)
      if (definition.parentType.name === 'Query') {
        return models[apiName].list()
      }
      if (definition.parentType.name === 'Mutation') {
        await models[apiName].add(input)
        return true
      }

      return resolve.apply(this, args)
    }
  })
}

export default class ApiDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field, details) {
    Resolver.register(field, () => )
    // console.log('field', field.astNode.directives.map(d => d.arguments))
    ensureFieldsWrapped(details.objectType)
    field._apiName = this.args.name
  }
}
