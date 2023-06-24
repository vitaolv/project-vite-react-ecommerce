import PropTypes from "prop-types";

export function ButtonDetalheProduto({ corSelecionada, onAddToCart }) {
  return (
    <>
      <div className="content-buttons-detali">
        <button className="button-comprar-agora">Comprar agora</button>
        <button
          className="button-adicionar-carrinho"
          onClick={() => onAddToCart(corSelecionada)}
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </>
  );
}

ButtonDetalheProduto.propTypes = {
  corSelecionada: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};
