import React, { useParams } from "react";
import { useProductContext } from "../../context/ProductContext";

export function textDetaliProduct() {
  const products = useProductContext();
  const { id, nome } = useParams();
  const selectedProduct = products.find(
    (product) =>
      product.id === parseInt(id) &&
      product.name.toLowerCase() === nome.toLowerCase()
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
