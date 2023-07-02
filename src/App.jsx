import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Home from "./pages/Home";
import ProductDetali from "./pages/ProductDetali";
import { ProductProvider } from "./context/ProductContext";
import "./App.css";
import StoreProvider from "./store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const productInCart = useSelector((state) => state.productInCart);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(productInCart));
  }, [productInCart]);

  return (
    <BrowserRouter>
      <StoreProvider>
        <Header />
        <ProductProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produto/:nome/:id" element={<ProductDetali />} />
            <Route path="/minhas-compras" element={<ProductDetali />} />
          </Routes>
        </ProductProvider>
        <Footer />
      </StoreProvider>
    </BrowserRouter>
  );
}

export default App;
