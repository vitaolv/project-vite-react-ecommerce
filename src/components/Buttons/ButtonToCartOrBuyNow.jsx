import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { showNotification } from "../../store/actions/ActionsNotification";
import { Button } from "antd";

Button;
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
      <div className="buy-and-cart-buttons">
        <Button size="large" className="buttons-detali btn-BuyNow">
          Comprar agora
        </Button>
        <Button
          size="large"
          className="buttons-detali btn-addToCart"
          onClick={handleAddToCart}
        >
          Adicionar ao Carrinho
        </Button>
      </div>
    </>
  );
}

ButtonToCartOrBuyNow.propTypes = {
  onClick: PropTypes.func.isRequired,
};
