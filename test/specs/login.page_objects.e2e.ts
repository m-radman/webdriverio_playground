// import * as EC from 'wdio-wait-for'
// use as EC.urlContains
// is equivalent with 
import { urlContains } from 'wdio-wait-for'
// and use as urlContains (^^ named import)

import LoginPageInstance from '../pageobjects/LoginPage.js'
import { FlashMessage, MessageType } from '../pageobjects/common/FlashMessage.js'

describe("Login tests (with PO)", () => {
  const USERNAME = 'tomsmith'
  const VALID_PASSWORD = 'SuperSecretPassword!'
  const INVALID_PASSWORD = 'bla'

  const successMessage = new FlashMessage(MessageType.Success)
  const errorMessage = new FlashMessage('error' as MessageType)

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
    await browser.waitUntil(urlContains('/secure'))

    // expect SUCCESS message to be in viewport 
    await successMessage.waitForPresent()
    expect(await successMessage.getElement()).toHaveTextContaining('You logged into a secure area!')
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
    await errorMessage.waitForPresent()
    expect(await errorMessage.getElement()).toHaveTextContaining('Your password is invalid!')

    // HA! 
    // uncomment to reproduce "element click intercepted" error 
    // await errorMessage.closeMessage()
    // await errorMessage.waitForGonne()
  })
})
