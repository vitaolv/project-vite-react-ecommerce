import PropTypes from "prop-types";
import { useProductContext } from "../../context/ProductContext";

export function ValorDoProduto({ name, id }) {
  const product = useProductContext();

  const selectedProduct = product.find(
    (product) =>
      product.id === parseInt(id) &&
      product.name.toLowerCase() === name.toLowerCase()
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

ValorDoProduto.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
