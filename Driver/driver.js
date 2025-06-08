import { Browser, Builder, By, until } from "selenium-webdriver";

const driver = await new Builder().forBrowser(Browser.EDGE).build();
export default driver;

// Hàm getElement sử dụng wait + until
export async function getElement(driver, cssSelector, timeout = 5000) {
  return await driver.wait(
    until.elementLocated(By.css(cssSelector)),
    timeout,
    `Element "${cssSelector}" not found within ${timeout}ms`
  );
}

export async function getElements(driver, cssSelector, timeout = 5000) {
  // Chờ phần tử đầu tiên xuất hiện
  await driver.wait(
    until.elementLocated(By.css(cssSelector)),
    timeout,
    `Element(s) with selector "${cssSelector}" not found within ${timeout}ms`
  );

  // Khi đã xác định phần tử tồn tại, lấy tất cả matching elements
  const elements = await driver.findElements(By.css(cssSelector));

  if (!elements.length) {
    throw new Error(`No elements found for selector: "${cssSelector}"`);
  }

  console.log({ [cssSelector]: elements });
  return elements;
}
