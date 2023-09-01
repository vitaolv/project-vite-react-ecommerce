import "/src/css/Contador.css";

import PropTypes from "prop-types";

import { Button } from "antd";

export const Contador = ({ onQuantityChange, initQuantity }) => {
  const handleIncrement = () => {
    onQuantityChange(initQuantity + 1);
  };

  const handleDecrement = () => {
    if (initQuantity > 1) {
      onQuantityChange(initQuantity - 1);
    }
  };

  return (
    <div className="content-button-contador-item">
      <p id="quantity">{initQuantity} </p>
      <div id="buttonAumentoOuDesfaz">
        <Button onClick={handleDecrement}>-</Button>
        <Button onClick={handleIncrement}>+</Button>
      </div>
    </div>
  );
};

Contador.propTypes = {
  onQuantityChange: PropTypes.func.isRequired,
  initQuantity: PropTypes.number.isRequired,
};
