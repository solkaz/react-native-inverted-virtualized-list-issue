import { by, expect, element, device } from "detox";

describe("Example", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("can scroll a normal list", async () => {
    const invertedList = element(by.id("invertedList"));
    await expect(invertedList).toExist();
    await expect(element(by.id("inverted-0"))).toBeVisible();
    await invertedList.scrollTo("top");
    await expect(element(by.id("inverted-0"))).toBeNotVisible();
  });

  it("can scroll an uninverted list", async () => {
    const uninvertedList = element(by.id("uninvertedList"));
    await expect(uninvertedList).toExist();
    await expect(element(by.id("uninverted-0"))).toBeVisible();
    await uninvertedList.scrollTo("top");
    await expect(element(by.id("uninverted-0"))).toBeNotVisible();
  });
});
