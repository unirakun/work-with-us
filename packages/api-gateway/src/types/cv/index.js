const cv = require('./cv')
const duration = require('./duration')
const enterprise = require('./enterprise')
const experience = require('./experience')
const groupSkill = require('./groupSkill')
const skill = require('./skill')
const social = require('./social')
const who = require('./who')

module.exports = `
  ${social}
  ${who}

  ${skill}
  ${groupSkill}

  ${duration}
  ${enterprise}
  ${experience}

  ${cv}
`
