export default `
  enum Role {
    ADMIN
    USER
    VIEWER
  }

  directive @auth(requires: Role = ADMIN) on OBJECT | FIELD_DEFINITION
`
