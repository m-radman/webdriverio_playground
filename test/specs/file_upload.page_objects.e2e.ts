/*Steps:
    1. go to https://the-internet.herokuapp.com/upload
    2. atach file for upload to file upload input
    3. click upload button
    4. expect div with the name of uploaded file to appear
*/

import FileUploadPageInstance from "../pageobjects/FileUploadPage.js"

describe("File upload test with Page Objects", () => {
  it("should be able to upload file", async () => {
    await FileUploadPageInstance.open()

    await FileUploadPageInstance.attachFile()
    await FileUploadPageInstance.uploadFile()
    await FileUploadPageInstance.waitSuccesfulUpload()
    expect(await FileUploadPageInstance.getUploadedFileName()).toBe("test.png")
  })
})