const chalk = require('chalk')

// base code from: https://github.com/klaussinani/signale/blob/master/signale.js#L60
const getCallerFile = () => {
  const _ = Error.prepareStackTrace
  Error.prepareStackTrace = (error, stack) => stack
  const { stack } = new Error()
  Error.prepareStackTrace = _

  const callers = stack.map(x => x.getFileName())

  return callers.find(x => x !== callers[0])
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

const timers = new Map()
const time = (timerName) => {
  timers.set(timerName, Date.now())
}

const timeEnd = (timerName) => {
  const timer = timers.get(timerName)
  printMessage(timerName, `${Date.now() - timer}ms`)
  timers.delete(timer)
}

module.exports = ({
  ...console,
  time,
  timeEnd,
  warn: printMessage,
  debug: printMessage,
  trace: printMessage,
  error: printMessage,
  info: printMessage,
})
