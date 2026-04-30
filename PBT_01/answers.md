PHẦN A:
Câu A1 — HTTP & Browser
  1. 5 bước xảy ra khi bạn gõ http://shopee.vn vào trình duyệt:
    b1:Trình duyệt gửi yêu cầu phân giải shoppe.vn -> địa chỉ IP
    b2: Trình duyệt thiết lập kết nối với sever thông qua giao thức TCP
    b3: Vì là http, trình duyệt và sever trao đổi chứng chỉ bảo mật để mã hóa dữ liệu
    b4:Trình duyệt gửi yêu cầu lấy nội dung trang web, sever phản hồi bằng cách gửi về các file HTML,CSS,JS
    b5: Trình duyệt phân giải mã nguồn để vẽ lên giao diện lên màn hình người dùng
    * Nguồn tham chiếu: CCC_Frontend_2026/tuan_1_html5/01_introduction_html_universe.md - 🎬 Cuộc Hành Trình 0.3 Giây Xuyên Đại Dương
    2.Mạng tab của shopee trả về:
        Danh sách tất cả các yêu cầu (HTML, CSS, JS, ảnh,...)
        Mã trạng thái (200 - thành công, 204 - không có nội dung, 302 - chuyển hướng,...)
        Thời gian tải từng yêu cầu
        Tổng thời gian tải trang
        Loại tài nguyên (tài liệu, biểu định kiểu, tập lệnh,...)
        Ảnh minh họa: image.png

 Câu A2 — Semantic HTML
  Bị đánh giá thấp do sử dụng quá nhiều thẻ <div> . Nó khiến công cụ tìm kiếm của google không thể xác định đúng được đâu là thành phần quan trọng để ưu tiên hiển thị cho người dùng
  // lỗi 1: Sử dụng thẻ <div> cho phần đầu trang : "<div class="header"> và <div class="logo">"
    sửa: Thay bằng thẻ <header>( cho phần đầu và các thẻ liên quan đến    phần đầu của trang sắp xếp trong 1 thẻ header) . Ngoài ra phần logo thay bằng Tiêu đề chính là thẻ <h1> ( h1 là nội dung tiêu đề lớn nhất)
  // lỗi 2: Sử dụng thẻ <div> cho điều hướng: "<div class="menu">"
    sửa: thay bằng các thẻ <nav> và các thẻ kết hợp cho phần danh sách sẽ hiệu quả hơn như <ul> và <li>
  // lỗi 3: Sử dụng <div> cho nội dung chính của bài viết :"<div class="main"> và <div class="product">"
   sửa: Dùng thẻ <main> bao bọc bên ngoài và bên trong dùng các thẻ <section> cho sản phẩm
 // lỗi 4: Sử dụng thẻ div cho chân trang và tiêu đế sản phẩm:
   sửa : dùng <h2>-> <h4> cho tên sản phẩm và dùng thẻ <footer> cho phần cuối trang 
--> Phần code đã chỉnh:
<header>
    <h1>ShopTLU</h1>
    <nav>
        <a a href ="/">Trang chủ</a>
        <a a href ="products">Trang chủ</a>
    </nav>
</header>
<main>
    <section class ="product">
        <h3>iPhone 16 Pro</h2>
        <p> 25.990.000đ</p>
        <img scr =" iphone.jpg" alt ="iPhone 16 Pro">
    </section>
</main>
<fotter> @ 2026 ShopTLU</footer>
*Nguồn tham chiếu: CCC_Frontend_2026/tuan_1_html5/04_visible_part_html.md
Câu A3— Block vs Inline
Text art Hộp 1 Text A Text B Hộp 2 Text C Text D Hộp 3 Do thẻ
sẽ chiếm cả dòng do div sẽ chứa cả nội dung còn theo em hiểu đơn giản chỉ là nội dung của một dòng đó thôi nghĩa là ta chỉ viết vào một phần nội dung và sau đó ta có thể viết tiếp vào hoặc xuống dòng viết nội dung mới
*Nguồn tham chiếu: CCC_Frontend_2026/tuan_1_html5/04_visible_part_html.md - 📊 Block vs Inline — Hai loại element cơ bản
Câu A4 — Table
* Sự khác nhau giữa <thead>, <tbody>,<tfoot> đến từ cách mà nó hoạt động như cái tên của nó rõ ràng hơn thì:
- <thead> là Table Header : dùng để chứa các hàng tiêu đề của bảng  ví dụ như tên cột của bảng gồm có STT, Họ Tên ,.. -> nó chính là <thead> hay thường dùng với thẻ <th>
- <tbody> là Table Body : Dùng để chứa những dữ liệu chính của bảng. phần thân gồm các hàng dữ liệu chi tiết<tr>
- <tfoot> Table Footer: Gồm các thông tin ở cuối bảng như thông tin về chú thích 
* Không nên dùng table để tạo layout trang web :
1. Dễ sai ngữ nghĩa: Thẻ <table> chỉ dùng để "Trình bày dữ liệu thống kê "
Dùng table dàn trang sẽ khiến các công cụ tìm kiếm của google không hiểu được cấu trúc thực của web
2.Không linh hoạt: Bảng có cấu trúc cứng .Khi xem trên thiết bị nhỏ nhưu smartphone , layout sẽ bị vỡ rất khó co giãn các khối <div>, <header>
3.Tốc độ tải và hiển thị chậm: Trình duyệt có thể nhận toàn bộ nguồn bên trong thẻ table,nó sẽ làm tốc độ truyền tải chậm hơn thông thường
*Nguồn tham chiếu: CCC_Frontend_2026/tuan_1_html5/05_tables_hyperlinks.md - 📊 Table — Bảng dữ liệu
PHẦN B: 

