import * as EC from "wdio-wait-for"

describe("test for dynamic loading with rendered element", () => {
  const BASE_URL = "https://the-internet.herokuapp.com"

  it("test for dynamic loading with rendered element", async () => {
    await browser.url(`${BASE_URL}/dynamic_loading`)

    await $("#content > div > a:nth-child(8)").click()
    await browser.waitUntil(EC.urlContains("/dynamic_loading/2"))
    expect(await $("#finish").isExisting()).toBe(false)

    await $("#start > button").click()
    await $("#finish").waitForDisplayed()

    expect(await $("#finish").isExisting()).toBe(true)
    expect(await $("#finish").isDisplayedInViewport()).toBe(true)
    expect(await $("#start > button").isDisplayedInViewport()).toBe(false)
  })
})