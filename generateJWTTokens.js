// eslint-disable-next-line import/no-extraneous-dependencies
const jwt = require('jsonwebtoken')

console.log({
  user: jwt.sign({ role: 'USER' }, process.env.JWT_SECRET, { expiresIn: '2 days' }),
  admin: jwt.sign({ role: 'ADMIN' }, process.env.JWT_SECRET, { expiresIn: '2 days' }),
})
