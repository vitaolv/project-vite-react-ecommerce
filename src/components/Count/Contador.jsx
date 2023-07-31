import { Button } from "@mui/material";
import PropTypes from "prop-types";

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
        <Button variant="outlined" color="secondary" onClick={handleDecrement}>
          -
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleIncrement}>
          +
        </Button>
      </div>
    </div>
  );
};

Contador.propTypes = {
  onQuantityChange: PropTypes.func.isRequired,
  initQuantity: PropTypes.number.isRequired,
};
