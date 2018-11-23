const chalk = require('chalk')

const { prepareStackTrace } = Error

// base code from: https://stackoverflow.com/questions/16697791/nodejs-get-filename-of-caller-function
const getCallerFile = () => {
  try {
    let callerfile

    let savedStack
    Error.prepareStackTrace = (_, stack) => {
      savedStack = stack
      return prepareStackTrace(_, stack)
    }

    // trigger an error so we can capture the stack
    new Error().stack // eslint-disable-line no-unused-expressions

    const currentfile = savedStack.shift().getFileName()

    while (savedStack.length) {
      callerfile = savedStack.shift().getFileName()

      if (currentfile !== callerfile) return callerfile
    }
  } catch (err) { /* ignore error */ }

  Error.prepareStackTrace = prepareStackTrace

  return undefined
}

const dynamicPad = (callback) => {
  let lastPad = 0

  return (string) => {
    lastPad = (string.length > lastPad ? string.length : lastPad)

    return callback(string.padEnd(lastPad, ' '))
  }
}

const getPkgStr = dynamicPad(chalk.grey)
const getFileStr = dynamicPad(chalk.black)
const getDateStr = () => chalk.black(`${Date.now()}`)

const getLogPrefix = () => {
  const callerFile = getCallerFile()

  let prefix = `${getDateStr()} ${getPkgStr('unknown')} ${getFileStr('unknown')}`
  try {
    const matches = callerFile.match(/.*\/packages\/(.*?)\/src\/(.*)/)
    if (matches && matches.length > 2) {
      const [, pkg, file] = matches
      prefix = `${getDateStr()} ${getPkgStr(pkg)} ${getFileStr(file)}`
    }
  } catch (ex) { /* ignore error */ }

  return prefix
}

const getDynamicStr = (dynamic) => {
  if (!dynamic) return ''
  return ` ${chalk.green(dynamic)}`
}

const printMessage = (message, dynamic) => {
  process.stdout.write(`${getLogPrefix()} ${message}${getDynamicStr(dynamic)}\n`)
}

module.exports = ({
  ...console,
  // time: console.time,
  // timeEnd: console.timeEnd,
  warn: printMessage,
  debug: printMessage,
  trace: printMessage,
  error: printMessage,
  info: printMessage,
})
