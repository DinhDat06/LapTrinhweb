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
