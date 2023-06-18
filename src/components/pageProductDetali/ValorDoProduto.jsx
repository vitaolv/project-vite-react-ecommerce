import { useProductContext } from "../../context/ProductContext";
import { useParams } from "react-router-dom";

export function ValorDoProduto() {
  const product = useProductContext();
  const { id, nome } = useParams();

  const selectedProduct = product.find(
    (product) =>
      product.id === parseInt(id) &&
      product.name.toLowerCase() === nome.toLowerCase()
  );

  return (
    <div>
      <h3>{selectedProduct.name}</h3>
      <h4>{selectedProduct.formattedPrice}</h4>
      <h5>
        ou em 3x de {selectedProduct.formattedInstallmentValue} no cartão.
      </h5>
    </div>
  );
}
