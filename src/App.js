import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import AppBar from "./components/AppBar";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import ShoppingCart from "./pages/ShoppingCart";
import { CartProvider } from "./context/CartContext";
import CheckoutPage from "./pages/CheckoutPage";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <AuthProvider>
        <CartProvider>
          <Router>
            <AppBar />
            <main className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route
                  path="/products/:productId"
                  element={<ProductDetails />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/shopping-cart" element={<ShoppingCart />} />
                <Route path="/checkout" element={<CheckoutPage />} />
              </Routes>
            </main>
            <Footer />
          </Router>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;