// ================= HÀM ĐỔ DỮ LIỆU VÀO BẢNG =================
function loadData() {
    // Lên ổ cứng trình duyệt bốc danh sách "dangky" về, nếu chưa có ai thì cho nó là mảng rỗng []
    let list = JSON.parse(localStorage.getItem("dangky")) || [];
    let html = ""; // Tạo một chuỗi rỗng để chuẩn bị gom các hàng của bảng

    // Duyệt qua từng người trong danh sách để tạo ra các hàng (<tr>) và cột (<td>)
    list.forEach((item, index) => {
        html += `
        <tr>
            <td>${index + 1}</td> <!-- Số thứ tự (tính từ 1 trở đi vì index chạy từ 0) -->
            <td>${item.name}</td>  <!-- In họ tên -->
            <td>${item.email}</td> <!-- In email -->
            <td>${item.phone}</td> <!-- In số điện thoại -->
            <td>${item.class}</td> <!-- In tên lớp -->
            <td>${item.event}</td> <!-- In tên sự kiện đã chọn -->
            <td>${item.note}</td>  <!-- In ghi chú kèm theo -->
            <td>
                <!-- Nút xóa: Khi bấm vào sẽ gọi hàm deleteOne() và truyền số vị trí (index) của người này vào -->
                <button onclick="deleteOne(${index})" style="background:green;color:white;">
                    Xóa
                </button>
            </td>
        </tr>
        `;
    });

    // Sau khi gom đủ các hàng, đổ toàn bộ đống code HTML này vào trong thẻ có id="list" (thường là thẻ <tbody> của bảng)
    document.getElementById("list").innerHTML = html;
}

// ================= HÀM XÓA MỘT NGƯỜI =================
function deleteOne(index) {
    // Bốc danh sách hiện tại từ ổ cứng trình duyệt về
    let list = JSON.parse(localStorage.getItem("dangky")) || [];
    
    // Cắt bỏ đúng 1 phần tử tại vị trí (index) được chọn
    list.splice(index, 1);
    
    // Lưu lại danh sách mới (đã mất đi người vừa xóa) vào lại ổ cứng trình duyệt
    localStorage.setItem("dangky", JSON.stringify(list));
    
    // Gọi lại hàm loadData() để bảng tự cập nhật lại giao diện ngay lập tức mà không cần F5
    loadData();
}

// ================= HÀM XÓA SẠCH SÀNH SANH =================
function clearAll() {
    // Xóa bỏ hoàn toàn cái hộp dữ liệu mang tên "dangky" trên trình duyệt
    localStorage.removeItem("dangky");
    
    // Gọi lại hàm loadData() để bảng xóa sạch hết các hàng, trở về trạng thái trống rỗng
    loadData();
}

// ================= CHẠY LẦN ĐẦU TIÊN =================
// Vừa mở trang "Danhsachdangky.html" lên là nó tự động lôi dữ liệu ra in thành bảng luôn
loadData();
