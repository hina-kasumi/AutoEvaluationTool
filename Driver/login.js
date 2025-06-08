import { LOGIN_URL, PHPSESSID } from "../init.js";
import { getElement } from "./driver.js";

export default async function login(driver, email, password) {
  await driver.get(LOGIN_URL);

  await getElement(driver, "input[type=email]").then((val) =>
    val.sendKeys(email)
  );
  await getElement(driver, "input[type=password]").then((val) =>
    val.sendKeys(password)
  );
  await getElement(driver, "input[type=submit]").then((val) => val.click());

  await driver.sleep(3000);
  await getElement(driver, "input[type=submit]").then((val) => val.click());
  await driver.sleep(3000);
  await getElement(driver, "#idBtn_Back")
    .then((val) => val.click())
    .catch(() => console.log("Not found #idBtn_Back"));

  await driver.sleep(5000);
  const cookie = await driver.manage().getCookie(PHPSESSID);
  return cookie ? cookie.value : "";
}
