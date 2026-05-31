// 1. pipe() — Nối chuỗi functions
function pipe(...fns) {
    return (x) => fns.reduce((v, f) => f(v), x);
}


const tinhToan = pipe(x => x * 2, x => x + 10);
console.log(tinhToan(5)); 

const process = pipe(
    x => x * 2,        // 5 → 10
    x => x + 10,       // 10 → 20
    x => x.toString(), // 20 → "20"
    x => "Kết quả: " + x
);
console.log(process(5)); // → "Kết quả: 20"

function memoize(fn) {
    const soTay = {}; // Nơi lưu kết quả cũ
    return function(n) {
        if (n in soTay) return soTay[n]; // Có trong sổ thì lấy luôn
        
        let ketQua = fn(n);
        soTay[n] = ketQua; // Chưa có thì tính rồi ghi vào sổ
        return ketQua;
    };
}

const expensiveCalc = memoize((n) => {
    console.log("Đang tính...");
    let result = 0;
    for (let i = 0; i < n; i++) result += i;
    return result;
});
console.log(expensiveCalc(1000000)); // → "Đang tính..." → 499999500000
console.log(expensiveCalc(1000000)); // → (không in "Đang tính...", lấy cache!)

// 3. debounce() — Chờ user ngừng gõ mới thực hiện
function debounce(fn, delay) {
    let dongHo;
    return function(chu) {
        clearTimeout(dongHo); // Xóa đồng hồ cũ đi nếu tay vẫn đang gõ
        dongHo = setTimeout(() => fn(chu), delay); // Hẹn giờ: Ngừng gõ đủ thời gian mới chạy
    };
}

const search = debounce((query) => {
    console.log("Searching:", query);
}, 500);
// Gọi liên tục → chỉ lần cuối mới chạy

// 4. retry() — Thử lại nếu lỗi
async function retry(fn, soLanThu = 3) {
    for (let i = 1; i <= soLanThu; i++) {
        try {
            return await fn(); // Thử chạy lệnh
        } catch (loi) {
            if (i === soLanThu) throw loi; // Lần cuối rồi mà vẫn lỗi thì chịu thua
            console.log("Lỗi rồi, đang thử lại lần " + i);
        }
    }
}