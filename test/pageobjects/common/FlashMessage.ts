import * as EC from 'wdio-wait-for'

export enum MessageType {
  Success = 'success',
  Error = 'error'
}

export class FlashMessage {
  private message: string 
  private closeIcon: string 

  constructor(param: MessageType) {
    this.message = `div#flash-messages > div[class="flash ${param}"]`
    this.closeIcon = `div#flash-messages > div[class="flash ${param}"] > a.close`

    console.log('INFO: new instance of FlashMessage was just created')
  }

  async waitForPresent() {
    await browser.waitUntil(EC.presenceOf(this.message))
  }

  async waitForGonne() {
    await browser.waitUntil(EC.stalenessOf(this.message))
  }

  async getElement(): Promise<WebdriverIO.Element> {
    return $(this.message)
  }

  async getText(): Promise<string> {
    return $(this.message).getText()
  }

  async closeMessage() {
    await $(this.closeIcon).click()
  }
}
