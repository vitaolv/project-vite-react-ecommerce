import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { NotificationInfo } from "../AlertsNotifications";

export function CheckboxColor({ onColorSelected, availableColors }) {
  const [corSelecionada, setCorSelecionada] = useState(null);

  useEffect(() => {
    if (availableColors && availableColors.length > 0) {
      setCorSelecionada(availableColors[0]);
      onColorSelected(availableColors[0]);
    } else {
      setCorSelecionada(null);
    }
  }, [availableColors]);

  const handleColorSelecionada = (event) => {
    const cor = event.target.value;
    setCorSelecionada(cor);
    onColorSelected(cor);
  };

  return (
    <div className="content-radio-colors">
      {availableColors && availableColors.length > 0 ? (
        <>
          <h5>Selecione um sabor de chocolate:</h5>
          <div className="radio-group">
            {availableColors.map((color) => (
              <React.Fragment key={color}>
                <input
                  type="radio"
                  id={`radio-${color.toLowerCase().replace(/ /g, "-")}`}
                  name="color"
                  value={color}
                  checked={corSelecionada === color}
                  onChange={handleColorSelecionada}
                  required
                />
                <label
                  htmlFor={`radio-${color.toLowerCase().replace(/ /g, "-")}`}
                />
              </React.Fragment>
            ))}
          </div>
          <h6>* Sabor selecionado: {corSelecionada}</h6>
        </>
      ) : (
        <>
          <h6>A escolha de sabor deste produto não está disponível.</h6>
          <NotificationInfo mensagemInfo="Este produto contém sabores sortidos. Não é possivel escolher um sabor." />
        </>
      )}
    </div>
  );
}

CheckboxColor.propTypes = {
  onColorSelected: PropTypes.func.isRequired,
  availableColors: PropTypes.arrayOf(PropTypes.string),
};
