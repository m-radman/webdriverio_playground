
describe("drag & drop tests", () => {
  const BASE_URL = "https://the-internet.herokuapp.com"

  it("should be able to drag the box A and drop it in place of the box B", async () => {
    await browser.url(`${BASE_URL}/drag_and_drop`)
    const boxA = await $("#columns > #column-a > header")
    const boxB = await $("#columns > #column-b > header")

    expect(await boxA.getText()).toBe("A")
    expect(await boxB.getText()).toBe("B")

    await boxA.dragAndDrop(boxB)
    expect(await boxA.getText()).toBe("B")
    expect(await boxB.getText()).toBe("A")
  })
})