Câu B3:
Lỗi 1: Dòng 1: Chưa khai báo đầy dủ chuẩn HTML5 <Doctype >
        -> chuyển thành: <!Doctype html>
Lỗi 2: Dòng 2: Chưa chọn ngôn ngữ cho html
        -> chuyển thành: <html lang ="vi">
Lỗi 3: Dòng 4: Chưa đóng thẻ title 
        -> thêm: </title>
Lỗi 4: Dòng 5 Sai chuẩn của meta charset
        -> Chuyển thành: <meta charset="utf-8">
Lỗi 5: Dòng 8: Sai đóng thẻ tiêu đề h1 của body
        -> Chuyển thành: <h1>Welcome to ShopTLU</h1>
Lỗi 6: Dòng 12 và 13: Thiếu # sau href (Thiếu liên kết nội bộ) ví dụ nếu không có # thì nó sẽ là đường dẫn/link đến tab/trang mới có mã home.html còn nếu thêm sẽ  nhảy cùng trang xuống section có id là home của <main>
        -> sửa thành: <a href="#home">Trang chủ<a>
                      <a href="#products">Sản phẩm</a>
      Thêm id vào section của <main>
                    <section id = "home"> và <section id = "products">
Lỗi 7: Dòng 12: sai kiểu đóng của <nav> thẻ href của anchor 
        -> sửa thành: <a href="#home">Trang chủ</a>
Lỗi 8: Dòng 20 thiếu dấu "" của img scr (Ngoài ra còn thuộc tính alt của img chú thích của hình ảnh)
        -> sửa thành :<img src="iphone.jpg" alt ="iPhone 16 Pro">
Lỗi 9: Dòng 27 : Dùng table nhưng không có viền bảng
        -> sửa thành: <table border = "1">
      Ngoài ra khi dùng thì nên phân rõ <thead>,<tbody>,<tfoot>.
Lỗi 10: Dòng 30 và 31: Sai kiểu tên cột vì khi dùng table chuyển riêng thành <thead> tablerow <tr> có các cột dl của nó phải dùng <th>
        -> sửa thành: <th>Tên</th>
                      <th>Giá</th>
Lỗi 11: Dòng 49: Sai vì xuất hiện 2 main .Theo chuẩn HTML5 thì chỉ có 1 thẻ main duy nhất 
        -> sửa thành <aside>
                          <p>Sidebar content</p>
                    </aside>

Câu B4: Phân tích trang tiki:
* Nguồn tham chiếu: CCC_Frontend_2026/tuan_1_html5/04_visible_part_html.md - 🏗️ Semantic HTML5 — "Thẻ có ý nghĩa
1.1 3 Thẻ ngữ nghĩa HTML 5 mà trang tiki sử dụng là:
-<header>: Phần đầu trang .Chứa: Logo, thanh tìm kiếm, tài khoản, giỏ hàng
-<nav>: Thanh menu danh mục.Chứa: Các liên kết như “Điện thoại”, “Laptop”, “Gia dụng”…
-<main>:Phần nội dung chính của trang.Chứa:Phần nội dung chính của trang
1.2 : Không có
2.Trả lời bằng ảnh của scennshorts
3.Trả lời bằng ảnh của scennshorts

PHẦN C:

