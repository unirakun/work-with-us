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

module.exports = `
  type Information ${information}
  type Experience ${experience}
`
