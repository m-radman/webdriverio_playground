class SecurePage {
  public static SECURE_URL: string = "https://the-internet.herokuapp.com/secure"
  private logOutButton: string 

  constructor() {
    this.logOutButton = 'a[href="/logout"]'

    console.log('INFO: new instance of SecurePage was just created')
  }

  async open() {
    await browser.url(SecurePage.SECURE_URL)
  }

  async logout() {
    await $(this.logOutButton).click()
  }
}

const singletonInstance = new SecurePage()
export default singletonInstance