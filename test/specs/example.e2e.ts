import LoginPage from "../pageobjects/login.page.js"
import SecurePage from "../pageobjects/secure.page.js"

// NOTE: xdescribe -> meaning this test is disabled 
// Why disabled? We don't want to run the example one from webdriver.io
xdescribe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.open()

    await LoginPage.login("tomsmith", "SuperSecretPassword!")
    await expect(SecurePage.flashAlert).toBeExisting()
    await expect(SecurePage.flashAlert).toHaveTextContaining(
      "You logged into a secure area!"
    )
  })
})
