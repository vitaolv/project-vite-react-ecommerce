import React from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../../context/ProductContext";

export function SectionInfoProduct() {
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
    <div>
      <p className="route-detali">
        <a href="/">Home</a> ⇒ {selectedProduct.name}
      </p>
      <img
        className="img-product"
        src={selectedProduct.cover}
        alt={selectedProduct.name}
      ></img>
      <h4>Informações do produto:</h4>
      <p>{formattedTextDetali}</p>
    </div>
  );
}
