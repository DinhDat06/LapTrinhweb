PHẦN A:

Câu A1:
- 3 cách nhungs trong CSS:-> tránh sử dụng
1. CSS nội tuyến tròn thẻ: <h1 style="color: red; font-size: 24px;">Tiêu đề</h1>
+ Ưu điểm: viết nhanh, áp dụng cho 1 phần tử. có thể test hoặc sửa gấp mà không cần tạo file CSS riêng
+ Nhược điểm:Khó bảo trì trong website loén .Viết lặp nhiều lần mà không thể tái sử dụng được
-> chỉ dùng khi dùng để test nhanh , demo 1 trang website nhỏ 
2. CSS nội bộ trong <style>-> chấp nhận cho nguyên mẫu
<head>
    <style>
        h1 { color: red; font-size: 24px; }
    </style>
</head>
+ Ưu điểm: Dễ quản lí, Có thể dùng cho nhiều phần tử hơn trong 1 trang, thuận tiện cho làm prototype hay bài tập nhỏ
+ Nhược điểm: Chỉ dùng được cho 1 trang HTML, nếu nhiều trang sẽ bị lặp code , website vẫn rất khó bảo trì khiến code dài dòng và khó đọc
-> chỉ nên dùng : bài tập nhỏ và demo trong giao diện  
3. CSS bên ngoài hay gọi là tệp riêng -> được dùng nhiều nhất
<head>
    <link rel="stylesheet" href="styles.css">
</head>
+ Ưu điểm: tách riêng nội dung và dẽ bảo trì và cập nhật, website tải nhanh hơn và phù hợp với làm việc nhóm
+ Nhược điểm: cần tạo file riêng và khi dùng nếu gắn link nhầm giao diện sẽ không hoạt động
-> Dùng trong dự án lớn và website thực tế

Câu A2:
1. h1                           → Chọn: "Shop TLU"
2. .price                       → Chọn: 25.990.000đ hay 45.990.000đ
3. #app header                  → Chọn: toàn bộ thẻ header
4. nav a:first-child             → Chọn: thẻ Home trong nav
5. .product.featured h2         → Chọn: MacBook Pro
6. article > p                  → Chọn: tất cả thẻ <p> trong article
7. a[href="/"]                  → Chọn: Chọn Home
8. .top-bar.dark h1              → Chọn: Chọn "Shop TLU"

Câu A3:
/* Trường hợp 1: content-box (mặc định) */
.box-1 {
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
→ Chiều rộng hiển thị =  content + padding*2 + border*2 =400 + 20*22(trên-dưới )+ 5*2(trên-dưới ) = 450(px)
→ Không gian chiếm trên trang = 450 + 10*2 =470(px)
/* Trường hợp 2: border-box */
.box-2 {
    box-sizing: border-box;
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
→ Chiều rộng hiển thị = 400(px)
→ Kích thước content thực tế = 400 - padding*2 - border*2 = 350(px)
→ Không gian chiếm trên trang = 400 + 10*2 = 420(px)

/* Trường hợp 3: Margin collapse */
.box-a { margin-bottom: 25px; }
.box-b { margin-top: 40px; }
→ Khoảng cách giữa box-a và box-b = 40(px)
→ KHÔNG PHẢI 65px vì hai magin là chiều dọc của hai block liền kề nên CSS chỉ lấy bottom lớn hơn 

/* Trường hợp nâng cao/:
margin-bottom: -10px và .box-b có margin-top: 40px
->khoảng cách = 40-10=30 -> vì khi khoảng cách là âm thì sẽ bị kéo gàn hơn

Câu 4A:
(a, b, c)->Trong đó:
a = số lượng ID
b = số lượng class / attribute / pseudo-class
c = số lượng tag

1. Tính specificity score (a, b, c) cho mỗi rule
- rule a(0,0,1)
- rule b(0,1,0)
- rule c(1,0,0)
- rule d(0,1,1)
2. Element sẽ có màu gì? Giải thích --> màu đỏ, vì độ ưu tiên với id lớn hơn nên element có màu đỏ
3. Nếu thêm <p class="price" id="main-price" style="color: orange;">, element có màu gì?-->Inline style có độ ưu tiên cao hơn selector thường, nên element sẽ có màu orange(màu cam)
4.Nếu Rule A thêm !important, element có màu gì? Tại sao?-->!important ưu tiên cao hơn specificity thông thường nên element sẽ có màu đen

PHẦN B:
