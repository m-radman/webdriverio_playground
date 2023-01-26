import * as EC from 'wdio-wait-for'

describe("Login tests", () => {
  const BASE_URL = "https://the-internet.herokuapp.com"

  const USERNAME = 'tomsmith'
  const VALID_PASSWORD = 'SuperSecretPassword!'
  const INVALID_PASSWORD = 'bla'

  it("user should be able to login successfully with valid credentials", async () => {
    await browser.url(`${BASE_URL}/login`)    

    // set username and VALID password 
    await $('input#username').setValue(USERNAME)
    await $('input#password').setValue(VALID_PASSWORD)

    // click LOGIN button 
    await $('button[type="submit"]').click()

    // expect to be navigated to URL /secure
    await browser.waitUntil(EC.urlContains('/secure'))

    // expect SUCCESS message to be in viewport 
    await $('div#flash-messages > div[class="flash success"]').waitForDisplayed()
    expect(await $('div#flash-messages > div[class="flash success"]')).toHaveTextContaining('You logged into a secure area!')
  })

  it("user should NOT be able to login with invalid credentials", async () => {
    await browser.url(`${BASE_URL}/login`)    

    // set username and INVALID password 
    await $('input#username').setValue(USERNAME)
    await $('input#password').setValue(INVALID_PASSWORD)

    // click LOGIN button 
    await $('button[type="submit"]').click()

    // expect ERROR message to be in viewport 
    await $('div#flash-messages > div[class="flash error"]').waitForDisplayed()
    expect(await $('div#flash-messages > div[class="flash error"]')).toHaveTextContaining('Your password is invalid!')
  })
})
