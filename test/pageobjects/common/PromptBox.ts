import * as EC from 'wdio-wait-for'

class PromptBox {
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

  async send(text: string) {
    await browser.sendAlertText(text)
  }
}

export default new PromptBox()