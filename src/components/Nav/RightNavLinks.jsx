import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function RightNavLinksComponent({ productInCart, quantityTotal }) {
  return (
    <>
      <Link
        to="/carrinho-e-pagamento"
        id="seucarrinho"
        aria-label="Seu carrinho"
        title="Seu carrinho"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-cart"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
        {productInCart?.length > 0 && quantityTotal > 0 && (
          <span className="cart-counter">{quantityTotal}</span>
        )}
      </Link>

      <button
        id="logar-conta"
        aria-label="Entre ou cadastre-se"
        title="Entre ou cadastre-se"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          alt="Entre ou cadastre-se"
          className="bi bi-person-circle"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            fillRule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          />
        </svg>
      </button>
    </>
  );
}

RightNavLinksComponent.propTypes = {
  productInCart: PropTypes.array,
  quantityTotal: PropTypes.number,
};
