export default `
  enum Role {
    ADMIN
    USER
    VIEWER
  }

  directive @api(name: String!) on FIELD_DEFINITION

  directive @auth(requires: Role = ADMIN) on FIELD_DEFINITION
`
