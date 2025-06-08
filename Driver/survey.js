import { NON_COMPLETE_SUBJECT } from "../init.js";
import { getElements } from "./driver.js";

export async function getLopHocPhan(driver) {
  const elems = await getElements(driver, NON_COMPLETE_SUBJECT);
  if (!elems || elems.length === 0) return [];
  
  const values = await Promise.all(
    elems.map((val) => val.getAttribute("value"))
  );
  return values.filter(Boolean); // nếu cần lọc giá trị null/undefined
}

export async function getName(driver) {
  const elems = await getElements(driver, "input[type=radio]");
  const namesArray = await Promise.all(
    elems.map((val) => val.getAttribute("name"))
  );
  return new Set(namesArray.filter(Boolean));
}
