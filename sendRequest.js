import { getSessId, PHPSESSID, URL } from "./init.js";

// Gửi POST request

export default async function send(lophocphan = "") {
  const sessId = getSessId();
//   console.log(lophocphan, sessId);
  const formData = new URLSearchParams();
  formData.append("lophocphan", lophocphan);

  // Gửi điểm cho từng tiêu chí (sử dụng giá trị từ payload bạn đã bắt được)
  formData.append("4882", "3");
  formData.append("4883", "3");
  formData.append("4884", "3");
  formData.append("4885", "3");
  formData.append("4886", "3");
  formData.append("4887", "3");
  formData.append("4888", "3");
  formData.append("4889", "3");
  formData.append("4890", "3");
  formData.append("4891", "3");
  formData.append("4892", "3");
  formData.append("4893", "3");
  formData.append("4894", "3");
  formData.append("4895", "3");
  formData.append("4896", "3");
  formData.append("4897", "3");
  formData.append("4898", "3");
  formData.append("4899", "3");
  formData.append("4900", "3");
  formData.append("4901", "3");
  formData.append("4902", "4");
  formData.append("btnupdate", "Hoàn thành");

  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Cookie": PHPSESSID + "=" + sessId,
      // Cookie không cần thêm nếu đang chạy trong trình duyệt đã đăng nhập
    },
    body: formData.toString(),
  })
    .then((response) => response.text())
    .then((result) => {
      console.log("Đánh giá thành công:");
    })
    .catch((error) => {
      console.error("Lỗi khi gửi đánh giá:");
    });
}
