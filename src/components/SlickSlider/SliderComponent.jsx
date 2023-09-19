import { Button, Skeleton } from "antd";
import { settings } from "./SettingsSlickSlider";

import PropTypes from "prop-types";

import Slider from "react-slick";

import { useState } from "react";

import { Link, useLocation } from "react-router-dom";

export function SliderComponent({ products }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const location = useLocation();
  return (
    <Slider {...settings}>
      {products.map((product) => (
        <Link
          key={product.id}
          to={`/project-vite-react-ecommerce/produto/${encodeURIComponent(
            product.name
          )}/${product.id}`}
          className={`card-hover ${
            location.pathname ===
            `/project-vite-react-ecommerce/produto/${encodeURIComponent(
              product.name
            )}/${product.id}`
              ? "active"
              : ""
          }`}
        >
          <div className="product-card">
            {!imageLoaded && <Skeleton active />}
            <img
              src={product.cover[0]}
              alt={product.name}
              className="card-image-slick"
              onLoad={() => setImageLoaded(true)}
              style={{ display: imageLoaded ? "block" : "none" }}
            />
            <h5>{product.name}</h5>
            <h5 style={{ textDecoration: "line-through" }}>
              {product.formattedPriceBefore}
            </h5>
            <h5> {product.formattedPrice}</h5>
            <div className="card-body-action">
              <Button className="card-link" size="large">
                Ver detalhes...
              </Button>
            </div>
          </div>
        </Link>
      ))}
    </Slider>
  );
}

SliderComponent.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
