document.addEventListener("DOMContentLoaded", function () {

const form = document.getElementById("eventForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("classError").textContent = "";
    document.getElementById("eventError").textContent = "";

    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const lop = document.getElementById("class").value.trim();
    const eventValue = document.getElementById("event").value;
    const note = document.getElementById("note").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{9,11}$/;

    if (name === "") {
        document.getElementById("nameError").textContent = "Vui lòng nhập họ tên";
        isValid = false;
    }

    if (email === "" || !emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Email không hợp lệ";
        isValid = false;
    }

    if (phone === "" || !phoneRegex.test(phone)) {
        document.getElementById("phoneError").textContent = "SĐT không hợp lệ";
        isValid = false;
    }

    if (lop === "") {
        document.getElementById("classError").textContent = "Vui lòng nhập lớp";
        isValid = false;
    }

    if (eventValue === "") {
        document.getElementById("eventError").textContent = "Vui lòng chọn sự kiện";
        isValid = false;
    }

    if (!isValid) return;

    // ✅ LƯU LOCAL
    let list = JSON.parse(localStorage.getItem("dangky")) || [];

    list.push({
        name: name,
        email: email,
        phone: phone,
        class: lop,
        event: eventValue,
        note: note
    });

    localStorage.setItem("dangky", JSON.stringify(list));

    // ✅ SUCCESS
    const success = document.getElementById("successMessage");
    success.style.display = "block";

    form.reset();

    setTimeout(() => {
        window.location.href = "Danhsachdangky.html";
    }, 1500);
});

});