import "/src/css/ButtonToCartOrBuyNow.css";

import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { showNotification } from "../../store/actions/ActionsNotification";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

export function ButtonToCartOrBuyNow({ onClick }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    onClick();
    dispatch(
      showNotification(
        "Este produto foi adicionado ao carrinho com sucesso!",
        "success"
      )
    );
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/carrinho-e-pagamento");
  };

  return (
    <>
      <div className="buy-and-cart-buttons">
        <Button
          size="large"
          className="buttons-detali btn-BuyNow"
          onClick={handleBuyNow}
        >
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
