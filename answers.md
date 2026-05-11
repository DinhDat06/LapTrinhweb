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

Câu B2:
- Hộp 1 (content-box) Chiều rộng thực tế = 350px => Tổng chiều rộng thực tế: 300 + 40 + 10 = 350px
- Hộp 2 (border-box):Chiều rộng thực tế = 300pxm=> Tổng chiều rộng thực tế vẫn là 300px
- Sự khác biệt
+ content-box:
  width chỉ tính phần nội dung và Padding với border sẽ làm phần tử to hơn.
+ border-box:
  width bao gồm luôn content + padding + border và Kích thước phần tử dễ kiểm soát hơn khi làm layout.
  
Câu B3:

| Rule | Specificity |
|---|---|
| p | 0,0,1 |
| body p | 0,0,2 |
| .text | 0,1,0 |
| p.text | 0,1,1 |
| .text.highlight | 0,2,0 |
| body p.text | 0,2,1 |
| #demo | 1,0,0 |
| p#demo | 1,0,1 |
| #demo.highlight | 1,1,0 |
| body p#demo.highlight | 1,1,1 |

-> Element cuối cùng hiển thị màu gold
vì Rule: body p#demo.highlight có specificity cao nhất là 1,1,1 .Nó được ưu tiên hơn các rules khác nên màu cuối cùng được áp dụng là gold
-> Nếu thay đổi thứ tự rules thì kết quả KHÔNG đổi. Vì đổi đi thứ tự nhưng độ ưu tiên về specify vẫn vậy nên vẫn là màu gold

Phần C:

Câu C1:
1. Chiều rộng thực tế của sidebar và content là:
- Sidebar: vì mặc định là "box-sizing: content-box"-> chiều rộng thực tế là: 300 + 20*2 + 1*2=342(px)
- content: chiều rộng thực tế là: 660 + 30*2 + 1*2 = 722px
2. Layout bị vỡ do tổng chiều rộng của sidebar và content là : 342 + 722 > 960 (chiều rộng thực tế) -> nên layout bị vỡ hay nói cách khác .content không đủ chỗ đứng cạnh .sidebar kết quả .content bị rớt xuống dòng mới
3. Hai cách sửa:
Cách 1: dùng "border-box: padding + border được tính bên trong width" -> sửa:
            .sidebar,
            .content {
                box-sizing: border-box;
            }
cách 2: không dùng border-box: giữ "box-sizing: content-box" thì giảm width:
            .sidebar {
                width: 258px;
            }

            .content {
                width: 598px;
            }
Câu C2:
1. "Sản phẩm A" (h2) có font-size = 20px và color = red
2. "Mô tả sản phẩm" (p trong card featured) có color = blue(vì inherit là nhận màu của cha)
3. "Sản phẩm B" (h2) có font-size = 20px và color = blue
4. "Mô tả sản phẩm B" (p.highlight) có color =  green ;

PHẦN D:

Link video: 
<a href="https://youtu.be/OkrJ8c9Zib0">
    https://youtu.be/OkrJ8c9Zib0
</a>