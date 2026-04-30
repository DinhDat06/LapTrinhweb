PHẦN A:
Câu A1:
1.type="email" → Ô nhập text, tự kiểm tra có @ → Dùng cho form đăng ký
2.type="text" → ô nhập văn bản 1 dòng , không tụ xác thực -> dùng cho khách hàng nhập tên và địa chỉ
3.type= "password"-> ô nhập mật khẩu với kí tự bị ẩn(***) , không tự kiểm tra-> dùng cho đăng nhập, đăng kí
4.type="number'-> Ô nhập số có nút tăng/giảm → Tự kiểm tra giá trị số (min, max, step) → Dùng nhập số lượng sản phẩm
5.type="tel" → Ô nhập số điện thoại (hiện bàn phím số trên mobile) → Không tự kiểm tra chặt (dùng pattern) → Dùng nhập số điện thoại giao hàng
6.type="date" → Có giao diện chọn ngày (calendar) → Tự kiểm tra định dạng ngày (min, max) → Dùng chọn ngày giao hàng, hoặc khách hàng nhập vào ngày tháng năm sinh(->có thể dùng trong đăng kí)
7.type="color" → Hiển thị bảng chọn màu → Không có xác thực → Dùng chọn màu sản phẩm (áo, giày…)
8.type="range" → Thanh trượt → Kiểm tra giá trị trong khoảng (min, max, step) → Dùng lọc giá tiền sản phẩm
9.type="file" → Nút chọn file từ máy → Có thể giới hạn loại file (accept, multiple) → Dùng tải ảnh đánh giá sản phẩm
10.type="url" → Ô nhập text → Tự kiểm tra định dạng URL (http:// hoặc https://) → Dùng nhập website cửa hàng/đối tác
-Nguồn:Tài liệu tham chiếu:07_forms_interactive.md
Câu A2:
<!-- Trường hợp 1 -->
<input type="text" required value="">   <!-- User để trống -->
-> không chạy được lí do required là bắt buộc nhập dữ liệu 
<!-- Trường hợp 2 -->
<input type="email" value="abc">        <!-- User gõ "abc" -->
-> không chạy được do định dạng là email định dạng có gồm dấu @
<!-- Trường hợp 3 -->
<input type="number" min="1" max="10" value="15"> <!-- User gõ 15 -->
-> không chạy được do số 15 không nằm ngoài khoảng từ 1-10
<!-- Trường hợp 4 -->
<input type="text" pattern="[0-9]{10}" value="abc123"> <!-- User gõ "abc123" -->
Không submit được vì không khớp với pattern. Biểu thức [0-9]{10} yêu cầu đúng 10 chữ số, nhưng "abc123" chứa chữ cái và không đủ 10 số.
<!-- Trường hợp 5 -->
<input type="password" minlength="8" value="123">  <!-- User gõ "123" -->
-> không chạy được vì code cài là tối thiểu nhập 8 kí tự nhưng người dùng nhập có 3 kí tự
-Nguồn:Tài liệu tham chiếu:07_forms_interactive.md
Sau khi chạy ảnh được gửi vào seensshorts, thấy kết quả đúng như dự đoán
Câu A3:
1. Tại sao <label for="email"> quan trọng cho screen reader?
-><label> liên kết với <input> thông qua for và id.Khi dùng trình đọc màn hình, nó sẽ đọc nội dung label trước, giúp người dùng biết ô đó dùng để nhập gì.Nếu không có <label>, screen reader chỉ đọc “edit text” → không hiểu phải nhập gì.
2.Khi nào dùng <fieldset>+ <legend>? Cho ví dụ cụ thể.
-Dùng khi có nhiều input liên quan thành một nhóm
<fieldset>: bao nhóm và <legend>: tiêu đề mô tả nhóm đó-> nó giúp người dùng dễ hiểu cấu trúc form
Ví dụ:
<fieldset>
    <legend>Thông tin giao hàng</legend>

    <label for="name">Họ tên:</label>
    <input type="text" id="name">

    <label for="address">Địa chỉ:</label>
    <input type="text" id="address">
</fieldset>
3.aria-labelsử dụng vào lúc nào? Tại sao KHÔNG nên sử dụng aria-labelkhi đã có <label>?
Dùng: Khi không có text hiển thị nhưng vẫn cần mô tả cho screen reader.Ví dụ: icon button
Câu A4:
1. loading="lazy" là gì? Cải thiện gì? Khi nào KHÔNG nên dùng?
loading="lazy" giúp trì hoãn tải ảnh cho đến khi ảnh sắp xuất hiện trong vùng nhìn (viewport).
-Cải thiện: Giảm thời gian tải trang ban đầu ,Tiết kiệm băng thông,Tăng hiệu năng, đặc biệt với trang có nhiều ảnh 
-KHÔNG nên dùng khi:Ảnh nằm trong màn hình đầu tiên ,Ảnh quan trọng như banner, hero image → Vì lazy load có thể làm ảnh hiển thị chậm
2. Tại sao nên dùng nhiều <source> trong <video>?
-Các trình duyệt hỗ trợ định dạng video khác nhau
Cung cấp nhiều <source> giúp: Tăng khả năng tương thích và Trình duyệt tự chọn định dạng phù hợp nhất
-3 định dạng phổ biến:MP4 (video/mp4),WebM (video/webm), Ogg (video/ogg)
3.Thuộc tính alt dùng để làm gì?
Mô tả nội dung hình ảnh khi ảnh bị lỗi không hiển thị hoặc cho trình đọc màn hình
-Viết alt tốt:
Iphone 16: alt="Điện thoại iphone 16 pro max màu Titan"
-Ảnh trang trí: alt="" -> để trống để screen reader bỏ qua
-Biểu đồ doanh thu: alt="Biểu đồ cột thể hiện doanh thu Q1/2026 đạt mức tăng trưởng 15% so với cùng thời kỳ năm trước"

Câu A5:
Cách 1: Dùng <img> khi ảnh là một phần của nội dung văn bản hoặc mang tính chất trang trí, không cần giải thích độc lập
- VD1: Các icon nhỏ trong menu điều hướng
- VD2: Các banner quảng cáo
Cách 2: Dùng <figure> khi ảnh cần có chú thích đi kèm. Nếu tách khỏi bài viết, nội dung vẫn có ý nghĩa
- VD1: Ảnh sản phẩm trong trang chi tiết kèm tên và giá bán
- VD2: Ảnh sơ đồ kiến trúc hệ thống trong một bài blog kỹ

PHẦN C:
Câu C1

<form>
    Tên: <input type="text">
    <input type="email" placeholder="Email của bạn">
    <input type="password" placeholder="Mật khẩu">
    <input type="password" placeholder="Nhập lại mật khẩu">
    Phone: <input type="text" value="0901234567">
    <select>
        <option>Hà Nội</option>
        <option>TP.HCM</option>
    </select>
    <label>
        Tôi đồng ý điều khoản
    </label>
    <input type="submit" value="Gửi">
</form>
- Lỗi 1: Dòng 2 - Input "Tên" không có <label for="...">, vi phạm accessibility->Sửa: 
                    <label for="name">Tên:</label>
                    <input type="text" id="name" name="name" required>
- Lỗi 2:Dòng 3 - Input "email" không có <label for="..."> và <input...id="..." name="...">, vi phạm accessibility và best practices->Sửa:
                    <label for="email">Email:</label><br>
                    <input type="email" id="email" name="email" placeholder="Nhập email" required><br><br>
- Lỗi 3:Dòng 4, 5 - Input "password" không có <label for="..."> và <input...id="..." name="...">, vi phạm accessibility và best practices->Sửa:
                    <label for="password">Mật khẩu:</label>
                    <input type="password" id="password" name="password" placeholder="Nhập mật khẩu"><br>
                    <label for="confirm_password">Xác nhận mật khẩu:</label>
                    <input type="password" id="confirm_password" name="confirm_password" placeholder="Xác nhận mật khẩu">
- Lỗi 4: Dòng 6 - Input "phone" không có <label for="...">, <input...id="..." name="..."> và nên dùng ` để tối ưu bàn phím số trên điện thoại di động, vi phạm cả 3 lỗi-> Sửa:
                    <label for="phone">Số điện thoại:</label>
                    <input type="tel" id="phone" name="phone" value="0901234567" required>
- Lỗi 5: Dòng 7->10 - Input "city" không có <label for="...">, <select id="..." name="..."> và <option value="...">, vi phạm cả 3 lỗi->Sửa:
                    <label for="city">Thành phố</label>
                    <select id="city" name="city" required>
                        <option value="">Chọn thành phố</option>
                        <option value="hanoi">Hà Nội</option>
                        <option value="hcm">Hồ Chí Minh</option>
                    </select>
- Lỗi 6: Dòng 11->13 - Tương tác và tích chọn ô điều khoản thiếu thẻ <input type="checkbox"...,> vi phạm cả 3 lỗi->Sửa:
                    <input type="checkbox" id="terms" name="terms" required>
                    <label for="terms">Tôi đồng ý với điều khoản</label>
- Lỗi 7: Dòng 14 - nút "submit" thiếu một aria-label, nên sử dụng thẻ <button type="submit"...>, vi phạm accessibility và best practices->Sửa:
                    <button type="submit" aria-label="Gửi">Gửi</button>
- Lỗi 8: Toàn bộ form - thiếu thuộc tính required ở các trường bắt buộc -> cho phép gửi form rỗng, vi phạm validation->Sửa: Thêm required vào các input: tên, email, password,...
Câu C2
 1. Viết pattern cho CMND/CCCD và Số tài khoản
-CMND/CCCD có đúng 12 số: pattern="[0-9]{12}"
-Số tài khoản có 10->15 số: pattern="[0-9]{10,15}
2. HTML5 validation đủ an toàn cho ứng dụng ngân hàng chưa? Tại sao?
-Không đủ an toàn
-Lý do: 
    + Dễ dàng bị vô hiệu hóa: Người dùng mở DevTools F12 và xóa thuộc tính required/pattern trong mã HTML -> có thể gửi dữ liệu sai quy định
    + HTML5 validation chủ yếu phục vụ trải nghiệm người dùng (UX) để báo lỗi nhanh, không có khả năng bảo vệ dữ liệu thực sự trước các cuộc tấn công có ý đồ
3. Loại validation mà HTML5 không thể làm được
- Kiểm tra dữ liệu từ server
    + Vì HTML5 không thể truy cập vào cơ sở dữ liệu nên không thể kiểm tra xem số CMND/CCCD hoặc email này đã tồn tại trong hệ thống ngân hàng chưa.
- Xử lý logic phức tạp
    + HTML5 không xử lý được logic kiểu "nếu...thì"
    + VD: Nếu phương thức xác thực là "Mã OTP qua email" -> "Số điện thoại' không bắt buộc. Nhưng nếu chọn "SMS" -> "Số điện thoại" là bắt buộc
- So sánh dữ liệu nhiều field
    + HTML không thể kiểm tra mối quan hệ giữa 2 input
    + VD: Mật khẩu và xác nhận mật khẩu phải giống nhau, ngày kết thúc phải sau ngày bắt đầu,..
4. Hai rủi ro bảo mật nếu chỉ validate trên Frontend mà không validate Backend
- Người dùng có thể vượt qua validation (Bypass Validation)
    + Người dùng không cần đi qua giao diện web, mà có thể dùng công cụ như Postman/cURL hoặc tắt JS và F12 để sửa mã nguồn nhằm ném dữ liệu sai lệch trực tiếp vào bên trong mà không bị kiểm tra
    +Hậu quả -> Kẻ xấu có thể gửi dữ liệu như: số tiền âm, mật khẩu chỉ có 1 ký tự, số tài khoản giả,.. -> Nếu Backend không kiểm tra lại -> hệ thống chấp nhận toàn bộ dữ liệu đó -> lỗi logic nghiệp vụ nghiêm trọng
- Bị điều khiển hoặc đánh cắp dữ liệu (Injection Attack)
    +Khi không kiểm tra dữ liệu ở Backend -> Server thực thi mọi thứ được gửi lên. Thay vì nhập số tài khoản, những kẻ xấu nhập vào các đoạn mã độc
    +Hậu quả 1-> Tiêm mã độc vào giao diện (XSS) -> Đánh cắp cookies/Session ID, tự động chuyển hướng người dùng sang trang web giả mạo ngân hàng, hay thay đổi nội dung để lừa đảo
    +Hậu quả 2 -> Tấn công trực tiếp vào CSDL (SQL Injection) -> đăng nhập vào tài khoản bất kỳ mà không cần mật khẩu, xuất ra toàn bộ danh sách khách hàng và số dư hoặc có thể sửa/xóa dữ liệu của ngân hàng

PHẦN D
