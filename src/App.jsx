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
import { Notification } from "./components/Notifications/Notification";

function App() {
  const productInCart = useSelector((state) => state.cart.productInCart);

  useEffect(() => {
    localStorage.setItem("productInCart", JSON.stringify(productInCart));
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
        <Notification />
        <Footer />
      </StoreProvider>
    </BrowserRouter>
  );
}

export default App;
