import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-modal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StoreProvider from "./store/index";

Modal.setAppElement("#root"); // Definir o elemento de aplicativo

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
