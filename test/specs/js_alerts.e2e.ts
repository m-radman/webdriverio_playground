// todo 
describe("JS alerts tests", () => {
  const BASE_URL = "https://the-internet.herokuapp.com"

  it("should successfuly click on the alert", async () => {
    await browser.url(`${BASE_URL}/javascript_alerts`)

    await (await $("button=Click for JS Alert")).click()
    
    if (await browser.isAlertOpen()) {
      await browser.acceptAlert()
    }

    expect(await (await $("p[id='result']")).getText()).toBe("You successfully clicked an alert")
  })

  it("should click 'OK' on the alert", async () => {
    await browser.url(`${BASE_URL}/javascript_alerts`)

    await (await $("button=Click for JS Confirm")).click()
    
    if (await browser.isAlertOpen()) {
      await browser.acceptAlert()
    }

    expect(await (await $("p[id='result']")).getText()).toBe("You clicked: Ok")
  })

  it("should click 'Cancel' on the alert", async () => {
    await browser.url(`${BASE_URL}/javascript_alerts`)

    await (await $("button=Click for JS Confirm")).click()
    
    if (await browser.isAlertOpen()) {
      await browser.dismissAlert()
    }

    expect(await (await $("p[id='result']")).getText()).toBe("You clicked: Cancel")
  })

  it("should accept input in prompt", async () => {
    await browser.url(`${BASE_URL}/javascript_alerts`)

    await (await $("button=Click for JS Prompt")).click()
    
    if (await browser.isAlertOpen()) {
      await browser.sendAlertText("Hello!")
      await browser.acceptAlert()
    }

    expect(await (await $("p[id='result']")).getText()).toBe("You entered: Hello!")
  })

  it("should accept blank input in prompt", async () => {
    await browser.url(`${BASE_URL}/javascript_alerts`)

    await (await $("button=Click for JS Prompt")).click()
    
    if (await browser.isAlertOpen()) {
      await browser.acceptAlert()
    }

    expect(await (await $("p[id='result']")).getText()).toBe("You entered:")
  })

  it("should cancel prompt", async () => {
    await browser.url(`${BASE_URL}/javascript_alerts`)

    await (await $("button=Click for JS Prompt")).click()
    
    if (await browser.isAlertOpen()) {
      await browser.dismissAlert()
    }

    expect(await (await $("p[id='result']")).getText()).toBe("You entered: null")
  })
})