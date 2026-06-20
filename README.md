# WEBSITE TÌM HIỂU & ĐĂNG KÝ SỰ KIỆN

## Giới thiệu

Đây là dự án xây dựng một website giới thiệu và đăng ký tham gia sự kiện bằng **HTML, CSS và JavaScript**.
Website giúp người dùng:

* Tìm hiểu thông tin sự kiện
* Xem quyền lợi khi tham gia
* Biết thông tin diễn giả
* Đăng ký tham gia nhanh chóng
* Xem danh sách người đã đăng ký

---

## Chức năng chính

### 1. Trang chủ (Home)

* Hiển thị banner sự kiện
* Giới thiệu tổng quan
* Nút điều hướng đến các mục khác

---

### ℹ2. Thông tin sự kiện (Information)

* Thời gian, địa điểm tổ chức
* Nội dung chính của sự kiện
* Mô tả chi tiết chương trình

---

### 3. Quyền lợi (Benefits)

* Những lợi ích khi tham gia:

  * Nhận kiến thức mới
  * Giao lưu với chuyên gia
  * Nhận chứng nhận (nếu có)
  * Quà tặng từ ban tổ chức

---

### 🎤 4. Diễn giả (Speakers)

* Danh sách diễn giả
* Hình ảnh và mô tả
* Kinh nghiệm và lĩnh vực chuyên môn

---

### 5. Đăng ký (Registration)

* Form nhập thông tin:

  * Họ tên
  * lớp
  * MSSV
  * Email
  * Số điện thoại
* Kiểm tra dữ liệu bằng JavaScript
* Lưu dữ liệu bằng LocalStorage

---

### 6. Danh sách đăng ký (Registered List)

* Hiển thị danh sách người đã đăng ký
* Có thể:

  * Xóa người đăng ký
  * Cập nhật dữ liệu (nâng cao)

---

## Công nghệ sử dụng

* **HTML**: Xây dựng cấu trúc trang
* **CSS**: Thiết kế giao diện (responsive, đẹp mắt)
* **JavaScript**:

  * Xử lý form
  * Kiểm tra dữ liệu
  * Lưu trữ LocalStorage
  * Hiển thị danh sách đăng ký

---

## Cấu trúc thư mục

```
project/
DEMO/
│
├── css/
│   ├── Danhsachdangky.css
│   └── style.css
│
├── imagesjpg/
│
├── imagesmp4/
│
├── js/
│   ├── Dangky.js
│   ├── Danhsachdangky.js
│   └── script.js
│
├── AI_USAGE.md
├── Dangky.html
├── Danhsachdangky.html
├── Diengia.html
├── index.html
├── Quyenloi.html
├── README.md
└── Sukien.html
```
---

## Cách chạy dự án

1. Tải project về máy
2. Mở file `index.html` bằng trình duyệt
3. Sử dụng các chức năng trên website

---

## Ghi chú

Dữ liệu đăng ký được lưu bằng **LocalStorage**, không dùng database
Có thể mở rộng:

  * Kết nối backend (PHP, NodeJS)
  * Thêm đăng nhập người dùng
  * Gửi email xác nhận

---

## Tác giả

* Sinh viên thực hành HTML, CSS, JavaScript
* Mục tiêu: xây dựng website sự kiện hoàn chỉnh

---

## Định hướng phát triển

* Thiết kế giao diện chuyên nghiệp hơn
* Thêm animation (CSS/JS)
* Tối ưu trải nghiệm người dùng (UX/UI)

---

