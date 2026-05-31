Phần A:

câu A1:
- 🎯 Thứ tự Output chính xác
Plaintext
1 - Start
4 - End
3 - Promise
6 - Promise 2
2 - Timeout 0ms
7 - Nested timeout
5 - Timeout 100ms
- Để hiểu tại sao có thứ tự trên, chúng ta cần phân loại các tác vụ thành 3 nhóm theo độ ưu tiên:
1. Synchronous (Đồng bộ): Chạy ngay lập tức trên Call Stack (Ưu tiên cao nhất).
2. Microtask Queue: Chứa các callback của Promise.then(), async/await. (Ưu tiên thứ hai — Event Loop sẽ dọn sạch toàn bộ Microtask ngay khi Call Stack trống).
3. Macrotask Queue: Chứa các callback của setTimeout, setInterval. (Ưu tiên thấp nhất — Chỉ chạy khi cả Call Stack và Microtask Queue đã trống hoàn toàn).

Câu A2:
📝 Giải thích chi tiết 4 câu hỏi định hướng
1. await fetch(...) — fetch trả về gì? Tại sao cần await?
- fetch(...) trả về gì: Bản thân hàm fetch() là một tác vụ bất đồng bộ, nó trả về một Promise, bên trong Promise này chứa một đối tượng Response (đại diện cho toàn bộ phản hồi HTTP từ server như headers, status, metadata...) chứ chưa có ngay dữ liệu JSON mong muốn.

- Tại sao cần await: Vì fetch() chạy bất đồng bộ, chúng ta cần từ khóa await để tạm dừng việc thực thi hàm getData(), "chờ" cho đến khi Promise đó được giải quyết hoàn tất (resolved) và trả về đối tượng Response thực sự. Nếu không có await, biến response sẽ chỉ là một Promise đang ở trạng thái chờ (pending), và bạn không thể đọc được status hay dữ liệu từ nó.

2. response.ok — Khi nào false? Liệt kê 3 status codes tương ứng.
- Khi nào false: Thuộc tính response.ok là một giá trị Boolean. Nó sẽ là true nếu mã trạng thái HTTP (status code) nằm trong khoảng thành công từ 200 đến 299. Nó sẽ chuyển thành false khi server phản hồi về một mã lỗi nằm ngoài khoảng này (tức là từ 300 trở lên, đại diện cho lỗi Client hoặc lỗi Server).

- 3 status codes tương ứng khiến response.ok bằng false:

- 404 (Not Found): Không tìm thấy đường dẫn API/tài nguyên yêu cầu.

- 500 (Internal Server Error): Server gặp sự cố bên trong hệ thống và không thể xử lý request.

- 403 (Forbidden): Client bị từ chối truy cập (thiếu quyền hoặc không có token hợp lệ).

3. response.json() — Tại sao cần await lần nữa?
- Khi server phản hồi, luồng dữ liệu (body dữ liệu) được truyền về dưới dạng một luồng stream thô (ReadableStream). Hàm response.json() có nhiệm vụ đọc hết luồng dữ liệu này và phân tích (parse) chuỗi văn bản đó thành một đối tượng JavaScript.

- Quá trình đọc stream và ép kiểu dữ liệu này cũng tốn thời gian và được xử lý bất đồng bộ, do đó response.json() tiếp tục trả về một Promise. Vì vậy, chúng ta bắt buộc phải dùng await lần thứ hai để đợi quá trình parse này chạy xong hoàn toàn thì mới lấy được data sạch để sử dụng.

4. try...catch — Catch những lỗi gì? (Network error? 404? JSON parse error?)
- Khối catch (error) ở đây cực kỳ mạnh mẽ, nhưng nó sẽ bắt các loại lỗi theo cơ chế khác nhau:

- Có bắt Network error (Lỗi mạng) không? Có. Nếu mất kết nối internet, đứt cáp, hoặc sai địa chỉ domain (DNS lỗi), hàm fetch() sẽ thất bại hoàn toàn (Promise bị reject) và nhảy ngay lập tức vào khối catch.

