import { PHPSESSID } from "./init.js";

// Gửi POST request

export default async function send(
  url,
  lophocphan = "",
  names = new Set(),
  sessId = ""
) {
  //   console.log(lophocphan, sessId);
  const formData = new URLSearchParams();
  formData.append("lophocphan", lophocphan);

  // Gửi điểm cho từng tiêu chí (sử dụng giá trị từ payload bạn đã bắt được)
  let i = 0;
  const lastIndex = names.size - 1;

  for (const name of names) {
    const value = i === lastIndex ? "4" : "3";
    console.log(name);
    formData.append(name, value);
    i++;
  }
  formData.append("btnupdate", "Hoàn thành");
  console.log(sessId);
  // console.log(formData);

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Cookie: PHPSESSID + "=" + sessId,
      // Cookie không cần thêm nếu đang chạy trong trình duyệt đã đăng nhập
    },
    body: formData.toString(),
  })
    .then((response) => response.text())
    .then((result) => {
      console.log("Đánh giá thành công:", lophocphan);
    })
    .catch((error) => {
      console.error("Lỗi khi gửi đánh giá:", lophocphan);
    });
}
