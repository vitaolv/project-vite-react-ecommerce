import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import CartWithPayment from "./pages/CartWithPayment";
import PageNotFound from "./pages/PageNotFound";
import SearchResultsPage from "./pages/SearchResultsPage";

import Notification from "./components/Notifications/Notification";

import { ProductProvider } from "./context/ProductContext";

import StoreProvider from "./store/Index";

import { useEffect } from "react";
import { useSelector } from "react-redux";

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
            <Route path="/project-vite-react-ecommerce/" element={<Home />} />
            <Route
              path="/project-vite-react-ecommerce/produto/:nome/:id"
              element={<ProductDetail />}
            />
            <Route
              path="/project-vite-react-ecommerce/carrinho-e-pagamento"
              element={<CartWithPayment />}
            />
            <Route path="*" element={<PageNotFound />} />
            <Route
              path="/project-vite-react-ecommerce/resultado-da-busca/:term"
              element={<SearchResultsPage />}
            />
          </Routes>
        </ProductProvider>
        <Notification />
        <Footer />
      </StoreProvider>
    </BrowserRouter>
  );
}

export default App;
