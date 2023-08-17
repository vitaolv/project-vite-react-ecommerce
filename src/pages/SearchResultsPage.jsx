import { useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
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
        filteredProducts.map((product) => (
          <div key={product.id} className="search-result-item">
            <div className="search-title">
              <p>Você digitou {term}</p>
            </div>
            <div className="search-results-list">{product.name}</div>
          </div>
        ))
      ) : (
        <div className="not-found-in-search-result">
          <img src="/assets/not-found-search.png" alt="Não encontrado" />
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
