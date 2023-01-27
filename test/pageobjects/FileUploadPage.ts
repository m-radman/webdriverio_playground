import * as EC from 'wdio-wait-for'

class FileUploadPage {
  static url: string = "https://the-internet.herokuapp.com/upload"

  filePath: string
  private fileUploadInput: string
  private fileUploadButton: string
  private uploadedFile: string
  private uploadInfo: string

  constructor() {
    this.filePath = `${process.cwd()}/assets/images/test.png`
    this.fileUploadInput = "#file-upload"
    this.fileUploadButton = "#file-submit"
    this.uploadedFile = "#uploaded-files"
    this.uploadInfo = ".example > h3"
  }

  async open() {
    await browser.url(FileUploadPage.url)
  }

  async attachFile() {
    await $(this.fileUploadInput).setValue(this.filePath)
  }

  async uploadFile() {
    await $(this.fileUploadButton).click()
  }

  async confirmUpload() {
    await browser.waitUntil(EC.presenceOf(this.uploadInfo))
  }

  async getUploadedFileName(): Promise<string> {
    return $(this.uploadedFile).getText()
  }
}

export default new FileUploadPage()