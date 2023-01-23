// todo 
import { Key } from "webdriverio"

const BASE_URL = "https://the-internet.herokuapp.com"

describe("key presses tests", () => {
  it("should detect that 'Tab' key is pressed", async () => {
    await browser.url(`${BASE_URL}/key_presses?`)

    let input = await $("input[id='target]")
    await browser.keys(Key.Tab)

    let result = await (await $("p[id='result']")).getText()

    expect(result).toBe("You entered: TAB")
  })

  it("should detect that 'Space' key is pressed", async () => {
    await browser.url(`${BASE_URL}/key_presses?`)

    let input = await $("input[id='target]")
    await browser.keys(Key.Space)

    let result = await (await $("p[id='result']")).getText()

    expect(result).toBe("You entered: SPACE")
  })

  it("should inform which key is pressed last", async () => {
    await browser.url(`${BASE_URL}/key_presses?`)

    let input = await $("input[id='target]")
    await browser.keys(["a", "b", "c", "d"])

    let result = await (await $("p[id='result']")).getText()

    expect(result).toBe("You entered: D")
  })

  it("should not recognise semicolon", async () => {
    await browser.url(`${BASE_URL}/key_presses?`)

    let input = await $("input[id='target]")
    await browser.keys(Key.Semicolon)

    let result = await (await $("p[id='result']")).getText()

    expect(result).toBe("You entered:")
  })
})