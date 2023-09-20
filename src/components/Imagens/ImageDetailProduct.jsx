import { useState } from "react";
import PropTypes from "prop-types";
import { SkeletonImageComponent } from "../Skeleton/SkeletonImageComponents";

export function ImageDetailProduct({ product }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const prevSlide = () => {
    setSelectedImageIndex((prevIndex) => {
      if (prevIndex === 0) {
        return product.cover.length - 1;
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
      if (prevIndex === product.cover.length - 1) {
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

  const shouldRenderArrows = product.cover.length > 3;

  return (
    <>
      <br />
      <div className="section-info-product">
        <div className="main-image-container">
          <div className="main-image-wrapper">
            <SkeletonImageComponent
              productImage={`./${product.cover[selectedImageIndex]}`}
              productName={`${product.name}-${selectedImageIndex}`}
              className="main-image"
            />
          </div>
        </div>
        <div className="slide-photos-container">
          <div className="section-slide">
            <div className="list-photos">
              {product.cover.map((cover, index) => (
                <img
                  key={index}
                  src={`./${cover}`}
                  alt={`${product.name}-${index}`}
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
