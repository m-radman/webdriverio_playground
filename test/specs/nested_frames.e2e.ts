import * as EC from 'wdio-wait-for'

const BASE_URL = "https://the-internet.herokuapp.com"

describe("Nested Frames tests", () => {
  /**
   * Test Steps: 
    - go to url [https://the-internet.herokuapp.com/nested_frames](https://the-internet.herokuapp.com/nested_frames)
    - expect `bottom-frame` to be in DOM
    - switch context to `bottom-frame`
    - get text from `body` of the embedded html document and expect it to be equal to “BOTTOM”
    - switch context back to root html document
   */
  it("user should be able to switch to BOTTOM frame", async () => {
    await browser.url(`${BASE_URL}/nested_frames`)

    const frameEl = await $('frame[name="frame-bottom"]')

    // make sure that frame html element is in fact in DOM
    await frameEl.waitForExist()

    // switch context from root to frame-bottom
    await browser.switchToFrame(frameEl)

    // expect that frame is in context / in webdriver's focus
    expect(await $('body').getText()).toBe("BOTTOM")
    
    // switch context back to root 
    await browser.switchToFrame(null)
  })

  /**
    Test Steps: 
    - go to url [https://the-internet.herokuapp.com/nested_frames](https://the-internet.herokuapp.com/nested_frames)
    - expect `top-frame` to be in DOM
    - switch context to `top-frame`
    - expect `left-frame` to be in DOM
    - switch context to `left-frame`
    - get text from `body` of the embedded html document and expect it to be equal to “LEFT”
    - switch context back to root html document
   */
  it("user should be able to switch to LEFT frame nested inside TOP frame", async () => {
    await browser.url(`${BASE_URL}/nested_frames`)

    // switch context from root to frame-top
    const frameTop = await $('frame[name="frame-top"]')
    await frameTop.waitForExist()
    await browser.switchToFrame(frameTop)

    // switch context from frame-top to frame-left
    const frameLeft = await $('frame[name="frame-left"]')
    await frameLeft.waitForExist()
    await browser.switchToFrame(frameLeft)

    // expect that frame is in context / in webdriver's focus
    expect(await $('body').getText()).toBe("LEFT")
    
    // switch context back to root 
    await browser.switchToFrame(null)
  })
})
