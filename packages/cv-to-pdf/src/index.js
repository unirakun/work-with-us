const logger = require('@work-with-us/logger')
const puppeteer = require('puppeteer')

const render = async (page, name) => {
  await page.goto(`https://work-with-us.alakarte.io/${name}`)
  await page.evaluate(() => {
    root.style.fontSize = '20px' // eslint-disable-line no-undef
  })
  await page.pdf({
    scale: 0.6,
    path: `${name}.pdf`,
    format: 'A4',
    printBackground: true,
    margin: {
      top: 40,
      left: 0,
      right: 0,
      bottom: 0,
    },
  })
}

const renderAll = async (page) => {
  await render(page, 'fabien')
  await render(page, 'guillaume')
}

const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout))

const withRetry = (callback, args) => async (times) => {
  try {
    const res = await callback(args)
    return res
  } catch (ex) {
    if (times === 0) {
      throw ex
    }

    if (ex.message.includes('net::ERR_CONNECTION_REFUSED')) {
      await delay(500)

      logger.debug('retry!', times)
      const res = await withRetry(callback, args)(times - 1)

      return res
    }

    throw ex
  }
}

const run = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport({ height: 1060, width: 1024, deviceScaleFactor: 2 })

  await withRetry(renderAll, page)(10)

  await browser.close()

  process.exit(1)
}

run()
  .then(
    undefined,
    (err) => {
      logger.trace(err)
      process.exit(-1)
    },
  )
