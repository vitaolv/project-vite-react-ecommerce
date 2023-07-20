import PropTypes from "prop-types";
import React from "react";
import { useProductContext } from "../../context/ProductContext";

export function TextDetailProduct({ name, id }) {
  const products = useProductContext();
  const selectedProduct = products.find(
    (product) =>
      product.id === parseInt(id) &&
      product.name.toLowerCase() === name.toLowerCase()
  );

  const formattedTextDetail = selectedProduct.textDetail
    ? selectedProduct.textDetail.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))
    : null;

  return (
    <div className="section-text-Detail-product">
      <hr />
      <h4>Informações do produto:</h4>
      <p>{formattedTextDetail}</p>
    </div>
  );
}

TextDetailProduct.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
