// todo 
describe("input type number tests", () => {
  const BASE_URL = "https://the-internet.herokuapp.com"

  it("should successfuly click on the alert", async () => {
    await browser.url(`${BASE_URL}/javascript_alerts`)

    await (await $("button=Click for JS Alert")).click()
    
    if (await browser.isAlertOpen()) {
      await browser.acceptAlert()
    }

    expect(await (await $("p[id='result']")).getText()).toBe("You successfully clicked an alert")
  })
})