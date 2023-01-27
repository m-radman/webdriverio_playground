import * as EC from 'wdio-wait-for'

class AlertBox {
  async waitForPresent() {
    await browser.waitUntil(EC.alertIsPresent())
  }
  
  async waitForAbsent() {
    await browser.waitUntil(EC.not(EC.alertIsPresent()))
  }

  async accept() {
    await browser.acceptAlert()
  }
}

export default new AlertBox()