function createCart() {
    // Private data
    let items = [];
    let currentDiscountCode = ""; // Thêm biến lưu mã giảm giá hiện tại

    return {
        // Thêm sản phẩm (nếu đã có → tăng quantity)
        addItem(product, quantity = 1) { 
            let existingItem = items.find(item => item.product.id === product.id);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                items.push({ product, quantity });
            }
        },
        
        // Xóa sản phẩm theo id
        removeItem(productId) {
            items = items.filter(item => item.product.id !== productId);
        },
        
        // Cập nhật số lượng
        updateQuantity(productId, newQuantity) {
            let item = items.find(item => item.product.id === productId);
            if (item) {
                item.quantity = newQuantity;
            }
        },
        
        // Áp dụng mã giảm giá (Sửa logic ở đây)
        applyDiscount(code) { 
            currentDiscountCode = code; // Lưu mã người dùng nhập vào
        },

        // Tính tổng tiền sau khi đã trừ giảm giá (Sửa logic ở đây)
        getTotal() { 
            // 1. Tính tổng tiền gốc trước
            let totalGoc = items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
            
            // 2. Tính số tiền được giảm dựa theo mã đã lưu
            if (currentDiscountCode === "SALE10") {
                totalGoc = totalGoc * 0.90; // Giảm 10% tức là nhân 90%
            } else if (currentDiscountCode === "SALE20") {
                totalGoc = totalGoc * 0.80; // Giảm 20% tức là nhân 80%
            } else if (currentDiscountCode === "FREESHIP") {
                totalGoc = totalGoc - 30000; // Giảm thẳng 30.000đ
            }

            // Đảm bảo tổng tiền không bị âm nếu giỏ hàng ít tiền hơn mã FREESHIP
            return totalGoc < 0 ? 0 : totalGoc;
        },
        
        // In giỏ hàng dạng bảng
        printCart() { 
            console.table(items.map((item, index) => ({
                "#": index + 1,
                "Sản phẩm": item.product.name,
                "SL": item.quantity,
                "Đơn giá": item.product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }),
                "Tổng": (item.product.price * item.quantity).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
            })));
            console.log("Tổng thanh toán (đã tính giảm giá):", this.getTotal().toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }));
        },
        
        // Lấy tổng số sản phẩm (tổng quantity)
        getItemCount() { 
            return items.reduce((count, item) => count + item.quantity, 0);
        },
        
        // Xóa toàn bộ giỏ
        clearCart() { 
            items = [];
            currentDiscountCode = ""; // Reset luôn mã giảm giá
        }
    };
}

// === TEST CHẠY THỬ ===
const cart = createCart();

cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);
cart.addItem({ id: 3, name: "AirPods Pro", price: 6990000 }, 2);
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1); // Tăng SL lên 2

console.log("--- GIỎ HÀNG BAN ĐẦU ---");
cart.printCart(); 

console.log("\n--- SAU KHI ÁP MÃ GIẢM GIÁ SALE10 ---");
cart.applyDiscount("SALE10");
cart.printCart(); // Kết quả sẽ tự động giảm đi 10% chuẩn đét

console.log("\n--- THÔNG TIN SỐ LƯỢNG ---");
console.log("Số SP trong giỏ:", cart.getItemCount()); // → 4
cart.removeItem(3); // Xóa AirPods Pro
console.log("Sau khi xóa AirPods Pro, Số SP còn lại:", cart.getItemCount()); // → 2