import { useState } from "react";
import PropTypes from "prop-types";
import { useProductContext } from "../../context/ProductContext";

export function ImageDetaliProduct({ name, id }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const product = useProductContext();

  const selectedProduct = product.find(
    (product) =>
      product.id === parseInt(id) &&
      product.name.toLowerCase() === name.toLowerCase()
  );

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <>
      <br />
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
      </div>
    </>
  );
}

ImageDetaliProduct.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
