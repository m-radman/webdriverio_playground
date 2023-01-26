import { ChainablePromiseElement } from "webdriverio"

class LoginPage {
  // public static => globalna konstanta na Klasi 
  public static url: string = 'https://the-internet.herokuapp.com/login'

  // public & private 
  private usernameInput: string 
  private passwordInput: string 
  private submitButton: string 

  constructor() {
    this.usernameInput = 'input#username'
    this.passwordInput = 'input#password'
    this.submitButton =  'button[type="submit"]'

    console.log('INFO: new instance of LoginPage was just created')
  }

  public async open() {
    await browser.url(LoginPage.url)
  }

  public async setUsername(value) {
    await $(this.usernameInput).setValue(value)
  }

  public async setPassword(value) {
    await $(this.passwordInput).setValue(value)
  }

  public async submit() {
    await $(this.submitButton).click()
  }
}

// Singleton (Design Pattern) 
const singletonInstance = new LoginPage()

// Obezbedjujemo da postoji samo jedna jedina instanca 
// klase LoginPage u sistemu 
// ie jedna instanca tipa LoginPage u runtime-u

export default singletonInstance