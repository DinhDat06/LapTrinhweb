# Tier 1 — Hiểu luồng hoạt động của React

## 📝 Bài 1.1 — Component render lần đầu (8 phút)

### Giải thích
Khi bạn viết `<App />`, React sẽ:
1. Gọi function `App()`
2. Lấy kết quả return (JSX)
3. Hiển thị lên màn hình

### Code mẫu — `LifecycleDemo.jsx`
```jsx
function LifecycleDemo() {
    console.log("1️⃣ Component được gọi!");
    
    return (
        <div style={{ padding: "20px", border: "2px solid #3498db" }}>
            <h2>Lifecycle Demo</h2>
            <p>Mở Console (F12) để xem log</p>
            <p>Component này chỉ render MỘT lần</p>
        </div>
    );
}

export default LifecycleDemo;
```

### Thử nghiệm
1. Mở Console (F12)
2. Refresh trang
3. Thấy log: `1️⃣ Component được gọi!`
4. Thấy log xuất hiện MẤY LẦN? → **1 lần duy nhất!**

### Câu hỏi
1. Tại sao component chỉ render 1 lần?
Khi trang web được mở: <App />
React sẽ:
(1). Gọi App()
(2). Lấy JSX
(3). Hiển thị lên màn hình
->Vì chưa có gì thay đổi nên React không cần gọi lại component. Do đó: 1️⃣ Component được gọi!-->chỉ xuất hiện 1 lần.
2. Khi nào nó sẽ render lại?
Component render lại khi:
- State thay đổi (useState)
- Props thay đổi
- Component cha render lại
---

## 📝 Bài 1.2 — Biến "bình thường" vs useState (12 phút)

### Vấn đề: Biến bình thường không làm UI cập nhật!

```jsx
function BadCounter() {
    let count = 0;  // ← Biến bình thường!
    
    function handleClick() {
        count = count + 1;
        console.log("Count:", count);  // Console: 1, 2, 3...
        // Nhưng UI KHÔNG cập nhật!
    }
    
    return (
        <div style={{ padding: "20px" }}>
            <h2>❌ Counter "tệ" (dùng biến thường)</h2>
            <p>Bộ đếm: {count}</p>
            <button onClick={handleClick}>Tăng (+1)</button>
            <p style={{ color: "red" }}>
                ⚠️ Nhấn nút → Console tăng, nhưng số trên màn hình KHÔNG đổi!
            </p>
        </div>
    );
}

export default BadCounter;
```

### Giải pháp: useState — Biến "đặc biệt"

```jsx
import { useState } from "react";

function GoodCounter() {
    const [count, setCount] = useState(0);  // ← useState!
    
    function handleClick() {
        setCount(count + 1);  // React biết cần re-render!
    }
    
    return (
        <div style={{ padding: "20px" }}>
            <h2>✅ Counter "tốt" (dùng useState)</h2>
            <p>Bộ đếm: {count}</p>
            <button onClick={handleClick}>Tăng (+1)</button>
            <p style={{ color: "green" }}>
                ✅ Nhấn nút → Số trên màn hình CẬP NHẬT!
            </p>
        </div>
    );
}

export default GoodCounter;
```

### So sánh

| | Biến bình thường | useState |
|---|-----------------|----------|
| Khai báo | `let count = 0` | `const [count, setCount] = useState(0)` |
| Thay đổi | `count = 5` | `setCount(5)` |
| UI cập nhật? | ❌ Không | ✅ Có |
| Khi nào re-render? | Không bao giờ | Khi gọi setCount |

### Thử nghiệm
1. Chạy `BadCounter` → nhấn nút → thấy gì?
Console:
            Count: 1
            Count: 2
            Count: 3
Nhưng giao diện vẫn:
            Bộ đếm: 0
Vì:         let count = 0;
->chỉ là biến JavaScript bình thường.React không theo dõi nó. Nên không có re-render xảy ra.
2. Chạy `GoodCounter` → nhấn nút → thấy gì?
Khi click:  setCount(count + 1);
React biết state đã thay đổi. Nó sẽ:
            1. Cập nhật state
            2. Gọi lại component
            3. Tạo JSX mới
            4. Cập nhật giao diện
Kết quả:    0
            1
            2
            3
            4
            ...
->trên màn hình thay đổi ngay.
3. Mở Console → thấy log "render"几次?
- Render!
 Click lần 1
    Console:
        Render!
 Click lần 2
    Console:
        Render!
Tức là: Mỗi lần setCount()- >React render lại component
---

## 📝 Bài 1.3 — Luồng hoạt động (Flow) (5 phút)

### Sơ đồ luồng

```
┌─────────────────────────────────────────────────────────┐
│                    REACT FLOW                           │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  1. Component function được gọi                         │
│              ↓                                          │
│  2. Return JSX (giao diện)                              │
│              ↓                                          │
│  3. React hiển thị lên màn hình                        │
│              ↓                                          │
│  4. Người dùng tương tác (click, nhập...)               │
│              ↓                                          │
│  5. Gọi setState(newValue)                              │
│              ↓                                          │
│  6. React gọi lại component function (RE-RENDER)        │
│              ↓                                          │
│  7. Return JSX mới                                      │
│              ↓                                          │
│  8. React cập nhật màn hình (chỉ phần thay đổi)        │
│              ↓                                          │
│  Quay lại bước 4                                       │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Code minh họa
```jsx
import { useState } from "react";

function FlowDemo() {
    console.log("🔄 Component render!");
    
    const [step, setStep] = useState(1);
    
    return (
        <div style={{ padding: "20px" }}>
            <h2>Luồng hoạt động</h2>
            <p>Bước hiện tại: {step}</p>
            
            <button onClick={() => setStep(step + 1)}>
                Bước tiếp theo →
            </button>
            
            <button onClick={() => setStep(1)}>
                Quay lại đầu
            </button>
            
            <div style={{ marginTop: "20px", padding: "10px", background: "#f0f0f0" }}>
                {step === 1 && <p>👋 Bước 1: Xin chào!</p>}
                {step === 2 && <p>📖 Bước 2: Đang học React</p>}
                {step === 3 && <p>🎯 Bước 3: Hiểu useState</p>}
                {step === 4 && <p>🎉 Bước 4: Hoàn thành!</p>}
            </div>
        </div>
    );
}

export default FlowDemo;
```
