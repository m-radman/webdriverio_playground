import * as EC from 'wdio-wait-for'

describe("Add Remove Elements tests", () => {
  const BASE_URL = "https://the-internet.herokuapp.com"
  const DEFAULT_WAIT_FOR_ELEMENT_TIMEOUT = 5000

  it("should be able to add element", async () => {
    await browser.url(`${BASE_URL}/add_remove_elements/`)

    // click ADD button 
    await $(".example > button").click()

    // wait for ELEMENT to be added 
    const newEl = await $(".example > #elements > button")
    await newEl.waitForExist({ timeout: DEFAULT_WAIT_FOR_ELEMENT_TIMEOUT })
  })

  it("should be able to delete new element", async () => {
    await browser.url(`${BASE_URL}/add_remove_elements/`)

    // click ADD button 
    await $(".example > button").click()

    // wait for ELEMENT to be added 
    const newEl = await $(".example > #elements > button")
    await browser.waitUntil(EC.presenceOf(".example > #elements > button"))

    // remove the ELEMENT 
    await newEl.click()

    // wait for ELEMENT to be out of DOM 
    await browser.waitUntil(EC.stalenessOf(".example > #elements > button"))
  })

  it("should be able to add 5 elements", async () => {
    await browser.url(`${BASE_URL}/add_remove_elements/`)

    for (let i = 1; i <= 5; i++) {
      // click ADD button 
      await $(".example > button").click()
      // wait for i-th ELEMENT to be present in DOM 
      await browser.waitUntil(EC.presenceOf(`.example > #elements > button:nth-of-type(${i})`))
    }
  })

  it("should be able to delete 5 elements", async () => {
    await browser.url(`${BASE_URL}/add_remove_elements/`)

    // prepare: add 5 elements to prepare for removal
    for (let i = 1; i <= 5; i++) {
      // click ADD button 
      await $(".example > button").click()
      // wait for i-th ELEMENT to be present in DOM 
      await browser.waitUntil(EC.presenceOf(`.example > #elements > button:nth-of-type(${i})`))
    }

    for (let i = 5; i > 0; i--) {
      // remove last ELEMENT = i-th ELEMENT
      await $(`.example > #elements > button:nth-of-type(${i})`).click()
      // wait for length of the ELEMENTS array to decrease 
      await browser.waitUntil(async () => {
        const promisedChainableArray = await $$(".example > #elements > button")
        return promisedChainableArray.length === i - 1
      })
    }
  })
})