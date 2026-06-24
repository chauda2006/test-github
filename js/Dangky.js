// Đợi cho toàn bộ trang web (HTML) tải xong xuôi hết thì mới cho phép code JavaScript này chạy
document.addEventListener("DOMContentLoaded", function () {

// Tìm cái form đăng ký theo id="eventForm"
const form = document.getElementById("eventForm");

// Lắng nghe khi người dùng bấm nút "Gửi" hoặc "Đăng ký" (sự kiện submit)
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Chặn không cho trang web bị tải lại (F5) khi vừa bấm nút

    // Xóa sạch các dòng chữ báo lỗi cũ (nếu có) để chuẩn bị kiểm tra lại từ đầu
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("classError").textContent = "";
    document.getElementById("eventError").textContent = "";

    let isValid = true; // Biến dùng làm trọng tài, mặc định ban đầu là coi như form hợp lệ

    // Lấy hết đống chữ người dùng vừa gõ trong các ô nhập liệu (đồng thời xóa khoảng trắng dư thừa ở 2 đầu bằng .trim())
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const lop = document.getElementById("class").value.trim();
    const eventValue = document.getElementById("event").value;
    const note = document.getElementById("note").value.trim();

    // Hai công thức (mẹo) dùng để soi định dạng chuẩn của Email và Số điện thoại (chỉ từ 9 đến 11 số)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{9,11}$/;

    // --- BẮT ĐẦU SOI LỖI ---

    // 1. Kiểm tra họ tên: Nếu bỏ trống
    if (name === "") {
        document.getElementById("nameError").textContent = "Vui lòng nhập họ tên"; // Hiện chữ báo lỗi
        isValid = false; // Trọng tài chấm: Không hợp lệ!
    }

    // 2. Kiểm tra Email: Nếu bỏ trống HOẶC gõ sai định dạng (thiếu chữ @ hoặc dấu chấm)
    if (email === "" || !emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Email không hợp lệ";
        isValid = false;
    }

    // 3. Kiểm tra Số điện thoại: Nếu bỏ trống HOẶC gõ sai (không phải là số, ngắn quá hoặc dài quá)
    if (phone === "" || !phoneRegex.test(phone)) {
        document.getElementById("phoneError").textContent = "SĐT không hợp lệ";
        isValid = false;
    }

    // 4. Kiểm tra Lớp: Nếu bỏ trống
    if (lop === "") {
        document.getElementById("classError").textContent = "Vui lòng nhập lớp";
        isValid = false;
    }

    // 5. Kiểm tra Sự kiện: Nếu chưa bấm chọn sự kiện nào trong danh sách thả xuống
    if (eventValue === "") {
        document.getElementById("eventError").textContent = "Vui lòng chọn sự kiện";
        isValid = false;
    }

    // Nếu trọng tài bảo "Có lỗi" (isValid là false) thì dừng code lại luôn, không cho lưu thông tin
    if (!isValid) return;

    // --- XỬ LÝ LƯU TRỮ KHI KHÔNG CÓ LỖI ---

    //LƯU LOCAL: Lên ổ cứng của trình duyệt lấy danh sách cũ về (nếu chưa có ai đăng ký thì tạo một mảng rỗng [] )
    let list = JSON.parse(localStorage.getItem("dangky")) || [];

    // Nhét thông tin của người vừa đăng ký này vào chung với danh sách cũ
    list.push({
        name: name,
        email: email,
        phone: phone,
        class: lop,
        event: eventValue,
        note: note
    });

    // Cất lại danh sách mới (đã có thêm người này) vào lại ổ cứng trình duyệt (LocalStorage) dưới dạng chuỗi chữ
    localStorage.setItem("dangky", JSON.stringify(list));

    // THÔNG BÁO THÀNH CÔNG
    const success = document.getElementById("successMessage");
    success.style.display = "block"; // Hiện cái hộp thông báo "Đăng ký thành công" lên màn hình

    form.reset(); // Xóa sạch chữ ở các ô nhập liệu để người sau đăng ký

    // Đợi đúng 1,5 giây (1500 mili giây) để người dùng kịp đọc chữ thành công, rồi tự chuyển hướng sang trang Danh sách đăng ký
    setTimeout(() => {
        window.location.href = "Danhsachdangky.html";
    }, 1500);
});

});
