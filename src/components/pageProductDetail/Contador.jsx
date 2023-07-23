import { useState } from "react";
import PropTypes from "prop-types";

export const Contador = ({ onQuantityChange, initQuantity }) => {
  const [quantity, setQuantity] = useState(initQuantity);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    onQuantityChange(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="content-button-contador-item">
      <div id="buttonAumentoOuDesfaz">
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>
      <h5>Quantidade: {quantity} </h5>
    </div>
  );
};

Contador.propTypes = {
  onQuantityChange: PropTypes.func.isRequired,
  initQuantity: PropTypes.number.isRequired,
};
