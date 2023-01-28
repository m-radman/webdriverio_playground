export class CheckboxInput {
  
  private checkbox: string

  constructor(selector: string) {
    this.checkbox = `#checkboxes > ${selector}` 
  }

  async getCheckboxStatus(): Promise<boolean> {
    return $(this.checkbox).isSelected()
  }

  async selectCheckbox() {
    await $(this.checkbox).click()
  }
}