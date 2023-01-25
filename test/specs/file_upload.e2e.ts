import * as EC from 'wdio-wait-for'

const BASE_URL = "https://the-internet.herokuapp.com"

/**
 * Note: See this example https://webdriver.io/docs/api/browser/uploadFile#example
 */
describe("File upload tests", () => {
  it("user should be able to upload file with wdio's remote upload function", async () => {
    await browser.url(`${BASE_URL}/upload`)

    /**
     * make sure you have some file in repo to use it for upload 
     */
    const filePath = `./assets/images/test.png`
    const remoteFilePath = await browser.uploadFile(filePath)

    const fileUploadInput = $('input#file-upload')
    const fileUploadBtn = $('input#file-submit')

    await fileUploadInput.setValue(remoteFilePath)
    await fileUploadBtn.click()

    const h3 = $('div.example > h3')
    await browser.waitUntil(EC.textToBePresentInElement(h3, "File Uploaded!"))

    const uploadedFile  = $('div.example > div#uploaded-files')
    expect(await uploadedFile.getText()).toBe('test.png')
  })

  it("user should be able to upload file without wdio's remote upload file function ", async () => {
    await browser.url(`${BASE_URL}/upload`)

    /**
     * make sure you have ABSOLUTE path to a file
     */
    const filePath = `${process.cwd()}/assets/images/test.png`

    const fileUploadInput = $('input#file-upload')
    const fileUploadBtn = $('input#file-submit')

    await fileUploadInput.setValue(filePath)
    await fileUploadBtn.click()

    const h3 = $('div.example > h3')
    await browser.waitUntil(EC.textToBePresentInElement(h3, "File Uploaded!"))

    const uploadedFile  = $('div.example > div#uploaded-files')
    expect(await uploadedFile.getText()).toBe('test.png')
  })

  it("user should be able to upload file", async () => {
    await browser.url(`${BASE_URL}/upload`)

    const filePath = `${process.cwd()}/assets/images/test.png`
    const input = await $("#file-upload")

    // attach file 
    await browser.elementSendKeys(input.elementId, filePath)
    // click UPLOAD button 
    await $("#file-submit").click()

    // wait for element to BECOME PRESENT in DOM 
    await $("#uploaded-files").waitForExist()
    // expect element to contain text ie upload to be a success 
    expect(await $("#uploaded-files").getText()).toBe("test.png")
  })
})
