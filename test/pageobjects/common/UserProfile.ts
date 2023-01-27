
export class UserProfile {
  private userImage: string
  private userName: string
  private viewProfileLink: string

  constructor(n: number) {
    this.userImage = `.figure:nth-of-type(${n})>img[src='/img/avatar-blank.jpg']`
    this.userName = `.figure:nth-of-type(${n})>.figcaption>h5`
    this.viewProfileLink = `.figure:nth-of-type(${n})>.figcaption>a`
  }

  async hover() {
    await $(this.userImage).moveTo()
  }

  async isDisplayed(): Promise<boolean> {
    return $(this.userName).isDisplayedInViewport()
  }

  async getName(): Promise<string> {
    return $(this.userName).getText()
  }

  async goToProfile() {
    await $(this.viewProfileLink).click()
  }
}