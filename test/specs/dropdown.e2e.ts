// todo 
describe("dropdown tests", () => {
  const BASE_URL = "https://the-internet.herokuapp.com"

  it("should select option 1", async () => {
    await browser.url(`${BASE_URL}/dropdown`)
    expect(await (await $("#dropdown > option:nth-child(1)")).isSelected()).toBe(true)

    await (await $("#dropdown")).click()
    await (await $("#dropdown > option:nth-child(2)")).click()
    expect(await (await $("#dropdown > option:nth-child(2)")).isSelected()).toBe(true)
    expect(await (await $("#dropdown > option:nth-child(1)")).isSelected()).toBe(false)
  })

  it("should select option 2", async () => {
    await browser.url(`${BASE_URL}/dropdown`)
    expect(await (await $("#dropdown > option:nth-child(1)")).isSelected()).toBe(true)

    await (await $("#dropdown")).click()
    await (await $("#dropdown > option:nth-child(3)")).click()
    expect(await (await $("#dropdown > option:nth-child(3)")).isSelected()).toBe(true)
    expect(await (await $("#dropdown > option:nth-child(1)")).isSelected()).toBe(false)
  })

  it("confirm disabled element", async () => {
    await browser.url(`${BASE_URL}/dropdown`)
    expect(await (await $("#dropdown > option:nth-child(1)")).isEnabled()).toBe(false)
  })
})