import * as EC from "wdio-wait-for"

class AlertPage {
  static url: string = "https://the-internet.herokuapp.com/javascript_alerts"

  private alertBtn: string
  private confirmBtn: string
  private promptBtn: string
  private result: string

  constructor() {
    this.alertBtn = ".example > ul > li:nth-child(1) > button"
    this.confirmBtn = ".example > ul > li:nth-child(2) > button"
    this.promptBtn = ".example > ul > li:nth-child(3) > button"
    this.result = "#result"
  }

  async open() {
    await browser.url(AlertPage.url)
  }

  async triggerAlert() {
    await $(this.alertBtn).click()
  }

  async triggerConfirmAlert() {
    await $(this.confirmBtn).click()
  }

  async triggerPromptAlert() {
    await $(this.promptBtn).click()
  }

  async waitForAlert() {
    await browser.waitUntil(EC.alertIsPresent())
  }

  async getResult(): Promise<string> {
    return $(this.result).getText()
  }
}

export default new AlertPage()