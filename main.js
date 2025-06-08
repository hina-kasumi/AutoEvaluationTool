import { getName, getLopHocPhan } from "./Driver/survey.js";
import driver from "./Driver/driver.js";
import { getSessId } from "./Driver/session.js";
import send from "./sendRequest.js";
import dotenv from "dotenv";

const result = dotenv.config();

if (result.error) {
  console.error("Lỗi khi đọc file .env:", result.error);
  throw result.error; // Dừng chương trình nếu không đọc được .env
}

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;
const URL = process.env.URL;

try {
  const sessId = await getSessId(driver, EMAIL, PASSWORD);

  await driver.sleep(5000);
  await driver.get(URL);
  await driver.sleep(5000);

  const lophocphan = (await getLopHocPhan(driver)) || [];
  const names = await getName(driver);

  lophocphan.forEach(async (lop) => {
    await send(URL, lop, names, sessId);
  });
} catch (error) {
  console.error("Lỗi:", error);
} finally {
  await driver.quit();
}
