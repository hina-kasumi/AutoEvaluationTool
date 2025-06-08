import { NON_COMPLETE_SUBJECT, URL } from "../init.js";
import send from "../sendRequest.js";
import { getElements } from "./driver.js";

export default async function loadSurvey(driver) {
  await driver.sleep(5000);
  await driver.get(URL);
  await driver.sleep(5000);

  getElements(driver, NON_COMPLETE_SUBJECT).then((arr) => {
    arr.forEach(async (val) => {
      const x = await val.getAttribute("value");
      await send(x);
    });
  });
}
