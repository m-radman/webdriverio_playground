import * as EC from 'wdio-wait-for'

class FileUploadPage {
  static url: string = "https://the-internet.herokuapp.com/upload"
  static filePath: string = `${process.cwd()}/assets/images/test.png`

  private fileUploadInput: string
  private fileUploadButton: string
  private uploadedFile: string
  private successInfo: string

  constructor() {
    this.fileUploadInput = "#file-upload"
    this.fileUploadButton = "#file-submit"
    this.uploadedFile = "#uploaded-files"
    this.successInfo = ".example > h3"
  }

  async open() {
    await browser.url(FileUploadPage.url)
  }

  async attachFile(fPath: string = FileUploadPage.filePath) {
    await $(this.fileUploadInput).setValue(fPath)
  }

  async uploadFile() {
    await $(this.fileUploadButton).click()
  }

  async waitSuccesfulUpload() {
    await browser.waitUntil(EC.presenceOf(this.successInfo))
  }

  async getUploadedFileName(): Promise<string> {
    return $(this.uploadedFile).getText()
  }
}

export default new FileUploadPage()