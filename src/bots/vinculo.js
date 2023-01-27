const puppeteer = require('puppeteer')

;(async () => {
  const sendStatus = async () => {
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()
    await page.goto('https://www.taon.app.br/bandeira/tarifaBandeira')

    const navigationPromise = page.waitForNavigation({
      waitUntil: 'domcontentloaded',
    })

    await page.type('#LoginForm_username', 'financeiro@taondelivery.com.br')
    await page.type('#LoginForm_password', 'jaobundao')

    await page.click('button[id="entrar"]')

    await navigationPromise
    await page.waitForSelector(
      '#edit_tarifa > div.container > div:nth-child(39) > a',
    )

    
    await page.click('#edit_tarifa > div.container > div:nth-child(39) > a')

    await page.waitForSelector('#tarifa-categoria-form')

       await page.evaluate((element) => {
      element.value = '3,30'
    }, valorbandeirada)
    const valorMinimo = await page.$(`input[id*='valor_minimo']`)
    await page.evaluate((element) => (element.value = '5,55'), valorMinimo)

    // await page.waitForSelector('#btn-gravar-final')
    // await page.click('button[id="btn-gravar-final"]')
    //browser.close()
  }
  sendStatus()
})()
