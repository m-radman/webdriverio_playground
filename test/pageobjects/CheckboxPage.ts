import { CheckboxInput } from "./common/CheckboxInput.js"

class CheckboxPage {
  static url: string = "https://the-internet.herokuapp.com/checkboxes"

  public checkbox1: CheckboxInput
  public checkbox2: CheckboxInput
  
  constructor() {
    this.checkbox1 = new CheckboxInput("input[type='checkbox']:nth-of-type(1)")
    this.checkbox2 = new CheckboxInput("input[type='checkbox']:nth-of-type(2)")
  }

  async open() {
    await browser.url(CheckboxPage.url)
  }
}

export default new CheckboxPage()