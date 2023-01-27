class InputsPage {
  static url: string = "https://the-internet.herokuapp.com/inputs"

  private numberInput: string

  constructor() {
    this.numberInput = "input[type='number']"
  }

  async open() {
    await browser.url(InputsPage.url)
  }

  async inputValue(value) {
    await $(this.numberInput).setValue(value)
  }

  async getValue(): Promise<string> {
    return $(this.numberInput).getValue()
  }
}

export default new InputsPage()