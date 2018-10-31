const puppeteer = require('puppeteer')

const run = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('http://localhost:4000')
  await page.pdf({ path: 'cv.pdf', format: 'A4', printBackground: true })

  await browser.close()
}

run()
