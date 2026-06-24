/* đây là đoạn chuyển động của nền */
const stars = document.querySelectorAll(".stars");

document.addEventListener("mousemove", e => {

    let x = e.clientX / innerWidth;
    let y = e.clientY / innerHeight;

    stars.forEach((star, index) => {

        let speed = (index + 1) * 20;

        star.style.transform =
            `translate(${x * speed}px, ${y * speed}px)`;

    });

});

/*phần giới thệu============================*/
function showDetail(name){
    // Tìm thẻ có id="title" và đổi nội dung chữ bên trong thành tên của sự kiện được truyền vào
    document.getElementById("title").innerText = name;
   // Tìm thẻ hộp thoại có id="modal" và đổi trạng thái hiển thị thành "block" để hiện hộp thoại lên màn hình
    document.getElementById("modal").style.display = "block";
}

function closeModal(){
    document.getElementById("modal").style.display = "none";
}
// Lắng nghe sự kiện người dùng nhấp chuột ở bất kỳ đâu trên màn hình trình duyệt
window.onclick = function(event){
    // Lấy thẻ hộp thoại có id="modal" để kiểm tra vị trí nhấp chuột
    let modal = document.getElementById("modal");
 // Nếu vị trí người dùng nhấp vào (event.target) chính là vùng nền mờ bên ngoài của modal (không phải nội dung bên trong)
    if(event.target == modal){
        modal.style.display = "none";
    }
}
/* quyền lợi ============================*/
// ================= MODAL =================
/* Phần xử lý Quyền lợi & Hộp thoại thông tin (Modal) */
// Lệnh mở cái bảng thông tin lên khi bấm vào sự kiện
function showDetail(name){
     // Tìm cái chỗ ghi tiêu đề (id="title") rồi đổi thành tên sự kiện vừa bấm
    document.getElementById("title").innerText = name;
    // Hiện cái bảng (id="modal") lên màn hình
    document.getElementById("modal").style.display = "block";
}
// Lệnh tắt cái bảng thông tin đi khi bấm nút Đóng (hoặc dấu X)
function closeModal(){
     // Ẩn cái bảng (id="modal") đi là xong
    document.getElementById("modal").style.display = "none";
}
// Tính năng: Bấm chuột ra vùng trống bên ngoài bảng thì tự động tắt bảng
window.onclick = function(event){
    let modal = document.getElementById("modal"); // Chỉ định cái bảng
    if(event.target == modal){
        modal.style.display = "none";
    }
}

// ================= DATA ================='
// // Đây là cái kho chứa thông tin của tất cả 8 sự kiện, mỗi sự kiện có tên, giờ giấc, quà, điểm và ảnh nền.
const events = [
{
    title:"AI và Tương lai Đại dương",
    time:"morning",
    timeText:"08:00 - 09:00 | 20/06/2026",
    gift:true,// true nghĩa là CÓ quà
    point:10,// Được cộng 10 điểm rèn luyện
    image:"imagesjpg/ảnh 1.jpg"
},
{
    title:"Robot Khám phá Biển Sâu",
    time:"morning",
    timeText:"09:15 - 10:15 | 20/06/2026",
    gift:true,
    point:10,
    image:"imagesjpg/ảnh 2.jpg"
},
{
    title:"Internet Vạn Vật Dưới Nước",
    time:"morning",
    timeText:"10:30 - 11:30 | 20/06/2026",
    gift:false,
    point:5,
    image:"imagesjpg/ảnh 3.jpg"
},
{
    title:"Năng lượng Sóng Biển",
    time:"afternoon",
    timeText:"13:00 - 14:00 | 20/06/2026",
    gift:true,
    point:10,
    image:"imagesjpg/ảnh 4.jpg"
},
{
    title:"VR Khám phá Đại dương",
    time:"afternoon",
    timeText:"14:15 - 15:15 | 20/06/2026",
    gift:true,
    point:15,
    image:"imagesjpg/ảnh 5.jpg"
},
{
    title:"Blockchain và Bảo tồn Biển",
    time:"afternoon",
    timeText:"15:30 - 16:30 | 20/06/2026",
    gift:false,
    point:10,
    image:"imagesjpg/ảnh 6.jpg"
},
{
    title:"Thành phố Thông minh Ven Biển",
    time:"afternoon",
    timeText:"17:00 - 18:00 | 20/06/2026",
    gift:true,
    point:5,
    image:"imagesjpg/ảnh 7.jpg"
},
{
    title:"Tương lai Công nghệ Xanh",
    time:"afternoon",
    timeText:"18:15 - 19:15 | 20/06/2026",
    gift:true,
    point:15,
    image:"imagesjpg/ảnh 8.jpg"
}
];

// ================= TÌM THẺ HTML =================
// Hàm này để xếp các sự kiện theo đúng thứ tự giờ giấc từ sớm đến muộn
function sortByTime(list){
    return list.sort((a, b) => {
        const getHour = str => str.split(" ")[0];// Lấy ra mấy cái chữ đầu tiên như "08:00", "09:15"...
        return getHour(a.timeText).localeCompare(getHour(b.timeText)); // So sánh rồi xếp chúng nó thẳng hàng
    });
}

