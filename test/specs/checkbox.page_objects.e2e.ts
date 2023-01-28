/*Steps:
    1. go to https://the-internet.herokuapp.com/checkboxes
    2. expect checkbox1 to not be checked and checkbox2 to be checked
    3. click on checkbox1
    4. click on checkbox2
    5. expect checkbox2 to not be checked and checkbox1 to be checked
*/

import CheckboxPageInstance from "../pageobjects/CheckboxPage.js";

describe("Checkboxes test with PageObjects", () => {
  it("should check statuses of the checkboxes", async () => {
    await CheckboxPageInstance.open()

    expect(await CheckboxPageInstance.checkbox1.getCheckboxStatus()).toBe(false)
    expect(await CheckboxPageInstance.checkbox2.getCheckboxStatus()).toBe(true)
  })

  it("should change statuses of the checkboxes", async () => {
    await CheckboxPageInstance.open()

    await CheckboxPageInstance.checkbox1.selectCheckbox()
    await CheckboxPageInstance.checkbox2.selectCheckbox()

    expect(await CheckboxPageInstance.checkbox1.getCheckboxStatus()).toBe(true)
    expect(await CheckboxPageInstance.checkbox2.getCheckboxStatus()).toBe(false)
  })
})
