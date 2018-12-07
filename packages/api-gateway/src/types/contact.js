const contact = `{
  email: String!
  name: String
}`

export default `
  type Contact ${contact}
  input InputContact ${contact}
`
