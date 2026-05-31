Phần A:

Câu A1:
        <div id="app">
            <header>
                <h1>Todo App</h1>
                <nav>
                    <a href="#" class="active">All</a>
                    <a href="#">Active</a>
                    <a href="#">Completed</a>
                </nav>
            </header>
            <main>
                <form id="todoForm">
                    <input id="todoInput" type="text">
                    <button type="submit">Add</button>
                </form>
                <ul id="todoList">
                    <li class="todo-item">Learn HTML</li>
                    <li class="todo-item completed">Learn CSS</li>
                </ul>
            </main>
        </div>
1. vẽ sơ đồ cây:
                  div#app
                 /       \
         <header>         <main>
          /    \          /    \
       <h1>   <nav>    <form>   <ul>
        |     / | \     /  \     /  \
     "Todo"  <a><a><a> <inp><but> <li> <li>
2. Viết querySelector:
- const title =document.querySelector("h1")
- document.querySelector("form input");
- const allTodos = document.querySelectorAll(".todo-item");
- document.querySelector("a.active");
- document.querySelector("#todoList li");
- document.querySelectorAll("nav a");

Câu A2:
- VD: document.querySelector(".item");-> lấy phần tử dầu tiên được tìm thấy
VD: document.querySelectorAll(".item");-> lấy các phần tử được tìm thấy
VD thực tế hơn:
<li class="item">1</li>
<li class="item">2</li>
<li class="item">3</li>
document.querySelector(".item");      // chỉ lấy số 1
document.querySelectorAll(".item");   // lấy cả 3 phần tử
- innerHTML nguy hiểm? Vì nếu user nhập <img src=x onerror="alert('Hacked!')">  -->thì trình duyệt sẽ chạy code bên trong
=> cách sửa: document.querySelector("#result").textContent = userInput;

Câu A3:
- Khi click vào button, output = buuton->inner->outer (sự kiện nổi bọt từ trong ra ngoài)
- Không dùng stopPropagation(), output =buuton->inner->outer (vì click vào button trc rồi hai cái còn lại mới hiện lên)
- bỏ conmment dùng stopPropagation(), output = button(Vì stopPropagation() chặn sự kiện lan lên các phần tử cha.)

Phần C: Debug và phân tích

Câu C1 
- Debug DOM Code
const countDisplay = document.querySelector(".count");
const historyList = document.getElementById("history");

let count = 0;

function addHistory(msg) {
  const li = document.createElement("li");
  li.textContent = msg;
  li.addEventListener("click", function () {
    deleteHistory(this);
  });
  historyList.appendChild(li);
}

document.querySelector("#incrementBtn").addEventListener("click", function () {
  count++;
  countDisplay.textContent = count; // fix 6: dùng textContent thay innerHTML để tránh XSS
  addHistory("Count changed to " + count);
});

// fix 1: "onclick" → "click" (không có event tên "onclick")
document.querySelector("#decrementBtn").addEventListener("click", function () {
  count--;
  countDisplay.textContent = count; // fix 6: textContent thay innerHTML
  addHistory("Count changed to " + count);
});

document.querySelector("#resetBtn").addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count; // fix 2: countDisplay là const, không thể gán lại — phải dùng textContent
  historyList.innerHTML = ""; // fix 3: innerHTML = null hiển thị chữ "null" — phải dùng ""
  addHistory("Reset — count về 0"); // fix 7: reset không ghi history
});

function deleteHistory(element) {
  element.parentNode.removeChild(element);
}

document.querySelector("#clearHistory").addEventListener("click", () => {
  const items = historyList.querySelectorAll("li");
  items.forEach((item) => {
    item.remove(); // fix 4: item.remove thiếu () — chỉ tham chiếu hàm chứ không gọi
  });
});

window.addEventListener("beforeunload", () => {
  localStorage.setItem("count", count);
  localStorage.setItem("history", historyList.innerHTML);
});

window.addEventListener("load", () => {
  // fix 5 + 8: localStorage.getItem() trả về string, phải parseInt()
  // nếu chưa có dữ liệu trả về null → || 0 để fallback
  count = parseInt(localStorage.getItem("count")) || 0;
  countDisplay.textContent = count;

  const savedHistory = localStorage.getItem("history");
  if (savedHistory) historyList.innerHTML = savedHistory;
});
Câu C2
- Performance
Giải thích: Tại sao bind event lên 1000 elements riêng lẻ là BAD PRACTICE? Event Delegation giải quyết thế nào?
Tại sao bind lên 1000 elements là bad practice
Mỗi addEventListener tốn bộ nhớ. 1000 elements = 1000 event listeners tồn tại trong heap.
Khi thêm element mới vào DOM, phải bind event lại thủ công cho element đó.
Khi xóa element, phải nhớ removeEventListener để tránh memory leak.
Với danh sách động (thêm/xóa liên tục), code quản lý event trở nên phức tạp và dễ lỗi.
Event Delegation giải quyết thế nào
Event bubbling: khi user click vào element con, event nổi lên qua tất cả phần tử cha. Thay vì bind lên 1000 elements con, chỉ cần bind 1 listener lên phần tử cha. Phần tử cha lắng nghe tất cả event từ con nổi lên, rồi kiểm tra e.target để biết con nào được click.

Refactor
const fragment = document.createDocumentFragment();

for (let i = 0; i < 1000; i++) {
  const div = document.createElement("div");
  div.textContent = `Item ${i}`;
  fragment.appendChild(div);
}

document.body.appendChild(fragment);
Nhanh hơn vì DocumentFragment là một node ảo tồn tại trong bộ nhớ, không gắn vào DOM thật. Khi appendChild vào fragment, browser không cần tính lại layout vì fragment không hiển thị. Chỉ đến bước cuối khi append fragment vào body, browser mới thực hiện đúng 1 lần reflow cho toàn bộ 1000 elements cùng lúc.