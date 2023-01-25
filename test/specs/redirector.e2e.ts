describe("Redirector tests", () => {
  const BASE_URL = "https://the-internet.herokuapp.com"

  it("should redirect user to status codes page", async () => {
    await browser.url(`${BASE_URL}/redirector`)

    // click redirect link 
    await $("p > #redirect").click()
    // expect to be redirected to /status_code url
    expect(browser).toHaveUrl(`${BASE_URL}/status_codes`)
  })
})