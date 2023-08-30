import { useState } from "react";
import PropTypes from "prop-types";
import { useProductContext } from "../../context/ProductContext";

export function ImageDetailProduct({ product }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const products = useProductContext();

  const selectedProduct = products.find(
    (prod) =>
      prod.id === parseInt(product.id) &&
      prod.name.toLowerCase() === product.name.toLowerCase()
  );

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const prevSlide = () => {
    setSelectedImageIndex((prevIndex) => {
      if (prevIndex === 0) {
        return selectedProduct.cover.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const nextSlide = () => {
    setSelectedImageIndex((prevIndex) => {
      if (prevIndex === selectedProduct.cover.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const shouldRenderArrows = selectedProduct.cover.length > 3;

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
          {shouldRenderArrows && (
            <>
              <button color="black" id="prev-slide-Detail" onClick={prevSlide}>
                ❮
              </button>
              <button color="black" id="next-slide-Detail" onClick={nextSlide}>
                ❯
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

ImageDetailProduct.propTypes = {
  product: PropTypes.object.isRequired,
};
