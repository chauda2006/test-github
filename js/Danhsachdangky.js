function loadData() {
    let list = JSON.parse(localStorage.getItem("dangky")) || [];
    let html = "";

    list.forEach((item, index) => {
        html += `
        <tr>
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.phone}</td>
            <td>${item.class}</td>
            <td>${item.event}</td>
            <td>${item.note}</td>
            <td>
                <button onclick="deleteOne(${index})" style="background:green;color:white;">
                    Xóa
                </button>
            </td>
        </tr>
        `;
    });

    document.getElementById("list").innerHTML = html;
}

function deleteOne(index) {
    let list = JSON.parse(localStorage.getItem("dangky")) || [];
    list.splice(index, 1);
    localStorage.setItem("dangky", JSON.stringify(list));
    loadData();
}

function clearAll() {
    localStorage.removeItem("dangky");
    loadData();
}

loadData();