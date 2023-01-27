class CheckboxPage {
  static url: string = "https://the-internet.herokuapp.com/checkboxes"
  
  private checkbox1: string
  private checkbox2: string

  constructor() {
    this.checkbox1 = "#checkboxes > input:nth-of-type(1)"
    this.checkbox2 = "#checkboxes > input:nth-of-type(2)"
  }

  async open() {
    await browser.url(CheckboxPage.url)
  }

  async getCheckbox1Status(): Promise<boolean> {
    return $(this.checkbox1).isSelected()
  }

  async getCheckbox2Status(): Promise<boolean> {
    return $(this.checkbox2).isSelected()
  }

  async clickCheckbox1() {
    await $(this.checkbox1).click()
  }

  async clickCheckbox2() {
    await $(this.checkbox2).click()
  }
}

export default new CheckboxPage()