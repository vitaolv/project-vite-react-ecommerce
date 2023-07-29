import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import CartWithPayment from "./pages/CartWithPayment";
import PageNotFound from "./pages/PageNotFound";

import Notification from "./components/Notifications/Notification";

import "./App.css";

import { ProductProvider } from "./context/ProductContext";
import { ThemeProvider } from "@mui/material/styles";

import StoreProvider from "./store";

import { useEffect } from "react";
import { useSelector } from "react-redux";

import { theme } from "./theme/ThemeMaterialUI";

function App() {
  const productInCart = useSelector((state) => state.cart.productInCart);

  useEffect(() => {
    localStorage.setItem("productInCart", JSON.stringify(productInCart));
  }, [productInCart]);

  return (
    <BrowserRouter>
      <StoreProvider>
        <ThemeProvider theme={theme}>
          <Header />
          <ProductProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produto/:nome/:id" element={<ProductDetail />} />
              <Route
                path="/carrinho-e-pagamento"
                element={<CartWithPayment />}
              />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </ProductProvider>
          <Notification />
          <Footer />
        </ThemeProvider>
      </StoreProvider>
    </BrowserRouter>
  );
}

export default App;
