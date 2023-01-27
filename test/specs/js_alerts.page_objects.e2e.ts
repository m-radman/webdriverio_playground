/*Steps:
    Scenario1:
    1. go to https://the-internet.herokuapp.com/javascript_alerts
    2. click JS Alert button
    3. expect alert to show up
    4. confirm alert
    5. expect result paragraph to have specific text

    Scenario2:
    1. go to https://the-internet.herokuapp.com/javascript_alerts
    2. click JS Confirm button
    3. expect alert to show up
    4. confirm alert/cancel alert
    5. expect result paragraph to have specific text
    
    Scenario3:
    1. go to https://the-internet.herokuapp.com/javascript_alerts
    2. click JS Prompt button
    3. expect alert to show up
    4. input text in prompt and confirm/confirm prompt whithout input/cancel prompt
    5. expect result paragraph to have specific text
*/
import AlertsPageInstance from "../pageobjects/AlertsPage.js"

describe("JS Alerts tests with Page Objects ", () => {
  it("should click on alert", async () => {
    await AlertsPageInstance.open()

    await AlertsPageInstance.triggerAlert()
    await AlertsPageInstance.waitForAlert()
    await browser.acceptAlert()
    expect(await AlertsPageInstance.getResult()).toBe("You successfully clicked an alert")
  })

  it("should click 'OK' on alert", async () => {
    await AlertsPageInstance.open()

    await AlertsPageInstance.triggerConfirmAlert()
    await AlertsPageInstance.waitForAlert()
    await browser.acceptAlert()
    expect(await AlertsPageInstance.getResult()).toBe("You clicked: Ok")
  })

  it("should click 'Cancel' on alert", async () => {
    await AlertsPageInstance.open()

    await AlertsPageInstance.triggerConfirmAlert()
    await AlertsPageInstance.waitForAlert()
    await browser.dismissAlert()
    expect(await AlertsPageInstance.getResult()).toBe("You clicked: Cancel")
  })  

  it("should enter text in prompt and confirm", async () => {
    await AlertsPageInstance.open()

    await AlertsPageInstance.triggerPromptAlert()
    await AlertsPageInstance.waitForAlert()
    await browser.sendAlertText("Hello!")
    await browser.acceptAlert()
    expect(await AlertsPageInstance.getResult()).toBe("You entered: Hello!")
  })

  it("should accept blank prompt", async () => {
    await AlertsPageInstance.open()

    await AlertsPageInstance.triggerPromptAlert()
    await AlertsPageInstance.waitForAlert()
    await browser.acceptAlert()
    expect(await AlertsPageInstance.getResult()).toBe("You entered:")
  })

  it("should cancel prompt", async () => {
    await AlertsPageInstance.open()

    await AlertsPageInstance.triggerPromptAlert()
    await AlertsPageInstance.waitForAlert()
    await browser.dismissAlert()
    expect(await AlertsPageInstance.getResult()).toBe("You entered: null")
  })
})