- Có bắt lỗi 404 / 500 không? Có (nhưng gián tiếp). Bản thân hàm fetch() khi gặp lỗi 404 hay 500 thì không tự nhảy vào catch (vì server vẫn phản hồi về một Response). Tuy nhiên, nhờ có đoạn code kiểm tra chủ động:

Câu A3:
1. Sơ đồ trạng thái:
                    ┌─────────────┐
                    │   PENDING   │  ← Đang chờ (chưa có kết quả)
                    └──────┬──────┘
                           │
              ┌────────────┴────────────┐
              │                         │
              ▼                         ▼
     ┌─────────────────┐       ┌─────────────────┐
     │    FULFILLED    │       │    REJECTED     │
     │  (resolve)      │       │  (reject)       │
     │  .then() chạy   │       │  .catch() chạy  │
     └─────────────────┘       └─────────────────┘
- Pending: Promise vừa được tạo, chưa có kết quả.
- Fulfilled: Tác vụ thành công, .then() được gọi với giá trị trả về.
- Rejected: Tác vụ thất bại, .catch() được gọi với lỗi.
2. Callback Hell là gì?
- Callback Hell xảy ra khi các hàm async lồng nhau nhiều cấp — mỗi kết quả phụ thuộc vào kết quả trước.
3. Ví dụ 4 cấp Callback Hell:
            loginUser(
            "user@email.com",
            "123456",
            function (user) {
                getUserProfile(
                user.id,
                function (profile) {
                    getOrders(
                    profile.id,
                    function (orders) {
                        getOrderDetail(
                        orders[0].id,
                        function (detail) {
                            console.log("Chi tiết đơn hàng:", detail);
                        },
                        function (err) {
                            console.error("Lỗi lấy chi tiết:", err);
                        },
                        );
                    },
                    function (err) {
                        console.error("Lỗi lấy đơn hàng:", err);
                    },
                    );
                },
                function (err) {
                    console.error("Lỗi lấy profile:", err);
                },
                );
            },
            function (err) {
                console.error("Lỗi đăng nhập:", err);
            },
            );
4. Refactor thành async/await:
            async function loadOrderDetail() {
            try {
                const user = await loginUser("user@email.com", "123456");
                const profile = await getUserProfile(user.id);
                const orders = await getOrders(profile.id);
                const detail = await getOrderDetail(orders[0].id);

                console.log("Chi tiết đơn hàng:", detail);
            } catch (err) {
                console.error("Lỗi:", err.message);
            }
            }

Phần C:
Câu C1 — Error Handling Strategy
1. Network errors (mất mạng giữa chừng)
- Khi mất mạng, fetch throw TypeError: Failed to fetch.
- Cần bắt riêng loại lỗi này để hiển thị đúng thông báo và cho phép retry.
            async function getProducts() {
            try {
                const res = await fetch("/api/products");
                const data = await res.json();
                return data;
            } catch (error) {
                if (error instanceof TypeError) {
                // Mất mạng hoặc server không phản hồi
                showToast("Mất kết nối mạng. Vui lòng kiểm tra internet.");
                } else {
                showToast("Có lỗi xảy ra: " + error.message);
                }
                return null;
            }
            }
2. API errors — Xử lý từng loại status code
- fetch không tự throw khi nhận HTTP 4xx/5xx — phải check response.ok thủ công.
            async function handleResponse(response) {
            if (response.ok) return response.json();

            switch (response.status) {
                case 400:
                throw new Error("Dữ liệu gửi lên không hợp lệ.");

                case 401:
                // Token hết hạn → redirect về trang login
                localStorage.removeItem("token");
                window.location.href = "/login";
                throw new Error("Phiên đăng nhập hết hạn.");

                case 403:
                throw new Error("Bạn không có quyền thực hiện thao tác này.");

                case 404:
                throw new Error("Không tìm thấy sản phẩm.");

                case 429:
                // Too Many Requests → đọc header Retry-After nếu có
                const retryAfter = response.headers.get("Retry-After") || 10;
                throw new Error(`Quá nhiều request. Thử lại sau ${retryAfter} giây.`);

                case 500:
                case 502:
                case 503:
                throw new Error("Lỗi server. Vui lòng thử lại sau.");

                default:
                throw new Error(`Lỗi không xác định (HTTP ${response.status}).`);
            }
            }

            // Dùng:
            async function getProduct(id) {
            const res = await fetch(`/api/products/${id}`);
            return handleResponse(res); // throw nếu lỗi, return data nếu ok
            }
