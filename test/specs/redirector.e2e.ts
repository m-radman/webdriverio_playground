// todo 
describe("Checkboxes tests", () => {
  const BASE_URL = "https://the-internet.herokuapp.com"

  it("should redirect user to status codes page", async () => {
    await browser.url(`${BASE_URL}/redirector`)

    await $("p > #redirect").click()

    expect(browser).toHaveUrl(`${BASE_URL}/status_codes`)
  })
})