import { useState } from 'react';
import PropTypes from 'prop-types';

export function CheckboxColor({ onColorSelected }) {
  const [corSelecionada, setCorSelecionada] = useState(null);

  const handleColorSelecionada = (event) => {
    const cor = event.target.value;
    setCorSelecionada(cor);
    onColorSelected(cor);
  };

  return (
    <div className='content-radio-colors'>
      <div className="radio-group">
        <input 
          type="radio" 
          id="radio-preto" 
          name="color" 
          value="Preto" 
          checked={corSelecionada === 'Preto'}
          onChange={handleColorSelecionada}
          required
        />
        <label htmlFor="radio-preto"></label>

        <input 
          type="radio" 
          id="radio-branco" 
          name="color" 
          value="Branco"
          checked={corSelecionada === 'Branco'}
          onChange={handleColorSelecionada}
          required
        />
        <label htmlFor="radio-branco"></label>

        <input 
          type="radio" 
          id="radio-dourado" 
          name="color" 
          value="Dourado"
          checked={corSelecionada === 'Dourado'}
          onChange={handleColorSelecionada}
          required
        />
        <label htmlFor="radio-dourado"></label>

        <input 
          type="radio" 
          id="radio-roxo-profundo" 
          name="color" 
          value="Roxo profundo" 
          checked={corSelecionada === 'Roxo profundo'}
          onChange={handleColorSelecionada}
          required
        />
        <label htmlFor="radio-roxo-profundo"></label>
      </div>

      <h5>* Cor selecionada: {corSelecionada}</h5>
    </div>
  );
}

CheckboxColor.propTypes = {
  onColorSelected: PropTypes.func.isRequired,
};
