import Slider from "react-slick";
import { Link, useLocation } from "react-router-dom";
import { useProductContext } from "../../context/ProductContext";

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

  // Divide os produtos em duas listas diferentes para os slides
  const filteredProducts1 = produtosFormatados.filter(
    (_, index) => index % 2 === 0
  );
  const filteredProducts2 = produtosFormatados.filter(
    (_, index) => index % 2 !== 0
  );

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
              <button href="#" className="card-link-buy">
                Comprar agora
              </button>
              <button href="#" className="card-link">
                Adicionar no carrinho
              </button>
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
              <button href="#" className="card-link-buy">
                Comprar agora
              </button>
              <button href="#" className="card-link">
                Adicionar no carrinho
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
