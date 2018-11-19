const cv = `{
  who: Who!
  description: String
  skills: [GroupSkill]!
  experiences: [Experience]
}`

module.exports = `
  type CV ${cv}
`
