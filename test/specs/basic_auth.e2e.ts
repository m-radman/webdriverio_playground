import * as EC from "wdio-wait-for"
import { Key } from "webdriverio"

const BASE_URL = "https://the-internet.herokuapp.com"

/**
 * Title: `basic auth happy path  test`
   Test Steps: 
    - go to url "https://the-internet.herokuapp.com/basic_auth"
    - expect alert box to be in viewport
    - input valid credentials username "admin" and  password "admin"
    - click "Sign in" button
    - expect to see text strictly equal to "Congratulations! You must have the proper credentials."
 */
// NEEDS-FIX alertIsPresent condition does not work for some reason
// TODO: investigate why and how to fix it
xdescribe("Basic Auth happy path test", () => {
  it("should pass basic auth with valid credentials", async () => {
    // step1 go to url
    await browser.url(`${BASE_URL}/basic_auth`)

    // step2 wait for alert present
    await browser.waitUntil(EC.alertIsPresent())

    // step3 input credentials (= send text to prompt)
    await browser.sendAlertText("admin")
    await browser.sendAlertText(Key.Tab)
    await browser.sendAlertText("admin")

    // step4 click sign in (= accept alert)
    await browser.acceptAlert()

    // step5 expect basic auth passed successfully "Congratulations!" text
    await browser.waitUntil(
      EC.textToBePresentInElement(
        $("div#content > div.example > p"),
        "Congratulations! You must have the proper credentials."
      )
    )
  })
})
