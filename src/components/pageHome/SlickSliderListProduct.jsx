import Slider from "react-slick";
import { Link, useLocation } from "react-router-dom";
import { useProductContext } from "../../context/ProductContext";
import { ButtonToCartOrBuyNow } from "../ButtonToCartOrBuyNow";

export function SlickSliderListProduct() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const produtosFormatados = useProductContext();

  const location = useLocation();
  const lista = produtosFormatados;
  const tamanho = lista.length;
  const meio = Math.floor(tamanho / 2);
  const filteredProducts1 = lista.slice(0, meio);
  const filteredProducts2 = lista.slice(meio);

  return (
    <div className="slider-container" id="slider-container">
      <br />
      <h4>Para grandes grupos e ocasiões especiais:</h4>

      <Slider {...settings}>
        {filteredProducts1.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.cover[0]}
              alt={product.name}
              className="card-image-slick"
            />
            <h5>{product.name}</h5>
            <h5 style={{ textDecoration: "line-through" }}>
              {product.formattedPriceBefore}
            </h5>
            <h5> {product.formattedPrice}</h5>
            <hr />
            <div className="card-body-action">
              <Link
                to={`/produto/${encodeURIComponent(product.name)}/${
                  product.id
                }`}
                className={`card-link ${
                  location.pathname ===
                  `/produto/${encodeURIComponent(product.name)}/${product.id}`
                    ? "active"
                    : ""
                }`}
              >
                Ver detalhes...
              </Link>
              <ButtonToCartOrBuyNow product={product} />
            </div>
          </div>
        ))}
      </Slider>

      <br />
      <br />
      <br />

      <h4>
        Porções individuais, porções únicas e dividir um pedaço com quem você
        ama:
      </h4>

      <Slider {...settings}>
        {filteredProducts2.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.cover[0]}
              alt={product.name}
              className="card-image-slick"
            />
            <h5>{product.name}</h5>
            <h5 style={{ textDecoration: "line-through" }}>
              {product.formattedPriceBefore}
            </h5>
            <h5> {product.formattedPrice}</h5>
            <hr />
            <div className="card-body-action">
              <Link
                to={`/produto/${encodeURIComponent(product.name)}/${
                  product.id
                }`}
                className={`card-link ${
                  location.pathname ===
                  `/produto/${encodeURIComponent(product.name)}/${product.id}`
                    ? "active"
                    : ""
                }`}
              >
                Ver detalhes...
              </Link>
              <ButtonToCartOrBuyNow product={product} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