3. Timeout — fetchWithTimeout
- fetch mặc định không có timeout. Dùng AbortController để hủy request sau X ms.
            async function fetchWithTimeout(url, options = {}, ms = 10000) {
            const controller = new AbortController();

            // Đặt timer — sau ms giây sẽ gọi abort()
            const timeoutId = setTimeout(() => controller.abort(), ms);

            try {
                const response = await fetch(url, {
                ...options,
                signal: controller.signal, // Truyền signal vào fetch
                });
                return response;
            } catch (error) {
                if (error.name === "AbortError") {
                throw new Error(`Request timeout sau ${ms / 1000} giây.`);
                }
                throw error;
            } finally {
                clearTimeout(timeoutId); // Luôn clear timer dù thành công hay thất bại
            }
            }

            // Dùng:
            async function getCart() {
            try {
                const res = await fetchWithTimeout("/api/cart", {}, 10000);
                return res.json();
            } catch (error) {
                if (error.message.includes("timeout")) {
                showToast("Server phản hồi quá chậm. Vui lòng thử lại.");
                }
                return null;
            }
            }
4. Retry logic — fetchWithRetry
- Tự động thử lại tối đa maxRetries lần nếu gặp lỗi network hoặc server 5xx.
            async function fetchWithRetry(url, options = {}, maxRetries = 3) {
            let lastError;

            for (let attempt = 1; attempt <= maxRetries; attempt++) {
                try {
                const response = await fetchWithTimeout(url, options, 10000);

                // Không retry với lỗi client (4xx) — chỉ retry server lỗi (5xx)
                if (response.status >= 400 && response.status < 500) {
                    return response;
                }

                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }

                return response; // Thành công
                } catch (error) {
                lastError = error;
                console.warn(`Attempt ${attempt}/${maxRetries} failed:`, error.message);

                if (attempt < maxRetries) {
                    // Exponential backoff: 1s, 2s, 4s...
                    const delay = 1000 * Math.pow(2, attempt - 1);
                    console.log(`Retry sau ${delay}ms...`);
                    await new Promise((resolve) => setTimeout(resolve, delay));
                }
                }
            }

            throw new Error(`Thất bại sau ${maxRetries} lần thử. Lỗi cuối: ${lastError.message}`);
            }

            // Dùng:
            async function placeOrder(orderData) {
            try {
                const res = await fetchWithRetry(
                "/api/orders",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(orderData),
                },
                3,
                );
                return res.json();
            } catch (error) {
                showToast("Đặt hàng thất bại sau nhiều lần thử: " + error.message);
                return null;
            }
            }
Câu C2:
1. Promise.all() — Cần tất cả mới chạy tiếp
- Dùng khi các dữ liệu phụ thuộc nhau. Nếu thiếu 1 cái → không render được → reject ngay.
- Scenario: Trang checkout cần đủ thông tin user + giỏ hàng + địa chỉ mới hiển thị được. 
            async function loadCheckoutPage(userId) {
            try {
                // Cần đủ 3 thứ này mới render được trang checkout
                const [user, cart, address] = await Promise.all([
                fetch(`/api/users/${userId}`).then((r) => r.json()),
                fetch(`/api/cart/${userId}`).then((r) => r.json()),
                fetch(`/api/address/${userId}`).then((r) => r.json()),
                ]);

                renderCheckout(user, cart, address);
            } catch (error) {
                // 1 trong 3 lỗi → không thể render → báo lỗi toàn trang
                showError("Không tải được trang thanh toán. Vui lòng thử lại.");
            }
            }
