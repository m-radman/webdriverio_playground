/*Steps
    1. go to https://the-internet.herokuapp.com/inputs
    2. input element should accept 0 as input
    3. input element should accept positive number as input
    4. input element should accept negative number as input
    5. input element should accept number with decimal point as input
    6. input element should reject letters as input
*/

import InputsPageInstance from "../pageobjects/InputsPage.js";

describe("Inputs test with Page Objects", () => {
  it("should accept 0 as input", async () => {
    await InputsPageInstance.open()

    await InputsPageInstance.inputValue(0)
    expect(await InputsPageInstance.getValue()).toBe("0")
  })

  it("should accept a positive number as input", async () => {
    await InputsPageInstance.open()

    await InputsPageInstance.inputValue(13)
    expect(await InputsPageInstance.getValue()).toBe("13")
  })

  it("should accept a negative number as input", async () => {
    await InputsPageInstance.open()

    await InputsPageInstance.inputValue(-13)
    expect(await InputsPageInstance.getValue()).toBe("-13")
  })

  it("should accept a number with decimal point as input", async () => {
    await InputsPageInstance.open()

    await InputsPageInstance.inputValue(0.136)
    expect(await InputsPageInstance.getValue()).toBe("0.136")
  })

  it("should reject letters as input", async () => {
    await InputsPageInstance.open()

    await InputsPageInstance.inputValue("asd")
    expect(await InputsPageInstance.getValue()).toBe("")
  })
})