const cv = `{
  who: Who!
  description: String
  skills: [GroupSkill]!
  experiences: [Experience]
}`

export default `
  type CV ${cv}
`
