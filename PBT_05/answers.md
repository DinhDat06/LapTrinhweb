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