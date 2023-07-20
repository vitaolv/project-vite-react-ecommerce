import Slider from "react-slick";
import { Link, useLocation } from "react-router-dom";
import { useProductContext } from "../../context/ProductContext";
import { settings } from "./SettingsSlickSlider";
export function SlickSliderListProduct() {
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
          <Link
            key={product.id}
            to={`/produto/${encodeURIComponent(product.name)}/${product.id}`}
            className={`card-hover ${
              location.pathname ===
              `/produto/${encodeURIComponent(product.name)}/${product.id}`
                ? "active"
                : ""
            }`}
          >
            <div className="product-card">
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
              <div className="card-body-action">
                <button className="card-link">Ver detalhes...</button>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
      <br />
      <br />
      <h4>
        Porções individuais, porções únicas e dividir um pedaço com quem você
        ama:
      </h4>
      <Slider {...settings}>
        {filteredProducts2.map((product) => (
          <Link
            key={product.id}
            to={`/produto/${encodeURIComponent(product.name)}/${product.id}`}
            className={`card-hover ${
              location.pathname ===
              `/produto/${encodeURIComponent(product.name)}/${product.id}`
                ? "active"
                : ""
            }`}
          >
            <div className="product-card">
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
              <div className="card-body-action">
                <button className="card-link">Ver detalhes...</button>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}
