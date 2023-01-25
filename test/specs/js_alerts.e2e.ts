import * as EC from "wdio-wait-for"

describe("JS alerts tests", () => {
  const BASE_URL = "https://the-internet.herokuapp.com"

  it("should successfuly click on the alert", async () => {
    await browser.url(`${BASE_URL}/javascript_alerts`)

    await $("button=Click for JS Alert").click()
    
    await browser.waitUntil(EC.alertIsPresent()) // wait for alert to BECOME opened (or timeout = throw an error)
    await browser.acceptAlert()
    expect(await $("p[id='result']").getText()).toBe("You successfully clicked an alert")
  })

  it("should click 'OK' on the alert", async () => {
    await browser.url(`${BASE_URL}/javascript_alerts`)

    await $("button=Click for JS Confirm").click()
    
    await browser.waitUntil(EC.alertIsPresent())
    await browser.acceptAlert()

    expect(await $("p[id='result']").getText()).toBe("You clicked: Ok")
  })

  it("should click 'Cancel' on the alert", async () => {
    await browser.url(`${BASE_URL}/javascript_alerts`)

    await $("button=Click for JS Confirm").click()
    
    await browser.waitUntil(EC.alertIsPresent())
    await browser.dismissAlert()
    expect(await $("p[id='result']").getText()).toBe("You clicked: Cancel")
  })

  it("should accept input in prompt", async () => {
    await browser.url(`${BASE_URL}/javascript_alerts`)

    await $("button=Click for JS Prompt").click()
    
    await browser.waitUntil(EC.alertIsPresent())
    await browser.sendAlertText("Hello!")
    await browser.acceptAlert()
    expect(await (await $("p[id='result']")).getText()).toBe("You entered: Hello!")
  })

  it("should accept blank input in prompt", async () => {
    await browser.url(`${BASE_URL}/javascript_alerts`)

    await $("button=Click for JS Prompt").click()
    
    await browser.waitUntil(EC.alertIsPresent())
    await browser.acceptAlert()
    expect(await $("p[id='result']").getText()).toBe("You entered:")
  })

  it("should cancel prompt", async () => {
    await browser.url(`${BASE_URL}/javascript_alerts`)

    await $("button=Click for JS Prompt").click()
    
    await browser.waitUntil(EC.alertIsPresent())
    await browser.dismissAlert()
    expect(await $("p[id='result']").getText()).toBe("You entered: null")
  })
})