/* eslint-disable no-underscore-dangle, no-param-reassign */
// code from: https://blog.apollographql.com/reusable-graphql-schema-directives-131fb3a177d1
import { defaultFieldResolver, GraphQLList } from 'graphql'
import { SchemaDirectiveVisitor } from 'graphql-tools'

function ensureFieldsWrapped(objectType) {
  // Mark the GraphQLObjectType object to avoid re-wrapping:
  if (objectType._authFieldsWrapped) return
  objectType._authFieldsWrapped = true

  const fields = objectType.getFields()

  Object.keys(fields).forEach((fieldName) => {
    const field = fields[fieldName]
    const { resolve = defaultFieldResolver } = field

    field.resolve = async (...args) => {
      // Get the required Role from the field first, falling back
      // to the objectType if no Role is required by the field:
      const requiredRole = (
        field._requiredAuthRole
        || objectType._requiredAuthRole
      )

      if (!requiredRole) {
        return resolve.apply(this, args)
      }

      const [, , context, definition] = args
      const { role } = context
      if (!role.includes(requiredRole)) {
        if (definition.returnType instanceof GraphQLList) return []
        throw new Error('Unauthorized')
      }

      return resolve.apply(this, args)
    }
  })
}

export default class AuthDirective extends SchemaDirectiveVisitor {
  visitObject(type) {
    ensureFieldsWrapped(type)
    type._requiredAuthRole = this.args.requires
  }

  visitFieldDefinition(field, details) {
    ensureFieldsWrapped(details.objectType)
    field._requiredAuthRole = this.args.requires
  }
}
