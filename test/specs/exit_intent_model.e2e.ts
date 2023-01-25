// todo 

const BASE_URL = "https://the-internet.herokuapp.com"

describe("Exit intent test", () => {
  it("should activate modal window", async () => {
    await browser.url(`${BASE_URL}/exit_intent`)

    expect(await $("#ouibounce-modal").getAttribute("style")).toBe("display:none;")
    //simulate trigger event
    await browser.execute("window._ouibounce.fire()")

    expect(await $("#ouibounce-modal").getAttribute("style")).toBe("display: block;")
  })
})