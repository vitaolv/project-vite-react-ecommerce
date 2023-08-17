import { useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";

export default function SearchResultsPage() {
  const { term } = useParams();
  const products = useProductContext();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(term.toLowerCase())
  );

  return (
    <div className="search-results-container">
      <div className="search-title">
        <p>Você digitou {term}</p>
      </div>
      <div className="search-results-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="search-result-item">
              {product.name}
            </div>
          ))
        ) : (
          <>
            <p>Não encontramos o produto que você digitou: {term}</p>
            <p>
              Verifique se a palavra foi digitada corretamente ou tente
              novamente com outro termo para busca.{" "}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
