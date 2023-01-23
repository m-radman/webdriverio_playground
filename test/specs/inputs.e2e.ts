// todo 
const BASE_URL = "https://the-internet.herokuapp.com"

describe("input type number tests", () => {
  it ("should accept 0 as input", async () => {
    await browser.url(`${BASE_URL}/inputs`)

    let myInput = await $("input[type='number']")
    await myInput.addValue(0)
    let inputValue = await myInput.getValue()
    expect(inputValue).toBe("0")
  })

  it ("should accept positive number as input", async () => {
    await browser.url(`${BASE_URL}/inputs`)

    let myInput = await $("input[type='number']")
    await myInput.addValue(23)
    let inputValue = await myInput.getValue()
    expect(inputValue).toBe("23")
  })

  it ("should accept negative number as input", async () => {
    await browser.url(`${BASE_URL}/inputs`)

    let myInput = await $("input[type='number']")
    await myInput.addValue(-23)
    let inputValue = await myInput.getValue()
    expect(inputValue).toBe("-23")
  })

  it ("should accept number with decimal point as input", async () => {
    await browser.url(`${BASE_URL}/inputs`)

    let myInput = await $("input[type='number']")
    await myInput.addValue(0.3)
    let inputValue = await myInput.getValue()
    expect(inputValue).toBe("0.3")
  })

  it ("should accept really big number as input", async () => {
    await browser.url(`${BASE_URL}/inputs`)

    let myInput = await $("input[type='number']")
    await myInput.addValue(111222333444555)
    let inputValue = await myInput.getValue()
    expect(inputValue).toBe("111222333444555")
  })

  it ("shoul reject letters as input", async () => {
    await browser.url(`${BASE_URL}/inputs`)

    let myInput = await $("input[type='number']")
    await myInput.addValue("abcd")
    let inputValue = await myInput.getValue()
    expect(inputValue).toBe("")
  })
})