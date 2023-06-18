import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./partials/Header.jsx";
import Footer from "./partials/Footer.jsx";
import Home from "./pages/Home";
import { ProductDetali } from "./pages/ProductDetali";
import { ProductProvider } from "./context/ProductContext.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ProductProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto/:nome/:id" element={<ProductDetali />} />
          <Route path="/minhas-compras" element={<ProductDetali />} />
        </Routes>
      </ProductProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
