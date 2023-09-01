import "/src/css/searchResultPage.css";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import { getFormattedPriceValue } from "../utils/prices/priceUtils";
import { ButtonsToHomeOrToBack } from "../components/Buttons/ButtonsToHomeOrToBack";

export default function SearchResultsPage() {
  const { term } = useParams();
  const products = useProductContext();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(term.toLowerCase())
  );

  return (
    <div className="search-results-container">
      {filteredProducts.length > 0 ? (
        <div>
          <div className="search-title">
            <h3>Você está buscando: {term}</h3>
            <h6>
              Encontramos {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "resultado" : "resultados"}.
            </h6>
          </div>

          <div className="search-results-list">
            {filteredProducts.map((product) => (
              <Link
                key={product.objID}
                to={`/project-vite-react-ecommerce/produto/${encodeURIComponent(
                  product.name
                )}/${product.id}`}
                className={"card-in-searchResults"}
              >
                <li key={product.id} className="search-result-item">
                  <img
                    src={`/${product.cover[0]}`}
                    alt={product.name}
                    className="product-image-in-search"
                  />
                  <span id="idSearch">ID de item: {product.id}</span>
                  <span>
                    <strong>{product.name}</strong>
                    <br />
                  </span>
                  <span id="item-price">
                    <strong>
                      Preço: <br />
                      {getFormattedPriceValue(product.price)}
                    </strong>
                  </span>
                </li>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="not-found-in-search-result">
          <img src="/assets//not-found-search.png" alt="Não encontrado" />
          <h3>Não encontramos o produto que você digitou: {term}</h3>
          <p>
            Verifique se a palavra foi digitada corretamente ou tente novamente
            com outro termo para busca.{" "}
          </p>

          <ButtonsToHomeOrToBack />
        </div>
      )}
    </div>
  );
}
