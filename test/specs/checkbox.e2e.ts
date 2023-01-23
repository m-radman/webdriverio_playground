import * as EC from 'wdio-wait-for'

const BASE_URL = "https://the-internet.herokuapp.com"

describe("Checkboxes tests", () => {
  it("user should see the default settings on page load", async () => {
    // ================================================
    //  default settings = first checkbox is unchecked 
    //                     second checkbox is checked
    // ================================================
    await browser.url(`${BASE_URL}/checkboxes`)

    let checkbox1 = $("input[type='checkbox']:nth-of-type(1)")
    let checkedStatus1 = await checkbox1.isSelected()
    expect(checkedStatus1).toBe(false)

    let checkbox2 = $("input[type='checkbox']:nth-of-type(2)")
    let checkedStatus2 = await checkbox2.isSelected()
    expect(checkedStatus2).toBe(true)
  })

  it("user should be able to select unchecked checkbox", async () => {
    // =========================================================
    //  select checkbox1 => expect checkedStatus1 to BECOME true 
    // =========================================================
    await browser.url(`${BASE_URL}/checkboxes`)

    let checkbox1 = $("input[type='checkbox']:nth-of-type(1)")
    await checkbox1.click()
    expect(await checkbox1.isSelected()).toBe(true)
    /**
     * Or mayyybe this line:
     *    - expect(await checkbox1.isSelected()).toBe(true)
     * could be replaced with following line: 
     *    + await browser.waitUntil(EC.elementToBeSelected(checkbox1))
     */
  })

  it("user should be able to unselect checked checkbox", async () => {
    // ============================================================
    //  unselect checkbox2 => expect checkedStatus2 to BECOME false 
    // ============================================================
    await browser.url(`${BASE_URL}/checkboxes`)

    let checkbox2 = $("input[type='checkbox']:nth-of-type(2)")
    await checkbox2.click()
    expect(await checkbox2.isSelected()).toBe(false)
    /**
     * Or mayyybe this line:
     *    - expect(await checkbox2.isSelected()).toBe(false)
     * could be replaced with following line: 
     *    + await browser.waitUntil(EC.not(EC.elementToBeSelected(checkbox2)))
     */
    await browser.waitUntil(EC.not(EC.elementToBeSelected(checkbox2)))
  })
})
