import login from "./login.js";

let sessId;

export function setSessId(newsessId = "") {
  sessId = newsessId;
}

export const getSessId = async (driver, email, password) => {
  if (sessId) {
    return sessId;
  }
  return await login(driver, email, password);
};
