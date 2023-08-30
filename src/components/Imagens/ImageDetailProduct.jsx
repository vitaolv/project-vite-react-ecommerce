import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { useProductContext } from "../../context/ProductContext";

export function ImageDetailProduct({ product }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const selectedProduct = product;

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

    const listPhotosElement = document.querySelector(".list-photos");
    listPhotosElement.scrollTo({
      left: listPhotosElement.scrollLeft - 20,
      behavior: "smooth",
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

    const listPhotosElement = document.querySelector(".list-photos");
    listPhotosElement.scrollTo({
      left: listPhotosElement.scrollLeft + 20,
      behavior: "smooth",
    });
  };

  const shouldRenderArrows = selectedProduct.cover.length > 3;
  const listPhotosRef = useRef(null);

  const renderPhotos = () => {
    return selectedProduct.cover.map((cover, index) => (
      <img
        key={index}
        src={cover}
        alt={`${selectedProduct.name}-${index}`}
        className={`slide-photo ${index === selectedImageIndex ? "active" : ""}`}
        onClick={() => handleImageClick(index)}
      />
    ));
  };

  return (
    <div>
      <br />
      <div>
        <div>
          <div>
            <img
              src={selectedProduct.cover[selectedImageIndex]}
              alt={`${selectedProduct.name}-${selectedImageIndex}`}
            />
          </div>
        </div>
        <div>
          <div>
            <div>
              <div ref={listPhotosRef}>{renderPhotos()}</div>
            </div>
            {shouldRenderArrows && (
              <div>
                <button onClick={prevSlide}>❮</button>
                <button onClick={nextSlide}>❯</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

ImageDetailProduct.propTypes = {
  product: PropTypes.object.isRequired,
};
