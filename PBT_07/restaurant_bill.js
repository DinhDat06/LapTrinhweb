const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin, output: process.stdout
});

let bieuPhanMonAn = []; 
let tongTienGoc = 0;   
let soMonDaNhap = 0;  
let tongSoMon = 0;     

rl.question("Nhập số lượng loại món ăn/đồ uống: ", function(n) {
    tongSoMon = Number(n);
    nhapMonAn(); 
});

function nhapMonAn() {
    
    if (soMonDaNhap === tongSoMon) {
        tinhTienVaInHoaDon();
        return; 
    }

    console.log(`\n--- Nhập món thứ ${soMonDaNhap + 1} ---`);
    
    rl.question("Nhập tên món: ", function(doan) {
        rl.question("Nhập số lượng: ", function(soLuongInput) {
            
            let soLuong = Number(soLuongInput);
            let gia = 0;

            // Kiểm tra giá tiền từng món
            if (doan === "Phở bò") gia = 30000;
            else if (doan === "Trà đá") gia = 15000;
            else if (doan === "Bún chả") gia = 15000;
            else gia = 30000;

            let thanhTienMon = gia * soLuong;
            tongTienGoc += thanhTienMon; // Cộng dồn vào tổng hóa đơn

            // Cất món này vào bảng danh sách
            bieuPhanMonAn.push({
                "STT": soMonDaNhap + 1,
                "Tên Món": doan,
                "Số Lượng": soLuong,
                "Đơn Giá": gia,
                "Thành Tiền": thanhTienMon
            });

            soMonDaNhap++; 
            nhapMonAn();   // TỰ GỌI LẠI CHÍNH NÓ ĐỂ HỎI MÓN TIẾP THEO (Vòng lặp ở đây)
        });
    });
}


function tinhTienVaInHoaDon() {
    let phanTramGiam = 0;
    if (tongTienGoc > 1000000) phanTramGiam = 0.15;
    else if (tongTienGoc > 500000) phanTramGiam = 0.10;

    let homNayLaThu3 = true; 
    if (homNayLaThu3) phanTramGiam += 0.05;

    let tienGiamGia = tongTienGoc * phanTramGiam;
    let sauGiamGia = tongTienGoc - tienGiamGia;
    let vat = sauGiamGia * 0.08;
    let tip = sauGiamGia * 0.05;
    let thanhToan = sauGiamGia + vat + tip;

    // Tạo bảng tóm tắt thanh toán
    let bieuThanhToan = [
        { "Hạng mục": "Tổng tiền gốc", "Số tiền (VND)": tongTienGoc.toFixed(0) },
        { "Hạng mục": `Giảm giá (${phanTramGiam * 100}%)`, "Số tiền (VND)": `-${tienGiamGia.toFixed(0)}` },
        { "Hạng mục": "Thuế VAT (8%)", "Số tiền (VND)": `+${vat.toFixed(0)}` },
        { "Hạng mục": "Tiền Tip (5%)", "Số tiền (VND)": `+${tip.toFixed(0)}` },
        { "Hạng mục": "TỔNG THANH TOÁN", "Số tiền (VND)": thanhToan.toFixed(0) }
    ];

    console.log("\n================ HÓA ĐƠN CHI TIẾT ================");
    console.table(bieuPhanMonAn); // Hiện bảng danh sách tất cả các món đã gom được

    console.log("\n================ TỔNG KẾT THANH TOÁN ================");
    console.table(bieuThanhToan);

    rl.close(); // Đóng chương trình
}