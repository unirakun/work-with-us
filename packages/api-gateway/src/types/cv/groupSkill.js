const groupSkill = `{
  name: String!
  skills: [Skill]!
}`

module.exports = `
  type GroupSkill ${groupSkill}
`
