import { EMAIL, LOGIN_URL, PASSWORD, PHPSESSID, setSessId } from "../init.js";
import driver, { getElement } from "./driver.js";
import loadSurvey from "./survey.js";

await driver.get(LOGIN_URL);
// driver
//   .findElements(By.css(css_selector))
//   .then((val) => val.forEach((i) => i.getAttribute("value").then((v) => val)));
console.log(EMAIL, PASSWORD);

await getElement(driver, "input[type=email]").then((val) =>
  val.sendKeys(EMAIL)
);
await getElement(driver, "input[type=password]").then((val) =>
  val.sendKeys(PASSWORD)
);
await getElement(driver, "input[type=submit]").then((val) => val.click());
await driver.sleep(3000); 
await getElement(driver, "input[type=submit]").then((val) => val.click());
await getElement(driver, "#idBtn_Back")
  .then((val) => val.click())
  .then(() => {});

await driver.sleep(5000); 
await driver
  .manage()
  .getCookie(PHPSESSID)
  .then((cookie) => {
    const val = cookie.value;
    console.log(val);
    setSessId(val);
    loadSurvey(driver);
  });
