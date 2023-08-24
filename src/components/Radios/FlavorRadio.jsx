import React, { useState } from "react";
import PropTypes from "prop-types";
import { NotificationInfo } from "../Notifications/NotificationInfo";

export function FlavorRadio({ availableColors, onFlavorChance, initFlavor }) {
  const [selected, setSelected] = useState(initFlavor);

  const handleColorSelecionada = (event) => {
    const flavor = event.target.value;
    setSelected(flavor);
    onFlavorChance(flavor);
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
                  checked={selected === color}
                  onChange={handleColorSelecionada}
                  required
                />
                <label
                  htmlFor={`radio-${color.toLowerCase().replace(/ /g, "-")}`}
                />
              </React.Fragment>
            ))}
          </div>
          <h6>* Sabor selecionado: {selected}</h6>
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

FlavorRadio.propTypes = {
  availableColors: PropTypes.arrayOf(PropTypes.string),
  onFlavorChance: PropTypes.func.isRequired,
  initFlavor: PropTypes.string.isRequired,
};
