describe("test for dynamic loading with hidden element", () => {
  const BASE_URL = "https://the-internet.herokuapp.com"

  it("test for dynamic loading with hidden element", async () => {
    await browser.url(`${BASE_URL}/dynamic_loading`)

    await $("#content > div > a:nth-child(5)").click()

    await $("#start > button").click()
    await $("#finish > h4").waitForDisplayed()

    expect(await $("#finish > h4").isDisplayedInViewport()).toBe(true)
    expect(await $("#start > button").isDisplayedInViewport()).toBe(false)
  })
})