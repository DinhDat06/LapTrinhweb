// src/App.jsx
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

function App() {
    const products = [
        { id: 1, name: "iPhone 15", price: "25.000.000", image: "https://via.placeholder.com/200" },
        { id: 2, name: "Samsung S24", price: "22.000.000", image: "https://via.placeholder.com/200" },
        { id: 3, name: "Xiaomi 14", price: "15.000.000", image: "https://via.placeholder.com/200" }
    ];

    return (
        <div>
            {/* Header tách từ bài 3.2.2 */}
            <Header />
            
            {/* Giữ nguyên xi code của bài 3.2.1 — không có main */}
            <h1 style={{ textAlign: "center" }}>Cửa hàng điện thoại</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
                {products.map(product => (
                    <ProductCard 
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>
            
            {/* Footer tách từ bài 3.2.2 */}
            <Footer />
        </div>
    );
}

export default App;