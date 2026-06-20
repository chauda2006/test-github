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
    document.getElementById("title").innerText = name;

    document.getElementById("modal").style.display = "block";
}

function closeModal(){
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(event){
    let modal = document.getElementById("modal");

    if(event.target == modal){
        modal.style.display = "none";
    }
}
/* quyền lợi ============================*/
// ================= MODAL =================
function showDetail(name){
    document.getElementById("title").innerText = name;
    document.getElementById("modal").style.display = "block";
}

function closeModal(){
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(event){
    let modal = document.getElementById("modal");
    if(event.target == modal){
        modal.style.display = "none";
    }
}

// ================= DATA =================
const events = [
{
    title:"AI và Tương lai Đại dương",
    time:"morning",
    timeText:"08:00 - 09:00 | 20/06/2026",
    gift:true,
    point:10,
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

// ================= SORT =================
function sortByTime(list){
    return list.sort((a, b) => {
        const getHour = str => str.split(" ")[0];
        return getHour(a.timeText).localeCompare(getHour(b.timeText));
    });
}

// ================= DOM =================
const eventList = document.getElementById("eventList");
const searchInput = document.getElementById("searchInput");
const benefitFilter = document.getElementById("benefitFilter");
const timeFilter = document.getElementById("timeFilter");

// ================= RENDER =================
function renderEvents(list){

    eventList.innerHTML = "";

    if(list.length === 0){
        eventList.innerHTML =
        "<h3>Không tìm thấy sự kiện phù hợp</h3>";
        return;
    }

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
                    ? '<span class="tag">🎁 Quà bí mật</span>'
                    : ''
                }

                <span class="tag">
                    ⭐ ${event.point} điểm rèn luyện
                </span>
            </div>
        `;
    });
}

// ================= FILTER =================
function filterEvents(){

    const keyword = searchInput.value.toLowerCase();
    const benefit = benefitFilter.value;
    const time = timeFilter.value;

    let result = events.filter(event=>{

        const matchName =
            event.title.toLowerCase().includes(keyword);

        const matchTime =
            !time || event.time === time;

        let matchBenefit = true;

        if(benefit === "gift"){
            matchBenefit = event.gift;
        }

        if(benefit === "point"){
            matchBenefit = event.point > 0;
        }

        return matchName && matchTime && matchBenefit;
    });

    // ✅ FIX LỖI GIỜ
    result = sortByTime(result);

    renderEvents(result);
}

// ================= EVENT =================
searchInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        filterEvents();
    }
});

benefitFilter.addEventListener("change", filterEvents);
timeFilter.addEventListener("change", filterEvents);

document.getElementById("resetBtn")
.addEventListener("click",()=>{

    searchInput.value = "";
    benefitFilter.value = "";
    timeFilter.value = "";

    renderEvents(events);
});

// ================= INIT =================
renderEvents(events);



