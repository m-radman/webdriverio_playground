// todo 
describe("Hover tests", () => {
  const BASE_URL = "https://the-internet.herokuapp.com"

  it("tests hovering over user 1", async () => {
    await browser.url(`${BASE_URL}/hovers`)

    await $("div.example > div.figure:nth-of-type(1) > img").moveTo()

    expect (await $("div.example > div.figure:nth-of-type(1) > div.figcaption > h5").isDisplayedInViewport()).toBe(true)
    expect (await $("div.example > div.figure:nth-of-type(1) > div.figcaption > a").isDisplayedInViewport()).toBe(true)
  })

  it("tests hovering over user 2", async () => {
    await browser.url(`${BASE_URL}/hovers`)

    await $("div.example > div.figure:nth-of-type(2) > img").moveTo()

    expect(await $("div.example > div.figure:nth-of-type(2) > div.figcaption > h5").isDisplayedInViewport()).toBe(true)
    expect(await $("div.example > div.figure:nth-of-type(2) > div.figcaption > a").isDisplayedInViewport()).toBe(true)
  })

  it("tests hovering over user 3", async () => {
    await browser.url(`${BASE_URL}/hovers`)

    await $("div.example > div.figure:nth-of-type(3) > img").moveTo()

    expect(await $("div.example > div.figure:nth-of-type(3) > div.figcaption > h5").isDisplayedInViewport()).toBe(true)
    expect(await $("div.example > div.figure:nth-of-type(3) > div.figcaption > a").isDisplayedInViewport()).toBe(true)
  })
})