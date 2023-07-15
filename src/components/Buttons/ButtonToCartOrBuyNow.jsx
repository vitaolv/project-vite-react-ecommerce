import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { showNotification } from "../../store/actions/ActionsNotification";

export function ButtonToCartOrBuyNow({ onClick }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    onClick();
    dispatch(
      showNotification(
        "Este produto foi adicionado ao carrinho com sucesso!",
        "success"
      )
    );
  };

  return (
    <>
      <div className="content-buttons-Detail">
        <button className="button-comprar-agora">Comprar agora</button>
        <button className="button-adicionar-carrinho" onClick={handleAddToCart}>
          Adicionar ao Carrinho
        </button>
      </div>
    </>
  );
}

ButtonToCartOrBuyNow.propTypes = {
  onClick: PropTypes.func.isRequired,
};
