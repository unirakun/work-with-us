const information = `{
  text: String
  children: [Information]
}`

const experience = `{
  title: String!
  client: Enterprise
  for: Enterprise!
  dates: Duration!
  informations: [Information]
}`

export default `
  type Information ${information}
  type Experience ${experience}
`
