import HoversPage from "../pageobjects/HoversPage.js";

describe("Hover tests with page objects", () => {
  it("should be able to hover over user1", async () => {
    await HoversPage.open()

    await HoversPage.user1.hover()
    expect(await HoversPage.user1.isDisplayed()).toBe(true)
    expect(await HoversPage.user1.getName()).toBe("name: user1")
  })
})