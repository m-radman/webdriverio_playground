// todo 
describe("Hover tests", () => {
  const BASE_URL = "https://the-internet.herokuapp.com"

  it("tests hovering over user 1", async () => {
    await browser.url(`${BASE_URL}/hovers`)

    await (await $("img[alt='User Avatar']")).moveTo()

    expect(await (await $("h5=name: user1")).isDisplayedInViewport()).toBe(true)
    expect(await (await $("a=View profile")).isDisplayedInViewport()).toBe(true)
  })

  it("tests hovering over user 2", async () => {
    await browser.url(`${BASE_URL}/hovers`)

    await (await $("#content > div > div:nth-child(4) > img")).moveTo()

    expect(await (await $("#content > div > div:nth-child(4) > div > h5")).isDisplayedInViewport()).toBe(true)
    expect(await (await $("#content > div > div:nth-child(4) > div > a")).isDisplayedInViewport()).toBe(true)
  })

  it("tests hovering over user 3", async () => {
    await browser.url(`${BASE_URL}/hovers`)

    await (await $("#content > div > div:nth-child(5) > img")).moveTo()

    expect(await (await $("#content > div > div:nth-child(5) > div > h5")).isDisplayedInViewport()).toBe(true)
    expect(await (await $("#content > div > div:nth-child(5) > div > a")).isDisplayedInViewport()).toBe(true)
  })
})