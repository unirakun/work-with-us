const puppeteer = require('puppeteer')

const run = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('http://localhost:3000')
  await page.evaluate(() => {
    root.style.fontSize = "12px";
  })
  await page.pdf({ path: 'cv.pdf', format: 'A4', printBackground: true })

  await browser.close()
}

run()
