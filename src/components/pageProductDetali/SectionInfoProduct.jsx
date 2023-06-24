import React, { useState } from "react";
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

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <>
      <br />
      <p className="route-detali">
        <a href="/">Home</a> ⇒ {selectedProduct.name}
      </p>
      <div className="section-info-product">
        <div className="main-image-container">
          <div className="main-image-wrapper">
            <img
              src={selectedProduct.cover[selectedImageIndex]}
              alt={`${selectedProduct.name}-${selectedImageIndex}`}
              className="main-image"
            />
          </div>
        </div>
        <div className="slide-photos-container">
          <div className="section-slide">
            <div className="list-photos">
              {selectedProduct.cover.map((cover, index) => (
                <img
                  key={index}
                  src={cover}
                  alt={`${selectedProduct.name}-${index}`}
                  className={`slide-photo ${
                    index === selectedImageIndex ? "active" : ""
                  }`}
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="section-text-detali-product">
          <hr />
          <h4>Informações do produto:</h4>
          <p>{formattedTextDetali}</p>
        </div>
      </div>
    </>
  );
}
