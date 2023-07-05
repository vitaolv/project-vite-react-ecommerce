import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/ActionsCart";
import { showNotification } from "../../store/actions/ActionsNotification";

export function ButtonToCartOrBuyNow({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const updatedProduct = {
      ...product,
      quantidadeDesejada: 1,
      precoTotal: product.price,
    };

    dispatch(addToCart(updatedProduct));
    dispatch(
      showNotification(
        "Este produto foi adicionado ao carrinho com sucesso!",
        "success"
      )
    );
    console.log("Produto adicionado ao carrinho:", updatedProduct);
  };

  return (
    <>
      <div className="content-buttons-detali">
        <button className="button-comprar-agora">Comprar agora</button>
        <button className="button-adicionar-carrinho" onClick={handleAddToCart}>
          Adicionar ao Carrinho
        </button>
      </div>
    </>
  );
}

ButtonToCartOrBuyNow.propTypes = {
  product: PropTypes.object.isRequired,
};
