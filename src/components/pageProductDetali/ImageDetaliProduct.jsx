import { useRef, useState } from "react";
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
      left: listPhotosElement.scrollLeft - 20, // Valor do deslocamento em pixels
      behavior: "smooth", // Deslocamento suave
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
      left: listPhotosElement.scrollLeft + 20, // Valor do deslocamento em pixels
      behavior: "smooth", // Deslocamento suave
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
        className={`slide-photo ${
          index === selectedImageIndex ? "active" : ""
        }`}
        onClick={() => handleImageClick(index)}
      />
    ));
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
            <div className="list-photos" ref={listPhotosRef}>
              {renderPhotos()}
            </div>
          </div>
          {shouldRenderArrows && (
            <>
              <button id="prev-slide-detali" onClick={prevSlide}>
                ❮
              </button>
              <button id="next-slide-detali" onClick={nextSlide}>
                ❯
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

ImageDetaliProduct.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
