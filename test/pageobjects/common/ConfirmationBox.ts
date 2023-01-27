import * as EC from 'wdio-wait-for'

class ConfirmationBox {
  async waitForPresent() {
    await browser.waitUntil(EC.alertIsPresent())
  }
  
  async waitForAbsent() {
    await browser.waitUntil(EC.not(EC.alertIsPresent()))
  }

  async accept() {
    await browser.acceptAlert()
  }

  async dismiss() {
    await browser.dismissAlert()
  }
}

export default new ConfirmationBox()