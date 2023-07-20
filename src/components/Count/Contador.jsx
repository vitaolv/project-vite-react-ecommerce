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
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

Contador.propTypes = {
  onQuantityChange: PropTypes.func.isRequired,
  initQuantity: PropTypes.number.isRequired,
};