2. Promise.allSettled() — Mỗi widget độc lập
- Dùng khi các API không phụ thuộc nhau. 1 cái lỗi không nên làm hỏng cái khác.
- Scenario: Dashboard hiển thị nhiều widget — thời tiết lỗi không nên làm ẩn cả danh sách đơn hàng.
            async function loadDashboard(userId) {
            const results = await Promise.allSettled([
                fetch(`/api/orders/${userId}`).then((r) => r.json()),
                fetch(`/api/recommendations`).then((r) => r.json()),
                fetch(`https://api.open-meteo.com/...`).then((r) => r.json()),
            ]);

            const [orders, recommendations, weather] = results;

            // Xử lý từng widget độc lập
            if (orders.status === "fulfilled") {
                renderOrders(orders.value);
            } else {
                renderWidgetError("orders", "Không tải được đơn hàng");
            }

            if (recommendations.status === "fulfilled") {
                renderRecommendations(recommendations.value);
            } else {
                renderWidgetError("recommendations", "Không tải được gợi ý");
            }

            if (weather.status === "fulfilled") {
                renderWeather(weather.value);
            } else {
                renderWidgetError("weather", "Không tải được thời tiết");
            }
            }
3. Promise.race() — Lấy cái xong trước, dùng làm timeout
- Dùng để giới hạn thời gian chờ hoặc chọn server phản hồi nhanh nhất.
- Scenario: API thanh toán phải phản hồi trong 5 giây, nếu không → báo timeout.
                function timeout(ms) {
                return new Promise((_, reject) => setTimeout(() => reject(new Error(`Timeout sau ${ms / 1000}s`)), ms));
                }

                async function processPayment(orderData) {
                try {
                    // Race giữa API thật và timeout 5 giây
                    const result = await Promise.race([
                    fetch("/api/payment", {
                        method: "POST",
                        body: JSON.stringify(orderData),
                    }).then((r) => r.json()),

                    timeout(5000),
                    ]);

                    showSuccess("Thanh toán thành công!");
                    return result;
                } catch (error) {
                    if (error.message.includes("Timeout")) {
                    showError("Server thanh toán phản hồi quá chậm. Vui lòng thử lại.");
                    } else {
                    showError("Thanh toán thất bại: " + error.message);
                    }
                    return null;
                }
                }
4. Promise.any() — Thử nhiều nguồn, lấy cái nào thành công
- Dùng khi có nhiều nguồn dự phòng. Chỉ fail nếu tất cả đều fail.
- Scenario: Tải ảnh sản phẩm từ nhiều CDN, dùng cái nào phản hồi trước.
            async function loadProductImage(productId) {
            const CDNs = [
                `https://cdn1.example.com/images/${productId}.jpg`,
                `https://cdn2.example.com/images/${productId}.jpg`,
                `https://cdn3.example.com/images/${productId}.jpg`,
            ];

            try {
                // Thử cả 3 CDN song song, lấy cái nào load được đầu tiên
                const fastestUrl = await Promise.any(
                CDNs.map((url) =>
                    fetch(url).then((r) => {
                    if (!r.ok) throw new Error(`CDN lỗi: ${r.status}`);
                    return url; // Trả về URL của CDN thành công
                    }),
                ),
                );

                document.querySelector("#product-img").src = fastestUrl;
            } catch (error) {
                // AggregateError: tất cả 3 CDN đều lỗi
                document.querySelector("#product-img").src = "/images/placeholder.jpg";
                console.error("Tất cả CDN đều lỗi:", error.errors);
            }
            }
Khi nào nên dùng:
Cần đủ tất cả mới có nghĩa?        → .all()
Muốn xử lý riêng từng kết quả?     → .allSettled()
Cần timeout hoặc lấy cái nhanh nhất? → .race()
Có nhiều nguồn dự phòng?            → .any()