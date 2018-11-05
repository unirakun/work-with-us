const puppeteer = require('puppeteer')

const run = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport({ height: 1060, width: 1024, deviceScaleFactor: 2 })
  await page.goto('http://localhost:3000')
  await page.evaluate(() => {
    root.style.fontSize = '20px'
  })
  await page.pdf({ scale: 0.6, path: 'cv.pdf', format: 'A4', printBackground: true })

  await browser.close()
}

run()
