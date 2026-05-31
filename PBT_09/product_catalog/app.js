const products = [
{id:1,name:"iPhone 16",price:25000000,category:"Phone",image:"https://picsum.photos/300/200?1"},
{id:2,name:"Samsung S25",price:22000000,category:"Phone",image:"https://picsum.photos/300/200?2"},
{id:3,name:"Macbook Air",price:28000000,category:"Laptop",image:"https://picsum.photos/300/200?3"},
{id:4,name:"Dell XPS 13",price:24000000,category:"Laptop",image:"https://picsum.photos/300/200?4"},
{id:5,name:"iPad Pro M1",price:20000000,category:"Tablet",image:"https://picsum.photos/300/200?5"},
{id:6,name:"iPad Mini 9",price:15000000,category:"Tablet",image:"https://picsum.photos/300/200?6"}
];
const app = document.querySelector("#app");
app.innerHTML = `
<h1>Product Catalog</h1>

<div class="controls">

    <input id="search" placeholder="Tìm sản phẩm...">

    <div class="toolbar">

        <select id="sort">
            <option value="">Sort</option>
            <option value="asc">Giá tăng</option>
            <option value="desc">Giá giảm</option>
        </select>

        <button data-cat="All">All</button>
        <button data-cat="Phone">Phone</button>
        <button data-cat="Laptop">Laptop</button>
        <button data-cat="Tablet">Tablet</button>

        <button id="darkBtn">Dark Mode</button>

        <h3 id="cart">🛒 0</h3>

    </div>

</div>

<div class="product-wrapper">
    <div id="products" class="products"></div>
</div>
`;

let cart = 0;
let currentProducts = [...products];

const container = document.querySelector("#products");

function render(arr){

    container.innerHTML = "";

    arr.forEach(product=>{

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>${product.price.toLocaleString()} đ</p>
            <button>Thêm giỏ</button>
        `;

        card.querySelector("button")
        .addEventListener("click",(e)=>{

            e.stopPropagation();

            cart++;

            document.querySelector("#cart")
            .textContent = "🛒 " + cart;
        });

        card.addEventListener("click",()=>{

            const modal = document.createElement("div");

            modal.className = "modal";

            modal.innerHTML = `
                <div class="modal-content">
                    <h2>${product.name}</h2>
                    <p>${product.price.toLocaleString()} đ</p>
                </div>
            `;

            modal.addEventListener("click",()=>{
                modal.remove();
            });

            document.body.appendChild(modal);
        });

        container.appendChild(card);
    });
}

render(products);

document.querySelector("#search")
.addEventListener("input",(e)=>{

    currentProducts = products.filter(product=>
        product.name
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
    );

    render(currentProducts);
});

document.querySelectorAll("[data-cat]")
.forEach(button=>{

    button.addEventListener("click",()=>{

        const category = button.dataset.cat;

        currentProducts =
        category === "All"
        ? products
        : products.filter(
            p => p.category === category
        );

        render(currentProducts);
    });
});

document.querySelector("#sort")
.addEventListener("change",(e)=>{

    const arr = [...currentProducts];

    if(e.target.value==="asc"){
        arr.sort((a,b)=>a.price-b.price);
    }

    if(e.target.value==="desc"){
        arr.sort((a,b)=>b.price-a.price);
    }

    render(arr);
});

document.querySelector("#darkBtn")
.addEventListener("click",()=>{

    document.body.classList.toggle("dark");
});