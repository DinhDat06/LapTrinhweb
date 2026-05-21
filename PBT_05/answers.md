Phần A:

Câu A1: Viewport & Mobile-First
1.Thẻ <meta vewport> chuẩn:
<meta name="viewport" content="width=device-width, initial-scale=1.0">
- Giải thích từng thuộc tính:
* name="viewport": Báo cho trình duyệt biết đây là cấu hình viewport (khu vực hiển thị).
content: Chứa các giá trị cấu hình, cách nhau bởi dấu phẩy.
* width=device-width: Cho viewport rộng bằng chiều rộng màn hình thiết bị (VD iPhone 14 = 390px). Không có thì trình duyệt mặc định ~980px rồi thu nhỏ lại.
* initial-scale=1.0: Zoom ban đầu = 100%, không zoom in/out tự động.
2. Nếu thiếu meta viewport, iPhone sẽ:
Coi website là web desktop.Thu nhỏ toàn bộ trang lại và Chữ cực nhỏ phải zoom mới đọc được.Nút bấm khó nhấn ngoài ra Layout dễ bị vỡ và Có thể phải scroll ngang liên tục.Nó khiến cho Trang web sẽ rất khó sử dụng trên điện thoại.
3. Mobile-First và Desktop-First khác nhau thế nào? Viết ví dụ CSS cho mỗi cách với breakpoint 768px. Tại sao Mobile-First được khuyên dùng?
Bảng so sánh Mobile-First và Desktop-First
a.| Tiêu chí | Mobile-First (Hướng tiếp cận hiện đại) | Desktop-First (Hướng tiếp cận truyền thống) |
| --- | --- | --- |
| Thứ tự ưu tiên| Code cho mobile trước | Code cho desktop trước |
| Media Query| Dùng `min-width` | Dùng `max-width` |
|Hướng phát triển| Mở rộng dần lên tablet/desktop | Thu nhỏ dần xuống mobile |
| Hiệu năng| Tối ưu hiệu năng mobile tốt hơn | Mobile phải tải nhiều CSS thừa |
|Xu hướng| Được khuyên dùng hiện nay | Cách cũ |

b. Ví dụ cú pháp CSS trong Markdown
- Cấu trúc Mobile-First (min-width)
```css
/* Giao diện Mobile (Mặc định không nằm trong media query) */
.sidebar {
  width: 100%;
}
```
/* Thiết bị màn hình lớn hơn (Tablet / Desktop) */
@media (min-width: 768px) {
  .sidebar {
    width: 30%;
  }
}
c. Tại sao Mobile-First được khuyên dùng?
- Mobile hiện chiếm đa số người dùng
- Tối ưu hiệu năng
- Responsive dễ quản lý hơn

Câu A2:
| Breakpoint | Kích thước pixel | Thiết bị đại diện | Ví dụ lưới sản phẩm |
|-------------|------------------|-------------------|---------------------|
| xs | < 576px | Điện thoại dọc | 1 cột |
| sm | ≥ 576px | Điện thoại ngang | 2 cột |
| md | ≥ 768px | Tablet | 2 cột |
| lg | ≥ 992px | Desktop nhỏ / Laptop | 3 cột |
| xl | ≥ 1200px | Desktop lớn | 4 cột |
- Giải thích:
+ xs: màn hình rất nhỏ → mỗi hàng 1 sản phẩm để dễ đọc.
+ sm và md: màn hình rộng hơn → có thể chia 2 cột.
+ lg: desktop/laptop → thường hiển thị 3 cột.
+ xl: màn hình lớn → hiển thị 4 cột hoặc nhiều hơn.
 
Câu A3:

| Chiều rộng màn hình | `.container` width |
|---------------------|--------------------|
| 375px (iPhone SE) | 100% |
| 600px | 540px |
| 800px | 720px |
| 1000px | 960px |
| 1400px | 1140px |

Câu A4:
1. Variables — Biến trong SCSS
    Công dụng:
        Lưu màu sắc, font, kích thước...
        Đổi 1 chỗ → toàn bộ tự đổi.
    Ví dụ:
        $primary-color: #805ad5;
        $radius: 8px;

        .button {
            background: $primary-color;
            border-radius: $radius;
        }

        .header {
            color: $primary-color;
        }
->  Nếu đổi $primary-color thì tất cả nơi sử dụng sẽ đổi theo
2. Nesting — Viết CSS lồng nhau
    Công dụng:
        Viết CSS theo cấu trúc HTML.
        Code gọn và dễ đọc hơn.
    Ví dụ:
        .navbar {
            background: black;

            ul {
                list-style: none;

                li {
                    margin-right: 20px;

                    a {
                        color: white;

                        &:hover {
                            color: yellow;
                        }
                    }
                }
            }
        }
