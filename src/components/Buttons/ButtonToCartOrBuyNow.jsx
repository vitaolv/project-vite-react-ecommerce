import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { showNotification } from "../../store/actions/ActionsNotification";

import { Button } from "@mui/material";

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
        <Button className="buttons-detali" variant="contained" color="primary">
          Comprar agora
        </Button>
        <Button
          className="buttons-detali"
          variant="outlined"
          color="secondary"
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
