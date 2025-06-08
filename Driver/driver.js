import { Browser, Builder } from "selenium-webdriver";
import { By } from "selenium-webdriver";

const driver = await new Builder().forBrowser(Browser.EDGE).build();
export default driver 


export async function getElement(driver, css_selector = "") {
  let element = [];
  while (!element.length) {
    element = await driver.findElements(By.css(css_selector));
  }

  console.log({ [css_selector]: element });

  return element[0];
}

export async function getElements(driver, css_selector = "") {
  let element = [];
  while (!element.length) {
    element = await driver.findElements(By.css(css_selector));
  }

  console.log({ [css_selector]: element });

  return element;
}
