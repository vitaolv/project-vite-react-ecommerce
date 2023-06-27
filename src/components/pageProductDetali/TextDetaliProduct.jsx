import PropTypes from "prop-types";
import React from "react";
import { useProductContext } from "../../context/ProductContext";

export function TextDetaliProduct({ name, id }) {
  const products = useProductContext();
  const selectedProduct = products.find(
    (product) =>
      product.id === parseInt(id) &&
      product.name.toLowerCase() === name.toLowerCase()
  );

  const formattedTextDetali = selectedProduct.textDetali
    ? selectedProduct.textDetali.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))
    : null;

  return (
    <div className="section-text-detali-product">
      <hr />
      <h4>Informações do produto:</h4>
      <p>{formattedTextDetali}</p>
    </div>
  );
}

TextDetaliProduct.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
