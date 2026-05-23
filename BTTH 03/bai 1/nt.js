// --- 1. KHỞI TẠO VÀ KHAI BÁO BIẾN DOM ---
const popup = document.getElementById("popup");
const studentForm = document.getElementById("student-form");
const tableBody = document.getElementById("student-table-body");

const formMode = document.getElementById("form-mode");
const studentIndexInput = document.getElementById("student-index");
const formTitle = document.getElementById("form-title");

// Khởi tạo mảng dữ liệu từ localStorage hoặc mảng rỗng nếu chưa có dữ liệu
let students = JSON.parse(localStorage.getItem("students")) || [
    {

    }
];

// Hàm render dữ liệu ra bảng HTML
function renderStudents() {
    tableBody.innerHTML = ""; 

    if (students.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="8" style="text-align:center;">Danh sách trống. Hãy thêm sinh viên mới!</td></tr>`;
        updateStatistics();
        return;
    }

    students.forEach((student, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.msv}</td>
            <td>${student.fname}</td>
            <td>${student.nsinh}</td>
            <td>${student.lop}</td>
            <td>${student.email}</td>
            <td>${parseFloat(student.dtb).toFixed(1)}</td>
            <td>
                <button class="btn-edit" onclick="editStudent(${index})" style="background:#ffc107; border:none; padding:5px 10px; border-radius:4px; cursor:pointer;">Sửa</button>
                <button class="btn-delete" onclick="deleteStudent(${index})" style="background:#dc3545; color:white; border:none; padding:5px 10px; border-radius:4px; cursor:pointer;">Xóa</button>
            </td>
        `;
        tableBody.appendChild(row);
    });

    updateStatistics();
}

// Hàm lưu dữ liệu vào localStorage
function saveToStorage() {
    localStorage.setItem("students", JSON.stringify(students));
}

// Hàm cập nhật khu vực thống kê (Tổng số SV & ĐTB chung)
function updateStatistics() {
    const totalSv = students.length;
    let avgDtb = 0;

    if (totalSv > 0) {
        const totalScore = students.reduce((sum, student) => sum + parseFloat(student.dtb), 0);
        avgDtb = (totalScore / totalSv).toFixed(2);
    }

    document.getElementById("tong-sv").innerText = totalSv;
    document.getElementById("dtb-chung").innerText = avgDtb;
}

// Hàm hiển thị thông báo nhanh
function showAlert(message) {
    const alertBox = document.getElementById("alert-msg");
    alertBox.innerText = message;
    setTimeout(() => { alertBox.innerText = ""; }, 3000);
}

// --- 3. XỬ LÝ SỰ KIỆN POPUP (ĐÓNG / MỞ / RESET) ---

// Mở form chế độ "Thêm"
document.getElementById("them").onclick = function() {
    formMode.value = "add";
    formTitle.innerText = "Thêm Sinh Viên Mới";
    studentForm.reset(); // Xóa sạch dữ liệu cũ trong các ô input
    popup.classList.add("show");
};

// Đóng form
document.getElementById("close").onclick = function() {
    popup.classList.remove("show");
};

// --- 4. XỬ LÝ SỰ KIỆN SUBMIT FORM (THÊM HOẶC CẬP NHẬT) ---
studentForm.onsubmit = function(e) {
    e.preventDefault(); // Ngăn trang bị reload lại khi nhấn submit

    // Lấy dữ liệu từ các input ô form
    const studentData = {
        msv: document.getElementById("msv").value.trim(),
        fname: document.getElementById("fname").value.trim(),
        nsinh: document.getElementById("nsinh").value,
        lop: document.getElementById("lop").value,
        email: document.getElementById("email").value.trim(),
        dtb: document.getElementById("dtb").value
    };

    if (formMode.value === "add") {
        // Kiểm tra trùng Mã sinh viên khi thêm mới
        const isDuplicate = students.some(st => st.msv === studentData.msv);
        if (isDuplicate) {
            alert("Mã sinh viên này đã tồn tại! Vui lòng kiểm tra lại.");
            return;
        }
        // Thêm vào mảng
        students.push(studentData);
        showAlert("Thêm mới sinh viên thành công!");
    } else if (formMode.value === "edit") {
        // Cập nhật sinh viên tại vị trí index được lưu
        const index = studentIndexInput.value;
        students[index] = studentData;
        showAlert("Cập nhật thông tin thành công!");
    }

    // Lưu lại, render lại giao diện và đóng popup
    saveToStorage();
    renderStudents();
    popup.classList.remove("show");
};

// --- 5. XỬ LÝ SỰ KIỆN SỬA VÀ XÓA (GẮN GLOBAL ĐỂ CÁC NÚT TRONG THẺ TRỌNG BẢNG GỌI ĐƯỢC) ---

// Hàm nạp dữ liệu cũ lên form khi ấn nút Sửa
window.editStudent = function(index) {
    const student = students[index];

    // Chuyển form sang trạng thái cập nhật (Sửa)
    formMode.value = "edit";
    studentIndexInput.value = index;
    formTitle.innerText = "Cập Nhật Thông Tin Sinh Viên";

    // Điền dữ liệu cũ vào các ô input
    document.getElementById("msv").value = student.msv;
    document.getElementById("fname").value = student.fname;
    document.getElementById("nsinh").value = student.nsinh;
    document.getElementById("lop").value = student.lop;
    document.getElementById("email").value = student.email;
    document.getElementById("dtb").value = student.dtb;

    // Hiển thị popup lên
    popup.classList.add("show");
};

// Hàm xóa dữ liệu khi bấm nút Xóa
window.deleteStudent = function(index) {
    const confirmDelete = confirm(`Bạn có chắc chắn muốn xóa sinh viên: ${students[index].fname} không?`);
    if (confirmDelete) {
        students.splice(index, 1); // Xóa 1 phần tử tại vị trí index khỏi mảng
        saveToStorage();
        renderStudents();
        showAlert("Đã xóa sinh viên.");
    }
};

// --- 6. CHẠY ĐẦU TIÊN KHI TẢI TRANG ---
// Gọi hàm hiển thị ngay khi load trang để lấy dữ liệu cũ từ localStorage lên bảng
renderStudents();