// ================= DOM =================
// Gọi mấy cái ô tìm kiếm, ô chọn bộ lọc và cái khung chứa danh sách ở bên file HTML sang bên này để chuẩn bị xử lý.
const eventList = document.getElementById("eventList");
const searchInput = document.getElementById("searchInput");
const benefitFilter = document.getElementById("benefitFilter");
const timeFilter = document.getElementById("timeFilter");

// ================= HIỂN THỊ LÊN MÀN HÌNH =================
// Hàm này có nhiệm vụ "vẽ" các thẻ sự kiện lên trang web dựa trên danh sách được truyền vào
function renderEvents(list){

    eventList.innerHTML = "";// Xóa sạch đống cũ đi để chuẩn bị nạp đống mới
 // Nếu bộ lọc kén quá, không tìm được sự kiện nào thì hiện dòng chữ báo lỗi này
    if(list.length === 0){
        eventList.innerHTML =
        "<h3>Không tìm thấy sự kiện phù hợp</h3>";
        return;
    }
  // Duyệt qua từng sự kiện trong danh sách để chế ra code HTML cho nó
    list.forEach(event => {

        eventList.innerHTML += `
            <div class="event-card"
                 onclick="showDetail('${event.title}')"
                 style="background-image: url('${event.image}')">

                <h3>${event.title}</h3>

                <p>
                    ${event.time === "morning"
                        ? "Buổi sáng"
                        : "Buổi chiều"}
                </p>

                <p>🕒 ${event.timeText}</p>
                <p>📍 Hội trường A21</p>

                ${
                    event.gift
                    ? '<span class="tag">🎁 Quà bí mật</span>'// Nếu có quà (true) thì hiện cái nhãn này ra
                    : ''
                }

                <span class="tag">
                    ⭐ ${event.point} điểm rèn luyện
                </span>
            </div>
        `;
    });
}

// ================= SÀNG LỌC SỰ KIỆN =================
// Hàm này sẽ chạy khi bạn gõ chữ hoặc bấm chọn Menu để lọc ra các sự kiện chuẩn ý bạn
function filterEvents(){

    const keyword = searchInput.value.toLowerCase(); // Lấy chữ bạn vừa gõ và biến nó thành chữ thường để không bị bắt bẻ chữ hoa/thường
    const benefit = benefitFilter.value; // Xem bạn đang chọn lọc theo kiểu quyền lợi nào
    const time = timeFilter.value;       // Xem bạn đang chọn lọc theo buổi nào

    // Bắt đầu dùng màng lọc "filter" để giữ lại các sự kiện đúng yêu cầu
    let result = events.filter(event=>{

        // 1. Kiểm tra xem tên sự kiện có chứa cái chữ bạn vừa gõ không
        const matchName = event.title.toLowerCase().includes(keyword);

        // 2. Kiểm tra xem có đúng buổi bạn chọn không (nếu chọn "Tất cả" thì bỏ qua bước này)
        const matchTime = !time || event.time === time;

        let matchBenefit = true; // Mặc định là cho qua

        // 3. Nếu chọn lọc "Có quà tặng" thì kiểm tra xem sự kiện đó có quà không
        if(benefit === "gift"){
            matchBenefit = event.gift;
        }

        // 4. Nếu chọn lọc "Có điểm rèn luyện" thì kiểm tra xem điểm có lớn hơn 0 không
        if(benefit === "point"){
            matchBenefit = event.point > 0;
        }

        // Sự kiện nào phải vượt qua cả 3 bài kiểm tra trên thì mới được giữ lại
        return matchName && matchTime && matchBenefit;
    });

    // ✅ FIX LỖI GIỜ: Lọc xong xuôi thì xếp lại lịch trình từ sớm đến muộn cho đẹp mắt
    result = sortByTime(result);

    // Đổ đống kết quả cuối cùng này lên màn hình cho người dùng xem
    renderEvents(result);
}

// ================= SỰ KIỆN KHI BẤM NÚT / ĐỔI BỘ LỌC =================

// 1. Tính năng: Gõ chữ vào ô tìm kiếm xong rồi nhấn phím "Enter" thì mới bắt đầu lọc
searchInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){ // Nếu phím vừa ấn chính là phím Enter
        filterEvents();    // Thì gọi cái lệnh sàng lọc sự kiện ra chạy
    }
});

// 2. Tính năng: Chỉ cần bấm chọn lại Buổi sáng/Buổi chiều là nó tự động lọc luôn, không cần nhấn nút gì thêm
benefitFilter.addEventListener("change", filterEvents);
timeFilter.addEventListener("change", filterEvents);

// 3. Tính năng: Xử lý khi người dùng bấm vào nút "Reset"
document.getElementById("resetBtn")
.addEventListener("click",()=>{

    searchInput.value = "";     /* Xóa sạch chữ trong ô tìm kiếm */
    benefitFilter.value = "";   /* Đưa ô lọc Quyền lợi về trạng thái "Tất cả" */
    timeFilter.value = "";      /* Đưa ô lọc Thời gian về trạng thái "Tất cả" */

    renderEvents(events);       /* Đổ lại toàn bộ 8 sự kiện ban đầu lên màn hình */
});

// ================= CHẠY LẦN ĐẦU TIÊN (KHỞI TẠO) =================
// Lệnh này cực kỳ quan trọng: Vừa mở trang web lên là nó tự động lấy 8 sự kiện trong kho nạp sẵn ra màn hình luôn
renderEvents(events);