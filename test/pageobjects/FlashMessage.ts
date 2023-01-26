import * as EC from 'wdio-wait-for'

class FlashMessage {
  private successMessage: string 
  private successCloseIcon: string 
  private errorMessage: string 
  private errorCloseIcon: string 

  constructor() {
    this.successMessage = `div#flash-messages > div[class="flash success"]`
    this.errorMessage = 'div#flash-messages > div[class="flash error"]'

    console.log('INFO: new instance of FlashMessage was just created')
  }

  // present === in DOM 
  async waitForSuccess() {
    await browser.waitUntil(EC.presenceOf(this.successMessage))
  }

  // stale === not in DOM anymore 
  async waitForSuccessGonne() {
    await browser.waitUntil(EC.stalenessOf(this.successMessage))
  }

  async getSuccessElement(): Promise<WebdriverIO.Element> {
    return $(this.successMessage)
  }

  async getSuccessText(): Promise<string> {
    return $(this.successMessage).getText()
  }

  async closeSuccessMessage() {
    await $(this.successCloseIcon).click()
  }

  async waitForError() {
    await browser.waitUntil(EC.presenceOf(this.errorMessage))
  }

  async waitForErrorGonne() {
    await browser.waitUntil(EC.stalenessOf(this.errorMessage))
  }

  async getErrorText() {
    return $(this.errorMessage).getText()
  }

  async getErrorElement(): Promise<WebdriverIO.Element> {
    return $(this.errorMessage)
  }

  async closeErrorMessage() {
    await $(this.errorCloseIcon).click()
  }

}

const singletonInstance = new FlashMessage()
export default singletonInstance