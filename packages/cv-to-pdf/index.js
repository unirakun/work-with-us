const puppeteer = require('puppeteer')

const run = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport({ height: 1060, width: 1024, deviceScaleFactor: 2 })
  await page.goto('http://localhost:4000')
  await page.evaluate(() => {
    root.style.fontSize = '20px' // eslint-disable-line no-undef
  })
  await page.pdf({
    scale: 0.6,
    path: 'cv.pdf',
    format: 'A4',
    printBackground: true,
    margin: {
      top: 40,
      left: 0,
      right: 0,
      bottom: 0,
    },
  })

  await browser.close()
}

run()