Bài C1:
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Chi tiết sản phẩm</title> <!-- title để định danh trang -->
</head>
<body>
    <header> <!-- phần đầu trang -->
        <h1>Logo / Tên website</h1> <!-- tiêu đề chính của website -->
        <nav> <!-- điều hướng chính -->
            <ul> <!-- danh sách menu -->
                <li><a href="#">Trang chủ</a></li>
                <li><a href="#">Danh mục</a></li>
                <li><a href="#">Liên hệ</a></li>
            </ul>
        </nav>
    </header>
    <nav aria-label="breadcrumb"> <!-- nav cho breadcrumb -->
        <ol> <!-- ol vì có thứ tự phân cấp -->
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#">Điện thoại</a></li>
            <li>iPhone 16</li>
        </ol>
    </nav>
    <main> <!-- nội dung chính -->
        <section class="product-detail"> <!-- nhóm chi tiết sản phẩm -->
            <section class="product-gallery">
                <h2>Hình ảnh sản phẩm</h2> <!-- thêm heading để hợp lệ semantic -->
                <figure> <!-- mỗi ảnh là 1 media -->
                    <img src="#" alt="Ảnh sản phẩm 1">
                </figure>
                <figure>
                    <img src="#" alt="Ảnh sản phẩm 2">
                </figure>
                <figure>
                    <img src="#" alt="Ảnh sản phẩm 3">
                </figure>
                <figure>
                    <img src="#" alt="Ảnh sản phẩm 4">
                </figure>
                <figure>
                    <img src="#" alt="Ảnh sản phẩm 5">
                </figure>
            </section>
            <article class="product-info"> <!-- nội dung sản phẩm độc lập -->
                <h2>Tên sản phẩm</h2>
                <p class="price">Giá sản phẩm</p>
                <p class="rating">
                    <span>★★★★★</span>
                    <span>(100 đánh giá)</span>
                </p>
                <section class="description"> <!-- mô tả -->
                    <h3>Mô tả</h3>
                    <p>Thông tin mô tả sản phẩm...</p>
                </section>
            </article>
        </section>
        <section class="specifications"> <!-- bảng thông số -->
            <h2>Thông số kỹ thuật</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Thuộc tính</th>
                        <th>Giá trị</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Màn hình</td>
                        <td>6.1 inch</td>
                    </tr>
                    <tr>
                        <td>CPU</td>
                        <td>A18</td>
                    </tr>
                </tbody>
            </table>
        </section>
        <section class="reviews"> <!-- đánh giá -->
            <h2>Đánh giá</h2>
            <article class="review">
                <h3>Tên người dùng</h3>
                <p>Nội dung bình luận...</p>
            </article>
            <article class="review">
                <h3>Tên người dùng</h3>
                <p>Nội dung bình luận...</p>
            </article>
        </section>
    </main>
    <aside> <!-- sidebar -->
        <h2>Sản phẩm tương tự</h2>
        <ul>
            <li><a href="#">Sản phẩm 1</a></li>
            <li><a href="#">Sản phẩm 2</a></li>
            <li><a href="#">Sản phẩm 3</a></li>
        </ul>
    </aside>
    <footer> <!-- footer -->
        <p>&copy; 2026 Website bán hàng</p>
    </footer>
</body>
</html>

Câu C2:
Quan điểm “dùng <div> cho mọi thứ” nghe có vẻ tiện, nhưng về kỹ thuật là một bước lùi. Thứ nhất, SEO: các công cụ tìm kiếm phân tích cấu trúc trang để hiểu nội dung. Khi dùng các thẻ ngữ nghĩa như <header>, <nav>, <main>, <article>, <section>, bạn đang cung cấp “ngữ cảnh” rõ ràng cho bot. Điều này giúp trang được lập chỉ mục tốt hơn, tăng khả năng xuất hiện đúng truy vấn. Nếu mọi thứ đều là <div>, bot phải đoán, và kết quả thường kém chính xác.Thứ hai, Accessibility (khả năng truy cập): người dùng sử dụng screen reader dựa vào các thẻ ngữ nghĩa để điều hướng nhanh (nhảy tới menu, nội dung chính…). Ví dụ, <nav> cho phép họ bỏ qua menu, còn <main> giúp đến thẳng nội dung chính. Nếu chỉ dùng <div>, trải nghiệm của người khiếm thị sẽ kém đi rõ rệt, thậm chí không thể sử dụng hiệu quả.Ví dụ cụ thể: một trang blog dùng <article> cho từng bài viết và <section> cho từng phần nội dung. Khi đó, screen reader có thể đọc theo từng bài, từng mục; đồng thời Google hiểu rõ đâu là nội dung chính để xếp hạng.Tuy vậy, <div> không phải vô dụng. Nó vẫn rất phù hợp khi bạn cần container chung để layout hoặc styling, ví dụ bọc nhiều phần tử để áp dụng CSS Grid hoặc Flexbox mà không mang ý nghĩa nội dung cụ thể.Tóm lại, <div> nên dùng đúng chỗ, còn HTML ngữ nghĩa là nền tảng để web chuẩn, dễ hiểu và thân thiện hơn

Phần D: VIDEO Thực hành:
