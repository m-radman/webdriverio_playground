// todo 
describe("dropdown tests", () => {
  const BASE_URL = "https://the-internet.herokuapp.com"

  it("user should be able to select option 1", async () => {
    await browser.url(`${BASE_URL}/dropdown`)
    expect(await $("#dropdown > option:nth-child(1)").isSelected()).toBe(true)
    //or expect(await $("#dropdown > option:nth-child(1)").getAttribute('selected')).toBe('selected')

    await $("#dropdown").click()
    await $("#dropdown > option:nth-child(2)").click()
    expect(await $("#dropdown > option:nth-child(2)").isSelected()).toBe(true)
    expect(await $("#dropdown > option:nth-child(1)").isSelected()).toBe(false)
  })

  it("user should be able to select option 2", async () => {
    await browser.url(`${BASE_URL}/dropdown`)
    expect(await $("#dropdown > option:nth-child(1)").isSelected()).toBe(true)

    await $("#dropdown").click()
    await $("#dropdown > option:nth-child(3)").click()
    expect(await $("#dropdown > option:nth-child(3)").isSelected()).toBe(true)
    expect(await $("#dropdown > option:nth-child(1)").isSelected()).toBe(false)
  })

  it("user should not be able to select disabled option 0", async () => {
    await browser.url(`${BASE_URL}/dropdown`)
    expect(await $("#dropdown > option:nth-child(1)").isEnabled()).toBe(false)
    //or expect(await $("#dropdown > option:nth-child(1)").getAttribute('disabled')).toBe('disabled')
  })
})