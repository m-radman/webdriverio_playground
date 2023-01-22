const BASE_URL = "https://the-internet.herokuapp.com"

describe("checkbox test", () => {
  it("should confirm if box is checked", async () => {
    await browser.url(`${BASE_URL}/checkboxes`)

    let checkbox1 = $("input[type='checkbox']")
    let status1 = await checkbox1.isSelected()
    expect(status1).toBe(false)

    let checkbox2 = $("input[type='checkbox']:nth-of-type(2)")
    let status2 = await checkbox2.isSelected()
    expect(status2).toBe(true)
  })
})
