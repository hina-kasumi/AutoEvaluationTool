# Công Cụ Tự Động Đánh Giá Giảng Viên Trường Đại Học Giao Thông Vận Tải

Công cụ này tự động hóa quá trình đánh giá giảng viên tại Trường Đại học Giao thông Vận tải với trình duyệt Microsoft Edge. Làm theo các bước dưới đây để cài đặt và sử dụng công cụ.

## Yêu Cầu Cần Thiết
- Git đã được cài đặt trên máy tính
- Node.js (phiên bản 22 hoặc cao hơn)
- Trình duyệt Microsoft Edge đã được cài đặt

## Hướng Dẫn Cài Đặt và Sử Dụng

### Bước 1: Tải Dự Án Về
Tải dự án về máy tính của bạn bằng lệnh:
```bash
git clone <đường-dẫn-repository>
```

### Bước 2: Cài Đặt Node.js
Tải và cài đặt Node.js phiên bản 22 hoặc cao hơn từ trang web chính thức:  
[Tải Node.js](https://nodejs.org/en/download/)

### Bước 3: Cấu Hình Biến Môi Trường
- Đổi tên file `env-sample` thành `.env`.
- Mở file `.env` và điền các thông tin cần thiết:
  - `EMAIL`: Email đăng đăng nhập vào hệ thống đánh giá
  - `PASSWORD`: Mật khẩu đăng nhập của bạn
  - `URL`: Đường dẫn URL đến trang đánh giá giảng viên
- Ví dụ nội dung file `.env`:
  ```
  EMAIL=your_email@example.com
  PASSWORD=your_password
  URL=https://evaluation-page.example.com
  ```

### Bước 4: Chạy Công Cụ
- Mở cửa sổ dòng lệnh (terminal) trong thư mục chứa file `main.js`.
- Chạy một trong hai lệnh sau để khởi động công cụ:
  ```bash
  npm run start
  ```
  hoặc
  ```bash
  node main.js
  ```

### Bước 5: Chờ Hoàn Thành
- Công cụ sẽ mở một cửa sổ trình duyệt Microsoft Edge và bắt đầu quá trình đánh giá.
- **Không thao tác** trên cửa sổ trình duyệt Edge khi công cụ đang chạy.
- Để công cụ chạy ngầm cho đến khi hoàn tất.

## Lưu Ý
- **Cửa Sổ Trình Duyệt**: Một cửa sổ trình duyệt Edge sẽ hiện lên trong quá trình chạy. Không nhấp chuột, nhập liệu hoặc đóng cửa sổ này.
- **Không Làm Gián Đoạn**: Tránh dừng chương trình đột ngột. Hãy để công cụ chạy hết quá trình.
- **Xử Lý Lỗi**: Nếu thấy lỗi trong cửa sổ dòng lệnh, hãy kiểm tra:
  - **Mạng**: Đảm bảo kết nối internet ổn định. Mạng yếu có thể khiến công cụ không chạy đúng.
  - **Thông Tin Đăng Nhập**: Xác minh `EMAIL`, `PASSWORD` và `URL` trong file `.env` đã chính xác.
- **Bảo Mật**: Không chia sẻ file `.env` hoặc đưa nó lên hệ thống quản lý phiên bản. Thêm `.env` vào file `.gitignore`.

## Khắc Phục Sự Cố
- Nếu công cụ không chạy, kiểm tra thông báo lỗi trong cửa sổ dòng lệnh.
- Các vấn đề thường gặp:
  - Email hoặc mật khẩu không đúng
  - URL không hợp lệ
  - Kết nối mạng không ổn định
- Chạy lại công cụ sau khi sửa các lỗi.