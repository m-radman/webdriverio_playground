import { UserProfile } from "./common/UserProfile.js"

class HoversPage {
  static url: string = "https://the-internet.herokuapp.com/hovers"

  public user1: UserProfile
  public user2: UserProfile
  public user3: UserProfile

  constructor() {
    this.user1 = new UserProfile(1)
    this.user2 = new UserProfile(2)
    this.user3 = new UserProfile(3)
  }

  async open() {
    await browser.url(HoversPage.url)
  }
}

export default new HoversPage()