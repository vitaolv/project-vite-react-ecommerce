import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import { ProductsAndPrice } from "../utils/prices/priceFormatted";

const ProductContext = createContext();

export function useProductContext() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }) {
  const products = ProductsAndPrice();

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
