// todo 

describe("Checkboxes tests", () => {
  const BASE_URL = "https://the-internet.herokuapp.com"

  it("should be able to add element", async () => {
    await browser.url(`${BASE_URL}/add_remove_elements/`)

    await $(".example > button").click()

    const newEl = await $(".example > #elements > button")
    await newEl.waitForExist({ timeout:5000 })
    expect(await newEl.isExisting()).toBe(true)
  })

  it("should be able to delete new element", async () => {
    await browser.url(`${BASE_URL}/add_remove_elements/`)

    await $(".example > button").click()

    const newEl = await $(".example > #elements > button")
    await newEl.waitForExist({ timeout:5000 })
    await newEl.click()
    expect(await newEl.isExisting()).toBe(false)
  })

  it("should be able to add 5 elements", async () => {
    await browser.url(`${BASE_URL}/add_remove_elements/`)

    for (let i = 0; i < 5; i++) {
      await $(".example > button").click()
    }

    const newEl = await $(".example > #elements > button:nth-of-type(5)")
    await newEl.waitForExist({ timeout:25000 })
    expect(await newEl.isExisting()).toBe(true)
  })

  it("should be able to delete 5 elements", async () => {
    await browser.url(`${BASE_URL}/add_remove_elements/`)

    for (let i = 0; i < 5; i++) {
      await $(".example > button").click()
    }

    const newEl = await $(".example > #elements > button")
    const newestEl = await $(".example > #elements > button:nth-of-type(5)")
    await newestEl.waitForExist({ timeout:25000 })
    for (let i = 0; i < 5; i++) {
      await newEl.click()
    }
    expect(await newEl.isExisting()).toBe(false)
  })
})