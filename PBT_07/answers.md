Phần A:
Câu A1:
1. console.log(x);-> khởi tạo x nhưng x chưa có giá trị nên x là undefined sau đó mới có giá trị var x=5;
var x = 5;

2. console.log(y);-> báo lỗi ngay vì let sẽ đưa lên nhưng chưa được khởi tạo và truy cập đến nó sẽ báo lỗi ngay
let y = 10;

3. const z = 15;
z = 20;
console.log(z);
 -> z được gán là biến hằng nên khi thay đổi giá trị và gán z bằng biến khác thì sẽ báo lỗi ngay  và dòng in ở dưới không được thực hiện

4. const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
-> phần tử mang giá trị 4 được thêm vào cuối mảng và thực hiện in mảng ra màn hình
5. let a = 1;
{
    let a = 2;
    console.log("Trong block:", a);
}
console.log("Ngoài block:", a);
-> code tạo ra 1 biến mới trong block với a =2 và ngoiaf block với a bằng 1 nhưng biến a bằng 2 chỉ tồn tại trong block đấy không ảnh hưởng đến giá trị bên ngoài
---> các dự đoán về code hoàn toàn đúng 

Câu A2:
console.log(typeof null);            ->ỉn ra  "object"
console.log(typeof undefined);        -> in ra"undefined"
console.log(typeof NaN);             -> in ra"number"
console.log("5" + 3);                 -> in ra"53"
console.log("5" - 3);                 -> in ra"2"
console.log("5" * "3");             -> in ra"15"
console.log(true + true);           ->in ra"2"
console.log([] + []);                -> in ra ""
console.log([] + {});              -> in ra "" + "[object Object]"
console.log({} + []);                ->in ra "" + "[object Object]"

-> các dự đoán trùng giống sau khi chạy code
* Việc mà "5" + 3 và "5" - 3 cho kết quả khác nhau vì:
- khi dùng "5" + 3 -> nó sẽ hiểu rằng "5" kiểu chuỗi và phép cộng hai chuỗi được thực hiện
- Khi dùng "5" - 3 -> nó sẽ hiểu rằng "5" là kiểu số và trừ hai số với nhau

Câu A3:
console.log(5 == "5");                -> true
console.log(5 === "5");               -> false
console.log(null == undefined);       -> true
console.log(null === undefined);      ->false 
console.log(NaN == NaN);              -> true
console.log(0 == false);              -> true
console.log(0 === false);             ->false
console.log("" == false);             -> false
Quy tắc: Từ giờ trở đi, bạn nên dùng === hơn là dùng == . Vì khi dùng == chương trình sẽ tự đổi kiểu cho bạn nếu bạn mà bạn đôi khi không để ý về các biến . Còn === sẽ cho bạn biết đúng kiểu dữ liệu của hai biến cớ giống nhau và giá trị có giống nhau không mới đúng bản chất phép so sánh

Câu A4:
Tất cả giá trị Fantacy trong JavaScrip: false; 0; -0; 0n;"";null;undefiend;NaN

if ("0") console.log("A");           -> in
if ("") console.log("B");            -> không in
if ([]) console.log("C");            -> in
if ({}) console.log("D");            -> in
if (null) console.log("E");          ->không in
if (0) console.log("F");             -> không in
if (-1) console.log("G");            -> in
if (" ") console.log("H");           -> in

Câu A5:
1. Cách 1:
var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;
2. Cách 2:
var url = `https://api.example.com/users/${userId}/orders?page=${page}`;
3. Cách 3:
var html = `
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>
Phần C:

Câu C1:
        function tinhGiaGiamGia(giaBan, phanTramGiam) {
            if (phanTramGiam < 0 || phanTramGiam > 100) {
                return "Phần trăm giảm không hợp lệ"
            }
            
            var giamGia = giaBan * phanTramGiam / 100
            let giaSauGiam = giaBan - giamGia
            
            if (giaSauGiam = 0) {
                console.log("Sản phẩm miễn phí!")
            }
            
            return giaSauGiam
        }

        // Test
        const gia = tinhGiaGiamGia("100000", 20)
        console.log("Giá sau giảm: " + gia + "đ")

        const gia2 = tinhGiaGiamGia(50000, 110)
        console.log("Giá: " + gia2)

        for (var i = 0; i < 5; i++) {
            setTimeout(function() {
                console.log("Item " + i)
            }, 1000)
        }
-> các lỗi:
1. giaBan là chuỗi thay vì số --> khi test giá ở dưới là chuỗi thay vì số vẫn ra đáp án nhưng thực chất không đúng 
2. Không kiểm tra lại typeof của giaBan--> khi không kiểm tra typeof  thì khi tính giamGia sẽ bị lỗi nếu như giaBan là chữ cái hoặc  kí tự đặc biệt
3. Không kiểm tra lại typeof của phanTramGiam là số-->khi không kiểm tra typeof  thì khi tính giamGia sẽ bị lỗi nếu như phanTramGiam là chữ cái hoặc kí tự đặc biệt
4. Dùng sai toán tử khi so sánh ở: if (giaSauGiam = 0)-> phải là ==
5. Không nên gán var : var giamGia = giaBan * phanTramGiam / 100 -> gán var sẽ không thay đổi được
6. Không nên dùng var trong vòng lặp: for (var i = 0; i < 5; i++)-> gán bằng var chỉ in ra đúng 1 giá trị-> đây chính là lỗi ẩn vì khi đó chỉ in ra "Item 5'mà thôi phải sửa lại bằng let
