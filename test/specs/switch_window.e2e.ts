const BASE_URL = "https://the-internet.herokuapp.com"

describe("Switch window test", () => {
  it("should be able to switch to new window", async () => {
    await browser.url(`${BASE_URL}/windows`)

    await $("a[href='/windows/new']").click()

    await browser.switchWindow(`${BASE_URL}/windows/new`)
    expect(await $(".example > h3").getText()).toBe("New Window")
  })
})