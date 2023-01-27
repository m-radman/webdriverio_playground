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
import AlertBox from "../pageobjects/common/AlertBox.js"
import ConfirmationBox from "../pageobjects/common/ConfirmationBox.js"
import PromptBox from "../pageobjects/common/PromptBox.js"

describe("JS Alerts tests with Page Objects ", () => {
  it("should click on alert", async () => {
    await AlertsPageInstance.open()

    // trigger alert 
    await AlertsPageInstance.triggerAlert()
    await AlertBox.waitForPresent()
    // accept alert 
    await AlertBox.accept()
    // wait for alert gonne 
    await AlertBox.waitForAbsent()

    // expect result
    expect(await AlertsPageInstance.getResult()).toBe("You successfully clicked an alert")
  })

  it("should click 'OK' on alert", async () => {
    await AlertsPageInstance.open()

    // trigger confirmation 
    await AlertsPageInstance.triggerConfirmAlert()

    // handle confirmation with OK
    await ConfirmationBox.waitForPresent()
    await ConfirmationBox.accept()
    await ConfirmationBox.waitForAbsent()

    // expect result 
    expect(await AlertsPageInstance.getResult()).toBe("You clicked: Ok")
  })

  it("should click 'Cancel' on alert", async () => {
    await AlertsPageInstance.open()

    // trigger confirmation 
    await AlertsPageInstance.triggerConfirmAlert()

    // handle confirmation with CANCEL
    await ConfirmationBox.waitForPresent()
    await ConfirmationBox.dismiss()
    await ConfirmationBox.waitForAbsent()

    // expect result 
    expect(await AlertsPageInstance.getResult()).toBe("You clicked: Cancel")
  })  

  it("should enter text in prompt and confirm", async () => {
    await AlertsPageInstance.open()

    // trigger prompt 
    await AlertsPageInstance.triggerPromptAlert()

    // handle alert with prompt 
    await PromptBox.waitForPresent()
    await PromptBox.send("Hello!")
    await PromptBox.accept()
    await PromptBox.waitForAbsent()

    // expect result 
    expect(await AlertsPageInstance.getResult()).toBe("You entered: Hello!")
  })

  it("should accept blank prompt", async () => {
    await AlertsPageInstance.open()

    // trigger 
    await AlertsPageInstance.triggerPromptAlert()

    // handle alert with prompt 
    await PromptBox.waitForPresent()
    await PromptBox.accept()
    await PromptBox.waitForAbsent()

    // expect result 
    expect(await AlertsPageInstance.getResult()).toBe("You entered:")
  })

  it("should cancel prompt", async () => {
    await AlertsPageInstance.open()

    // trigger 
    await AlertsPageInstance.triggerPromptAlert()


    // handle alert with prompt 
    await PromptBox.waitForPresent()
    await PromptBox.dismiss()
    await PromptBox.waitForAbsent()

    // expect result 
    expect(await AlertsPageInstance.getResult()).toBe("You entered: null")
  })
})