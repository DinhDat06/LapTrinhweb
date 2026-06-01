# Tier 0 — Component đầu tiên (Làm quen cú pháp React)
## 📝 Bài 0.1 — Chạy React đầu tiên (5 phút)

### Bước 1: Tạo project
```bash
npm create vite@latest hello-react -- --template react
cd hello-react
npm install
npm run dev
```

### Bước 2: Xem file `src/App.jsx`
```jsx
// Đây là một React Component
function App() {
    return (
        <div>
            <h1>Xin chào React!</h1>
            <p>Đây là component đầu tiên của bạn</p>
        </div>
    );
}

export default App;
```

### Bước 3: Thử sửa nội dung
```jsx
function App() {
    return (
        <div>
            <h1>Tên của bạn ở đây</h1>
            <p>Hôm nay là ngày đẹp trời</p>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
        </div>
    );
}

export default App;
```

### Câu hỏi
1. File `.jsx` khác gì file `.js`?
- Đối với .js : chứa javascript thông thường .Vd:
                function hello() {
                    console.log("Xin chào");
                }
- Đối với .jsx : Cho phép viết HTML bên trong JavaScript. VD:
                function App() {
                    return <h1>Xin chào React</h1>;
                }
2. Tại sao phải `export default App`?
File main.jsx thường có:
            import App from './App';
Dòng này lấy component App từ file App.jsx. Vì vậy cuối file phải có:
            export default App;
->để component được xuất ra ngoài.
3. Thử xóa `export default` → chuyện gì xảy ra?
Khi chạy sẽ báo lỗi kiểu:
            The requested module '/src/App.jsx' does not provide an export named 'default'
Vì React không import được component App.
- VD đoạn code báo lỗi :
            function App() {
                return <h1>Hello</h1>;
            }
---

## 📝 Bài 0.2 — JSX là HTML "xịn hơn" (10 phút)

### So sánh trực tiếp

```jsx
 ===== Bài tập: Viết lại HTML thành JSX =====

 HTML thuần (copy từ bài cũ):

<div class="card">
    <img src="avatar.jpg" alt="Avatar">
    <h2>Nguyễn Văn Minh</h2>
    <p>Sinh viên năm 3</p>
    <label for="email">Email:</label>
    <input type="email" id="email">
</div>

// JSX (viết lại):
function StudentCard() {
    return (
        <div className="card">         {/* class → className */}
            <img src="avatar.jpg" alt="Avatar" />  {/* Đóng thẻ */}
            <h2>Nguyễn Văn Minh</h2>
            <p>Sinh viên năm 3</p>
            <label htmlFor="email">Email:</label>   {/* for → htmlFor */}
            <input type="email" id="email" />       {/* Đóng thẻ */}
        </div>
    );
}

export default StudentCard;
```

### Bài tập: Viết lại HTML thành JSX

**Bài 1:** Viết component `UserProfile`
```html
<!-- HTML gốc -->
<div class="profile">
    <h1>Hồ sơ cá nhân</h1>
    <img src="photo.jpg" alt="Ảnh đại diện">
    <table>
        <tr>
            <td>Họ tên:</td>
            <td>Minh</td>
        </tr>
        <tr>
            <td>Email:</td>
            <td>minh@example.com</td>
        </tr>
    </table>
</div>
```
-->--> Chuyển thành .jsx:
function userprofile(){
    return(
        <div className="profile">
            <h1> Hồ sơ cá nhân</h1>
            <img scr="photo.jpg" alt ="Ảnh đại diện" />
            <table>
                <tbody>
                    <tr>
                        <td>Họ Tên:</td>
                        <td>Minh</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>minh@example.com</td>
                    </tr>
                </tbody>
            </table>
        <div>
    );
}
export default UserProfile;
**Bài 2:** Viết component `ProductInfo`
```html
<!-- HTML gốc -->
<div class="product">
    <h2>iPhone 15</h2>
    <p class="price">25.000.000đ</p>
    <ul>
        <li>Màn hình: 6.1 inch</li>
        <li>Camera: 48MP</li>
        <li>Pin: 3349 mAh</li>
    </ul>
    <button>Mua ngay</button>
</div>
```
--> chuyển thành .jsx:
function ProductInfor(){
    return(
        <div className = "product>
            <h2>iPhone 15</h2>
           <p class="price">25.000.000đ</p>
            <ul>
                <li>Màn hình: 6.1 inch</li>
                <li>Camera: 48MP</li>
                <li>Pin: 3349 mAh</li>
            </ul>
            <button>Mua ngay</button>
        </div> 
    );
}
export default ProductInfo;