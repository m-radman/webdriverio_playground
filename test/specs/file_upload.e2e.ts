import * as EC from 'wdio-wait-for'

const BASE_URL = "https://the-internet.herokuapp.com"

/**
 * Note: See this example https://webdriver.io/docs/api/browser/uploadFile#example
 */
describe("File upload tests", () => {
  it("user should be able to upload file", async () => {
    await browser.url(`${BASE_URL}/upload`)

    /**
     * make sure you have some file in repo to use it for upload 
     */
    const filePath = './assets/images/test.png'
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

  // todo - find another way to do file upload 
  // without using uploadFile function 
  // https://webdriver.io/docs/api/browser/uploadFile#example

  // hint - sendKeys to input of type "file" ?? 
})
