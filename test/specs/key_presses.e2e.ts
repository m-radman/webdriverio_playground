// todo 
import { Key } from "webdriverio"

describe("key presses tests", () => {
  const BASE_URL = "https://the-internet.herokuapp.com"

  beforeEach(async () => {
    await browser.url(`${BASE_URL}/key_presses?`)
  })

  it("should detect that 'Tab' key is pressed", async () => {
    let input = await $("input[id='target']")
    
    /**
     * Note: 
     * 
     *     await browser.keys(Key.Tab) is okay 
     * though it does relay on the fact that input element is focused 
     * once we navigate to that page 
     * 
     * Instead: 
     * we want to sendKeys(Key.Tab) to the input element 
     *     await input.setValue(Key.Tab)
     * this will work regardless, if input element is in focus or not
     */
    await input.setValue(Key.Tab)

    let result = await (await $("p[id='result']")).getText()
    expect(result).toBe("You entered: TAB")
  })

  it("should detect that 'Space' key is pressed", async () => {
    await browser.url(`${BASE_URL}/key_presses?`)
    
    let input = await $("input[id='target']")
    await input.setValue(Key.Space)

    let result = await (await $("p[id='result']")).getText()
    expect(result).toBe("You entered: SPACE")
  })

  it("should inform which key is pressed last", async () => {
    await browser.url(`${BASE_URL}/key_presses?`)

    let input = await $("input[id='target']")
    await input.setValue("abcd")

    let result = await (await $("p[id='result']")).getText()
    expect(result).toBe("You entered: D")
  })

  it("should not recognise semicolon", async () => {
    await browser.url(`${BASE_URL}/key_presses?`)
    
    let input = await $("input[id='target']")
    await input.setValue(Key.Semicolon)

    let result = await (await $("p[id='result']")).getText()
    expect(result).toBe("You entered:")
  })
})