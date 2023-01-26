import * as EC from 'wdio-wait-for'
import LoginPageInstance from '../pageobjects/LoginPage.js'
import FlashMessageInstance from '../pageobjects/FlashMessage.js'

describe("Login tests (with PO)", () => {
  const USERNAME = 'tomsmith'
  const VALID_PASSWORD = 'SuperSecretPassword!'
  const INVALID_PASSWORD = 'bla'

  it("user should be able to login successfully with valid credentials", async () => {
    await LoginPageInstance.open()

    // set username and VALID password 
    // await $('input#username').setValue(USERNAME)
    await LoginPageInstance.setUsername(USERNAME)
    // await $('input#password').setValue(VALID_PASSWORD)
    await LoginPageInstance.setPassword(VALID_PASSWORD)

    // click LOGIN button 
    // await $('button[type="submit"]').click()
    await LoginPageInstance.submit()

    // expect to be navigated to URL /secure
    await browser.waitUntil(EC.urlContains('/secure'))

    // expect SUCCESS message to be in viewport 
    await FlashMessageInstance.waitForSuccess()
    expect(await FlashMessageInstance.getSuccessElement()).toHaveTextContaining('You logged into a secure area!')
  })

  it("user should NOT be able to login with invalid credentials", async () => {
    // await browser.url(`${BASE_URL}/login`)    
    await LoginPageInstance.open()

    // set username and INVALID password 
    await LoginPageInstance.setUsername(USERNAME)
    await LoginPageInstance.setPassword(INVALID_PASSWORD)

    // click LOGIN button 
    await LoginPageInstance.submit()

    // expect ERROR message to be in viewport 
    await FlashMessageInstance.waitForError()
    expect(await FlashMessageInstance.getErrorElement()).toHaveTextContaining('Your password is invalid!')
  })
})