3. Mixins — Hàm dùng chung
    Công dụng:
        Tái sử dụng nhiều đoạn CSS.
        Tránh viết lặp lại.
    Ví dụ:
        @mixin flex-center {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .box {
            @include flex-center;
            height: 200px;
        }
    Kết quả sau compile:
        .box {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 200px;
        }
4. @extend / Inheritance — Kế thừa CSS
    Công dụng:
        Một class kế thừa style của class khác.
    Ví dụ:
        .button {
            padding: 10px 20px;
            border-radius: 8px;
            color: white;
        }

        .button-danger {
            @extend .button;
            background: red;
        }
        Kết quả:
        .button,
        .button-danger {
            padding: 10px 20px;
            border-radius: 8px;
            color: white;
        }

        .button-danger {
            background: red;
        }
5. Tại sao trình duyệt KHÔNG đọc được file .scss?
Vì: Trình duyệt chỉ hiểu: HTML, CSS,JS
SCSS là: CSS mở rộng,,Có biến ($),Có mixin (@mixin),Có nesting
->  Browser không hiểu các cú pháp này.
6. Cần bước gì để chuyển SCSS → CSS?
Cần dùng SCSS Compiler để compile: SCSS → Compiler → CSS

Phần C:

Câu C1:
1. Mobile(378 px):
a.Navigation thay đổi thế nào?
    Icon hamburger + kính lúp xuất hiện ở góc trái thay thế menu ngang
    Logo giữ nguyên ở giữa
    Góc phải chỉ còn icon user + bell
    Category bar
    chuyển sang dạng scroll ngang, không wrap xuống dòng
b.Lưới content thay đổi mấy cột?
    Chuyển về 1 cột duy nhất
    Ảnh bài viết chiếm 100% chiều rộng container
c.Elements nào bị ẩn trên mobile?
    Sidebar phải (.col-right-top) — ẩn qua display: none
    Menu ngang desktop (thay bằng hamburger)
d.Font size có thay đổi không?
    Có — tiêu đề category nhỏ hơn so với desktop
    Thanh thời tiết (Hà Nội 30°) và navigation text dùng font size vừa phải, vẫn readable
2. Tablet(768 px):
a.Navigation thay đổi thế nào?
    Vẫn giữ hamburger + kính lúp ở góc trái (giống mobile)
    Logo giữ nguyên ở giữa, to hơn so với 375px
    Category bar hiển thị nhiều mục hơn 
    Vẫn scroll ngang, chưa phải full menu ngang như desktop
b.Lưới content thay đổi mấy cột?
    Vẫn 1 cột chính — chưa có sidebar
    Ảnh hero chiếm toàn bộ chiều rộng
c.Elements nào bị ẩn trên mobile?
    Ngày âm lịch xuất hiện (ẩn ở 375px, hiện ở 768px)
    Category bar hiện nhiều mục hơn do có thêm không gian
d.Font size có thay đổi không?
    Có tăng nhẹ — tiêu đề category và text rõ ràng hơn
    Ảnh hero lớn hơn đáng kể (600px vs ~460px ở mobile)
    Tổng thể scale theo chiều rộng, không có breakpoint riêng cho tablet
3. Desktop:
a.Navigation thay đổi thế nào?
    Hamburger biến mất → menu ngang đầy đủ hiển thị
    Header có thêm: Địa điểm, thời tiết
    Góc phải: nút Đăng nhập, icon search, bell — rõ ràng hơn hẳn
    Category bar hiện toàn bộ danh mục
b.Lưới content thay đổi mấy cột?
    Chuyển sang 2 cột: ảnh trái + tiêu đề/tóm tắt bài viết bên phải
    .col-right-top xuất hiện trở lại (width: 320px, padding-left: 20px)
    Layout dùng Flexbox (container flexbox)
c.Elements nào bị ẩn trên mobile?
    Sidebar phải (.col-right-top) — width: 320px
    Thông tin địa điểm + thời tiết trên header
    Nút Đăng nhập text (mobile chỉ có icon)
    Toàn bộ category không cần scroll ngang
d.Font size có thay đổi không?
    Tăng rõ rệt — tiêu đề bài viết to và đậm hơn hẳn

Câu C2:
MOBILE (375px)
+-----------------------------+
| ☰  LOGO              [📞]  |
+-----------------------------+
|                             |
|         HERO IMAGE          |
|                             |
+-----------------------------+
|   [Anh 1]   |   [Anh 2]    |
+-------------+---------------+
|   [Anh 3]   |   [Anh 4]    |
+-------------+---------------+
|   [Anh 5]   |   [Anh 6]    |
+-----------------------------+
|                             |
|  FORM DAT BAN               |
|  +------------------------+ |
|  | Ngay                   | |
|  +------------------------+ |
|  | Gio                    | |
|  +------------------------+ |
|  | So nguoi               | |
|  +------------------------+ |
|  | Ghi chu                | |
|  |                        | |
|  +------------------------+ |
|                             |
|   [    DAT BAN NGAY    ]    |
|                             |
+-----------------------------+
|                             |
|       GOOGLE MAPS           |
|                             |
+-----------------------------+
|           FOOTER            |
+-----------------------------+
Ẩn trên mobile:

Nav links (thay bằng ☰ hamburger)
Sidebar thông tin
Số điện thoại dạng text (chỉ icon 📞)
TABLET (768px)
+---------------------------------------------+
| ☰  LOGO                   📞 0901 234 567  |
+---------------------------------------------+
|                                             |
|                HERO IMAGE                   |
|                                             |
+---------------+---------------+-------------+
|   [Anh 1]     |   [Anh 2]     |   [Anh 3]  |
+---------------+---------------+-------------+
|   [Anh 4]     |   [Anh 5]     |   [Anh 6]  |
+---------------------+-----------------------+
|  FORM DAT BAN       |                       |
|  +-----------------+|   GOOGLE MAPS         |
|  | Ngay            ||                       |
|  +-----------------+|                       |
|  | Gio             ||                       |
|  +-----------------+|                       |
|  | So nguoi        ||                       |
|  +-----------------+|                       |
|  | Ghi chu         ||                       |
|  |                 ||                       |
|  +-----------------+|                       |
|  [ DAT BAN NGAY ]   |                       |
+---------------------+-----------------------+
|                   FOOTER                    |
+---------------------------------------------+
Grid ảnh: 2 cột → 3 cột
Form + Bản đồ: dọc → nằm cạnh nhau (2 cột)
Bản đồ: nằm bên phải form, cùng chiều cao
Số điện thoại hiện text đầy đủ
DESKTOP (1440px)
+----------------------------------------------------------------+
| LOGO    Trang chu   Menu   Lien he         📞 0901 234 567     |
+----------------------------------------------------------------+
|                                                                |
|                        HERO IMAGE                              |
|                                                                |
+------------------------------------------------+---------------+
|                                                |               |
|  +------------+ +------------+ +------------+  |  SIDEBAR      |
|  |  [Anh 1]   | |  [Anh 2]   | |  [Anh 3]   |  |               |
|  +------------+ +------------+ +------------+  |  Gio mo cua:  |
|  +------------+ +------------+ +------------+  |  T2-T6: 10-22h|
|  |  [Anh 4]   | |  [Anh 5]   | |  [Anh 6]   |  |  T7-CN: 9-23h |
|  +------------+ +------------+ +------------+  |               |
|                                                |  Dia chi:     |
|  +--------------------+  +------------------+  |  236 Tay Son  |
|  | FORM DAT BAN       |  |                  |  |               |
|  | +--------+-------+ |  |                  |  |  Danh gia:    |
|  | | Ngay   | Gio   | |  |  GOOGLE MAPS     |  |  4.8/5 (320)  |
|  | +--------+-------+ |  |                  |  |               |
|  | | So nguoi       | |  |                  |  +---------------+
|  | +-----------------+|  |                  |
|  | | Ghi chu        | |  |                  |
|  | |                | |  +------------------+
|  | +-----------------+|
|  | [ DAT BAN NGAY ]   |
|  +--------------------+
+------------------------------------------------+
|  Logo | Lien he | Chinh sach | MXH | © 2025   |
+----------------------------------------------------------------+
- Nav links: hiện đầy đủ (bỏ hamburger)
- Sidebar: xuất hiện bên phải (giờ mở cửa, địa chỉ, đánh giá)
- Form: Ngày + Giờ nằm cùng 1 hàng (2 input inline)
- Footer: đa cột thay vì 1 cột

CSS skeleton:
/* ======================
   MOBILE FIRST
====================== */

body {
  margin: 0;
}

.container {
  display: grid;
  gap: 20px;
  padding: 20px;
}

/* Header */
.header {
  display: grid;
  grid-template-columns: 1fr auto;
}

/* Hero */
.hero {
  min-height: 300px;
}

/* Food grid */
.food-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
}

/* Booking form */
.booking-form {
  display: grid;
  gap: 10px;
}

/* Google map */
.map iframe {
  width: 100%;
  height: 300px;
}

/* Footer */
.footer {
  text-align: center;
}

/* ======================
   TABLET
====================== */

@media (min-width: 768px) {
  .food-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .hero {
    min-height: 400px;
  }
}

/* ======================
   DESKTOP
====================== */

@media (min-width: 1024px) {
  .content-layout {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 30px;
  }

  .food-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .hero {
    min-height: 500px;
  }
}