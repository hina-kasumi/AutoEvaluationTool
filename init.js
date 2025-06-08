export const EMAIL = "@lms.utc.edu.vn";
export const PASSWORD = "";
export const LOGIN_URL = "https://sis.utc.edu.vn/login.php";
export const URL = "";
export const PHPSESSID = "PHPSESSID";
export const NON_COMPLETE_SUBJECT = ".non-completed-subject";
export const lophocphan = [];
let sessId;

export function setSessId(newsessId = "") {
  sessId = newsessId;
}

export const getSessId = () => {
  return sessId;
};
